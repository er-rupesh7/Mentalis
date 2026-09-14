'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Grid,
  Sparkles,
  Flame,
  Clock,
  RefreshCw,
  Trophy,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Play,
  Zap,
  Layers,
  Sliders,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { SEVEN_DAYS_MS } from '../core/mastery';
import { checkTableAutomaticity } from '../core/adaptive';
import { useTranslations } from 'next-intl';

type HeatmapMode = 'tables' | 'squares' | 'cubes';

export const TableHeatmap: React.FC = () => {
  const tHeatmap = useTranslations('heatmap');
  const tCommon = useTranslations('common');

  const {
    progressMap,
    factMemoryMap,
    setActiveTable,
    startSession,
    startSingleTableMastery,
    startCustomDrill,
    setViewMode,
    setIsCustomDrillModalOpen,
  } = useQuizStore();

  const [mode, setMode] = useState<HeatmapMode>('tables');
  const [selectedItem, setSelectedItem] = useState<number>(18);
  const [filterTier, setFilterTier] = useState<'all' | '1-12' | '13-20' | '21-50' | '51-100'>('all');

  // Tables array 2 to 100
  const tables = Array.from({ length: 99 }, (_, i) => i + 2);
  // Squares array 1 to 100
  const squares = Array.from({ length: 100 }, (_, i) => i + 1);
  // Cubes array 1 to 30
  const cubes = Array.from({ length: 30 }, (_, i) => i + 1);

  const filteredItems = mode === 'tables'
    ? tables.filter((t) => {
        if (filterTier === '1-12') return t <= 12;
        if (filterTier === '13-20') return t >= 13 && t <= 20;
        if (filterTier === '21-50') return t >= 21 && t <= 50;
        if (filterTier === '51-100') return t >= 51;
        return true;
      })
    : mode === 'squares'
    ? squares
    : cubes;

  // Fluency calculation for Tables
  const getTableData = useCallback(
    (tableNum: number) => {
      const auto = checkTableAutomaticity(tableNum, factMemoryMap);
      const key = `table_${tableNum}`;
      const item = progressMap[key];

      if (auto.isMastered) {
        return {
          status: 'mastered' as const,
          accuracy: auto.accuracy,
          attempts: auto.testedMultiplesCount * 3,
          medianSeconds: auto.medianLatencyMs / 1000,
          isAutomatic: true,
        };
      }

      if (item && item.totalAttempts > 0) {
        const accuracy = Math.round((item.correctCount / item.totalAttempts) * 100);
        const medianSec = item.medianResponseTimeMs > 0 ? item.medianResponseTimeMs / 1000 : 0;
        const isDecayed = Date.now() - item.lastPracticed > SEVEN_DAYS_MS;

        if (item.masteryStatus === 'mastered') {
          return {
            status: isDecayed ? ('needs_refresh' as const) : ('mastered' as const),
            accuracy,
            attempts: item.totalAttempts,
            medianSeconds: medianSec,
            isAutomatic: accuracy >= 95 && medianSec <= 2.2,
          };
        }
        if (accuracy >= 70) {
          return {
            status: 'learning' as const,
            accuracy,
            attempts: item.totalAttempts,
            medianSeconds: medianSec,
            isAutomatic: false,
          };
        }
        return {
          status: 'weak' as const,
          accuracy,
          attempts: item.totalAttempts,
          medianSeconds: medianSec,
          isAutomatic: false,
        };
      }

      return {
        status: 'untrained' as const,
        accuracy: 0,
        attempts: 0,
        medianSeconds: 0,
        isAutomatic: false,
      };
    },
    [factMemoryMap, progressMap]
  );

  // Fluency calculation for Squares
  const getSquareData = useCallback(
    (n: number) => {
      const fact = factMemoryMap[`square:${n}`];
      if (!fact || fact.totalAttempts === 0) {
        return {
          status: 'untrained' as const,
          accuracy: 0,
          attempts: 0,
          medianSeconds: 0,
          isAutomatic: false,
        };
      }

      const acc = Math.round((fact.correctAttempts / fact.totalAttempts) * 100);
      const medSec = fact.medianLatencyMs > 0 ? fact.medianLatencyMs / 1000 : 0;
      const isMastered = acc >= 90 && medSec > 0 && medSec <= 2.5 && fact.totalAttempts >= 3;

      return {
        status: isMastered ? ('mastered' as const) : acc >= 70 ? ('learning' as const) : ('weak' as const),
        accuracy: acc,
        attempts: fact.totalAttempts,
        medianSeconds: medSec,
        isAutomatic: isMastered,
      };
    },
    [factMemoryMap]
  );

  // Fluency calculation for Cubes
  const getCubeData = useCallback(
    (n: number) => {
      const fact = factMemoryMap[`cube:${n}`];
      if (!fact || fact.totalAttempts === 0) {
        return {
          status: 'untrained' as const,
          accuracy: 0,
          attempts: 0,
          medianSeconds: 0,
          isAutomatic: false,
        };
      }

      const acc = Math.round((fact.correctAttempts / fact.totalAttempts) * 100);
      const medSec = fact.medianLatencyMs > 0 ? fact.medianLatencyMs / 1000 : 0;
      const isMastered = acc >= 90 && medSec > 0 && medSec <= 3.0 && fact.totalAttempts >= 3;

      return {
        status: isMastered ? ('mastered' as const) : acc >= 70 ? ('learning' as const) : ('weak' as const),
        accuracy: acc,
        attempts: fact.totalAttempts,
        medianSeconds: medSec,
        isAutomatic: isMastered,
      };
    },
    [factMemoryMap]
  );

  const currentItemData = mode === 'tables'
    ? getTableData(selectedItem)
    : mode === 'squares'
    ? getSquareData(selectedItem)
    : getCubeData(selectedItem);

  const handlePracticeTable = (tableNum: number, masteryFocus: boolean = true) => {
    if (masteryFocus) {
      startSingleTableMastery(tableNum);
    } else {
      setActiveTable(tableNum);
      startSession({ mode: 'standard' });
    }
  };

  const handlePracticeSquare = (n: number) => {
    const min = Math.max(1, Math.floor((n - 1) / 25) * 25 + 1);
    const max = min + 24;
    startCustomDrill({
      id: `drill_square_${n}`,
      name: `Square ${n}² Drill (${min}–${max})`,
      selectedTables: [],
      selectedSquareRanges: [{ min, max }],
      selectedCubeRanges: [],
      selectedArithmeticCombos: [],
      selectedExamSkills: [],
      operatorPreference: 'mixed',
      timeLimitSeconds: 300,
      goalCount: 20,
      interleavePreviousLearned: true,
    });
  };

  const handlePracticeCube = (n: number) => {
    startCustomDrill({
      id: `drill_cube_${n}`,
      name: `Cube ${n}³ Drill (1–30)`,
      selectedTables: [],
      selectedSquareRanges: [],
      selectedCubeRanges: [{ min: 1, max: 30 }],
      selectedArithmeticCombos: [],
      selectedExamSkills: [],
      operatorPreference: 'mixed',
      timeLimitSeconds: 300,
      goalCount: 20,
      interleavePreviousLearned: true,
    });
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 pb-12">
      {/* Header */}
      <div className="w-full max-w-5xl mx-auto px-4 py-4 flex items-center justify-between border-b border-slate-800">
        <button
          onClick={() => setViewMode('dashboard')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{tCommon('back')}</span>
        </button>

        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-emerald-400" />
          <h1 className="text-sm font-bold text-white tracking-wide">
            {tHeatmap('title')}
          </h1>
        </div>

        <button
          onClick={() => setIsCustomDrillModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-sm shadow-violet-600/30 transition-all min-h-[36px]"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Custom Drill</span>
        </button>
      </div>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Main Mode Tabs: Tables, Squares, Cubes */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto scrollbar-none w-full sm:w-auto">
            <button
              onClick={() => {
                setMode('tables');
                setSelectedItem(18);
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] whitespace-nowrap ${
                mode === 'tables'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{tHeatmap('modeTables')}</span>
            </button>

            <button
              onClick={() => {
                setMode('squares');
                setSelectedItem(25);
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] whitespace-nowrap ${
                mode === 'squares'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{tHeatmap('modeSquares')}</span>
            </button>

            <button
              onClick={() => {
                setMode('cubes');
                setSelectedItem(12);
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] whitespace-nowrap ${
                mode === 'cubes'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{tHeatmap('modeCubes')}</span>
            </button>
          </div>

          {/* Target Speed Badge */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Automaticity Threshold:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold border border-emerald-500/30">
              ≥95% Accuracy • ≤2.2s Latency
            </span>
          </div>
        </div>

        {/* Tier Sub-Filter (Tables only) */}
        {mode === 'tables' && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'all', label: 'All Tables (2–100)' },
              { id: '1-12', label: 'Tables 2–12 (Anchors)' },
              { id: '13-20', label: 'Tables 13–20 (Teen Focus)' },
              { id: '21-50', label: 'Tables 21–50 (Decades)' },
              { id: '51-100', label: 'Tables 51–100 (Centurions)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterTier(tab.id as typeof filterTier)}
                className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                  filterTier === tab.id
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            <span>Mastered (≥95% Speed Recall)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500" />
            <span>Learning / Developing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-rose-500" />
            <span>Needs Practice (&lt;70%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
            <span>Untrained</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-11 gap-2">
            {filteredItems.map((n) => {
              const data = mode === 'tables'
                ? getTableData(n)
                : mode === 'squares'
                ? getSquareData(n)
                : getCubeData(n);

              const isSelected = selectedItem === n;

              let colorClass =
                'bg-slate-800/80 text-slate-400 hover:bg-slate-700 border-slate-700/60';
              if (data.status === 'mastered') {
                colorClass =
                  'bg-emerald-600 text-white font-bold border-emerald-400 shadow-sm shadow-emerald-500/30';
              } else if (data.status === 'needs_refresh') {
                colorClass =
                  'bg-amber-600/90 text-white font-bold border-amber-400 shadow-sm shadow-amber-500/30 animate-pulse';
              } else if (data.status === 'learning') {
                colorClass = 'bg-amber-500/30 text-amber-200 border-amber-500/50';
              } else if (data.status === 'weak') {
                colorClass = 'bg-rose-900/40 text-rose-300 border-rose-800';
              }

              return (
                <button
                  key={n}
                  onClick={() => setSelectedItem(n)}
                  className={`h-12 sm:h-13 min-h-[48px] rounded-xl text-xs font-mono flex flex-col items-center justify-center transition-all border relative focus-visible:ring-2 focus-visible:ring-violet-400 ${colorClass} ${
                    isSelected ? 'ring-2 ring-violet-400 scale-105 z-10 shadow-lg' : ''
                  }`}
                >
                  <span className="font-bold">
                    {mode === 'tables' ? `×${n}` : mode === 'squares' ? `${n}²` : `${n}³`}
                  </span>
                  {mode === 'squares' && n <= 30 && (
                    <span className="text-[10px] text-slate-400 font-normal">
                      {n * n}
                    </span>
                  )}
                  {mode === 'cubes' && n <= 15 && (
                    <span className="text-[10px] text-slate-400 font-normal">
                      {n * n * n}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspector Card */}
        <motion.div
          key={`${mode}_${selectedItem}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {mode === 'tables'
                    ? `Table ×${selectedItem} Automaticity Card`
                    : mode === 'squares'
                    ? `Square ${selectedItem}² = ${selectedItem * selectedItem}`
                    : `Cube ${selectedItem}³ = ${selectedItem * selectedItem * selectedItem}`}
                </h3>
                <p className="text-xs text-slate-400">
                  {mode === 'tables'
                    ? selectedItem >= 13 && selectedItem <= 19
                      ? 'High-Frequency RRB Teen Table (Proximity & Split-Add)'
                      : 'Full 1 to 12 Multiples Automaticity Band'
                    : mode === 'squares'
                    ? selectedItem <= 25
                      ? 'Foundational Anchor Square'
                      : selectedItem <= 75
                      ? 'Base-50 Mental Formula: (50 ± d)²'
                      : 'Base-100 Mental Formula: (100 - d)²'
                    : 'Anchor Cube for Banking Number Series & Simplification'}
                </p>
              </div>
            </div>

            {/* 1-Click Launch Buttons */}
            <div className="flex items-center gap-2">
              {mode === 'tables' && (
                <button
                  onClick={() => handlePracticeTable(selectedItem, true)}
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 font-bold text-xs text-white transition-all shadow-md shadow-violet-600/30 flex items-center gap-1.5"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-300" />
                  <span>Master Table ×{selectedItem}</span>
                </button>
              )}

              {mode === 'squares' && (
                <button
                  onClick={() => handlePracticeSquare(selectedItem)}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 font-bold text-xs text-white transition-all shadow-md shadow-amber-600/30 flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Practice Square {selectedItem}²</span>
                </button>
              )}

              {mode === 'cubes' && (
                <button
                  onClick={() => handlePracticeCube(selectedItem)}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 font-bold text-xs text-white transition-all shadow-md shadow-cyan-600/30 flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Practice Cube {selectedItem}³</span>
                </button>
              )}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block mb-1">Fluency Status</span>
              <span
                className={`font-bold capitalize ${
                  currentItemData.status === 'mastered'
                    ? 'text-emerald-400'
                    : currentItemData.status === 'learning'
                    ? 'text-amber-300'
                    : currentItemData.status === 'weak'
                    ? 'text-rose-400'
                    : 'text-slate-500'
                }`}
              >
                {currentItemData.status}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block mb-1">Accuracy</span>
              <span className="text-white font-bold">{currentItemData.accuracy}%</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block mb-1">Total Practiced</span>
              <span className="text-white font-bold">{currentItemData.attempts}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block mb-1">Median Latency</span>
              <span className="text-violet-400 font-bold">
                {currentItemData.medianSeconds > 0 ? `${currentItemData.medianSeconds.toFixed(2)}s` : '—'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
