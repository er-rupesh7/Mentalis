'use client';

import React, { useState } from 'react';
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
  RefreshCw,
  AlertTriangle,
  Play,
  Table,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ADD_SUB_LEVELS } from '../core/calcEngine';
import { calculateCPM, calculateUserRank, getBadges } from '../core/mastery';
import { getRecommendedNextDrill, analyzeProgress } from '../core/adaptive';
import { AICoachCard } from './AICoachCard';
import { AICoachDrawer } from './AICoachDrawer';
import { MyLearningPlan } from './MyLearningPlan';

interface DashboardProps {
  onOpenTutorial: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenTutorial }) => {
  const {
    overallStats,
    progressMap,
    anzanStats,
    activeModule,
    activeAddSubLevel,
    activeTable,
    activeSquareTrack,
    setAddSubLevel,
    setActiveTable,
    setActiveSquareTrack,
    startSession,
    setViewMode,
    learnerProfile,
    startAssessment,
    setActiveTableChartTab,
  } = useQuizStore();

  const [isCoachDrawerOpen, setIsCoachDrawerOpen] = useState(false);

  const cpm = calculateCPM(
    overallStats.totalCorrect,
    overallStats.totalTimeSpentSeconds
  );

  const userRank = calculateUserRank(progressMap, overallStats);
  const badges = getBadges(overallStats, progressMap, anzanStats);
  const analysis = analyzeProgress(progressMap);

  const recommendation = getRecommendedNextDrill(
    progressMap,
    activeModule,
    activeAddSubLevel,
    activeTable
  );

  const handleLaunchRecommended = () => {
    if (recommendation.module === 'multiplication' && recommendation.targetTable) {
      setActiveTable(recommendation.targetTable);
    } else if (recommendation.module === 'add_sub' && recommendation.targetLevel) {
      setAddSubLevel(recommendation.targetLevel);
    } else {
      startSession({ mode: 'standard' });
      setViewMode('practice');
    }
  };

  const handleResumeLastDrill = () => {
    startSession({ mode: 'standard' });
    setViewMode('practice');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 pb-12">
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
                Left-to-Right Accumulator • 1–100 Table Matrix • Anzan Working Memory
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenTutorial}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Pedagogy</span> Lab
              </button>
              <button
                onClick={() => setViewMode('heatmap')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm"
              >
                <Grid className="w-4 h-4" />
                100 Tables
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
                <div className="text-[10px] font-mono uppercase text-slate-400">Daily Streak</div>
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
                <div className="text-[10px] font-mono uppercase text-slate-400">Solved Offline</div>
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
                <div className="text-[10px] font-mono uppercase text-slate-400">Throughput (CPM)</div>
                <div className="text-xl font-bold font-mono text-emerald-400 flex items-baseline gap-1">
                  {cpm} <span className="text-xs font-normal text-slate-500">calc/min</span>
                </div>
              </div>
            </div>

            {/* Genuine Derived Rank */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-slate-400">Current Rank</div>
                <div className="text-xs font-bold text-white truncate" title={userRank.title}>
                  {userRank.title}
                </div>
                <div className="text-[10px] text-sky-400 font-mono">
                  Tier {userRank.tierLevel + 1}/6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-8">
        {/* Prominent My Learning Plan Section */}
        <MyLearningPlan />

        {/* AI Pedagogical Coach Card */}
        <AICoachCard onOpenCoachDrawer={() => setIsCoachDrawerOpen(true)} />

        {/* Today's Recommendation & Resume Card */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-5 rounded-3xl bg-gradient-to-r from-violet-950/40 to-slate-900 border border-violet-800/40 shadow-xl flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-violet-600/30 text-violet-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-violet-500/40">
                  Today’s Adaptive Recommendation
                </span>
                {analysis.decayedSkills.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono flex items-center gap-1 border border-amber-500/30">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    {analysis.decayedSkills.length} Decaying
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white">{recommendation.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {recommendation.reason}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleLaunchRecommended}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Launch Adaptive Session
              </button>
            </div>
          </div>

          {/* Quick Resume Card */}
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Last Active Drill
              </span>
              <h4 className="text-sm font-bold text-white">
                {activeModule === 'multiplication'
                  ? `Table ${activeTable} Drill`
                  : activeModule === 'add_sub'
                  ? `Level ${activeAddSubLevel} Add/Sub`
                  : activeSquareTrack.replace(/_/g, ' ').toUpperCase()}
              </h4>
              <p className="text-xs text-slate-400">
                Continue directly from where you last trained.
              </p>
            </div>

            <button
              onClick={handleResumeLastDrill}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Resume Drill</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Compact Curriculum Overview Track Badges */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white tracking-wide uppercase font-mono text-slate-400">
              Curriculum Mastery Progress
            </h2>
            <span className="text-xs font-mono text-violet-400">
              {userRank.masteredTablesCount}/99 Tables Mastered
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 font-mono">
                <span>Add & Sub</span>
                <span className="text-white font-bold">{userRank.masteredAddSubCount}/6</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-violet-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, (userRank.masteredAddSubCount / 6) * 100)}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 font-mono">
                <span>100 Tables</span>
                <span className="text-white font-bold">{userRank.masteredTablesCount}/99</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, (userRank.masteredTablesCount / 99) * 100)}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 font-mono">
                <span>Squares & Cubes</span>
                <span className="text-white font-bold">{userRank.masteredSquaresCount}/6</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, (userRank.masteredSquaresCount / 6) * 100)}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 font-mono">
                <span>Anzan Best</span>
                <span className="text-white font-bold">{anzanStats.bestStreak} streak</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-sky-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, (anzanStats.totalCorrect / Math.max(1, anzanStats.totalRuns)) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </section>

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
            {ADD_SUB_LEVELS.map((lvl) => {
              const progress = progressMap[`add_sub_level_${lvl.levelNumber}`];
              const isMastered = progress?.masteryStatus === 'mastered';
              const isDecayed = progress?.masteryStatus === 'needs_refresh';

              return (
                <motion.button
                  key={lvl.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAddSubLevel(lvl.levelNumber)}
                  className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-violet-500/50 text-left transition-all shadow-md group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-violet-400">
                        Level {lvl.levelNumber}
                      </span>
                      {isMastered && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                          <CheckCircle2 className="w-3 h-3" />
                          Mastered
                        </span>
                      )}
                      {isDecayed && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800/60">
                          <RefreshCw className="w-3 h-3" />
                          Refresh
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                      {lvl.title.replace(`Level ${lvl.levelNumber}: `, '')}
                    </div>
                    <p className="text-xs text-slate-400 font-mono">{lvl.subtitle}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-2">{lvl.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px]">&lt;{lvl.targetTimeSeconds}s target</span>
                    <span className="text-violet-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      Train <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Table Chart Reference Showcase */}
        <section className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-violet-800/40 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-violet-600/30 text-violet-300 border border-violet-500/30">
                  <Table className="w-4 h-4 text-violet-400" />
                </span>
                <h2 className="text-base font-bold text-white tracking-wide">
                  Table Chart Reference (1 to 100)
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  5 Essential Tables
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Instant lookup & pattern study: 1–100 multiplication (multiples up to 20), squares, cubes, square roots, and cube roots.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTableChartTab('mul');
                setViewMode('table_chart');
              }}
              className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Table className="w-3.5 h-3.5" />
              <span>Open Table Chart</span>
            </button>
          </div>

          {/* Quick 5 Table Pill Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1">
            {[
              { id: 'mul' as const, label: '1. Mul Table', sub: '1–100 × 20 multiples' },
              { id: 'squares' as const, label: '2. Squares Table', sub: '1² to 100²' },
              { id: 'cubes' as const, label: '3. Cube Table', sub: '1³ to 100³' },
              { id: 'sqrt' as const, label: '4. Square Root Table', sub: '√1 to √100' },
              { id: 'cbrt' as const, label: '5. Cuberoot Table', sub: '∛1 to ∛100' },
            ].map((tbl) => (
              <button
                key={tbl.id}
                onClick={() => {
                  setActiveTableChartTab(tbl.id);
                  setViewMode('table_chart');
                }}
                className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all text-left flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {tbl.label}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-slate-400 mt-1">{tbl.sub}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Module B: 1 to 100 Multiplication Matrix Showcase */}
        <section className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />
              <h2 className="text-base font-bold text-white tracking-wide">
                Module B: 1 to 100 Multiplication Matrix
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              Spans Tier 1 Associative Anchors (1–12), Tier 2 Split-and-Add (13–20), Tier 3 Decade Proximity (21–50), and Tier 4 Centurions (51–100).
            </p>
          </div>

          <button
            onClick={() => setViewMode('heatmap')}
            className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 shrink-0"
          >
            <Grid className="w-4 h-4" />
            Open 100 Heatmap Grid
          </button>
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
            <span className="text-xs text-slate-400">Vedic & Binomial Shortcuts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                id: 'ending_5',
                title: 'Squares Ending in 5',
                subtitle: '5, 15, 25 ... 95',
                desc: 'Vedic Ekadhikena: N(N+1) | 25 shortcut.',
              },
              {
                id: 'near_50',
                title: 'Squares Near 50',
                subtitle: '41 to 59',
                desc: 'Base 25 anchor: (25 ± d) | d² mental steps.',
              },
              {
                id: 'near_100',
                title: 'Squares Near 100',
                subtitle: '81 to 99',
                desc: 'Base 100 deficit subtraction & appending.',
              },
              {
                id: 'general_duplex',
                title: 'Algebraic Duplex Squares',
                subtitle: '11 to 99',
                desc: 'Full (a + b)² = a² + 2ab + b² left-to-right.',
              },
              {
                id: 'cubes_anchor',
                title: 'Cubes Foundation Anchors',
                subtitle: '1 to 20',
                desc: 'Internalized anchor facts & unit bijunctive checks.',
              },
              {
                id: 'cubes_advanced',
                title: 'Higher Order Cubes',
                subtitle: '21 to 100',
                desc: 'Decade base cubing + Binomial (a + b)³ steps.',
              },
            ].map((track) => (
              <motion.button
                key={track.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSquareTrack(track.id as any)}
                className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/50 text-left transition-all shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {track.title}
                  </div>
                  <div className="text-xs font-mono text-amber-400">{track.subtitle}</div>
                  <p className="text-[11px] text-slate-400">{track.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-end text-xs text-amber-400 group-hover:translate-x-1 transition-transform gap-0.5">
                  Train Track <ChevronRight className="w-3 h-3" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Working Memory Anzan Teaser Banner */}
        <section className="p-6 rounded-3xl bg-gradient-to-r from-violet-950/40 via-slate-900 to-indigo-950/40 border border-violet-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-violet-400" />
              <h2 className="text-base font-bold text-white tracking-wide">
                Cognitive Working Memory Engine (Anzan Flash)
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-lg">
              Numbers flash rapidly with auditory metronome ticks. Expand your active working memory phonological loop.
            </p>
          </div>

          <button
            onClick={() => setViewMode('anzan')}
            className="px-5 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-all shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            Start Anzan Flash
          </button>
        </section>

        {/* Unlocked Badges Showcase */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white tracking-wide uppercase font-mono text-slate-400">
            Achievements & Badges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {badges.map((b) => (
              <div
                key={b.id}
                className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 transition-all ${
                  b.unlocked
                    ? 'bg-slate-900 border-slate-700 text-white shadow-md shadow-violet-600/5'
                    : 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-60'
                }`}
              >
                <div
                  className={`p-2 rounded-xl border ${
                    b.unlocked
                      ? 'bg-violet-600/20 text-violet-400 border-violet-500/30'
                      : 'bg-slate-900 text-slate-600 border-slate-800'
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold truncate text-[11px]">{b.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{b.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* AI Coach Guidance Drawer */}
      <AICoachDrawer
        isOpen={isCoachDrawerOpen}
        onClose={() => setIsCoachDrawerOpen(false)}
      />
    </div>
  );
};
