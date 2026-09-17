'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Copy,
  Check,
  Play,
  Grid,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Filter,
  Calculator,
  Hash,
  Layers,
  BookOpen,
  ArrowUpDown,
  Eye,
  EyeOff,
  Target,
  RotateCcw,
  Brain,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { TableChartTab } from '../core/types';
import { FactKey, formatFactKey } from '../core/factModel';
import { getBestStrategyForFact } from '../core/strategyCatalog';
import { useTranslations } from 'next-intl';
import {
  getMultiplicationTable,
  getSquaresTable,
  getCubesTable,
  getSquareRootTable,
  getCubeRootTable,
  MultipleItem,
  SquareItem,
  CubeItem,
  SquareRootItem,
  CubeRootItem,
} from '../core/tableChartData';

export const TableChart: React.FC = () => {
  const tChart = useTranslations('tableChart');
  const tCommon = useTranslations('common');

  const {
    activeTableChartTab,
    setActiveTableChartTab,
    setViewMode,
    setActiveTable,
    setActiveSquareTrack,
    startSession,
    factMemoryMap,
    practiceFact,
    startSingleTableMastery,
  } = useQuizStore();

  // Local state for tabs & filters
  const [selectedMulTable, setSelectedMulTable] = useState<number>(7);
  const [mulRange, setMulRange] = useState<'1-20' | '21-40' | '41-60' | '61-80' | '81-100'>('1-20');
  const [mulViewMode, setMulViewMode] = useState<'single' | 'grid'>('single');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Active Learning & Self-Test States
  const [hideAnswers, setHideAnswers] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [showTableStrategy, setShowTableStrategy] = useState<boolean>(false);

  // Range filters for other tables
  const [generalRange, setGeneralRange] = useState<'all' | '1-25' | '26-50' | '51-75' | '76-100'>('all');
  const [perfectOnlyFilter, setPerfectOnlyFilter] = useState<boolean>(false);
  const [patternFilter, setPatternFilter] = useState<'all' | 'ending5' | 'decade'>('all');

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Practice table in Table Mastery Workout
  const handlePracticeTable = (tableNum: number) => {
    startSingleTableMastery(tableNum);
  };

  const handlePracticeSquares = () => {
    setActiveSquareTrack('ending_5');
    startSession({ mode: 'standard' });
    setViewMode('practice');
  };

  const handlePracticeCubes = () => {
    setActiveSquareTrack('cubes_anchor');
    startSession({ mode: 'standard' });
    setViewMode('practice');
  };

  // --- Data Calculations ---
  const mulTableMultiples = useMemo(() => {
    return getMultiplicationTable(selectedMulTable, 20);
  }, [selectedMulTable]);

  // Range numbers for multiplication
  const mulRangeNumbers = useMemo(() => {
    const [start, end] = mulRange.split('-').map(Number);
    const nums: number[] = [];
    for (let i = start; i <= end; i++) nums.push(i);
    return nums;
  }, [mulRange]);

  const allSquares = useMemo(() => getSquaresTable(100), []);
  const allCubes = useMemo(() => getCubesTable(100), []);
  const allSquareRoots = useMemo(() => getSquareRootTable(100, 5), []);
  const allCubeRoots = useMemo(() => getCubeRootTable(100, 5), []);

  // Filtered Squares
  const filteredSquares = useMemo(() => {
    return allSquares.filter((item) => {
      if (searchQuery.trim()) {
        const q = searchQuery.trim();
        const matchesN = item.n.toString() === q || item.n.toString().includes(q);
        const matchesSq = item.square.toString().includes(q);
        if (!matchesN && !matchesSq) return false;
      }
      if (generalRange !== 'all') {
        const [start, end] = generalRange.split('-').map(Number);
        if (item.n < start || item.n > end) return false;
      }
      if (patternFilter === 'ending5' && !item.isEndingIn5) return false;
      if (patternFilter === 'decade' && !item.isDecade) return false;
      return true;
    });
  }, [allSquares, searchQuery, generalRange, patternFilter]);

  // Filtered Cubes
  const filteredCubes = useMemo(() => {
    return allCubes.filter((item) => {
      if (searchQuery.trim()) {
        const q = searchQuery.trim();
        const matchesN = item.n.toString() === q || item.n.toString().includes(q);
        const matchesCube = item.cube.toString().includes(q);
        if (!matchesN && !matchesCube) return false;
      }
      if (generalRange !== 'all') {
        const [start, end] = generalRange.split('-').map(Number);
        if (item.n < start || item.n > end) return false;
      }
      return true;
    });
  }, [allCubes, searchQuery, generalRange]);

  // Filtered Square Roots
  const filteredSquareRoots = useMemo(() => {
    return allSquareRoots.filter((item) => {
      if (searchQuery.trim()) {
        const q = searchQuery.trim();
        const matchesN = item.n.toString() === q || item.n.toString().includes(q);
        const matchesRoot = item.formattedRoot.includes(q);
        if (!matchesN && !matchesRoot) return false;
      }
      if (perfectOnlyFilter && !item.isPerfect) return false;
      if (generalRange !== 'all') {
        const [start, end] = generalRange.split('-').map(Number);
        if (item.n < start || item.n > end) return false;
      }
      return true;
    });
  }, [allSquareRoots, searchQuery, perfectOnlyFilter, generalRange]);

  // Filtered Cube Roots
  const filteredCubeRoots = useMemo(() => {
    return allCubeRoots.filter((item) => {
      if (searchQuery.trim()) {
        const q = searchQuery.trim();
        const matchesN = item.n.toString() === q || item.n.toString().includes(q);
        const matchesRoot = item.formattedRoot.includes(q);
        if (!matchesN && !matchesRoot) return false;
      }
      if (perfectOnlyFilter && !item.isPerfect) return false;
      if (generalRange !== 'all') {
        const [start, end] = generalRange.split('-').map(Number);
        if (item.n < start || item.n > end) return false;
      }
      return true;
    });
  }, [allCubeRoots, searchQuery, perfectOnlyFilter, generalRange]);

  // Tab definitions
  const tabs: { id: TableChartTab; label: string; sub: string }[] = [
    { id: 'mul', label: tChart('tabMul'), sub: 'Up to 100 (× 20 multiples)' },
    { id: 'squares', label: tChart('tabSquares'), sub: '1² to 100²' },
    { id: 'cubes', label: tChart('tabCubes'), sub: '1³ to 100³' },
    { id: 'sqrt', label: tChart('tabSqrt'), sub: '√1 to √100' },
    { id: 'cbrt', label: tChart('tabCbrt'), sub: '∛1 to ∛100' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-950 text-slate-100 min-h-screen pb-nav sm:pb-8">
      {/* Top Header */}
      <div className="w-full max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode('dashboard')}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Return to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                {tChart('badge')}
              </span>
              <span className="text-xs text-slate-500">• 1 to 100</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
              <span>{tChart('title')}</span>
              <Sparkles className="w-5 h-5 text-violet-400" />
            </h1>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={tChart('searchPlaceholder')}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Section Navigation Tabs (1. Mul Table, 2. Squares Table, etc.) */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-x-auto scrollbar-none pb-2">
          {tabs.map((tab) => {
            const isActive = activeTableChartTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTableChartTab(tab.id);
                  setSearchQuery('');
                }}
                className={`flex-shrink-0 w-44 sm:w-auto flex flex-col text-left px-3.5 py-2.5 rounded-xl transition-all relative min-h-[52px] ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">{tab.label}</span>
                <span
                  className={`text-[10px] truncate ${
                    isActive ? 'text-violet-100 font-medium' : 'text-slate-500'
                  }`}
                >
                  {tab.sub}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-xl border border-violet-400/30 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: MULTIPLICATION TABLE UP TO 100 (MULTIPLES UP TO 20) */}
        {activeTableChartTab === 'mul' && (
          <div className="space-y-6">
            {/* Multiplication Controls Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Range Selector */}
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-violet-400" />
                    Range:
                  </span>
                  {(['1-20', '21-40', '41-60', '61-80', '81-100'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setMulRange(r);
                        const [start] = r.split('-').map(Number);
                        setSelectedMulTable(start);
                      }}
                      className={`px-2.5 py-1 rounded-lg font-mono text-xs transition-all ${
                        mulRange === r
                          ? 'bg-violet-600 text-white font-bold shadow-sm'
                          : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {/* View Mode & Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      setHideAnswers(!hideAnswers);
                      setRevealedIds({});
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                      hideAnswers
                        ? 'bg-violet-950/60 text-violet-300 border-violet-500/50 shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                    title="Hide answers for active recall practice"
                  >
                    {hideAnswers ? <EyeOff className="w-3.5 h-3.5 text-violet-400" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{hideAnswers ? 'Answers Hidden' : 'Self-Test Mode'}</span>
                  </button>

                  <button
                    onClick={() => setMulViewMode(mulViewMode === 'single' ? 'grid' : 'single')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    <Grid className="w-3.5 h-3.5 text-violet-400" />
                    <span>{mulViewMode === 'single' ? 'All 20 Grid' : 'Card View'}</span>
                  </button>

                  <button
                    onClick={() => handlePracticeTable(selectedMulTable)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Drill Table {selectedMulTable}</span>
                  </button>
                </div>
              </div>

              {/* Number Selector Chips for rapid jumping */}
              <div>
                <div className="text-[11px] text-slate-400 mb-1.5 font-medium flex items-center justify-between">
                  <span>Select Table Number (1 to 100):</span>
                  <span className="text-violet-400 font-mono font-semibold">
                    Current: Table of {selectedMulTable}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                  {mulRangeNumbers.map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedMulTable(num)}
                      className={`w-9 h-8 rounded-lg font-mono text-xs font-bold transition-all ${
                        selectedMulTable === num
                          ? 'bg-violet-600 text-white scale-105 shadow-md shadow-violet-600/30 ring-2 ring-violet-400'
                          : 'bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Single Table Focused View */}
            {mulViewMode === 'single' ? (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                {/* Focused Table Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <button
                      disabled={selectedMulTable <= 1}
                      onClick={() => setSelectedMulTable((prev) => Math.max(1, prev - 1))}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-950 text-slate-300 border border-slate-800 transition-colors"
                      title="Previous Table"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div>
                      <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                        <span>Multiplication Table of {selectedMulTable}</span>
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          1 to 20 Multiples
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Complete reference from {selectedMulTable} × 1 = {selectedMulTable} up to{' '}
                        {selectedMulTable} × 20 = {selectedMulTable * 20}
                      </p>
                    </div>

                    <button
                      disabled={selectedMulTable >= 100}
                      onClick={() => setSelectedMulTable((prev) => Math.min(100, prev + 1))}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-950 text-slate-300 border border-slate-800 transition-colors"
                      title="Next Table"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowTableStrategy(!showTableStrategy)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                        showTableStrategy
                          ? 'bg-violet-600 text-white border-violet-500'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Strategy</span>
                    </button>

                    <button
                      onClick={() => {
                        const text = mulTableMultiples
                          .map((m) => `${selectedMulTable} × ${m.multiplier} = ${m.result}`)
                          .join('\n');
                        handleCopy(text, `table_${selectedMulTable}`);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                    >
                      {copiedId === `table_${selectedMulTable}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Table</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handlePracticeTable(selectedMulTable)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Drill Table {selectedMulTable}</span>
                    </button>
                  </div>
                </div>

                {/* Collapsible Strategy Guide for Current Table */}
                <AnimatePresence>
                  {showTableStrategy && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-2xl bg-violet-950/40 border border-violet-500/30 space-y-2 overflow-hidden text-xs"
                    >
                      {(() => {
                        const sampleKey = formatFactKey('multiplication', selectedMulTable, 6);
                        const strat = getBestStrategyForFact(sampleKey);
                        const ex = strat.generateWorkedExample(selectedMulTable, 6);
                        return (
                          <div>
                            <div className="flex items-center justify-between font-bold text-violet-200">
                              <span className="text-sm">Strategy: {strat.name}</span>
                              <span className="font-mono text-emerald-400">e.g. {selectedMulTable} × 6 = {selectedMulTable * 6}</span>
                            </div>
                            <p className="text-slate-300 mt-1">{strat.mentalScript}</p>
                            <p className="text-amber-300/90 font-mono mt-1">💡 {ex.mentalTip}</p>
                          </div>
                        );
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Multiples Grid: 2 Columns (1-10 on Left, 11-20 on Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Column 1: 1 to 10 */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-400 px-2 flex items-center justify-between">
                      <span>Multiples 1 to 10</span>
                      <span className="text-slate-500 font-mono">Part I</span>
                    </div>
                    <div className="space-y-1.5">
                      {mulTableMultiples.slice(0, 10).map((item) => {
                        const isDecade = item.multiplier === 10;
                        const factKey = formatFactKey('multiplication', selectedMulTable, item.multiplier);
                        const isRevealed = !hideAnswers || revealedIds[factKey];
                        const factState = factMemoryMap[factKey];

                        return (
                          <div
                            key={item.multiplier}
                            className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                              isDecade
                                ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                                : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono text-sm">
                              <span className="text-slate-400 w-7 text-right font-medium">
                                {selectedMulTable}
                              </span>
                              <span className="text-slate-500">×</span>
                              <span className="text-violet-400 font-bold w-6 text-center">
                                {item.multiplier}
                              </span>
                              <span className="text-slate-500">=</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {hideAnswers && !isRevealed ? (
                                <button
                                  onClick={() =>
                                    setRevealedIds((prev) => ({ ...prev, [factKey]: true }))
                                  }
                                  className="font-mono text-xs font-bold px-3 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-violet-300 border border-slate-700"
                                >
                                  ?
                                </button>
                              ) : (
                                <span className="font-mono text-base font-extrabold tracking-tight text-white">
                                  {item.result.toLocaleString()}
                                </span>
                              )}

                              {isDecade && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 uppercase">
                                  ×10
                                </span>
                              )}

                              {factState && factState.masteryState === 'mastered' && (
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" title="Mastered Fact" />
                              )}
                              {factState && factState.consecutiveErrors > 0 && (
                                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" title="Needs Repair" />
                              )}

                              <button
                                onClick={() => practiceFact(factKey, 'recall')}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-violet-300 transition-colors"
                                title="Drill this fact"
                              >
                                <Play className="w-3 h-3 fill-current" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: 11 to 20 */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-400 px-2 flex items-center justify-between">
                      <span>Multiples 11 to 20</span>
                      <span className="text-slate-500 font-mono">Part II</span>
                    </div>
                    <div className="space-y-1.5">
                      {mulTableMultiples.slice(10, 20).map((item) => {
                        const isTwenty = item.multiplier === 20;
                        const factKey = formatFactKey('multiplication', selectedMulTable, item.multiplier);
                        const isRevealed = !hideAnswers || revealedIds[factKey];
                        const factState = factMemoryMap[factKey];

                        return (
                          <div
                            key={item.multiplier}
                            className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                              isTwenty
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                                : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono text-sm">
                              <span className="text-slate-400 w-7 text-right font-medium">
                                {selectedMulTable}
                              </span>
                              <span className="text-slate-500">×</span>
                              <span className="text-indigo-400 font-bold w-6 text-center">
                                {item.multiplier}
                              </span>
                              <span className="text-slate-500">=</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {hideAnswers && !isRevealed ? (
                                <button
                                  onClick={() =>
                                    setRevealedIds((prev) => ({ ...prev, [factKey]: true }))
                                  }
                                  className="font-mono text-xs font-bold px-3 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-violet-300 border border-slate-700"
                                >
                                  ?
                                </button>
                              ) : (
                                <span className="font-mono text-base font-extrabold tracking-tight text-white">
                                  {item.result.toLocaleString()}
                                </span>
                              )}

                              {isTwenty && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 uppercase">
                                  ×20
                                </span>
                              )}

                              {factState && factState.masteryState === 'mastered' && (
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" title="Mastered Fact" />
                              )}
                              {factState && factState.consecutiveErrors > 0 && (
                                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" title="Needs Repair" />
                              )}

                              <button
                                onClick={() => practiceFact(factKey, 'recall')}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-violet-300 transition-colors"
                                title="Drill this fact"
                              >
                                <Play className="w-3 h-3 fill-current" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* All 20 Grid View for range */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mulRangeNumbers.map((tblNum) => {
                  const items = getMultiplicationTable(tblNum, 20);
                  return (
                    <div
                      key={tblNum}
                      className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col space-y-3 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="font-extrabold text-sm text-white">Table of {tblNum}</span>
                        <button
                          onClick={() => handlePracticeTable(tblNum)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-violet-600 text-slate-400 hover:text-white transition-colors"
                          title={`Practice Table ${tblNum}`}
                        >
                          <Play className="w-3 h-3 fill-current" />
                        </button>
                      </div>

                      <div className="space-y-1 font-mono text-xs">
                        {items.map((m) => (
                          <div
                            key={m.multiplier}
                            className="flex items-center justify-between py-0.5 px-1.5 rounded hover:bg-slate-800/60"
                          >
                            <span className="text-slate-400">
                              {tblNum} × {m.multiplier}
                            </span>
                            <span className="font-bold text-white">{m.result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SQUARES TABLE (1² TO 100²) */}
        {activeTableChartTab === 'squares' && (
          <div className="space-y-6">
            {/* Filter & Actions Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Range:</span>
                {(['all', '1-25', '26-50', '51-75', '76-100'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setGeneralRange(r)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      generalRange === r
                        ? 'bg-violet-600 text-white font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {r === 'all' ? 'All 1-100' : r}
                  </button>
                ))}

                <span className="text-slate-600 mx-1">|</span>

                <span className="text-xs text-slate-400 font-medium">Patterns:</span>
                <button
                  onClick={() =>
                    setPatternFilter(patternFilter === 'ending5' ? 'all' : 'ending5')
                  }
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                    patternFilter === 'ending5'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Ending in 5
                </button>
                <button
                  onClick={() =>
                    setPatternFilter(patternFilter === 'decade' ? 'all' : 'decade')
                  }
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                    patternFilter === 'decade'
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Decades (10, 20...)
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setHideAnswers(!hideAnswers);
                    setRevealedIds({});
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                    hideAnswers
                      ? 'bg-violet-950/60 text-violet-300 border-violet-500/50'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800'
                  }`}
                  title="Hide squares for self-test active recall"
                >
                  {hideAnswers ? <EyeOff className="w-3.5 h-3.5 text-violet-400" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{hideAnswers ? 'Hidden' : 'Self-Test'}</span>
                </button>

                <span className="text-xs text-slate-400 font-mono">
                  Showing {filteredSquares.length} of 100
                </span>
                <button
                  onClick={handlePracticeSquares}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Practice Squares Drill</span>
                </button>
              </div>
            </div>

            {/* Squares Grid List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredSquares.map((item) => {
                const factKey = formatFactKey('square', item.n);
                const isRevealed = !hideAnswers || revealedIds[factKey];
                const factState = factMemoryMap[factKey];

                return (
                  <div
                    key={item.n}
                    className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                      item.isEndingIn5
                        ? 'bg-amber-500/5 border-amber-500/30'
                        : item.isDecade
                        ? 'bg-indigo-500/5 border-indigo-500/30'
                        : 'bg-slate-900 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="w-7 h-7 rounded-lg bg-slate-950 flex items-center justify-center font-bold text-xs text-slate-300 border border-slate-800">
                          {item.n}
                        </span>
                        <span className="text-slate-500 font-sans text-xs">² =</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {factState && factState.masteryState === 'mastered' && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400" title="Mastered Fact" />
                        )}
                        <button
                          onClick={() => practiceFact(factKey, 'recall')}
                          className="p-1 rounded-md bg-slate-800 hover:bg-violet-600 text-slate-400 hover:text-white transition-colors"
                          title="Drill this square"
                        >
                          <Play className="w-3 h-3 fill-current" />
                        </button>
                        <button
                          onClick={() => handleCopy(`${item.n}² = ${item.square}`, `sq_${item.n}`)}
                          className="text-slate-500 hover:text-slate-300 p-1"
                          title="Copy"
                        >
                          {copiedId === `sq_${item.n}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between mt-1">
                      {hideAnswers && !isRevealed ? (
                        <button
                          onClick={() =>
                            setRevealedIds((prev) => ({ ...prev, [factKey]: true }))
                          }
                          className="font-mono text-sm font-bold px-3 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-violet-300 border border-slate-700"
                        >
                          Reveal ?
                        </button>
                      ) : (
                        <span className="text-xl font-black font-mono tracking-tight text-white">
                          {item.square.toLocaleString()}
                        </span>
                      )}

                      {item.isEndingIn5 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300">
                          Ends in 25
                        </span>
                      )}
                      {item.isDecade && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-400/10 text-indigo-300">
                          Decade
                        </span>
                      )}
                    </div>

                    {item.mentalTip && (
                      <div className="mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
                        💡 {item.mentalTip}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: CUBE TABLE (1³ TO 100³) */}
        {activeTableChartTab === 'cubes' && (
          <div className="space-y-6">
            {/* Filter & Actions Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Range:</span>
                {(['all', '1-25', '26-50', '51-75', '76-100'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setGeneralRange(r)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      generalRange === r
                        ? 'bg-violet-600 text-white font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {r === 'all' ? 'All 1-100' : r}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setHideAnswers(!hideAnswers);
                    setRevealedIds({});
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                    hideAnswers
                      ? 'bg-violet-950/60 text-violet-300 border-violet-500/50'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800'
                  }`}
                  title="Hide cubes for self-test active recall"
                >
                  {hideAnswers ? <EyeOff className="w-3.5 h-3.5 text-violet-400" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{hideAnswers ? 'Hidden' : 'Self-Test'}</span>
                </button>

                <span className="text-xs text-slate-400 font-mono">
                  Showing {filteredCubes.length} of 100
                </span>
                <button
                  onClick={handlePracticeCubes}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Practice Cubes Drill</span>
                </button>
              </div>
            </div>

            {/* Cubes Grid List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredCubes.map((item) => {
                const factKey = formatFactKey('cube', item.n);
                const isRevealed = !hideAnswers || revealedIds[factKey];
                const factState = factMemoryMap[factKey];

                return (
                  <div
                    key={item.n}
                    className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="w-7 h-7 rounded-lg bg-slate-950 flex items-center justify-center font-bold text-xs text-slate-300 border border-slate-800">
                          {item.n}
                        </span>
                        <span className="text-slate-500 font-sans text-xs">³ =</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {factState && factState.masteryState === 'mastered' && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400" title="Mastered Fact" />
                        )}
                        <button
                          onClick={() => practiceFact(factKey, 'recall')}
                          className="p-1 rounded-md bg-slate-800 hover:bg-violet-600 text-slate-400 hover:text-white transition-colors"
                          title="Drill this cube"
                        >
                          <Play className="w-3 h-3 fill-current" />
                        </button>
                        <button
                          onClick={() => handleCopy(`${item.n}³ = ${item.cube}`, `cb_${item.n}`)}
                          className="text-slate-500 hover:text-slate-300 p-1"
                          title="Copy"
                        >
                          {copiedId === `cb_${item.n}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between mt-1">
                      {hideAnswers && !isRevealed ? (
                        <button
                          onClick={() =>
                            setRevealedIds((prev) => ({ ...prev, [factKey]: true }))
                          }
                          className="font-mono text-sm font-bold px-3 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-violet-300 border border-slate-700"
                        >
                          Reveal ?
                        </button>
                      ) : (
                        <span className="text-lg sm:text-xl font-black font-mono tracking-tight text-white">
                          {item.formattedCube}
                        </span>
                      )}
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        End: {item.unitDigit}
                      </span>
                    </div>

                    {item.lastDigitPatternTip && (
                      <div className="mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
                        💡 {item.lastDigitPatternTip}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: SQUARE ROOT TABLE (√1 TO √100) */}
        {activeTableChartTab === 'sqrt' && (
          <div className="space-y-6">
            {/* Filter & Actions Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Range:</span>
                {(['all', '1-25', '26-50', '51-75', '76-100'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setGeneralRange(r)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      generalRange === r
                        ? 'bg-violet-600 text-white font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {r === 'all' ? 'All 1-100' : r}
                  </button>
                ))}

                <span className="text-slate-600 mx-1">|</span>

                <button
                  onClick={() => setPerfectOnlyFilter(!perfectOnlyFilter)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                    perfectOnlyFilter
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Perfect Squares Only (10)
                </button>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Showing {filteredSquareRoots.length} of 100
              </div>
            </div>

            {/* Square Root Grid List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredSquareRoots.map((item) => (
                <div
                  key={item.n}
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    item.isPerfect
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-slate-900 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 font-mono text-sm">
                      <span className="text-violet-400 font-bold">√</span>
                      <span className="w-7 h-7 rounded-lg bg-slate-950 flex items-center justify-center font-bold text-xs text-white border border-slate-800">
                        {item.n}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(`√${item.n} = ${item.formattedRoot}`, `sqrt_${item.n}`)}
                      className="text-slate-500 hover:text-slate-300 p-1"
                      title="Copy"
                    >
                      {copiedId === `sqrt_${item.n}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-baseline justify-between mt-1">
                    <span
                      className={`text-xl font-black font-mono tracking-tight ${
                        item.isPerfect ? 'text-emerald-400' : 'text-white'
                      }`}
                    >
                      {item.formattedRoot}
                    </span>

                    {item.isPerfect ? (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300">
                        Integer Exact
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">
                        approx.
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CUBE ROOT TABLE (∛1 TO ∛100) */}
        {activeTableChartTab === 'cbrt' && (
          <div className="space-y-6">
            {/* Filter & Actions Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Range:</span>
                {(['all', '1-25', '26-50', '51-75', '76-100'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setGeneralRange(r)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      generalRange === r
                        ? 'bg-violet-600 text-white font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {r === 'all' ? 'All 1-100' : r}
                  </button>
                ))}

                <span className="text-slate-600 mx-1">|</span>

                <button
                  onClick={() => setPerfectOnlyFilter(!perfectOnlyFilter)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                    perfectOnlyFilter
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Perfect Cubes Only (4)
                </button>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Showing {filteredCubeRoots.length} of 100
              </div>
            </div>

            {/* Cube Root Grid List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredCubeRoots.map((item) => (
                <div
                  key={item.n}
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    item.isPerfect
                      ? 'bg-cyan-500/10 border-cyan-500/30'
                      : 'bg-slate-900 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 font-mono text-sm">
                      <span className="text-cyan-400 font-bold">∛</span>
                      <span className="w-7 h-7 rounded-lg bg-slate-950 flex items-center justify-center font-bold text-xs text-white border border-slate-800">
                        {item.n}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(`∛${item.n} = ${item.formattedRoot}`, `cbrt_${item.n}`)}
                      className="text-slate-500 hover:text-slate-300 p-1"
                      title="Copy"
                    >
                      {copiedId === `cbrt_${item.n}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-baseline justify-between mt-1">
                    <span
                      className={`text-xl font-black font-mono tracking-tight ${
                        item.isPerfect ? 'text-cyan-400' : 'text-white'
                      }`}
                    >
                      {item.formattedRoot}
                    </span>

                    {item.isPerfect ? (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300">
                        Integer Exact
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">
                        approx.
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
