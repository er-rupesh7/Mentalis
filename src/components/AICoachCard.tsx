'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Play,
  CheckCircle2,
  Clock,
  Brain,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';

interface AICoachCardProps {
  onOpenCoachDrawer: () => void;
}

export const AICoachCard: React.FC<AICoachCardProps> = ({ onOpenCoachDrawer }) => {
  const {
    activeTrainingPlan,
    startTrainingBlock,
    generateDailyPlan,
    aiCoachInsight,
    isLoadingAiCoach,
    learnerProfile,
  } = useQuizStore();

  const plan = activeTrainingPlan;
  const fatigue = learnerProfile.fatigueState;

  if (!plan) {
    return (
      <div className="p-6 rounded-3xl bg-gradient-to-r from-violet-950/40 via-slate-900 to-indigo-950/40 border border-violet-800/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-violet-600/30 text-violet-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-violet-500/40 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-violet-400" />
              AI Cognitive Coach
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">Today’s Personalized Daily Training Plan</h3>
          <p className="text-xs text-slate-300 max-w-lg">
            Mentalis crafts a calibrated 5-block routine targeting your weak edges, preventing decay, and building Anzan working memory.
          </p>
        </div>

        <button
          onClick={() => generateDailyPlan()}
          className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <Brain className="w-4 h-4" />
          <span>Build Today’s Plan</span>
        </button>
      </div>
    );
  }

  const completedBlocksCount = plan.blocks.filter((b) => b.status === 'completed').length;
  const activeBlockIndex = plan.blocks.findIndex((b) => b.status !== 'completed');
  const targetIndex = activeBlockIndex === -1 ? 0 : activeBlockIndex;
  const isPlanCompleted = plan.isCompleted || completedBlocksCount === plan.blocks.length;

  return (
    <div className="p-6 rounded-3xl bg-gradient-to-r from-violet-950/30 via-slate-900 to-indigo-950/30 border border-violet-800/40 shadow-2xl space-y-4">
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-0.5 rounded-full bg-violet-600/30 text-violet-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-violet-500/40 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-violet-400" />
            Daily Training Plan
          </span>

          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-500" />
            {plan.totalEstimatedMinutes} min target
          </span>

          {fatigue.level !== 'fresh' && (
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1 border ${
                fatigue.level === 'high_fatigue'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}
            >
              <AlertCircle className="w-3 h-3" />
              {fatigue.level.replace('_', ' ')}
            </span>
          )}
        </div>

        <button
          onClick={onOpenCoachDrawer}
          className="text-xs font-semibold text-violet-300 hover:text-violet-200 flex items-center gap-1 hover:underline transition-all self-start sm:self-auto"
        >
          <span>Coach Insights & Guidance</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Rationale & Pedagogical Message */}
      <div className="space-y-1">
        <h3 className="text-base font-bold text-white">
          {isPlanCompleted ? '🎉 Daily Cognitive Plan Completed!' : plan.rationale}
        </h3>

        {aiCoachInsight ? (
          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-violet-400 font-semibold font-mono text-[10px] uppercase block mb-0.5">
              AI Pedagogical Tip
            </span>
            {aiCoachInsight.suggestedCoachingMessage}
          </p>
        ) : isLoadingAiCoach ? (
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono py-1">
            <RefreshCw className="w-3 h-3 animate-spin text-violet-400" />
            <span>Consulting AI Coach...</span>
          </div>
        ) : null}
      </div>

      {/* Training Blocks Breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
        {plan.blocks.map((block, idx) => {
          const isDone = block.status === 'completed';
          const isCurrent = idx === targetIndex && !isPlanCompleted;

          return (
            <div
              key={block.id}
              onClick={() => !isPlanCompleted && startTrainingBlock(idx)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-1.5 ${
                isDone
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                  : isCurrent
                  ? 'bg-violet-950/40 border-violet-500/60 text-white shadow-md shadow-violet-600/20 ring-1 ring-violet-500/40'
                  : 'bg-slate-950/50 border-slate-800/80 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-500">Block {idx + 1}</span>
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
                {block.completedCount}/{block.targetCount} items
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => generateDailyPlan()}
          className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors flex items-center gap-1.5"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Regenerate Plan</span>
        </button>

        {!isPlanCompleted ? (
          <button
            onClick={() => startTrainingBlock(targetIndex)}
            className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Start Block {targetIndex + 1} ({plan.blocks[targetIndex]?.title.split(':')[0]})</span>
          </button>
        ) : (
          <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Great work today! All 5 training blocks complete.</span>
          </div>
        )}
      </div>
    </div>
  );
};
