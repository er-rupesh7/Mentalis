'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Grid,
  Zap,
  Box,
  Sparkles,
  Calculator,
  Brain,
  ChevronRight,
  Play,
  BookOpen,
  Trophy,
  Flame,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { soundEngine } from '../../core/soundEngine';
import { playClickSound } from '../../core/soundEffects';

interface ArcadeHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArcadeHubModal: React.FC<ArcadeHubModalProps> = ({ isOpen, onClose }) => {
  const {
    setViewMode,
    setFoundationsStudioTab,
    startLearnTablePractice,
    startSquaresPractice,
    startCubesPractice,
    startBodmasPractice,
    selectedLearnTable,
    factMemoryMap,
  } = useQuizStore();

  useEffect(() => {
    if (isOpen) {
      soundEngine.playUnlock();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenStudioTab = (tab: 'tables' | 'squares' | 'cubes' | 'shortcuts' | 'bodmas') => {
    playClickSound();
    setFoundationsStudioTab(tab);
    setViewMode('learn_table');
    onClose();
  };

  const handleLaunchTablesDrill = () => {
    soundEngine.playStreak(4);
    startLearnTablePractice(selectedLearnTable || 12, 20);
    onClose();
  };

  const handleLaunchSquaresDrill = () => {
    soundEngine.playStreak(4);
    startSquaresPractice(20);
    onClose();
  };

  const handleLaunchCubesDrill = () => {
    soundEngine.playStreak(4);
    startCubesPractice(20);
    onClose();
  };

  const handleLaunchBodmasDrill = () => {
    soundEngine.playStreak(4);
    startBodmasPractice(20);
    onClose();
  };

  const handleLaunchMultiplicationDrill = () => {
    soundEngine.playStreak(4);
    setViewMode('techniques');
    onClose();
  };

  const handleLaunchAddSubDrill = () => {
    soundEngine.playStreak(4);
    useQuizStore.getState().setActiveModule('add_sub');
    useQuizStore.getState().setViewMode('practice');
    useQuizStore.getState().startSession({ goalCount: 20, mode: 'standard' });
    onClose();
  };

  const hubItems = [
    {
      id: 'tables',
      title: 'Times Tables',
      badge: 'Tables 2 to 20+',
      description: 'Cognitive non-linear recall & flashcard studio for instant neural reflexes.',
      icon: Grid,
      color: 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 text-emerald-400',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      glow: 'shadow-emerald-500/10',
      onStudy: () => handleOpenStudioTab('tables'),
      onDrill: handleLaunchTablesDrill,
      drillLabel: '20Q Drill',
    },
    {
      id: 'squares',
      title: 'Squares (1–50)',
      badge: 'Base 50 & 100',
      description: 'Master 1² to 50² with Near-50, Ekadhikena Ending in 5, and Duplex shortcuts.',
      icon: Zap,
      color: 'from-violet-500/20 via-purple-500/10 to-transparent border-violet-500/40 text-violet-400',
      badgeColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      glow: 'shadow-violet-500/10',
      onStudy: () => handleOpenStudioTab('squares'),
      onDrill: handleLaunchSquaresDrill,
      drillLabel: '20Q Drill',
    },
    {
      id: 'cubes',
      title: 'Cubes (1–25)',
      badge: 'Bijection Pegs',
      description: 'Direct powers 1³ to 25³ with 1-to-1 unit ending bijection anchors.',
      icon: Box,
      color: 'from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40 text-amber-400',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      glow: 'shadow-amber-500/10',
      onStudy: () => handleOpenStudioTab('cubes'),
      onDrill: handleLaunchCubesDrill,
      drillLabel: '20Q Drill',
    },
    {
      id: 'shortcuts',
      title: 'Square Shortcuts',
      badge: 'Vedic Masterclass',
      description: 'Ekadhikena (ending in 5), Base 50, Base 100 & Dvandva Yoga Duplex methods.',
      icon: Sparkles,
      color: 'from-indigo-500/20 via-sky-500/10 to-transparent border-indigo-500/40 text-indigo-400',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      glow: 'shadow-indigo-500/10',
      onStudy: () => handleOpenStudioTab('shortcuts'),
      onDrill: handleLaunchMultiplicationDrill,
      drillLabel: 'All Tricks',
    },
    {
      id: 'add_sub_div',
      title: 'Add / Sub / Div',
      badge: 'Left-to-Right',
      description: 'Running mental accumulator, 100-complements & Vedic Flag division.',
      icon: Calculator,
      color: 'from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/40 text-rose-400',
      badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      glow: 'shadow-rose-500/10',
      onStudy: handleLaunchAddSubDrill,
      onDrill: handleLaunchAddSubDrill,
      drillLabel: 'L1-L6 Drill',
    },
    {
      id: 'bodmas',
      title: 'Algebra & BODMAS',
      badge: 'NEW Rule Engine',
      description: 'Order of Operations (PEMDAS/BODMAS), Difference of Squares (a²-b²), and Mental Balance.',
      icon: Brain,
      color: 'from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40 text-cyan-400',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      glow: 'shadow-cyan-500/10',
      onStudy: () => handleOpenStudioTab('bodmas'),
      onDrill: handleLaunchBodmasDrill,
      drillLabel: '20Q Drill',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-5 sm:p-7 space-y-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          title="Close Arena"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Calculation Arena Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Choose Your Discipline</span>
            <span className="text-sm font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              6 Modules
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Select any math discipline to enter its interactive studio, practice flashcards, or immediately launch a game-speed deliberate practice drill.
          </p>
        </div>

        {/* 6 High-Voltage Game Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {hubItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.015 }}
                className={`p-4 rounded-2xl border bg-gradient-to-b ${item.color} ${item.glow} flex flex-col justify-between gap-4 transition-all group`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-violet-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={item.onStudy}
                    className="py-2 px-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Study</span>
                  </button>

                  <button
                    type="button"
                    onClick={item.onDrill}
                    className="py-2 px-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-violet-600/30 transition-all flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{item.drillLabel}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
