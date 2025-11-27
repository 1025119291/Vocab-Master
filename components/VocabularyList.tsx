
import React, { useEffect, useRef } from 'react';
import { VocabularyItem } from '../types';

interface VocabularyListProps {
  title: string;
  items: VocabularyItem[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const VocabularyList: React.FC<VocabularyListProps> = ({ title, items, currentIndex, onSelect }) => {
  const activeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeRef.current) {
        activeRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
  }, [currentIndex]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col h-full">
      <div className="p-4 border-b border-slate-100 bg-slate-50 rounded-t-xl">
        <h3 className="font-semibold text-slate-700">{title} ({items.length})</h3>
      </div>
      <div ref={listRef} className="overflow-y-auto custom-scrollbar flex-1 p-2">
        <div className="grid grid-cols-1 gap-1">
            {items.map((item, index) => (
            <div
                key={index}
                ref={index === currentIndex ? activeRef : null}
                onClick={() => onSelect(index)}
                className={`p-3 rounded-lg cursor-pointer transition-all border ${
                index === currentIndex
                    ? 'bg-blue-50 border-blue-200 shadow-sm'
                    : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                }`}
            >
                <div className="flex items-center justify-between">
                    <span className={`font-semibold text-lg truncate flex-1 ${index === currentIndex ? 'text-blue-700' : 'text-slate-800'}`}>
                        {item.word}
                    </span>
                    <span className="text-xs text-slate-400 font-mono ml-2 shrink-0">{item.phonetic}</span>
                </div>
                <div className={`text-sm mt-1 truncate ${index === currentIndex ? 'text-blue-600/80' : 'text-slate-500'}`}>
                    {item.translation}
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};
