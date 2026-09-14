'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Clock,
  Play,
  CheckCircle2,
  AlertTriangle,
  Zap,
  BookOpen,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  HelpCircle,
  Award,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useQuizStore } from '../core/store/useQuizStore';
import {
  FactKey,
  FactMemoryState,
  parseFactKey,
  formatFactKey,
  getFactCorrectAnswer,
} from '../core/factModel';
import { getBestStrategyForFact, StrategyDefinition } from '../core/strategyCatalog';
import { getLocalizedStrategy } from '../i18n/techniqueTranslations';

export const MyLearningPlan: React.FC = () => {
  const tPlan = useTranslations('learningPlan');
  const tCommon = useTranslations('common');
  const {
    activeTrainingPlan,
    startTrainingBlock,
    generateDailyPlan,
    learnerProfile,
    activeAssessment,
    startAssessment,
    resumeAssessment,
    setViewMode,
    factMemoryMap,
    practiceFact,
    locale,
  } = useQuizStore();

  const plan = activeTrainingPlan;
  const baseline = learnerProfile.baselineReport;
  const now = Date.now();

  // 1. Weak facts: skipped facts, error slips, high forgetting risk
  const weakFacts = useMemo(() => {
    const all = Object.values(factMemoryMap);
    const filtered = all.filter(
      (f) =>
        (f.skipCount && f.skipCount > 0) ||
        f.masteryState === 'weak' ||
        f.consecutiveErrors > 0 ||
        f.forgettingRisk > 0.75
    );

    filtered.sort((a, b) => {
      const scoreA = (a.skipCount || 0) * 150 + a.consecutiveErrors * 40 + a.forgettingRisk * 50;
      const scoreB = (b.skipCount || 0) * 150 + b.consecutiveErrors * 40 + b.forgettingRisk * 50;
      return scoreB - scoreA;
    });

    return filtered.slice(0, 8);
  }, [factMemoryMap]);

  // Fallback starter weak facts for brand new accounts
  const displayWeakFacts = useMemo(() => {
    if (weakFacts.length > 0) return weakFacts;
    const defaults: FactKey[] = [
      formatFactKey('multiplication', 17, 8),
      formatFactKey('multiplication', 19, 7),
      formatFactKey('square', 48),
      formatFactKey('multiplication', 75, 12),
      formatFactKey('square', 85),
      formatFactKey('cube', 12),
    ];
    return defaults.map((key) => {
      const parsed = parseFactKey(key);
      return {
        factKey: key,
        factType: parsed.type,
        familyId: `${parsed.type}:${parsed.operandA}`,
        operandA: parsed.operandA,
        operandB: parsed.operandB,
        masteryState: 'weak' as const,
        learningPhase: 'guided' as const,
        totalAttempts: 0,
        correctAttempts: 0,
        consecutiveErrors: 0,
        consecutiveCorrect: 0,
        skipCount: 1,
        firstSeen: now,
        lastSeen: now,
        lastCorrect: null,
        lastIncorrect: null,
        lastSkipped: now,
        intervalDays: 0,
        easeFactor: 2.5,
        stabilityScore: 20,
        nextReviewTimestamp: now,
        forgettingRisk: 0.9,
        medianLatencyMs: 0,
        recentLatencyMs: 0,
        errorHistory: [],
        usedHintOrStrategyCount: 0,
        recentAccuracy: 0,
        isDirectMemory: false,
        correctAnswer: getFactCorrectAnswer(key),
      };
    });
  }, [weakFacts, now]);

  // 2. Facts due for spaced review
  const dueFacts = useMemo(() => {
    const all = Object.values(factMemoryMap);
    const filtered = all.filter(
      (f) => f.totalAttempts > 0 && (now >= f.nextReviewTimestamp || f.forgettingRisk > 0.45)
    );
    filtered.sort((a, b) => b.forgettingRisk - a.forgettingRisk);
    return filtered.slice(0, 6);
  }, [factMemoryMap, now]);

  // 3. Recently mastered facts
  const masteredFacts = useMemo(() => {
    const all = Object.values(factMemoryMap);
    const filtered = all.filter((f) => f.masteryState === 'mastered');
    filtered.sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0));
    return filtered.slice(0, 6);
  }, [factMemoryMap]);

  // 4. Speed bottlenecks (accurate but slow / hesitation > 3.5s)
  const speedBottlenecks = useMemo(() => {
    const all = Object.values(factMemoryMap);
    const filtered = all.filter(
      (f) =>
        f.totalAttempts >= 2 &&
        f.recentAccuracy >= 65 &&
        f.medianLatencyMs > 3500 &&
        f.masteryState !== 'mastered'
    );
    filtered.sort((a, b) => b.medianLatencyMs - a.medianLatencyMs);
    return filtered.slice(0, 6);
  }, [factMemoryMap]);

  // 5. Suggested tricks matching weak facts & bottlenecks
  const suggestedTricks = useMemo(() => {
    const factKeysToAnalyze: FactKey[] = [
      ...weakFacts.map((f) => f.factKey),
      ...speedBottlenecks.map((f) => f.factKey),
    ];

    if (factKeysToAnalyze.length === 0) {
      factKeysToAnalyze.push(
        formatFactKey('multiplication', 17, 8),
        formatFactKey('square', 85),
        formatFactKey('square', 48),
        formatFactKey('multiplication', 75, 12)
      );
    }

    const seenStrategyIds = new Set<string>();
    const tricks: {
      strategy: StrategyDefinition;
      applicableFacts: FactKey[];
      exampleFactKey: FactKey;
    }[] = [];

    for (const key of factKeysToAnalyze) {
      const strat = getBestStrategyForFact(key);
      if (!seenStrategyIds.has(strat.id)) {
        seenStrategyIds.add(strat.id);
        const related = factKeysToAnalyze.filter(
          (k) => getBestStrategyForFact(k).id === strat.id
        );
        tricks.push({
          strategy: strat,
          applicableFacts: related,
          exampleFactKey: key,
        });
      }
      if (tricks.length >= 3) break;
    }

    return tricks;
  }, [weakFacts, speedBottlenecks]);

  // Block status logic
  const completedBlocksCount = plan?.blocks.filter((b) => b.status === 'completed').length || 0;
  const activeBlockIndex = plan?.blocks.findIndex((b) => b.status !== 'completed') ?? -1;
  const targetIndex = activeBlockIndex === -1 ? 0 : activeBlockIndex;
  const isPlanCompleted = plan ? plan.isCompleted || completedBlocksCount === plan.blocks.length : false;

  const handleStartPersonalizedPractice = () => {
    if (!plan) {
      generateDailyPlan();
      startTrainingBlock(0);
      return;
    }
    if (isPlanCompleted) {
      generateDailyPlan();
      startTrainingBlock(0);
    } else {
      startTrainingBlock(targetIndex);
    }
  };

  const formatFactLabel = (key: FactKey, ans?: number): string => {
    const parsed = parseFactKey(key);
    const val = ans ?? getFactCorrectAnswer(key);
    if (parsed.type === 'multiplication') {
      return `${parsed.operandA} × ${parsed.operandB} = ${val}`;
    }
    if (parsed.type === 'square') {
      return `${parsed.operandA}² = ${val}`;
    }
    return `${parsed.operandA}³ = ${val.toLocaleString()}`;
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              {tPlan('title')}
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              {tPlan('adaptiveCurriculum')}
            </span>
            {plan?.isLevel0 ? (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {tPlan('level0Plan')}
              </span>
            ) : (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {tPlan('offlinePlan')}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400">
            {tPlan('subtitle')}
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleStartPersonalizedPractice}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center gap-2 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>
              {isPlanCompleted
                ? tPlan('practiceAgain')
                : `${tPlan('startPractice')} ${plan ? `(${tPlan('block')} ${targetIndex + 1})` : ''}`}
            </span>
          </button>
        </div>
      </div>

      {/* Diagnostic Assessment Status / Invitation Banner */}
      {activeAssessment && activeAssessment.status === 'in_progress' ? (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {tPlan('diagnosticPaused')}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {tPlan('questionOf', { current: activeAssessment.currentQuestionIndex + 1, total: activeAssessment.questions.length })}
              </span>
            </div>
            <h3 className="text-sm font-bold text-white">
              {tPlan('diagnosticPaused')}
            </h3>
            <p className="text-xs text-slate-300">
              Continue calibrating your calculation speed, strategy gaps, and hesitation patterns across all 5 arithmetic domains.
            </p>
          </div>

          <button
            onClick={() => {
              resumeAssessment();
              setViewMode('assessment');
            }}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>{tPlan('resumeDiagnostic')}</span>
          </button>
        </div>
      ) : !baseline ? (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-violet-950/50 border border-indigo-500/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-indigo-500/30">
                Calibration Recommended
              </span>
            </div>
            <h3 className="text-sm font-bold text-white">
              Calibrate Your Baseline (10–20 min Diagnostic)
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Discover your true mental arithmetic level, speed bottlenecks, and weak facts across Addition/Subtraction, Tables 1–100, Squares, Cubes, and Anzan memory.
            </p>
          </div>

          <button
            onClick={startAssessment}
            className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Start Assessment</span>
          </button>
        </div>
      ) : (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">
                  {tPlan('diagnosticCalibrated')}: {baseline.overallTier}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/60">
                  {baseline.archetype || 'Calibrated'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {tPlan('targetPace', { pace: baseline.recommendedDailyPaceMinutes, targets: baseline.priorityGaps.length + (baseline.skippedFacts?.length || 0) })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('profile')}
              className="text-xs font-semibold text-violet-300 hover:text-violet-200 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
            >
              {tPlan('viewReport')}
            </button>
            <button
              onClick={startAssessment}
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
              title="Retake diagnostic to re-evaluate your calibration"
            >
              {tPlan('recalibrate')}
            </button>
          </div>
        </div>
      )}

      {/* Today's Personalized Practice Blocks */}
      {plan && (
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-violet-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                Today’s 5-Block Routine ({plan.totalEstimatedMinutes} mins total)
              </h3>
              {plan.isLevel0 ? (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                  Level 0 Offline
                </span>
              ) : plan.source === 'ai_enhanced' ? (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-500/30">
                  Groq AI Enhanced
                </span>
              ) : (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                  Local Plan
                </span>
              )}
            </div>
            <span className="text-xs font-mono text-slate-400">
              {completedBlocksCount}/{plan.blocks.length} Completed
            </span>
          </div>

          <div className="flex sm:grid sm:grid-cols-5 gap-2.5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-5 px-5 sm:mx-0 sm:px-0">
            {plan.blocks.map((block, idx) => {
              const isDone = block.status === 'completed';
              const isCurrent = idx === targetIndex && !isPlanCompleted;
              return (
                <button
                  key={block.id}
                  onClick={() => startTrainingBlock(idx)}
                  className={`w-[160px] sm:w-auto shrink-0 snap-start p-3.5 sm:p-3 rounded-2xl sm:rounded-xl border text-left transition-all flex flex-col justify-between space-y-1.5 active:scale-95 ${
                    isDone
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                      : isCurrent
                      ? 'bg-violet-950/40 border-violet-500/60 text-white shadow-md shadow-violet-600/20 ring-1 ring-violet-500/40'
                      : 'bg-slate-950/50 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500 font-bold">{tPlan('block')} {idx + 1}</span>
                    {isDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span>{block.allocatedMinutes}m</span>
                    )}
                  </div>
                  <div className="font-bold text-xs truncate" title={block.title}>
                    {block.title.split(':')[0]}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {block.completedCount}/{block.targetCount} {tCommon('completed')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Grid: Weak Facts vs Due for Review */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Most Important Weak Facts */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">{tPlan('weakFacts')}</h3>
                <p className="text-[11px] text-slate-400">{tPlan('weakFactsSubtitle')}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-rose-400 font-semibold">
              {weakFacts.length > 0 ? `${weakFacts.length} ${tPlan('active')}` : 'Starter Targets'}
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
            {displayWeakFacts.map((fact) => {
              const isSkipped = (fact.skipCount || 0) > 0;
              const hasErrors = fact.consecutiveErrors > 0;
              return (
                <button
                  key={fact.factKey}
                  onClick={() => practiceFact(fact.factKey, 'learn')}
                  className="w-[175px] sm:w-auto shrink-0 snap-start p-3.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 hover:bg-slate-800 border border-rose-500/30 hover:border-rose-400 active:scale-95 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group shadow-lg shadow-rose-950/20"
                  title="Click to learn strategy and drill this fact"
                >
                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-2">
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                        isSkipped
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          : hasErrors
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {isSkipped ? `Skipped ${fact.skipCount}x` : hasErrors ? `${fact.consecutiveErrors} ${tPlan('slips')}` : 'High decay'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-rose-400 sm:hidden" />
                  </div>

                  <span className="font-mono text-base sm:text-xs font-black text-white group-hover:text-rose-200 transition-colors tracking-tight">
                    {formatFactLabel(fact.factKey, fact.correctAnswer)}
                  </span>

                  <div className="flex items-center justify-between text-[10px] text-rose-400/90 font-medium sm:hidden pt-1 border-t border-slate-800/60 w-full">
                    <span>Learn Trick</span>
                    <span className="font-mono">↵</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Facts Due for Spaced Review */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <RefreshCw className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">{tPlan('reviewFacts')}</h3>
                <p className="text-[11px] text-slate-400">{tPlan('reviewFactsSubtitle')}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-amber-400 font-semibold">
              {dueFacts.length} {tPlan('due')}
            </span>
          </div>

          {dueFacts.length === 0 ? (
            <div className="py-4 text-center text-xs text-slate-500 font-mono">
              All practiced facts are safely retained! Complete practice blocks to queue reviews.
            </div>
          ) : (
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
              {dueFacts.map((fact) => (
                <button
                  key={fact.factKey}
                  onClick={() => practiceFact(fact.factKey, 'recall')}
                  className="w-[175px] sm:w-auto shrink-0 snap-start p-3.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400 active:scale-95 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group shadow-lg shadow-amber-950/20"
                  title="Click to drill active recall"
                >
                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-2">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase tracking-wider">
                      {Math.round(fact.forgettingRisk * 100)}% {tPlan('risk')}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 sm:hidden" />
                  </div>

                  <span className="font-mono text-base sm:text-xs font-black text-white group-hover:text-amber-200 transition-colors tracking-tight">
                    {formatFactLabel(fact.factKey, fact.correctAnswer)}
                  </span>

                  <div className="flex items-center justify-between text-[10px] text-amber-400/90 font-medium sm:hidden pt-1 border-t border-slate-800/60 w-full">
                    <span>Spaced Review</span>
                    <span className="font-mono">↵</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid: Speed Bottlenecks vs Recently Mastered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Speed Bottlenecks (Accurate but Slow) */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Zap className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">Speed Bottlenecks</h3>
                <p className="text-[11px] text-slate-400">High accuracy but prolonged hesitation (&gt;3.5s)</p>
              </div>
            </div>
            <span className="text-xs font-mono text-purple-400 font-semibold">
              {speedBottlenecks.length} slow
            </span>
          </div>

          {speedBottlenecks.length === 0 ? (
            <div className="py-4 text-center text-xs text-slate-500 font-mono">
              No significant hesitation bottlenecks detected yet.
            </div>
          ) : (
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
              {speedBottlenecks.map((fact) => (
                <button
                  key={fact.factKey}
                  onClick={() => practiceFact(fact.factKey, 'learn')}
                  className="w-[175px] sm:w-auto shrink-0 snap-start p-3.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-400 active:scale-95 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group shadow-lg shadow-purple-950/20"
                  title="Click to learn mental shortcut to speed up recall"
                >
                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-2">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                      {(fact.medianLatencyMs / 1000).toFixed(1)}s delay
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 sm:hidden" />
                  </div>

                  <span className="font-mono text-base sm:text-xs font-black text-white group-hover:text-purple-200 transition-colors tracking-tight">
                    {formatFactLabel(fact.factKey, fact.correctAnswer)}
                  </span>

                  <div className="flex items-center justify-between text-[10px] text-purple-400/90 font-medium sm:hidden pt-1 border-t border-slate-800/60 w-full">
                    <span>Speed Up</span>
                    <span className="font-mono">↵</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Recently Mastered Facts */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">Recently Mastered Facts</h3>
                <p className="text-[11px] text-slate-400">Fast direct recall and rock-solid stability</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              {masteredFacts.length} mastered
            </span>
          </div>

          {masteredFacts.length === 0 ? (
            <div className="py-4 text-center text-xs text-slate-500 font-mono">
              Complete practice rounds to convert weak facts into permanent mastered memory!
            </div>
          ) : (
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
              {masteredFacts.map((fact) => (
                <div
                  key={fact.factKey}
                  className="w-[175px] sm:w-auto shrink-0 snap-start p-3.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-lg shadow-emerald-950/20"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded-full font-bold uppercase">
                      Mastered
                    </span>
                  </div>
                  <span className="font-mono text-base sm:text-xs font-black text-slate-200">
                    {formatFactLabel(fact.factKey, fact.correctAnswer)}
                  </span>
                  {fact.medianLatencyMs > 0 && (
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded-full self-start sm:self-auto">
                      {(fact.medianLatencyMs / 1000).toFixed(1)}s recall
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Suggested Tricks to Learn */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/30 via-slate-900 to-indigo-950/30 border border-violet-800/40 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30">
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white">{tPlan('targetedTricks')}</h3>
              <p className="text-[11px] text-slate-400">
                {tPlan('targetedTricksSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={() => setViewMode('memory_map')}
            className="text-xs font-semibold text-violet-300 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Explore All in Memory Map</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-5 px-5 md:mx-0 md:px-0">
          {suggestedTricks.map(({ strategy, applicableFacts, exampleFactKey }) => {
            const locStrat = getLocalizedStrategy(strategy.id, locale, strategy.name, strategy.mentalScript);
            return (
              <div
                key={strategy.id}
                className="w-[280px] md:w-auto shrink-0 snap-start p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-violet-500/50 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-300 group-hover:text-white transition-colors">
                      {locStrat.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded capitalize">
                      {strategy.category}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-emerald-400 bg-emerald-950/30 p-2 rounded-lg border border-emerald-900/30">
                    {locStrat.mentalScript}
                  </p>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <span>Solves:</span>
                    <span className="font-mono text-slate-300 truncate">
                      {applicableFacts.map((k) => formatFactLabel(k).split(' = ')[0]).join(', ')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => practiceFact(exampleFactKey, 'learn')}
                  className="w-full py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600 active:scale-95 text-violet-300 hover:text-white border border-violet-500/30 hover:border-transparent text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{tPlan('practiceShortcut')}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

