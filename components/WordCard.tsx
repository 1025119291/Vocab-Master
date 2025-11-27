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
    // Apply quiz mode logic: if autoHide is on, hide translation initially
    setIsTransVisible(!autoHideTranslation);
  }, [item, autoHideTranslation]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[400px] border border-slate-100 relative overflow-hidden transition-all duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

      <div className="text-center w-full z-10 flex flex-col items-center">
        
        {/* English Word Section */}
        <div className="flex items-center justify-center gap-4 mb-4 relative group w-full">
            <h2 className={`text-6xl md:text-8xl font-bold text-slate-800 tracking-tight transition-all duration-300 ${isWordVisible ? 'opacity-100 blur-0' : 'opacity-10 blur-sm select-none'}`}>
            {item.word}
            </h2>
            <button 
                onClick={() => setIsWordVisible(!isWordVisible)}
                className="p-2 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors absolute right-0 md:static"
                title={isWordVisible ? "Hide Word" : "Show Word"}
            >
                {isWordVisible ? <Eye size={24} /> : <EyeOff size={24} />}
            </button>
        </div>
        
        {/* Phonetic */}
        {item.phonetic && (
          <p className="text-2xl text-slate-500 font-mono mb-8 bg-slate-50 inline-block px-6 py-2 rounded-full border border-slate-100">
            {item.phonetic}
          </p>
        )}
        
        {/* Translation Section */}
        <div 
            className={`flex items-center justify-center gap-4 mb-10 w-full transition-all duration-300 cursor-pointer md:cursor-default rounded-xl p-2 ${!isTransVisible ? 'bg-slate-50 border border-dashed border-slate-300' : ''}`}
            onClick={() => !isTransVisible && setIsTransVisible(true)}
        >
            <div className={`relative ${!isTransVisible ? 'blur-md select-none opacity-20' : 'opacity-100 blur-0'}`}>
                <p className="text-3xl md:text-5xl text-slate-700 font-medium">
                    {item.translation}
                </p>
            </div>
            
            {/* Visual cue when hidden */}
            {!isTransVisible && (
                <div className="absolute text-slate-400 font-medium text-sm uppercase tracking-widest pointer-events-none">
                    Tap to Reveal
                </div>
            )}

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsTransVisible(!isTransVisible);
                }}
                className="p-2 text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors absolute right-0 md:static"
                title={isTransVisible ? "Hide Translation" : "Show Translation"}
            >
                {isTransVisible ? <Eye size={24} /> : <EyeOff size={24} />}
            </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <button 
            onClick={onSpeak}
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-colors shadow-md active:scale-95"
          >
            <Volume2 className="w-6 h-6" />
            Listen
          </button>
          
          <button 
            onClick={handleGenerateExample}
            disabled={loading}
            className={`flex items-center gap-2 px-6 py-4 rounded-full font-semibold transition-all shadow-sm border border-slate-200 text-lg
              ${loading ? 'bg-slate-50 text-slate-400' : 'bg-white hover:bg-purple-50 text-purple-600 hover:text-purple-700 hover:border-purple-200'}`}
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
            {loading ? 'Thinking...' : 'AI Example'}
          </button>
        </div>

        {example && (
          <div className="mt-8 p-6 bg-purple-50 rounded-2xl border border-purple-100 text-purple-800 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Example</h4>
            <p className="text-xl md:text-2xl italic leading-relaxed">"{example}"</p>
          </div>
        )}
      </div>
    </div>
  );
};