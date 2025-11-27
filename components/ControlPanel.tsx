
import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Settings2, Mic2, EyeOff, Timer, RotateCw } from 'lucide-react';
import { PlayMode, AppSettings } from '../types';

interface ControlPanelProps {
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

export const ControlPanel: React.FC<ControlPanelProps> = ({
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
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Transport Controls */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 mb-4">
        <div className="flex items-center justify-between mb-6">
            <button
              onClick={onToggleMode}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold ${playMode === PlayMode.RANDOM ? 'text-indigo-600 bg-indigo-50 border border-indigo-100' : 'text-slate-500 bg-slate-50 hover:bg-slate-100'}`}
              title={playMode === PlayMode.RANDOM ? "Random Order" : "Sequential Order"}
            >
              {playMode === PlayMode.RANDOM ? <Shuffle className="w-4 h-4" /> : <Repeat className="w-4 h-4" />}
              {playMode === PlayMode.RANDOM ? "Random" : "Ordered"}
            </button>
            
            <button
                onClick={() => setShowSettings(!showSettings)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium ${showSettings ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
            >
                <Settings2 className="w-4 h-4" />
                Settings
            </button>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-10">
          <button 
            onClick={onPrev}
            className="p-4 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all active:scale-95 border border-transparent hover:border-blue-100"
          >
            <SkipBack className="w-10 h-10 fill-current" />
          </button>

          <button 
            onClick={onPlayPause}
            className={`p-8 rounded-full shadow-xl transition-all active:scale-95 flex items-center justify-center ring-4 ring-offset-2 
              ${isPlaying ? 'bg-amber-500 hover:bg-amber-600 text-white ring-amber-200' : 'bg-blue-600 hover:bg-blue-700 text-white ring-blue-200'}`}
          >
            {isPlaying ? <Pause className="w-12 h-12 fill-current" /> : <Play className="w-12 h-12 fill-current ml-2" />}
          </button>

          <button 
            onClick={onNext}
            className="p-4 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all active:scale-95 border border-transparent hover:border-blue-100"
          >
            <SkipForward className="w-10 h-10 fill-current" />
          </button>
        </div>
        
        <div className="text-center mt-6">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${isPlaying ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
                {isPlaying ? "Auto-playing" : "Paused"}
            </span>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 animate-in slide-in-from-top-2">
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
  );
};
