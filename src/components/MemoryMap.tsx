'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Zap,
  BookOpen,
  ArrowRight,
  Filter,
  Eye,
  EyeOff,
  Sparkles,
  Info,
  ChevronRight,
  X,
  Play,
  RotateCcw,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import {
  FactKey,
  FactMemoryState,
  parseFactKey,
  formatFactKey,
  getFactCorrectAnswer,
  calculateForgettingRisk,
  createInitialFactMemoryState,
} from '../core/factModel';
import { getBestStrategyForFact } from '../core/strategyCatalog';
import { useTranslations } from 'next-intl';

type MemoryMapTab = 'multiplication' | 'squares' | 'cubes';

export const MemoryMap: React.FC = () => {
  const tMemory = useTranslations('memoryMap');
  const tCommon = useTranslations('common');

  const {
    factMemoryMap,
    practiceFact,
    setViewMode,
  } = useQuizStore();

  const [activeTab, setActiveTab] = useState<MemoryMapTab>('multiplication');
  const [selectedTableRange, setSelectedTableRange] = useState<number>(1); // starting table (1-10, 11-20, etc.)
  const [selectedFactKey, setSelectedFactKey] = useState<FactKey | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'due' | 'weak' | 'mastered'>('all');
  const [hideAnswers, setHideAnswers] = useState<boolean>(false);

  // Filter & tab candidate generation
  const candidateKeys = useMemo(() => {
    const keys: FactKey[] = [];

    if (activeTab === 'multiplication') {
      const start = selectedTableRange;
      const end = Math.min(100, start + 9);
      for (let t = start; t <= end; t++) {
        for (let m = 1; m <= 20; m++) {
          keys.push(formatFactKey('multiplication', t, m));
        }
      }
    } else if (activeTab === 'squares') {
      for (let n = 1; n <= 100; n++) {
        keys.push(formatFactKey('square', n));
      }
    } else if (activeTab === 'cubes') {
      for (let n = 1; n <= 100; n++) {
        keys.push(formatFactKey('cube', n));
      }
    }

    return keys;
  }, [activeTab, selectedTableRange]);

  // Compute memory statistics
  const stats = useMemo(() => {
    const all = Object.values(factMemoryMap);
    const now = Date.now();

    const mastered = all.filter((f) => f.masteryState === 'mastered').length;
    const weak = all.filter(
      (f) =>
        f.masteryState === 'weak' ||
        f.consecutiveErrors > 0 ||
        ((f.skipCount || 0) > 0 && f.masteryState !== 'mastered')
    ).length;
    const due = all.filter((f) => now >= f.nextReviewTimestamp || f.forgettingRisk > 0.4).length;
    const slow = all.filter(
      (f) =>
        f.totalAttempts >= 2 &&
        f.recentAccuracy >= 65 &&
        f.medianLatencyMs > 3500 &&
        f.masteryState !== 'mastered'
    ).length;
    const totalPracticed = all.filter((f) => f.totalAttempts > 0 || (f.skipCount || 0) > 0).length;

    return {
      mastered,
      weak,
      due,
      slow,
      totalPracticed,
    };
  }, [factMemoryMap]);

  // Inspector fact state
  const inspectedState = useMemo(() => {
    if (!selectedFactKey) return null;
    const state = factMemoryMap[selectedFactKey] || createInitialFactMemoryState(selectedFactKey);
    const strategy = getBestStrategyForFact(selectedFactKey);
    const parsed = parseFactKey(selectedFactKey);
    const example = parsed.type === 'multiplication'
      ? strategy.generateWorkedExample(parsed.operandA, parsed.operandB || 1)
      : strategy.generateWorkedExample(parsed.operandA);

    return {
      state,
      strategy,
      example,
      parsed,
    };
  }, [selectedFactKey, factMemoryMap]);

  // Color coding helper for all 6 cell states
  const getCellColor = (key: FactKey) => {
    const state = factMemoryMap[key];
    if (!state || (state.totalAttempts === 0 && (state.skipCount || 0) === 0)) {
      return 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:bg-slate-800/50';
    }

    if (
      state.masteryState === 'weak' ||
      state.consecutiveErrors > 0 ||
      ((state.skipCount || 0) > 0 && state.masteryState !== 'mastered')
    ) {
      return 'bg-rose-950/40 border-rose-500/60 text-rose-300 hover:bg-rose-900/50 shadow-sm shadow-rose-950';
    }

    const now = Date.now();
    if (now >= state.nextReviewTimestamp || state.forgettingRisk > 0.45) {
      return 'bg-amber-950/40 border-amber-500/60 text-amber-300 hover:bg-amber-900/50 shadow-sm shadow-amber-950';
    }

    if (
      state.totalAttempts >= 2 &&
      state.recentAccuracy >= 65 &&
      state.medianLatencyMs > 3500 &&
      state.masteryState !== 'mastered'
    ) {
      return 'bg-purple-950/40 border-purple-500/60 text-purple-300 hover:bg-purple-900/50 shadow-sm shadow-purple-950';
    }

    if (state.masteryState === 'mastered') {
      return 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 hover:bg-emerald-900/50 shadow-sm shadow-emerald-950';
    }

    return 'bg-sky-950/40 border-sky-500/50 text-sky-300 hover:bg-sky-900/50';
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 select-none">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {tMemory('title')}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400">
                  {tMemory('subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{tMemory('filterMastered')}:</span>
              <strong className="text-emerald-400">{stats.mastered}</strong>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 shrink-0">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{tMemory('filterDue')}:</span>
              <strong className="text-amber-400">{stats.due}</strong>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 shrink-0">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>{tMemory('filterWeak')}:</span>
              <strong className="text-rose-400">{stats.weak}</strong>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 shrink-0">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Slow (&gt;3.5s):</span>
              <strong className="text-purple-400">{stats.slow}</strong>
            </div>
          </div>
        </div>

        {/* Tab & Range Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Main Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-semibold">
            {(
              [
                { id: 'multiplication', label: tMemory('tabMultiplication') },
                { id: 'squares', label: tMemory('tabSquares') },
                { id: 'cubes', label: tMemory('tabCubes') },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedFactKey(null);
                }}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Auxiliary Options: Hide Answers & Filter */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setHideAnswers(!hideAnswers)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                hideAnswers
                  ? 'bg-violet-950/40 text-violet-300 border-violet-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Test your recall by hiding answers in cells"
            >
              {hideAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{hideAnswers ? 'Answers Hidden' : 'Show Answers'}</span>
            </button>
          </div>
        </div>

        {/* Range Selector for Multiplication (1-10, 11-20, ..., 91-100) */}
        {activeTab === 'multiplication' && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-500 font-mono text-[11px] uppercase mr-1 shrink-0">Family Range:</span>
            {[1, 11, 21, 31, 41, 51, 61, 71, 81, 91].map((start) => {
              const end = start + 9;
              const isSelected = selectedTableRange === start;
              return (
                <button
                  key={start}
                  onClick={() => setSelectedTableRange(start)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 ${
                    isSelected
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {start}–{end}
                </button>
              );
            })}
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-500/30 border border-emerald-500" />
            <span>Mastered (Fast, Stable)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-amber-500/30 border border-amber-500" />
            <span>Review Due (Spaced Recall)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-rose-500/30 border border-rose-500" />
            <span>Weak / Skipped / Slips</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-purple-500/30 border border-purple-500" />
            <span>Slow / Hesitation (&gt;3.5s)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-sky-500/30 border border-sky-500" />
            <span>Learning In-Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-slate-900 border border-slate-800" />
            <span>Unseen</span>
          </div>
        </div>

        {/* Heatmap Grid Area */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
          {activeTab === 'multiplication' ? (
            /* Multiplication Matrix: Rows = Tables (10 tables), Cols = Multipliers (1-20) */
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center">
                <thead>
                  <tr>
                    <th className="p-1.5 text-xs font-mono text-slate-500 uppercase">Table</th>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((m) => (
                      <th key={m} className="p-1.5 text-xs font-mono text-slate-400 min-w-[52px]">
                        ×{m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }, (_, i) => selectedTableRange + i).map((table) => (
                    <tr key={table} className="border-t border-slate-800/60">
                      <td className="p-2 font-mono font-bold text-violet-300 text-sm">{table}</td>
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((mult) => {
                        const key = formatFactKey('multiplication', table, mult);
                        const ans = table * mult;
                        const isSelected = selectedFactKey === key;
                        const state = factMemoryMap[key];

                        return (
                          <td key={mult} className="p-1">
                            <button
                              onClick={() => setSelectedFactKey(key)}
                              className={`w-full py-2 px-1 rounded-xl border text-xs font-mono transition-all flex flex-col items-center justify-center ${getCellColor(
                                key
                              )} ${isSelected ? 'ring-2 ring-violet-400 scale-105 z-10' : ''}`}
                            >
                              <span className="font-bold">
                                {hideAnswers ? '?' : ans}
                              </span>
                              {state && state.totalAttempts > 0 && (
                                <span className="text-[9px] opacity-75">
                                  {state.stabilityScore}%
                                </span>
                              )}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Squares / Cubes 10x10 Grid */
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 font-mono">
              {candidateKeys.map((key) => {
                const parsed = parseFactKey(key);
                const n = parsed.operandA;
                const ans = getFactCorrectAnswer(key);
                const isSelected = selectedFactKey === key;
                const state = factMemoryMap[key];

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedFactKey(key)}
                    className={`p-2.5 rounded-2xl border text-xs transition-all flex flex-col items-center justify-center ${getCellColor(
                      key
                    )} ${isSelected ? 'ring-2 ring-violet-400 scale-105 z-10' : ''}`}
                  >
                    <span className="text-[11px] text-slate-400">
                      {n}
                      {activeTab === 'squares' ? '²' : '³'}
                    </span>
                    <span className="font-bold text-sm mt-0.5">
                      {hideAnswers ? '?' : ans.toLocaleString()}
                    </span>
                    {state && state.totalAttempts > 0 && (
                      <span className="text-[9px] mt-0.5 opacity-75">
                        {state.stabilityScore}%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Fact Inspector Bottom Drawer / Card */}
        <AnimatePresence>
          {inspectedState && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold font-mono text-white">
                        {inspectedState.parsed.type === 'multiplication'
                          ? `${inspectedState.parsed.operandA} × ${inspectedState.parsed.operandB} = ${inspectedState.state.correctAnswer}`
                          : inspectedState.parsed.type === 'square'
                          ? `${inspectedState.parsed.operandA}² = ${inspectedState.state.correctAnswer}`
                          : `${inspectedState.parsed.operandA}³ = ${inspectedState.state.correctAnswer.toLocaleString()}`}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {inspectedState.strategy.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {inspectedState.strategy.mentalScript}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFactKey(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">Stability</div>
                  <div className="text-lg font-bold text-emerald-400">
                    {inspectedState.state.stabilityScore}%
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">Forgetting Risk</div>
                  <div className="text-lg font-bold text-amber-400">
                    {Math.round(inspectedState.state.forgettingRisk * 100)}%
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">Accuracy</div>
                  <div className="text-lg font-bold text-sky-400">
                    {inspectedState.state.recentAccuracy}%
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">Median Latency</div>
                  <div className="text-lg font-bold text-violet-400">
                    {inspectedState.state.medianLatencyMs
                      ? `${(inspectedState.state.medianLatencyMs / 1000).toFixed(1)}s`
                      : '—'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">Skipped</div>
                  <div className="text-lg font-bold text-sky-400">
                    {inspectedState.state.skipCount || 0}x
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">Encoding</div>
                  <div className="text-xs font-bold text-white truncate pt-1">
                    {inspectedState.state.isDirectMemory ? 'Direct Recall' : 'Strategy Calc'}
                  </div>
                </div>
              </div>

              {/* Worked Strategy Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-violet-300 font-bold">
                  <span>Mental Accumulator Strategy:</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-normal">
                    {inspectedState.example.mentalTip}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {inspectedState.example.steps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1"
                    >
                      <div className="flex items-center justify-between font-mono font-semibold text-slate-300">
                        <span>{step.title}</span>
                        <span className="text-emerald-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                          {step.intermediateValue}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {step.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => practiceFact(inspectedState.state.factKey, 'learn')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-violet-400" />
                  <span>Learn with Strategy</span>
                </button>
                <button
                  onClick={() => practiceFact(inspectedState.state.factKey, 'recall')}
                  className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-lg shadow-violet-600/30 flex items-center gap-1.5 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>Drill Active Recall (Enter)</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
