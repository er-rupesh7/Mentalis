'use client';

import React from 'react';
import { Brain, Flame, Volume2, VolumeX, LayoutDashboard, Calculator, Zap, Grid, BookOpen } from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';

interface NavigationProps {
  onOpenTutorial: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenTutorial }) => {
  const { viewMode, setViewMode, streak, soundEnabled, toggleSound } = useQuizStore();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => setViewMode('dashboard')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform">
            <Brain className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-white">
            Mentalis
          </span>
        </button>

        {/* View Mode Nav Pills */}
        <nav className="hidden sm:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'dashboard'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Dashboard
          </button>
          <button
            onClick={() => setViewMode('practice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'practice'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Zen Drill
          </button>
          <button
            onClick={() => setViewMode('anzan')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'anzan'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Anzan Flash
          </button>
          <button
            onClick={() => setViewMode('heatmap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'heatmap'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            100 Tables
          </button>
        </nav>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-2.5">
          {/* Tutorial Pill */}
          <button
            onClick={onOpenTutorial}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Open Tutorial"
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden md:inline">Theory</span>
          </button>

          {/* Active Streak */}
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              streak > 0
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${streak > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
            <span>{streak}</span>
          </div>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
