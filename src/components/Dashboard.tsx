'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
  Target,
  Sliders,
  Download,
  Upload,
  Copy,
  Check,
  X,
  MessageCircle,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ADD_SUB_LEVELS } from '../core/calcEngine';
import { calculateCPM, calculateUserRank, getBadges } from '../core/mastery';
import { getRecommendedNextDrill, analyzeProgress } from '../core/adaptive';
import {
  MICRO_SESSION_PRESETS,
  evaluateActiveCurriculumPhase,
} from '../core/curriculumEngine';
import { AICoachCard } from './AICoachCard';
import { AICoachDrawer } from './AICoachDrawer';
import { MyLearningPlan } from './MyLearningPlan';

interface DashboardProps {
  onOpenTutorial: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenTutorial }) => {
  const tDash = useTranslations('dashboard');
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');

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
    startExamQuantDrill,
    startMicroSession,
    startTablesBootcamp,
    calculateExamTransferScores,
    examTransferScores,
    startSingleTableMastery,
    startCustomDrill,
    exportBrainMatrixJSON,
    importBrainMatrixJSON,
    techniqueMasteryMap,
    setIsCustomDrillModalOpen,
    currentUser,
    setIsChatDrawerOpen,
    setAuthModalOpen,
  } = useQuizStore();

  const [isCoachDrawerOpen, setIsCoachDrawerOpen] = useState(false);
  const [backupFeedback, setBackupFeedback] = useState<string | null>(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);

  const handleExportCopy = () => {
    try {
      const json = exportBrainMatrixJSON();
      navigator.clipboard.writeText(json);
      setBackupFeedback('Brain Matrix copied to clipboard!');
      setTimeout(() => setBackupFeedback(null), 3000);
    } catch {
      setBackupFeedback('Failed to copy to clipboard');
      setTimeout(() => setBackupFeedback(null), 3000);
    }
  };

  const handleExportDownload = () => {
    try {
      const json = exportBrainMatrixJSON();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mentalis_brain_matrix_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setBackupFeedback('Brain Matrix backup downloaded!');
      setTimeout(() => setBackupFeedback(null), 3000);
    } catch {
      setBackupFeedback('Failed to export backup file');
      setTimeout(() => setBackupFeedback(null), 3000);
    }
  };

  const handleImportConfirm = () => {
    if (!importJsonText.trim()) return;
    const res = importBrainMatrixJSON(importJsonText);
    if (res.success) {
      setIsImportModalOpen(false);
      setImportJsonText('');
      setImportError(null);
      setBackupFeedback('Brain Matrix restored successfully!');
      setTimeout(() => setBackupFeedback(null), 3000);
    } else {
      setImportError(res.error || 'Failed to restore Brain Matrix');
    }
  };

  const studyDay = Math.max(1, overallStats.dailyActiveStreak || 1);
  const currentPhase = evaluateActiveCurriculumPhase(studyDay, learnerProfile);
  const scores = examTransferScores || calculateExamTransferScores();

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
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 pb-nav sm:pb-12">
      {/* Top Banner / Hero — Compact on mobile, expanded on desktop */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Hero row: branding + desktop-only CTA buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                  {tCommon('appName')} <span className="text-violet-400 font-serif italic text-base sm:text-xl">{tDash('title')}</span>
                </h1>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {tDash('subtitle')}
              </p>
            </div>

            {/* Mobile-only Quick Chat / 1v1 Duel Bar */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => {
                  if (!currentUser) setAuthModalOpen(true);
                  else setIsChatDrawerOpen(true);
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-slate-200 hover:border-emerald-500/60 shadow-sm transition-all active:scale-95"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>Friends & 1v1 Math Duels</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Chat
                </span>
              </button>
            </div>

            {/* Desktop-only CTAs — on mobile these live in the bottom tab bar */}
            <div className="hidden sm:flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsCustomDrillModalOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white border border-violet-400/30 text-xs font-bold transition-all shadow-md shadow-violet-600/30 min-h-[44px]"
              >
                <Sliders className="w-4 h-4" />
                {tDash('customDrill')}
              </button>
              <button
                onClick={onOpenTutorial}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold transition-all shadow-sm min-h-[44px]"
              >
                <BookOpen className="w-4 h-4" />
                <span>{tDash('pedagogyLab')}</span>
              </button>
              <button
                onClick={() => setViewMode('heatmap')}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm min-h-[44px]"
              >
                <Grid className="w-4 h-4" />
                <span>{tDash('tables100')}</span>
              </button>
            </div>
          </div>

          {/* Stat HUD — horizontal scroll on mobile, 4-column grid on desktop */}
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4">
            {/* Daily Streak */}
            <div className="flex-none w-36 sm:w-auto snap-start p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">{tDash('dailyStreak')}</div>
                <div className="text-xl font-bold font-mono text-white flex items-baseline gap-1">
                  {overallStats.dailyActiveStreak} <span className="text-xs font-normal text-amber-400">{tDash('days')}</span>
                </div>
              </div>
            </div>

            {/* Calculations Done */}
            <div className="flex-none w-36 sm:w-auto snap-start p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">{tDash('solvedOffline')}</div>
                <div className="text-xl font-bold font-mono text-white">
                  {overallStats.totalCalculations}
                </div>
              </div>
            </div>

            {/* Mental Speed Index CPM */}
            <div className="flex-none w-36 sm:w-auto snap-start p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">{tDash('throughputCpm')}</div>
                <div className="text-xl font-bold font-mono text-emerald-400 flex items-baseline gap-1">
                  {cpm} <span className="text-xs font-normal text-slate-500">{tDash('calcMin')}</span>
                </div>
              </div>
            </div>

            {/* Genuine Derived Rank */}
            <div className="flex-none w-36 sm:w-auto snap-start p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 shadow-lg">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-slate-400">{tDash('currentRank')}</div>
                <div className="text-xs font-bold text-white truncate" title={userRank.title}>
                  {userRank.title}
                </div>
                <div className="text-[10px] text-sky-400 font-mono">
                  {tDash('tier')} {userRank.tierLevel + 1}/6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area — full-bleed on mobile, centered on desktop */}
      <div className="flex-1 w-full md:max-w-4xl md:mx-auto px-4 py-4 sm:py-6 space-y-6 sm:space-y-8">
        {/* Prominent My Learning Plan Section */}
        <MyLearningPlan />

        {/* Mental Math Techniques Curriculum Studio Hero */}
        <section className="p-6 rounded-3xl bg-gradient-to-r from-violet-950/50 via-slate-900 to-indigo-950/40 border border-violet-800/40 shadow-xl space-y-4 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-violet-600/20 text-violet-300 border border-violet-500/40 shadow-inner">
                <Sparkles className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    {tDash('techniquesStudio')}
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {tDash('shortcutsCount', { count: 35 })}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {tDash('techniquesStudioDesc')}
                </p>
              </div>
            </div>

            <button
              onClick={() => setViewMode('techniques')}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex-shrink-0 active:scale-95"
            >
              <span>{tDash('launchStudio')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-medium text-slate-400">
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
              <span>{tDash('moduleFundamental')}</span>
              <span className="text-emerald-400 font-mono font-bold">{tDash('techsCount', { count: 6 })}</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
              <span>{tDash('moduleMultiplication')}</span>
              <span className="text-indigo-400 font-mono font-bold">{tDash('techsCount', { count: 9 })}</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
              <span>{tDash('moduleSquaresCubes')}</span>
              <span className="text-violet-400 font-mono font-bold">{tDash('techsCount', { count: 7 })}</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
              <span>{tDash('moduleRootExtraction')}</span>
              <span className="text-amber-400 font-mono font-bold">{tDash('techsCount', { count: 3 })}</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between">
              <span>{tDash('moduleFastDivision')}</span>
              <span className="text-rose-400 font-mono font-bold">{tDash('techsCount', { count: 4 })}</span>
            </div>
          </div>
        </section>

        {/* Custom Workout & Automaticity Hub */}
        <section className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">{tDash('customWorkoutHub')}</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {tDash('offlineFirst')}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {tDash('customWorkoutDesc')}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCustomDrillModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-md shadow-violet-600/30 transition-all min-h-[44px]"
            >
              <Sliders className="w-4 h-4" />
              <span>{tDash('openWorkoutBuilder')}</span>
            </button>
          </div>

          <div className="flex sm:grid sm:grid-cols-3 gap-3 pt-2 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 -mx-6 px-6 sm:mx-0 sm:px-0">
            {/* Table 18 Mastery */}
            <div className="w-[250px] sm:w-auto shrink-0 snap-start p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white">{tDash('table18Title')}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">&lt;2.2s</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {tDash('table18Desc')}
                </p>
              </div>
              <button
                onClick={() => startSingleTableMastery(18)}
                className="w-full py-2.5 rounded-xl bg-violet-950/40 hover:bg-violet-950/80 border border-violet-700/40 text-violet-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[44px] active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-violet-300" />
                <span>{tDash('masterTable18')}</span>
              </button>
            </div>

            {/* Table 19 Mastery */}
            <div className="w-[250px] sm:w-auto shrink-0 snap-start p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white">{tDash('table19Title')}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">&lt;2.2s</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {tDash('table19Desc')}
                </p>
              </div>
              <button
                onClick={() => startSingleTableMastery(19)}
                className="w-full py-2.5 rounded-xl bg-violet-950/40 hover:bg-violet-950/80 border border-violet-700/40 text-violet-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[44px] active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-violet-300" />
                <span>{tDash('masterTable19')}</span>
              </button>
            </div>

            {/* Multi-digit 2d/3d Add/Sub */}
            <div className="w-[250px] sm:w-auto shrink-0 snap-start p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">{tDash('multidigitTitle')}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{tDash('nonNegative')}</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {tDash('multidigitDesc')}
                </p>
              </div>
              <button
                onClick={() =>
                  startCustomDrill({
                    id: 'multidigit_quick',
                    name: 'Multi-Digit L2R Speed Drill',
                    selectedTables: [],
                    selectedSquareRanges: [],
                    selectedCubeRanges: [],
                    selectedArithmeticCombos: ['add_sub_2d_2d', 'add_sub_3d_2d'],
                    selectedExamSkills: [],
                    operatorPreference: 'mixed',
                    timeLimitSeconds: 300,
                    goalCount: 20,
                    interleavePreviousLearned: true,
                  })
                }
                className="w-full py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/80 border border-emerald-700/40 text-emerald-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[44px] active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-300" />
                <span>{tDash('startMultidigit')}</span>
              </button>
            </div>
          </div>

          {/* Brain Matrix Backup & Sync Strip */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Download className="w-4 h-4 text-cyan-400" />
              <span>
                {tDash('brainMatrixNote')}
              </span>
              {backupFeedback && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold animate-pulse">
                  {backupFeedback}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCopy}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
                title="Copy full JSON matrix to clipboard"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{tDash('copyJson')}</span>
              </button>
              <button
                onClick={handleExportDownload}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
                title="Download JSON matrix file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{tDash('download')}</span>
              </button>
              <button
                onClick={() => setIsImportModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/50 font-semibold transition-colors"
                title="Restore from JSON matrix"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{tDash('restore')}</span>
              </button>
            </div>
          </div>
        </section>

        {/* RRB PO Prelims Speed Quant Readiness Card */}
        <section className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 shadow-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Target className="w-5 h-5" />
                </span>
                <h2 className="text-lg font-bold text-white tracking-wide">
                  RRB PO Prelims Speed Quant Engine
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase border border-emerald-500/30">
                  Target: 35/35
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Evaluates your real arithmetic automaticity against IBPS RRB Officer Scale-I benchmarks.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('exam_quant')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                11 Sub-Skills Hub
              </button>
              <button
                onClick={() => startExamQuantDrill('quant_simplification')}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>Quick 15-Q Mock</span>
              </button>
            </div>
          </div>

          {/* 5 Transfer Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 font-mono text-center">
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase">Readiness</div>
              <div className="text-xl font-bold text-emerald-400">{scores.rrbReadiness}%</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase">Automaticity</div>
              <div className="text-xl font-bold text-violet-400">{scores.calculationAutomaticity}%</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase">Exam Speed</div>
              <div className="text-xl font-bold text-amber-400">{scores.examSpeed}%</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase">Accuracy</div>
              <div className="text-xl font-bold text-sky-400">{scores.examAccuracy}%</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 col-span-2 sm:col-span-1">
              <div className="text-[10px] text-slate-500 uppercase">Foundation</div>
              <div className="text-xl font-bold text-white">{scores.foundationScore}%</div>
            </div>
          </div>
        </section>

        {/* 60-Day RRB PO Quant Roadmap & Micro-Sessions */}
        <section className="space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase border border-amber-500/30">
                    Day {studyDay} of 60
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {currentPhase.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  {currentPhase.description}
                </p>
              </div>

              <button
                onClick={() => setViewMode('bootcamp_11_20')}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-lg shadow-amber-600/30 transition-all flex items-center gap-2 shrink-0"
              >
                <Flame className="w-4 h-4 fill-white" />
                <span>Open Bootcamp 11–20</span>
              </button>
            </div>

            {/* Phase Milestones Bar */}
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs flex flex-wrap items-center gap-4 text-slate-300">
              <span className="font-bold text-amber-400 font-mono text-[11px] uppercase">
                Phase Benchmarks:
              </span>
              {currentPhase.benchmarkRequirements.map((m: string, idx: number) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>

            {/* 4 Micro-Session Speed Presets */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="uppercase tracking-wider">Speed Conditioning Micro-Sessions</span>
                <span>Deterministic offline timers</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {MICRO_SESSION_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => startMicroSession(preset.id)}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/60 transition-all text-left flex flex-col justify-between group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                          {preset.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {preset.durationMinutes}m
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {preset.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{preset.durationMinutes === 2 ? 15 : preset.durationMinutes === 5 ? 25 : preset.durationMinutes === 10 ? 40 : 60} items</span>
                      <span className="text-amber-400 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Start <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Pedagogical Coach Card */}
        <AICoachCard onOpenCoachDrawer={() => setIsCoachDrawerOpen(true)} />

        {/* Today's Recommendation & Resume Card */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-5 rounded-3xl bg-gradient-to-r from-violet-950/40 to-slate-900 border border-violet-800/40 shadow-xl flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-violet-600/30 text-violet-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-violet-500/40">
                  {tDash('todayRecommendation')}
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
                {tDash('launchAdaptive')}
              </button>
            </div>
          </div>

          {/* Quick Resume Card */}
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                {tDash('lastActiveDrill')}
              </span>
              <h4 className="text-sm font-bold text-white">
                {activeModule === 'multiplication'
                  ? `Table ${activeTable} Drill`
                  : activeModule === 'add_sub'
                  ? `Level ${activeAddSubLevel} Add/Sub`
                  : activeSquareTrack.replace(/_/g, ' ').toUpperCase()}
              </h4>
              <p className="text-xs text-slate-400">
                {tDash('continueWhereLeft')}
              </p>
            </div>

            <button
              onClick={handleResumeLastDrill}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>{tDash('resumeDrill')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Compact Curriculum Overview Track Badges */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white tracking-wide uppercase font-mono text-slate-400">
              {tDash('curriculumMastery')}
            </h2>
            <span className="text-xs font-mono text-violet-400">
              {userRank.masteredTablesCount}/99 {tDash('tablesMastered')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-400 font-mono">
                <span>{tDash('addSub')}</span>
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
                <span>{tDash('tables100')}</span>
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
                <span>{tDash('squaresCubes')}</span>
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
                <span>{tDash('anzanBest')}</span>
                <span className="text-white font-bold">{anzanStats.bestStreak} {tDash('streak')}</span>
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
                {tDash('moduleA')}
              </h2>
            </div>
            <span className="text-xs text-slate-400">{tDash('msdFirst')}</span>
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
                        {tCommon('level')} {lvl.levelNumber}
                      </span>
                      {isMastered && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                          <CheckCircle2 className="w-3 h-3" />
                          {tDash('mastered')}
                        </span>
                      )}
                      {isDecayed && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800/60">
                          <RefreshCw className="w-3 h-3" />
                          {tDash('refresh')}
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
                    <span className="font-mono text-[11px]">{tDash('targetSeconds', { target: lvl.targetTimeSeconds })}</span>
                    <span className="text-violet-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      {tDash('train')} <ChevronRight className="w-3 h-3" />
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
                  {tDash('tableChartReference')}
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {tDash('essentialTables')}
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
              <span>{tDash('openTableChart')}</span>
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
                {tDash('moduleB')}
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
            {tDash('openHeatmap')}
          </button>
        </section>

        {/* Module C: Squares & Cubes (1 to 100) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500" />
              <h2 className="text-base font-bold text-white tracking-wide">
                {tDash('moduleC')}
              </h2>
            </div>
            <span className="text-xs text-slate-400">{tDash('vedicBinomialShortcuts')}</span>
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
                {tDash('anzanTeaser')}
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
            {tDash('startAnzan')}
          </button>
        </section>

        {/* Unlocked Badges Showcase */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white tracking-wide uppercase font-mono text-slate-400">
            {tDash('achievementsBadges')}
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


      {/* Brain Matrix JSON Import Modal */}
      <AnimatePresence>
        {isImportModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Restore Brain Matrix Backup</h3>
                </div>
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-400">
                Paste your exported Brain Matrix JSON below to restore your learner profile, fact memory states, and custom workout presets.
              </p>

              <textarea
                value={importJsonText}
                onChange={(e) => {
                  setImportJsonText(e.target.value);
                  setImportError(null);
                }}
                placeholder="Paste Brain Matrix JSON here..."
                className="w-full h-44 p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />

              {importError && (
                <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-xs text-red-300">
                  {importError}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleImportConfirm}
                  disabled={!importJsonText.trim()}
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-cyan-600/30"
                >
                  Restore Data
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
