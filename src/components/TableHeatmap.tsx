'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { SEVEN_DAYS_MS } from '../core/mastery';

export const TableHeatmap: React.FC = () => {
  const { progressMap, setActiveTable, setViewMode } = useQuizStore();
  const [selectedCell, setSelectedCell] = useState<number | null>(7);
  const [filterTier, setFilterTier] = useState<'all' | '1-12' | '13-20' | '21-50' | '51-100'>('all');

  // Build 2 to 100 array
  const tables = Array.from({ length: 99 }, (_, i) => i + 2);

  const filteredTables = tables.filter((t) => {
    if (filterTier === '1-12') return t <= 12;
    if (filterTier === '13-20') return t >= 13 && t <= 20;
    if (filterTier === '21-50') return t >= 21 && t <= 50;
    if (filterTier === '51-100') return t >= 51;
    return true;
  });

  const getCellData = (tableNum: number) => {
    const key = `table_${tableNum}`;
    const item = progressMap[key];
    if (!item || item.totalAttempts === 0) {
      return { status: 'untrained' as const, accuracy: 0, attempts: 0, score: 0, isDecayed: false };
    }

    const accuracy = Math.round((item.correctCount / item.totalAttempts) * 100);
    const isDecayed = Date.now() - item.lastPracticed > SEVEN_DAYS_MS;

    if (item.masteryStatus === 'mastered') {
      if (isDecayed) {
        return { status: 'needs_refresh' as const, accuracy, attempts: item.totalAttempts, score: item.masteryScore, isDecayed: true };
      }
      return { status: 'mastered' as const, accuracy, attempts: item.totalAttempts, score: 100, isDecayed: false };
    }

    if (item.masteryStatus === 'learning' || accuracy >= 70) {
      return { status: 'learning' as const, accuracy, attempts: item.totalAttempts, score: item.masteryScore, isDecayed: false };
    }

    return { status: 'weak' as const, accuracy, attempts: item.totalAttempts, score: item.masteryScore, isDecayed: false };
  };

  const selectedData = selectedCell ? getCellData(selectedCell) : null;

  const handlePracticeTable = (tableNum: number) => {
    setActiveTable(tableNum);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto px-4 py-4 flex items-center justify-between border-b border-slate-800">
        <button
          onClick={() => setViewMode('dashboard')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </button>

        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-emerald-400" />
          <h1 className="text-sm font-bold text-white tracking-wide">
            1 to 100 Multiplication Matrix Heatmap
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="hidden sm:inline text-slate-400">Mastery Target:</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-bold border border-emerald-500/30">
            ≥95%
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Tier Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'all', label: 'All Tables (2–100)' },
            { id: '1-12', label: 'Tables 2–12 (Anchors)' },
            { id: '13-20', label: 'Tables 13–20 (Split-Add)' },
            { id: '21-50', label: 'Tables 21–50 (Decades)' },
            { id: '51-100', label: 'Tables 51–100 (Centurions)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterTier(tab.id as typeof filterTier)}
              className={`px-3.5 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                filterTier === tab.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            <span>Mastered (≥95% &lt;Target)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500" />
            <span>Needs Refresh / Learning (Decay &gt; 7 days)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-rose-500" />
            <span>Weak (&lt;70%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
            <span>Untrained</span>
          </div>
        </div>

        {/* 100 Grid Matrix */}
        <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-11 gap-2">
            {filteredTables.map((t) => {
              const { status } = getCellData(t);
              const isSelected = selectedCell === t;

              let colorClass = 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 border-slate-700/60';
              if (status === 'mastered') {
                colorClass = 'bg-emerald-600 text-white font-bold border-emerald-400 shadow-sm shadow-emerald-500/30';
              } else if (status === 'needs_refresh') {
                colorClass = 'bg-amber-600/90 text-white font-bold border-amber-400 shadow-sm shadow-amber-500/30 animate-pulse';
              } else if (status === 'learning') {
                colorClass = 'bg-amber-500/30 text-amber-200 border-amber-500/50';
              } else if (status === 'weak') {
                colorClass = 'bg-rose-900/40 text-rose-300 border-rose-800';
              }

              return (
                <button
                  key={t}
                  onClick={() => setSelectedCell(t)}
                  className={`h-11 sm:h-12 rounded-xl text-xs sm:text-sm font-mono flex flex-col items-center justify-center transition-all border relative ${colorClass} ${
                    isSelected ? 'ring-2 ring-violet-400 scale-105 z-10' : ''
                  }`}
                >
                  <span>{t}</span>
                  {status === 'needs_refresh' && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspector Drawer for Selected Table */}
        {selectedCell && selectedData && (
          <motion.div
            key={selectedCell}
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
                    Table {selectedCell} Mastery Card
                  </h3>
                  <p className="text-xs text-slate-400">
                    {selectedCell <= 12
                      ? 'Tier 1: Instant Associative Anchor'
                      : selectedCell <= 20
                      ? 'Tier 2: Split-and-Add Decomposition'
                      : selectedCell <= 50
                      ? 'Tier 3: Decade Proximity & Compensation'
                      : 'Tier 4: Centurion High-Order Multipliers'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handlePracticeTable(selectedCell)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Start Drill on Table {selectedCell}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block mb-1">Status</span>
                <span
                  className={`font-bold capitalize ${
                    selectedData.status === 'mastered'
                      ? 'text-emerald-400'
                      : selectedData.status === 'needs_refresh'
                      ? 'text-amber-400'
                      : selectedData.status === 'learning'
                      ? 'text-amber-300'
                      : selectedData.status === 'weak'
                      ? 'text-rose-400'
                      : 'text-slate-500'
                  }`}
                >
                  {selectedData.status === 'needs_refresh' ? 'Needs Refresh' : selectedData.status}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block mb-1">Accuracy</span>
                <span className="text-white font-bold">{selectedData.accuracy}%</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block mb-1">Total Attempts</span>
                <span className="text-white font-bold">{selectedData.attempts}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block mb-1">Mastery Score</span>
                <span className="text-violet-400 font-bold">{selectedData.score} / 100</span>
              </div>
            </div>

            {selectedData.isDecayed && (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-300 flex items-start gap-2">
                <RefreshCw className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>7-Day Skill Decay Notice:</strong> It has been over 7 days since your last
                  session on Table {selectedCell}. Run a quick 10-question refresher to restore full
                  green status!
                </span>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
