'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  BookOpen,
  Sparkles,
  Zap,
  Calculator,
  Target,
  Grid,
  Trophy,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { playClickSound } from '../../core/soundEffects';

interface MobileMathMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMathMenuModal: React.FC<MobileMathMenuModalProps> = ({ isOpen, onClose }) => {
  const {
    viewMode,
    setViewMode,
    setFoundationsStudioTab,
    setIsArcadeHubOpen,
  } = useQuizStore();

  if (!isOpen) return null;

  const handleSelect = (action: () => void) => {
    playClickSound();
    action();
    onClose();
  };

  const menuItems = [
    {
      id: 'learn_table',
      title: 'Tables & Foundations',
      subtitle: 'Tables 1–100, audio repetition & 20Q speed drill',
      icon: BookOpen,
      color: 'emerald',
      badge: 'Core',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      isActive: viewMode === 'learn_table',
      action: () => {
        setFoundationsStudioTab('tables');
        setViewMode('learn_table');
      },
    },
    {
      id: 'techniques',
      title: 'Shortcuts & Techniques',
      subtitle: 'Vedic crosswise, complements, repunits & mental tips',
      icon: Sparkles,
      color: 'amber',
      badge: 'Tricks',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      isActive: viewMode === 'techniques',
      action: () => setViewMode('techniques'),
    },
    {
      id: 'squares_cubes',
      title: 'Squares & Cubes Studio',
      subtitle: 'Squares 1–50, Cubes 1–25, Root estimation',
      icon: Zap,
      color: 'cyan',
      badge: 'Powers',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      isActive: viewMode === 'squares_cubes',
      action: () => setViewMode('squares_cubes'),
    },
    {
      id: 'bodmas',
      title: 'Algebra & BODMAS',
      subtitle: 'Order of operations, mental equations, identities',
      icon: Calculator,
      color: 'indigo',
      badge: 'New',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      isActive: false,
      action: () => {
        setFoundationsStudioTab('bodmas');
        setViewMode('learn_table');
      },
    },
    {
      id: 'exam_quant',
      title: 'Exam Quant Fast Track',
      subtitle: 'Simplification, percentages, speed math drills',
      icon: Target,
      color: 'rose',
      badge: 'Exams',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      isActive: viewMode === 'exam_quant',
      action: () => setViewMode('exam_quant'),
    },
    {
      id: 'table_chart',
      title: '100 Tables Heatmap & Matrix',
      subtitle: 'Full visual grid with live latency & accuracy heatmap',
      icon: Grid,
      color: 'blue',
      badge: 'Matrix',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      isActive: viewMode === 'table_chart' || viewMode === 'heatmap',
      action: () => setViewMode('table_chart'),
    },
    {
      id: 'arcade_arena',
      title: 'Arcade Battle Arena',
      subtitle: '6-discipline quick launch & interactive audio drills',
      icon: Trophy,
      color: 'violet',
      badge: 'Play',
      badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      isActive: false,
      action: () => setIsArcadeHubOpen(true),
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400',
        };
      case 'amber':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-400',
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500/10',
          border: 'border-cyan-500/30',
          text: 'text-cyan-400',
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-500/10',
          border: 'border-indigo-500/30',
          text: 'text-indigo-400',
        };
      case 'rose':
        return {
          bg: 'bg-rose-500/10',
          border: 'border-rose-500/30',
          text: 'text-rose-400',
        };
      case 'blue':
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          text: 'text-blue-400',
        };
      case 'violet':
      default:
        return {
          bg: 'bg-violet-500/10',
          border: 'border-violet-500/30',
          text: 'text-violet-400',
        };
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-auto sm:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Flutter-style Bottom Sheet */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-h-[85vh] bg-slate-900 border-t border-slate-800 rounded-t-3xl shadow-2xl flex flex-col overflow-hidden pb-safe"
        >
          {/* Flutter-style drag handle pill */}
          <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-slate-700/80" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/80">
            <div>
              <h2 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>Math Studio Disciplines</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-mono font-semibold">
                  Flutter List
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Switch between tables, shortcuts, powers, and exam quant
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Flutter-Style ListTile Scrollable View */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5 max-h-[60vh] scrollbar-none">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const colors = getColorClasses(item.color);

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.action)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left group active:scale-[0.98] ${
                    item.isActive
                      ? 'bg-slate-800/90 border-violet-500/50 shadow-md shadow-violet-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  {/* Leading Tile Widget (Flutter-style) */}
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${colors.bg} ${colors.border} ${colors.text}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title & Subtitle Column */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors truncate">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border shrink-0 ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 truncate leading-tight">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Trailing Arrow Widget */}
                  <div className="pl-2 shrink-0">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-700 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Footer info */}
          <div className="px-5 py-3 border-t border-slate-800/60 bg-slate-950/40 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 font-mono">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Full curriculum unlocked</span>
            </span>
            <button
              onClick={() => handleSelect(() => setIsArcadeHubOpen(true))}
              className="text-violet-400 hover:text-violet-300 font-semibold"
            >
              Open Arcade Grid →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
