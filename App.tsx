import React, { useState, useEffect, useCallback, useRef } from 'react';
import { allUnits } from './data';
import { WordCard } from './components/WordCard';
import { ControlPanel } from './components/ControlPanel';
import { VocabularyList } from './components/VocabularyList';
import { UnitSelector } from './components/UnitSelector';
import { PlayMode, AppSettings } from './types';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function App() {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playMode, setPlayMode] = useState<PlayMode>(PlayMode.SEQUENTIAL);
  
  // Voices state
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const [settings, setSettings] = useState<AppSettings>({
    gapDuration: 3, 
    rate: 1.0,
    selectedVoiceURI: null,
    quizMode: false,
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const synth = window.speechSynthesis;

  // Derived state
  const currentUnit = allUnits[selectedUnitIndex];
  const currentItems = currentUnit?.items || [];

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = synth.getVoices();
      const filtered = allVoices.filter(v => v.lang.startsWith('en') || v.lang.startsWith('zh'));
      filtered.sort((a, b) => {
        if (a.lang.startsWith('en') && !b.lang.startsWith('en')) return -1;
        if (!a.lang.startsWith('en') && b.lang.startsWith('en')) return 1;
        return a.name.localeCompare(b.name);
      });
      setVoices(filtered);
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [synth]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPlayback();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopPlayback = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    synth.cancel();
    setIsPlaying(false);
  }, [synth]);

  const playText = useCallback((text: string, lang: string = 'en-US', onEnd?: () => void) => {
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = settings.rate;
    
    const availableVoices = synth.getVoices();
    
    if (lang === 'en-US' && settings.selectedVoiceURI) {
        const userVoice = availableVoices.find(v => v.voiceURI === settings.selectedVoiceURI);
        if (userVoice) {
            utterance.voice = userVoice;
        }
    } else {
        if (lang === 'en-US') {
            const preferredVoice = availableVoices.find(v => v.name.includes('Google') && v.lang.includes('en-US')) 
                || availableVoices.find(v => v.lang.includes('en-US'));
            if (preferredVoice) utterance.voice = preferredVoice;
        }
    }

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.error("Speech error", e);
      if (onEnd) onEnd();
    };

    synth.speak(utterance);
  }, [settings.rate, settings.selectedVoiceURI, synth]);

  const getNextIndex = useCallback((current: number) => {
    if (currentItems.length === 0) return 0;

    if (playMode === PlayMode.SEQUENTIAL) {
      return (current + 1) % currentItems.length;
    } else {
      let next = Math.floor(Math.random() * currentItems.length);
      if (next === current && currentItems.length > 1) {
        next = (next + 1) % currentItems.length;
      }
      return next;
    }
  }, [playMode, currentItems.length]);

  const speakCurrentWord = useCallback((itemIndex: number, autoContinue: boolean) => {
    if (!currentItems[itemIndex]) return;
    const item = currentItems[itemIndex];
    
    const finishCycle = () => {
      if (!autoContinue) return;
      const delay = settings.gapDuration * 1000;
      
      timerRef.current = setTimeout(() => {
        const nextIdx = getNextIndex(itemIndex);
        setCurrentIndex(nextIdx);
      }, delay);
    };

    // 1. Speak English (1st time)
    playText(item.word, 'en-US', () => {
        if (!autoContinue) return;

        // 2. Pause between repetitions (1 second)
        timerRef.current = setTimeout(() => {
             // 3. Speak English (2nd time)
             playText(item.word, 'en-US', () => {
                 if (!autoContinue) return;
                 // 4. Wait for gapDuration then Next
                 finishCycle();
             });
        }, 1000); 
    });
  }, [currentItems, settings.gapDuration, getNextIndex, playText]);


  // Effect to trigger speech when index changes IF playing
  useEffect(() => {
    if (isPlaying) {
      if (timerRef.current) clearTimeout(timerRef.current);
      speakCurrentWord(currentIndex, true);
    }
  }, [currentIndex, isPlaying, speakCurrentWord]);


  const handlePlayPause = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    stopPlayback();
    setCurrentIndex((prev) => (prev + 1) % currentItems.length);
  };

  const handlePrev = () => {
    stopPlayback();
    setCurrentIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
  };

  const handleManualSpeak = () => {
    if (currentItems[currentIndex]) {
        playText(currentItems[currentIndex].word, 'en-US');
    }
  };

  const handleUnitChange = (index: number) => {
      stopPlayback();
      setSelectedUnitIndex(index);
      setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-20 md:h-16 flex flex-col md:flex-row items-center justify-between gap-2 py-2 md:py-0">
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg text-white shadow-md">
                    <GraduationCap size={24} />
                </div>
                <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                Vocab Master
                </h1>
            </div>
            {/* Mobile counter */}
             <div className="md:hidden text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full flex items-center gap-1">
                <BookOpen size={14} />
                <span>{currentIndex + 1} / {currentItems.length}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
             <UnitSelector 
                units={allUnits}
                selectedUnitIndex={selectedUnitIndex}
                onSelectUnit={handleUnitChange}
             />
             
             {/* Desktop counter */}
             <div className="hidden md:flex text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full items-center gap-2 whitespace-nowrap">
                <BookOpen size={16} />
                <span>{currentIndex + 1} / {currentItems.length}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Card & Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6">
                {currentItems.length > 0 ? (
                    <WordCard 
                        item={currentItems[currentIndex]} 
                        onSpeak={handleManualSpeak}
                        autoHideTranslation={settings.quizMode}
                    />
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[400px] text-slate-400">
                        <p>No words in this unit.</p>
                    </div>
                )}
                
                <ControlPanel 
                    isPlaying={isPlaying}
                    onPlayPause={handlePlayPause}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    playMode={playMode}
                    onToggleMode={() => setPlayMode(prev => prev === PlayMode.SEQUENTIAL ? PlayMode.RANDOM : PlayMode.SEQUENTIAL)}
                    settings={settings}
                    onSettingsChange={setSettings}
                    availableVoices={voices}
                />
            </div>

            {/* Right Column: List */}
            <div className="lg:col-span-5 h-[500px] lg:h-auto">
                <VocabularyList 
                    title={currentUnit?.title || "Word List"}
                    items={currentItems}
                    currentIndex={currentIndex}
                    onSelect={(index) => {
                        stopPlayback();
                        setCurrentIndex(index);
                    }}
                />
            </div>
        </div>
      </main>
    </div>
  );
}