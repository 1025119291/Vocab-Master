
import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../types';
import { generateExampleSentence } from '../services/geminiService';
import { Wand2, Loader2, Volume2, Eye, EyeOff } from 'lucide-react';

interface WordCardProps {
  item: VocabularyItem;
  onSpeak: () => void;
  autoHideTranslation: boolean;
}

export const WordCard: React.FC<WordCardProps> = ({ item, onSpeak, autoHideTranslation }) => {
  const [example, setExample] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Visibility states
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [isTransVisible, setIsTransVisible] = useState(true);

  const handleGenerateExample = async () => {
    if (loading) return;
    setLoading(true);
    setExample(null);
    const result = await generateExampleSentence(item.word);
    setExample(result);
    setLoading(false);
  };

  // Reset state when word changes
  useEffect(() => {
    setExample(null);
    setIsWordVisible(true);
    setIsTransVisible(!autoHideTranslation);
  }, [item, autoHideTranslation]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] border border-slate-100 relative overflow-hidden transition-all duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

      <div className="text-center w-full z-10 flex flex-col items-center justify-center flex-1">
        
        {/* English Word Section */}
        <div className="flex items-center justify-center gap-6 mb-8 relative group w-full overflow-x-auto no-scrollbar py-2">
            <h2 className={`text-7xl md:text-9xl lg:text-[8rem] xl:text-[9rem] font-black text-slate-800 tracking-tighter transition-all duration-300 whitespace-nowrap ${isWordVisible ? 'opacity-100 blur-0' : 'opacity-10 blur-sm select-none'}`}>
            {item.word}
            </h2>
            <button 
                onClick={() => setIsWordVisible(!isWordVisible)}
                className="p-3 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors absolute right-0 md:static bg-white/80 backdrop-blur-sm md:bg-transparent shadow-sm md:shadow-none"
                title={isWordVisible ? "Hide Word" : "Show Word"}
            >
                {isWordVisible ? <Eye size={28} /> : <EyeOff size={28} />}
            </button>
        </div>
        
        {/* Phonetic */}
        {item.phonetic && (
          <p className="text-3xl md:text-4xl text-slate-500 font-mono mb-12 bg-slate-50 inline-block px-8 py-3 rounded-full border border-slate-100">
            {item.phonetic}
          </p>
        )}
        
        {/* Translation Section */}
        <div 
            className={`flex items-center justify-center gap-6 mb-12 w-full transition-all duration-300 cursor-pointer md:cursor-default rounded-2xl p-4 overflow-hidden ${!isTransVisible ? 'bg-slate-50 border border-dashed border-slate-300' : ''}`}
            onClick={() => !isTransVisible && setIsTransVisible(true)}
        >
            <div className={`relative w-full overflow-x-auto no-scrollbar ${!isTransVisible ? 'blur-md select-none opacity-20' : 'opacity-100 blur-0'}`}>
                <p className="text-5xl md:text-7xl lg:text-8xl text-slate-700 font-bold whitespace-nowrap leading-tight px-2">
                    {item.translation}
                </p>
            </div>
            
            {/* Visual cue when hidden */}
            {!isTransVisible && (
                <div className="absolute text-slate-400 font-bold text-lg uppercase tracking-[0.2em] pointer-events-none">
                    Tap to Reveal
                </div>
            )}

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsTransVisible(!isTransVisible);
                }}
                className="p-3 text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors absolute right-4 md:static z-20 bg-white/80 backdrop-blur-sm md:bg-transparent shadow-sm md:shadow-none"
                title={isTransVisible ? "Hide Translation" : "Show Translation"}
            >
                {isTransVisible ? <Eye size={28} /> : <EyeOff size={28} />}
            </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mt-auto">
          <button 
            onClick={onSpeak}
            className="flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xl transition-colors shadow-lg shadow-blue-200 active:scale-95"
          >
            <Volume2 className="w-8 h-8" />
            Listen
          </button>
          
          <button 
            onClick={handleGenerateExample}
            disabled={loading}
            className={`flex items-center gap-3 px-8 py-5 rounded-full font-semibold transition-all shadow-md border border-slate-200 text-xl
              ${loading ? 'bg-slate-50 text-slate-400' : 'bg-white hover:bg-purple-50 text-purple-600 hover:text-purple-700 hover:border-purple-200'}`}
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Wand2 className="w-6 h-6" />}
            {loading ? 'Thinking...' : 'AI Example'}
          </button>
        </div>

        {example && (
          <div className="mt-10 p-8 bg-purple-50 rounded-3xl border border-purple-100 text-purple-800 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full text-left max-w-4xl">
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-3">Example</h4>
            <p className="text-2xl md:text-3xl italic leading-relaxed font-serif">"{example}"</p>
          </div>
        )}
      </div>
    </div>
  );
};
