'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Target,
  Clock,
  ArrowRight,
  TrendingUp,
  Percent,
  Divide,
  Activity,
  Layers,
  Sparkles,
  BarChart3,
  ChevronRight,
  Calculator,
  Compass,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ExamSubSkill } from '../core/types';
import { BANK_FRACTION_PERCENTAGE_TABLE } from '../core/examQuantGenerators';

interface SubSkillMetadata {
  id: ExamSubSkill;
  title: string;
  examWeight: string;
  targetLatency: string;
  strategyTip: string;
  category: 'speed_math' | 'arithmetic' | 'data_interpretation';
  icon: React.ElementType;
}

const SUB_SKILLS_CATALOG: SubSkillMetadata[] = [
  {
    id: 'quant_simplification',
    title: 'Simplification (BODMAS)',
    examWeight: '10–15 Qs in Prelims',
    targetLatency: '< 3.5s',
    strategyTip: 'Factor cancellation & common denominator absorption.',
    category: 'speed_math',
    icon: Calculator,
  },
  {
    id: 'quant_approximation',
    title: 'Approximation',
    examWeight: '5 Qs in Prelims',
    targetLatency: '< 4.0s',
    strategyTip: 'Boundary rounding (e.g. 49.8% → 50%, √145 → 12).',
    category: 'speed_math',
    icon: Target,
  },
  {
    id: 'quant_percentage',
    title: 'Percentage Splitting & Shortcuts',
    examWeight: '5–8 Qs in DI & Word Problems',
    targetLatency: '< 3.0s',
    strategyTip: 'x% of y = y% of x; Base 10% + 1% decomposition.',
    category: 'speed_math',
    icon: Sparkles,
  },
  {
    id: 'quant_number_series',
    title: 'Missing & Wrong Series',
    examWeight: '5 Qs in Prelims',
    targetLatency: '< 5.0s',
    strategyTip: 'Tier-1/Tier-2 difference analysis, prime gaps, square/cube offsets.',
    category: 'speed_math',
    icon: Activity,
  },
  {
    id: 'quant_ratio',
    title: 'Ratio Splitting & Alligation',
    examWeight: 'Foundational for Mixture & Partnership',
    targetLatency: '< 3.5s',
    strategyTip: 'Scale unit multiplier: Total / (a + b).',
    category: 'arithmetic',
    icon: Divide,
  },
  {
    id: 'quant_average',
    title: 'Average (Deviation Method)',
    examWeight: '2–3 Qs in Prelims',
    targetLatency: '< 4.0s',
    strategyTip: 'Assume central mean, sum algebraic deviations only.',
    category: 'arithmetic',
    icon: TrendingUp,
  },
  {
    id: 'quant_profit_loss',
    title: 'Profit, Loss & Discount',
    examWeight: '2–3 Qs in Prelims',
    targetLatency: '< 4.5s',
    strategyTip: 'Fraction multiplier representation: 1/6 profit = 7/6 SP factor.',
    category: 'arithmetic',
    icon: Layers,
  },
  {
    id: 'quant_si_ci',
    title: 'SI & CI (Effective Rate)',
    examWeight: '2 Qs in Prelims',
    targetLatency: '< 4.5s',
    strategyTip: '2-year effective rate formula: 2r + r²/100 % for CI.',
    category: 'arithmetic',
    icon: Clock,
  },
  {
    id: 'quant_time_work',
    title: 'Time & Work (LCM Method)',
    examWeight: '1–2 Qs in Prelims',
    targetLatency: '< 5.0s',
    strategyTip: 'Assume total work as LCM of days, calculate daily efficiencies.',
    category: 'arithmetic',
    icon: Activity,
  },
  {
    id: 'quant_speed_distance',
    title: 'Speed, Time & Distance',
    examWeight: '2 Qs (Trains / Boats / Streams)',
    targetLatency: '< 5.0s',
    strategyTip: 'Conversion 5/18 m/s, relative speed additions and subtractions.',
    category: 'arithmetic',
    icon: Compass,
  },
  {
    id: 'quant_di_arithmetic',
    title: 'DI Micro-Calculations',
    examWeight: '10–15 Qs in Prelims',
    targetLatency: '< 3.5s',
    strategyTip: 'Instant percentage increase/decrease & ratio comparisons.',
    category: 'data_interpretation',
    icon: BarChart3,
  },
];

