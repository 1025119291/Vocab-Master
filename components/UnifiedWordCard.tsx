import React, { useState, useEffect } from 'react';
import { VocabularyItem, PlayMode, AppSettings } from '../types';
import { 
  Eye, EyeOff, Play, Pause, SkipForward, SkipBack, 
  Shuffle, Repeat, Settings2, Mic2, Timer, RotateCw 
} from 'lucide-react';

interface UnifiedWordCardProps {
  // Word Display Props
  item: VocabularyItem;
  onSpeak: () => void;
  autoHideTranslation: boolean;

  // Control Props
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  playMode: PlayMode;
  onToggleMode: () => void;
  settings: AppSettings;
  onSettingsChange: (newSettings: AppSettings) => void;
  availableVoices: SpeechSynthesisVoice[];
}

export const UnifiedWordCard: React.FC<UnifiedWordCardProps> = ({
  item,
  onSpeak,
  autoHideTranslation,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  playMode,
  onToggleMode,
  settings,
  onSettingsChange,
  availableVoices,
}) => {
  // --- Visibility States (from WordCard) ---
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [isTransVisible, setIsTransVisible] = useState(true);

  // --- Settings UI State (from ControlPanel) ---
  const [showSettings, setShowSettings] = useState(false);

  // Reset visibility when word changes
  useEffect(() => {
    setIsWordVisible(true);
    setIsTransVisible(!autoHideTranslation);
  }, [item, autoHideTranslation]);

  return (
    <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center border border-slate-100 relative overflow-hidden transition-all duration-300 w-full min-h-[60vh]">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

      {/* --- UPPER SECTION: WORD DISPLAY --- */}
      <div className="text-center w-full z-10 flex flex-col items-center justify-center flex-1 py-12 px-4">
        
        {/* English Word Section - Click to speak */}
        <div 
            className="flex items-center justify-center gap-6 mb-8 relative group w-full overflow-x-auto no-scrollbar py-2 cursor-pointer active:scale-95 transition-transform"
            onClick={onSpeak}
            title="Click to Listen"
        >
            <h2 className={`text-6xl md:text-8xl lg:text-9xl font-black text-slate-800 tracking-tighter transition-all duration-300 whitespace-nowrap ${isWordVisible ? 'opacity-100 blur-0' : 'opacity-10 blur-sm select-none'}`}>
            {item.word}
            </h2>
            
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsWordVisible(!isWordVisible);
                }}
                className="p-3 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors absolute right-0 top-0 md:static bg-white/80 backdrop-blur-sm md:bg-transparent shadow-sm md:shadow-none"
            >
                {isWordVisible ? <Eye size={24} /> : <EyeOff size={24} />}
            </button>
        </div>
        
        {/* Phonetic */}
        {item.phonetic && (
          <p className="text-2xl md:text-3xl text-slate-400 font-mono mb-12">
            {item.phonetic}
          </p>
        )}
        
        {/* Translation Section */}
        <div 
            className={`flex items-center justify-center gap-4 w-full transition-all duration-300 cursor-pointer rounded-2xl p-4 max-w-[95%] mx-auto ${!isTransVisible ? 'bg-slate-50 border border-dashed border-slate-300' : ''}`}
            onClick={() => !isTransVisible && setIsTransVisible(true)}
        >
            <div className={`relative w-full flex justify-center ${!isTransVisible ? 'blur-md select-none opacity-20' : 'opacity-100 blur-0'}`}>
                <p className="text-3xl md:text-5xl lg:text-6xl text-slate-700 font-bold text-center leading-tight px-2 break-words">
                    {item.translation}
                </p>
            </div>
            
            {/* Visual cue when hidden */}
            {!isTransVisible && (
                <div className="absolute text-slate-400 font-bold text-lg uppercase tracking-[0.2em] pointer-events-none inset-0 flex items-center justify-center">
                    Tap to Reveal
                </div>
            )}

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsTransVisible(!isTransVisible);
                }}
                className="p-3 text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors shrink-0"
            >
                {isTransVisible ? <Eye size={28} /> : <EyeOff size={28} />}
            </button>
        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div className="w-full h-px bg-slate-100"></div>

      {/* --- LOWER SECTION: CONTROLS --- */}
      <div className="w-full bg-slate-50/50 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 max-w-4xl mx-auto">
            
            {/* Left: Mode Toggle */}
            <div className="flex-1 flex justify-start w-full md:w-auto">
                <button
                onClick={onToggleMode}
                className={`px-5 py-3 rounded-xl transition-all flex items-center gap-2 text-sm font-bold shadow-sm border ${
                    playMode === PlayMode.RANDOM 
                        ? 'text-indigo-600 bg-indigo-50 border-indigo-200' 
                        : 'text-slate-600 bg-white border-slate-200 hover:bg-slate-50'
                }`}
                >
                {playMode === PlayMode.RANDOM ? <Shuffle className="w-4 h-4" /> : <Repeat className="w-4 h-4" />}
                {playMode === PlayMode.RANDOM ? "Random" : "Ordered"}
                </button>
            </div>

            {/* Center: Transport Controls */}
            <div className="flex items-center justify-center gap-12 flex-1 w-full md:w-auto">
                <button 
                    onClick={onPrev}
                    className="text-slate-400 hover:text-blue-600 transition-colors p-2 active:scale-90"
                >
                    <SkipBack className="w-10 h-10 fill-current" />
                </button>

                <div className="relative">
                     {isPlaying && (
                         <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                     )}
                    <button 
                        onClick={onPlayPause}
                        className={`relative z-10 p-6 rounded-full shadow-xl transition-all active:scale-95 flex items-center justify-center ring-4 ring-offset-2 
                        ${isPlaying ? 'bg-blue-600 hover:bg-blue-700 text-white ring-blue-100' : 'bg-blue-600 hover:bg-blue-700 text-white ring-blue-100'}`}
                    >
                        {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-1" />}
                    </button>
                </div>

                <button 
                    onClick={onNext}
                    className="text-slate-400 hover:text-blue-600 transition-colors p-2 active:scale-90"
                >
                    <SkipForward className="w-10 h-10 fill-current" />
                </button>
            </div>
            
            {/* Right: Settings Toggle */}
            <div className="flex-1 flex justify-end w-full md:w-auto">
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`px-5 py-3 rounded-xl transition-all flex items-center gap-2 font-medium shadow-sm border ${
                        showSettings 
                            ? 'bg-slate-800 text-white border-slate-800' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                >
                    <Settings2 className="w-4 h-4" />
                    Settings
                </button>
            </div>
        </div>

        {/* Play Status Indicator */}
        {isPlaying && (
            <div className="text-center mt-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1 rounded-full shadow-sm animate-pulse">
                    Auto-Playing...
                </span>
            </div>
        )}

        {/* Settings Panel Drawer */}
        {showSettings && (
            <div className="max-w-4xl mx-auto mt-6 bg-white rounded-2xl shadow-inner border border-slate-200 p-6 animate-in slide-in-from-top-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <Settings2 className="w-4 h-4" />
                    Playback Settings
                </h3>
                
                <div className="space-y-6">
                    {/* Voice Selection */}
                    <div className="space-y-2">
                        <label className="text-slate-700 font-semibold text-sm flex items-center gap-2">
                            <Mic2 className="w-4 h-4" /> English Voice
                        </label>
                        <select
                            value={settings.selectedVoiceURI || ''}
                            onChange={(e) => onSettingsChange({ ...settings, selectedVoiceURI: e.target.value })}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Default System Voice</option>
                            {availableVoices.map((voice) => (
                                <option key={voice.voiceURI} value={voice.voiceURI}>
                                    {voice.name} ({voice.lang})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Quiz Mode */}
                    <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                        <label className="text-indigo-900 font-semibold text-sm flex items-center gap-2">
                            <EyeOff className="w-4 h-4" /> 
                            <div>
                                Auto-hide Chinese
                                <p className="text-xs text-indigo-500 font-normal">Quiz Mode: Tap text to reveal</p>
                            </div>
                        </label>
                        <button
                            onClick={() => onSettingsChange({ ...settings, quizMode: !settings.quizMode })}
                            className={`w-14 h-7 rounded-full transition-colors relative ${settings.quizMode ? 'bg-indigo-600' : 'bg-slate-300'}`}
                        >
                            <span className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform shadow-sm ${settings.quizMode ? 'translate-x-7' : 'translate-x-0'}`} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Repetition Count */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                <span className="flex items-center gap-1"><RotateCw className="w-3 h-3"/> Repeat Word</span>
                                <span>{settings.repetitionCount}x</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="5" 
                                step="1"
                                value={settings.repetitionCount}
                                onChange={(e) => onSettingsChange({ ...settings, repetitionCount: parseInt(e.target.value) })}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        {/* Repetition Interval */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                <span className="flex items-center gap-1"><Timer className="w-3 h-3"/> Gap between repeats</span>
                                <span>{settings.repetitionInterval}s</span>
                            </div>
                            <input 
                                type="range" 
                                min="0.5" 
                                max="3" 
                                step="0.5"
                                value={settings.repetitionInterval}
                                onChange={(e) => onSettingsChange({ ...settings, repetitionInterval: parseFloat(e.target.value) })}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        {/* Gap Between Words */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                <span className="flex items-center gap-1"><Timer className="w-3 h-3"/> Gap before Next Word</span>
                                <span>{settings.gapDuration}s</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="5" 
                                step="0.5"
                                value={settings.gapDuration}
                                onChange={(e) => onSettingsChange({ ...settings, gapDuration: parseFloat(e.target.value) })}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        {/* Speed */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                <span>Speech Rate</span>
                                <span>{settings.rate}x</span>
                            </div>
                            <input 
                                type="range" 
                                min="0.5" 
                                max="1.5" 
                                step="0.1"
                                value={settings.rate}
                                onChange={(e) => onSettingsChange({ ...settings, rate: parseFloat(e.target.value) })}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
