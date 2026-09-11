'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Award,
  Target,
  Clock,
  Zap,
  RotateCcw,
  Play,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import {
  ALL_SKILL_DIMENSIONS,
  SkillDimension,
  getDimensionLabel,
  getDimensionModule,
} from '../core/learnerModel';
import { getDrillsForDimension } from '../core/catalog';

export const SkillProfileView: React.FC = () => {
  const {
    learnerProfile,
    startAssessment,
    setViewMode,
    setActiveModule,
    setAddSubLevel,
    setActiveTable,
    setActiveSquareTrack,
    startSession,
  } = useQuizStore();

  const skills = learnerProfile.skills;

  const categories = [
    {
      title: 'Addition & Subtraction Foundations',
      description: 'Single-digit, decade crossing, base-100 complements, and left-to-right multi-digit',
      dims: ALL_SKILL_DIMENSIONS.filter((d) => d.startsWith('add_sub')),
    },
    {
      title: 'Multiplication Tables & Expansion',
      description: 'Foundations (2-5, 10), core times tables (6-12), teen tables, and decade anchors',
      dims: ALL_SKILL_DIMENSIONS.filter((d) => d.startsWith('mult')),
    },
    {
      title: 'Mental Squares & Cubes',
      description: 'Vedic ending-5, base-50, base-100, duplex cross-multiplication, and anchor cubes',
      dims: ALL_SKILL_DIMENSIONS.filter((d) => d.startsWith('squares') || d.startsWith('cubes')),
    },
    {
      title: 'Working Memory & Anzan Stream',
      description: 'Sequential flashed additions and dynamic working memory holding capacity',
      dims: ALL_SKILL_DIMENSIONS.filter((d) => d === 'anzan_stream'),
    },
  ];

  const handlePracticeSkill = (dim: SkillDimension) => {
    const drills = getDrillsForDimension(dim);
    if (drills.length === 0) return;

    const drill = drills[0];
    if (drill.module === 'add_sub' && drill.params.addSubLevel) {
      setAddSubLevel(drill.params.addSubLevel);
    } else if (drill.module === 'multiplication' && drill.params.table) {
      setActiveTable(drill.params.table);
    } else if (drill.module === 'squares_cubes' && drill.params.squareTrack) {
      setActiveSquareTrack(drill.params.squareTrack);
    } else if (drill.module === 'working_memory') {
      setViewMode('anzan');
      return;
    }

    startSession({ mode: 'standard' });
    setViewMode('practice');
  };

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 space-y-8 text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Brain className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Cognitive Skill Profile
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Bayesian ability metrics ($\theta$), confidence intervals, and decay risk across all 16 curriculum dimensions.
          </p>
        </div>

        <button
          onClick={startAssessment}
          className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Retake Diagnostic Assessment</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="space-y-8">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-3">
            <div>
              <h2 className="text-base font-bold text-white">{cat.title}</h2>
              <p className="text-xs text-slate-400">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.dims.map((dim) => {
                const s = skills[dim];
                const label = getDimensionLabel(dim);
                const thetaDisplay = s.theta > 0 ? `+${s.theta.toFixed(1)}` : s.theta.toFixed(1);
                // Map theta (-3.0 to +3.0) to percentage (0% to 100%)
                const thetaPercent = Math.min(100, Math.max(0, Math.round(((s.theta + 3.0) / 6.0) * 100)));

                return (
                  <div
                    key={dim}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-sm text-white">{label}</h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase ${
                              s.masteryTier === 'grandmaster'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : s.masteryTier === 'master'
                                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                                : s.masteryTier === 'proficient'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {s.masteryTier}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-3">
                          <span>Accuracy: <strong className="text-slate-200">{s.accuracy}%</strong></span>
                          <span>Attempts: <strong className="text-slate-200">{s.totalAttempts}</strong></span>
                          {s.medianLatencyMs > 0 && (
                            <span>Latency: <strong className="text-slate-200">{(s.medianLatencyMs / 1000).toFixed(1)}s</strong></span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => handlePracticeSkill(dim)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-violet-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1 shrink-0"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Drill</span>
                      </button>
                    </div>

                    {/* Theta Gauge */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Ability: θ = {thetaDisplay}</span>
                        <span>Confidence: {Math.round(s.confidence * 100)}%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-violet-600 to-indigo-500 h-full rounded-full transition-all"
                          style={{ width: `${thetaPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