export const ExamQuantView: React.FC = () => {
  const {
    learnerProfile,
    startExamQuantDrill,
    calculateExamTransferScores,
    examTransferScores,
  } = useQuizStore();

  const [filterCategory, setFilterCategory] = useState<'all' | 'speed_math' | 'arithmetic' | 'data_interpretation'>('all');
  const [showFractionTable, setShowFractionTable] = useState(false);

  // Compute scores if not present
  const scores = examTransferScores || calculateExamTransferScores();

  const filteredSkills = SUB_SKILLS_CATALOG.filter(
    (s) => filterCategory === 'all' || s.category === filterCategory
  );

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 pb-16">
      {/* Hero Header */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  RRB PO Prelims <span className="text-emerald-400 font-serif italic">Speed Quant</span>
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Deterministic, offline calculation drills specifically calibrated for RRB PO / IBPS RRB Scale-I.
                Target: 35/35 in 20–22 minutes with zero paper rough work.
              </p>
            </div>

            {/* Top Mixed Drill Button */}
            <button
              onClick={() => startExamQuantDrill('quant_simplification')}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 shrink-0 group"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Launch 15-Q Speed Drill</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Exam Transfer Scores HUD */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Prelims Readiness</div>
              <div className="text-2xl font-black font-mono text-emerald-400">
                {scores.rrbReadiness}%
              </div>
              <div className="text-[10px] text-slate-500">Benchmark: 85%+</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Calculation Automaticity</div>
              <div className="text-2xl font-black font-mono text-violet-400">
                {scores.calculationAutomaticity}%
              </div>
              <div className="text-[10px] text-slate-500">Tables & facts &lt;1.5s</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Exam Speed Rating</div>
              <div className="text-2xl font-black font-mono text-amber-400">
                {scores.examSpeed}%
              </div>
              <div className="text-[10px] text-slate-500">Under time target</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Exam Accuracy</div>
              <div className="text-2xl font-black font-mono text-sky-400">
                {scores.examAccuracy}%
              </div>
              <div className="text-[10px] text-slate-500">Target &gt;95% clean</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1 col-span-2 sm:col-span-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Foundation Score</div>
              <div className="text-2xl font-black font-mono text-white">
                {scores.foundationScore}%
              </div>
              <div className="text-[10px] text-slate-500">Basics & Complements</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 py-8 space-y-8">
        {/* Category Filters and Quick Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-semibold overflow-x-auto scrollbar-none">
            {[
              { id: 'all', label: 'All 11 Sub-Skills' },
              { id: 'speed_math', label: 'Speed Math (20 Qs)' },
              { id: 'arithmetic', label: 'Arithmetic (10 Qs)' },
              { id: 'data_interpretation', label: 'DI Micro-Calc (5 Qs)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-all shrink-0 ${
                  filterCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFractionTable(!showFractionTable)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-800 transition-colors"
          >
            <Percent className="w-3.5 h-3.5 text-emerald-400" />
            <span>{showFractionTable ? 'Hide' : 'View'} 1/2 to 1/40 Reciprocal Table</span>
          </button>
        </div>

        {/* Collapsible Fraction-Percentage Master Grid */}
        {showFractionTable && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Percent className="w-4 h-4 text-emerald-400" />
                  Bank Exam Reciprocal Multipliers (1/2 to 1/40)
                </h3>
                <p className="text-xs text-slate-400">
                  Every competitive banking exam DI set requires instant recognition of these percentages.
                </p>
              </div>
              <button
                onClick={() => startExamQuantDrill('quant_percentage')}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                Drill Fractions Now
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 font-mono text-xs">
              {BANK_FRACTION_PERCENTAGE_TABLE.map((item) => (
                <div
                  key={`${item.numerator}/${item.denominator}`}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col items-center justify-center space-y-1"
                >
                  <span className="text-emerald-400 font-bold text-sm">
                    {item.numerator}/{item.denominator}
                  </span>
                  <span className="text-slate-200 font-semibold">
                    {item.displayPercentage}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    ≈ {(item.numerator / item.denominator).toFixed(4)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 11 Bank Exam Sub-Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((sub) => {
            const Icon = sub.icon;
            const skillEstimate = (learnerProfile.skills as Record<string, any>)[sub.id];
            const accuracy = skillEstimate ? skillEstimate.accuracy : 0;
            const attempts = skillEstimate ? skillEstimate.totalAttempts : 0;
            const avgLatency =
              skillEstimate && skillEstimate.medianLatencyMs > 0
                ? (skillEstimate.medianLatencyMs / 1000).toFixed(1) + 's'
                : '--';

            return (
              <div
                key={sub.id}
                className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/20">
                      {sub.targetLatency}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {sub.title}
                    </h3>
                    <div className="text-[11px] font-mono text-emerald-400 font-medium mt-0.5">
                      {sub.examWeight}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {sub.strategyTip}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-3">
                  {/* Performance stats */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <div>
                      Accuracy:{' '}
                      <strong className={accuracy >= 90 ? 'text-emerald-400' : 'text-slate-200'}>
                        {accuracy}%
                      </strong>
                    </div>
                    <div>
                      Avg: <strong className="text-slate-200">{avgLatency}</strong>
                    </div>
                    <div>
                      Trained: <strong className="text-slate-200">{attempts}</strong>
                    </div>
                  </div>

                  {/* Drill Button */}
                  <button
                    onClick={() => startExamQuantDrill(sub.id)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm group-hover:bg-emerald-600 group-hover:text-white"
                  >
                    <span>Train 15 Questions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
