'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Flame,
  Zap,
  Grid,
  Sparkles,
  Trophy,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Award,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ADD_SUB_LEVELS } from '../core/calcEngine';
import { calculateCPM } from '../core/mastery';

interface DashboardProps {
  onOpenTutorial: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenTutorial }) => {
  const {
    overallStats,
    setAddSubLevel,
    setActiveTable,
    setActiveSquareTrack,
    setViewMode,
  } = useQuizStore();

  const cpm = calculateCPM(
    overallStats.totalCorrect,
    overallStats.totalTimeSpentSeconds
  );

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100">
      {/* Top Banner / Hero */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                  <Brain className="w-6 h-6" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Mentalis <span className="text-violet-400 font-serif italic text-xl">Cognitive Math</span>
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Left-to-Right Accumulator Engine • 1–100 Table Matrix • Anzan Working Memory
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenTutorial}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                Pedagogy Lab (Tutorial)
              </button>
              <button
                onClick={() => setViewMode('heatmap')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm"
              >
                <Grid className="w-4 h-4" />
                100 Table Heatmap
              </button>
            </div>
          </div>

          {/* High-Impact Stat HUD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Daily Streak */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Daily Streak</div>
                <div className="text-xl font-bold font-mono text-white flex items-baseline gap-1">
                  {overallStats.dailyActiveStreak} <span className="text-xs font-normal text-amber-400">days</span>
                </div>
              </div>
            </div>

            {/* Calculations Done */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Solved</div>
                <div className="text-xl font-bold font-mono text-white">
                  {overallStats.totalCalculations}
                </div>
              </div>
            </div>

            {/* Mental Speed Index CPM */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Speed (CPM)</div>
                <div className="text-xl font-bold font-mono text-emerald-400 flex items-baseline gap-1">
                  {cpm} <span className="text-xs font-normal text-slate-500">calc/min</span>
                </div>
              </div>
            </div>

            {/* Micro-Grade Rank */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Current Rank</div>
                <div className="text-xs font-bold text-white truncate max-w-[120px]">
                  {overallStats.totalCalculations > 50 ? 'Grade 12 Master' : 'Initiate Decadist'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Track Selection */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 space-y-8">
        {/* Module A: Progressive Addition & Subtraction */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-sm shadow-violet-500" />
              <h2 className="text-base font-bold text-white tracking-wide">
                Module A: Progressive Left-to-Right Addition & Subtraction
              </h2>
            </div>
            <span className="text-xs text-slate-400">Most Significant Digit First</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {ADD_SUB_LEVELS.map((lvl) => (
              <motion.button
                key={lvl.id}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setAddSubLevel(lvl.levelNumber)}
                className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-violet-500/50 text-left transition-all shadow-md group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-violet-400">
                      Level {lvl.levelNumber}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> &lt;{lvl.targetTimeSeconds}s
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                    {lvl.subtitle}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-[11px] text-slate-400">{lvl.badgeName}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Module B: Multiplication Mastery (1 to 100 Tables) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />
              <h2 className="text-base font-bold text-white tracking-wide">
                Module B: Multiplication Mastery (1 to 100 Tables)
              </h2>
            </div>
            <button
              onClick={() => setViewMode('heatmap')}
              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
            >
              View 100 Grid Heatmap <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                title: 'Anchor Recall',
                desc: 'Tables 2 to 12',
                detail: 'Instant associative memory',
                table: 7,
                badge: 'Grade 12 Master',
              },
              {
                title: 'Split-and-Add',
                desc: 'Tables 13 to 20',
                detail: '(10 + d) × k decomposition',
                table: 17,
                badge: 'Grade 20 Master',
              },
              {
                title: 'Decade Proximity',
                desc: 'Tables 21 to 50',
                detail: 'Rounding & compensation',
                table: 29,
                badge: 'Grade 50 Master',
              },
              {
                title: 'Centurions',
                desc: 'Tables 51 to 100',
                detail: 'High-order duplex math',
                table: 75,
                badge: 'Grade 100 Grandmaster',
              },
            ].map((track, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTable(track.table)}
                className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-emerald-500/50 text-left transition-all shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="text-xs font-mono font-semibold text-emerald-400">
                    {track.desc}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-400">{track.detail}</p>
                </div>
                <div className="pt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Target Table: {track.table}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Module C: Squares & Cubes (1 to 100) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500" />
              <h2 className="text-base font-bold text-white tracking-wide">
                Module C: Squares & Cubes (1 to 100)
              </h2>
            </div>
            <span className="text-xs text-slate-400">Vedic & Algebraic Shortcuts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                id: 'ending_5' as const,
                title: 'Squares Ending in 5',
                rule: 'N(N+1) | 25',
                example: '35², 75², 95²',
              },
              {
                id: 'near_50' as const,
                title: 'Numbers Near 50',
                rule: '(25 ± x) | x²',
                example: '46², 53²',
              },
              {
                id: 'near_100' as const,
                title: 'Numbers Near 100',
                rule: '(100 - 2x) | x²',
                example: '96², 91²',
              },
              {
                id: 'general_duplex' as const,
                title: 'General Duplex Method',
                rule: 'a² + 2ab + b²',
                example: '64², 72²',
              },
              {
                id: 'cubes_anchor' as const,
                title: 'Anchor Cubes (1 to 20)',
                rule: 'Phonological anchor pegs',
                example: '7³, 12³, 15³',
              },
              {
                id: 'cubes_advanced' as const,
                title: 'Binomial Cubes (21 to 100)',
                rule: '(a + b)³ Expansion',
                example: '21³, 35³, 42³',
              },
            ].map((sub) => (
              <motion.button
                key={sub.id}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSquareTrack(sub.id)}
                className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/50 text-left transition-all shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-amber-400 font-semibold">{sub.rule}</div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-400">Drill: {sub.example}</p>
                </div>
                <div className="pt-3 flex items-center justify-end text-slate-600 group-hover:text-amber-400">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Cognitive Working Memory Engine Feature Banner */}
        <section className="p-6 rounded-3xl bg-gradient-to-r from-violet-950/70 via-slate-900 to-indigo-950/70 border border-violet-800/50 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/30 text-violet-300 text-xs font-semibold border border-violet-500/40">
              <Zap className="w-3.5 h-3.5" /> Working Memory Engine
            </div>
            <h3 className="text-xl font-black text-white">
              Anzan Flash Calculation Mode
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trains your internal phonological loop by flashing numbers at 800ms intervals and
              blanking the screen. Eliminates all visual crutches and paper carries.
            </p>
          </div>

          <button
            onClick={() => setViewMode('anzan')}
            className="px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-sm transition-all shadow-xl shadow-violet-600/40 flex items-center gap-2 whitespace-nowrap"
          >
            Launch Anzan Flash
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
};
