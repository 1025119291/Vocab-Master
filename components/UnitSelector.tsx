import React from 'react';
import { Unit } from '../types';
import { Book, ChevronDown } from 'lucide-react';

interface UnitSelectorProps {
  units: Unit[];
  selectedUnitIndex: number;
  onSelectUnit: (index: number) => void;
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({ units, selectedUnitIndex, onSelectUnit }) => {
  return (
    <div className="relative inline-block w-full max-w-xs">
      <div className="relative group">
        <select
          value={selectedUnitIndex}
          onChange={(e) => onSelectUnit(Number(e.target.value))}
          className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-3 pl-10 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold shadow-sm cursor-pointer hover:bg-slate-50 transition-colors"
        >
          {units.map((unit, index) => (
            <option key={index} value={index}>
              {unit.title} ({unit.items.length} words)
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-600">
          <Book className="w-5 h-5" />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400 group-hover:text-blue-500 transition-colors">
            <ChevronDown className="w-5 h-5" />
        </div>
      </div>
      <div className="text-xs text-slate-400 mt-1 pl-2 truncate">
         {units[selectedUnitIndex]?.source}
      </div>
    </div>
  );
};