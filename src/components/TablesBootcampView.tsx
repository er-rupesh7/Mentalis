'use client';

import React, { useState } from 'react';
import {
  Flame,
  Zap,
  CheckCircle2,
  Clock,
  Award,
  Play,
  ArrowRight,
  Sparkles,
  BookOpen,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { TableTrainingMode, SpeedLadderLevel } from '../core/types';
import { TABLE_BANDS, getTableBand } from '../core/memoryScheduler';
import { useTranslations } from 'next-intl';
import { getLocalizedBootcampMode } from '../i18n/contentTranslations';

const MODE_DESCRIPTIONS: Record<
  TableTrainingMode,
  { name: string; tag: string; description: string; hint: string }
> = {
  recognition: {
    name: 'Mode A: Recognition',
    tag: 'Multiple Choice (4 Options)',
    description: 'Rapid reflex identification with near-miss smart distractors.',
    hint: 'Sub-1.8s reflex choice. Use keys 1, 2, 3, or 4 for lightning answers.',
  },
  recall: {
    name: 'Mode B: Recall',
    tag: 'Direct Numeric Entry',
    description: 'Instant typed answer without multiple choice scaffolding.',
    hint: 'Sub-2.5s retrieval target. The core foundation of banking calculation speed.',
  },
  reverse: {
    name: 'Mode C: Reverse',
    tag: 'Inverse Factorization',
    description: 'Given product, identify the multiplier factor (e.g. 91 = 13 × ?).',
    hint: 'Essential for rapid division cancelling in Simplification and DI.',
  },
  missing_fact: {
    name: 'Mode D: Missing Fact',
    tag: 'Equation Filling',
    description: 'Targeted missing factor: ? × 7 = 91 or 13 × ? = 91.',
    hint: 'Builds algebraic flexibility and prevents one-way rote dependency.',
  },
  related_fact: {
    name: 'Mode E: Related Fact',
    tag: 'Landmark Anchoring',
    description: 'Bridge from landmarks: Since 13 × 5 = 65, compute 13 × 6 (+13).',
    hint: 'Landmark anchors (×5, ×10) eliminate mental freezing during exam pressure.',
  },
  neighbour_fact: {
    name: 'Mode F: Neighbour Fact',
    tag: 'Adjacent Table Stepping',
    description: 'Bridge from known table: Since 12 × 7 = 84, compute 13 × 7 (+7).',
    hint: 'Leverages tables you already know (Table 10, 12, 20) to reach teen tables.',
  },
  decomposition: {
    name: 'Mode G: Decomposition',
    tag: 'Tens & Units Split',
    description: 'Split into mental accumulator: 17 × 6 = (10 × 6) + (7 × 6) = 60 + 42 = 102.',
    hint: 'The official Left-to-Right mental math technique for competitive banking exams.',
  },
  bidirectional: {
    name: 'Mode H: Bidirectional',
    tag: 'Commutative Fluency',
    description: 'Fluency in both orders: 8 × 13 = 13 × 8 = 104.',
    hint: 'Eliminates hesitation when the single-digit multiplier appears first.',
  },
};

const SPEED_LADDER_LABELS: Record<SpeedLadderLevel, { label: string; color: string; desc: string }> = {
  1: { label: 'Level 1: Learn', color: 'text-slate-400 bg-slate-800/80 border-slate-700', desc: '< 3 attempts or developing accuracy' },
  2: { label: 'Level 2: Accurate', color: 'text-blue-400 bg-blue-950/50 border-blue-800/60', desc: '≥ 90% accuracy' },
  3: { label: 'Level 3: Stable', color: 'text-violet-400 bg-violet-950/50 border-violet-800/60', desc: '≥ 95% accuracy over 8+ attempts' },
  4: { label: 'Level 4: Fast', color: 'text-amber-400 bg-amber-950/50 border-amber-800/60', desc: '≤ 1.2× target latency' },
  5: { label: 'Level 5: Automatic', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-800/60', desc: 'Sub-2.0s reflex automaticity' },
  6: { label: 'Level 6: Exam Ready', color: 'text-yellow-300 bg-yellow-950/50 border-yellow-700/60', desc: 'Fully verified exam transfer' },
};

export const TablesBootcampView: React.FC = () => {
  const {
    activeBootcampTable,
    currentTableMode,
    isAdaptiveBootcampActive,
    setBootcampTable,
    setTableMode,
    startTablesBootcamp,
    startMicroSession,
    learnerProfile,
    locale,
  } = useQuizStore();

  const tBootcamp = useTranslations('bootcamp');
  const tCommon = useTranslations('common');

  const [selectedMode, setSelectedMode] = useState<TableTrainingMode>(currentTableMode || 'recognition');

  // Compute table stats from learnerProfile
  const tables = Array.from({ length: 10 }, (_, i) => i + 11); // 11 to 20

  const handleModeChange = (mode: TableTrainingMode) => {
    setSelectedMode(mode);
    setTableMode(mode);
  };

  const handleLaunchDirect = (tableNum: number) => {
    setBootcampTable(tableNum);
    startTablesBootcamp(tableNum, selectedMode, false);
  };

  const handleLaunchAdaptive = () => {
    startTablesBootcamp(activeBootcampTable, selectedMode, true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-950/20">
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <Flame className="w-3.5 h-3.5" />
              RRB PO / IBPS Prelims Bootcamp
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {tBootcamp('title')}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {tBootcamp('subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button
              onClick={handleLaunchAdaptive}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 active:scale-95 text-white font-bold text-sm shadow-xl shadow-amber-600/30 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              {tBootcamp('startDrill')}
            </button>
            <button
              onClick={() => startMicroSession('table_sprint_2m')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-amber-300 font-semibold text-xs border border-amber-500/30 transition-all cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5" />
              2-Min Table Sprint
            </button>
          </div>
        </div>
      </div>

      {/* Speed Ladder Legend */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-400" />
          Speed Ladder Progression (Strict Accuracy & Latency Driven)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {(Object.keys(SPEED_LADDER_LABELS) as unknown as SpeedLadderLevel[]).map((lvl) => {
            const info = SPEED_LADDER_LABELS[lvl];
            return (
              <div
                key={lvl}
                className={`p-2.5 rounded-xl border text-left flex flex-col justify-between ${info.color}`}
              >
                <div className="font-bold text-xs">{info.label}</div>
                <div className="text-[10px] opacity-80 mt-1 leading-tight">{info.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mode Selector Tabs (All 8 Table Training Modes) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            {tBootcamp('selectMode')}
          </h2>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Active: <span className="text-amber-400 font-semibold">{getLocalizedBootcampMode(selectedMode, locale).name}</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {(Object.keys(MODE_DESCRIPTIONS) as TableTrainingMode[]).map((modeKey) => {
            const mode = getLocalizedBootcampMode(modeKey, locale);
            const isSelected = selectedMode === modeKey;
            return (
              <button
                key={modeKey}
                onClick={() => handleModeChange(modeKey)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-amber-600/20 border-amber-500/80 text-white shadow-lg shadow-amber-600/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                    {mode.name.split(':')[1]?.trim() || mode.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{mode.tag}</div>
                </div>
                <div className="mt-2 text-[10px] text-slate-400 line-clamp-2 leading-tight">
                  {mode.description}
                </div>
              </button>
            );
          })}
        </div>

        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-300">Tip:</strong> {getLocalizedBootcampMode(selectedMode, locale).hint}
          </span>
        </div>
      </div>

      {/* Interactive Table Cards Grid (Tables 11 to 20) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            {tBootcamp('allTeenTables')}
          </h2>
          <span className="text-xs text-slate-400">
            Click any table to set focus or launch direct drill
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {tables.map((tbl) => {
            const isSelected = activeBootcampTable === tbl;
            const dim = `table_${tbl}`;
            const skill = (learnerProfile.skills as Record<string, any>)[dim];
            const accuracy = skill ? skill.accuracy : 0;
            const attempts = skill ? skill.totalAttempts : 0;
            const medianLatency = skill && skill.medianLatencyMs > 0 ? (skill.medianLatencyMs / 1000).toFixed(1) + 's' : '--';
            const ladderLevel: SpeedLadderLevel = skill?.speedLadderLevel || 1;
            const ladderInfo = SPEED_LADDER_LABELS[ladderLevel];
            const band = getTableBand(tbl);

            return (
              <div
                key={tbl}
                onClick={() => setBootcampTable(tbl)}
                className={`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-amber-950/30 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {/* Card Top */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Band {band}
                    </div>
                    <div className="text-2xl font-black text-white tracking-tight mt-0.5">
                      Table ×{tbl}
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${ladderInfo.color}`}
                  >
                    L{ladderLevel}
                  </span>
                </div>

                {/* Metrics */}
                <div className="my-3 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Accuracy:</span>
                    <span
                      className={`font-mono font-bold ${
                        accuracy >= 90
                          ? 'text-emerald-400'
                          : accuracy >= 75
                          ? 'text-amber-400'
                          : attempts === 0
                          ? 'text-slate-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {attempts > 0 ? `${accuracy}%` : 'Untrained'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Recall Latency:</span>
                    <span className="font-mono text-slate-200">{medianLatency}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Exposures:</span>
                    <span className="font-mono text-slate-200">{attempts}</span>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchDirect(tbl);
                  }}
                  className={`w-full mt-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-600/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Drill ×{tbl}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Selection Summary Bar */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 font-black text-xl">
            ×{activeBootcampTable}
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              Current Focus: Table ×{activeBootcampTable} in {MODE_DESCRIPTIONS[selectedMode].name}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Continuous maintenance distribution keeps earlier bands fresh while drilling Table ×{activeBootcampTable}.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => handleLaunchDirect(activeBootcampTable)}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5" />
            Drill Table ×{activeBootcampTable} (20Q)
          </button>
          <button
            onClick={handleLaunchAdaptive}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 active:scale-95 text-white font-bold text-xs shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-white" />
            Adaptive Drill (60/20/10/10)
          </button>
        </div>
      </div>
    </div>
  );
};
