'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Sparkles,
  ShieldCheck,
  X,
  RefreshCw,
  Zap,
  Target,
  CheckCircle2,
  Lock,
  MessageSquare,
  Clock,
  AlertCircle,
  Sliders,
  BookOpen,
  ArrowRight,
  Activity,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { AIProviderStatus } from '../core/learnerModel';
import { useTranslations } from 'next-intl';

interface AICoachDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AICoachDrawer: React.FC<AICoachDrawerProps> = ({ isOpen, onClose }) => {
  const tCoach = useTranslations('aiCoach');
  const tCommon = useTranslations('common');

  const {
    aiCoachInsight,
    isLoadingAiCoach,
    requestAICoachFeedback,
    aiCoachingEnabled,
    toggleAICoaching,
    aiCoachState,
    setAICooldownMinutes,
  } = useQuizStore();

  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const nextEligible = aiCoachState?.nextEligibleRequestAt || 0;
  const isCooldownActive = now < nextEligible;
  const remainingSeconds = isCooldownActive
    ? Math.max(0, Math.ceil((nextEligible - now) / 1000))
    : 0;

  const formatCountdown = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  let effectiveStatus: AIProviderStatus = aiCoachState?.providerStatus || 'ready';
  if (effectiveStatus === 'cooldown' && !isCooldownActive) {
    effectiveStatus = aiCoachState?.pendingSync ? 'pending_sync' : 'ready';
  } else if (effectiveStatus === 'rate_limited' && !isCooldownActive) {
    effectiveStatus = 'ready';
  }

  const isConsultDisabled =
    isLoadingAiCoach ||
    (effectiveStatus === 'cooldown' && isCooldownActive) ||
    (effectiveStatus === 'rate_limited' && isCooldownActive);

  const lessonCards = aiCoachInsight?.lessonCards || aiCoachState?.lastAiLesson?.lesson_cards || [];
  const planAdjustments =
    aiCoachInsight?.groqResponse?.recommended_plan_adjustments ||
    aiCoachState?.lastAiLesson?.recommended_plan_adjustments ||
    [];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                {tCoach('title')}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  100% Offline
                </span>
              </h2>
              <p className="text-xs text-slate-400">Deterministic cognitive reasoning &amp; personalized learning engine</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={tCommon('close')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 text-slate-300 text-xs">
          {/* Engine Privacy & Offline Guarantee Banner */}
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Egress Private Cognitive Architecture</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mentalis runs an in-browser adaptive memory engine. Your arithmetic reaction times, forgetting curves, error patterns, and daily training plans are computed locally using deterministic cognitive algorithms. Zero external AI API calls or cloud dependencies.
            </p>
          </div>

          {isLoadingAiCoach ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-3">
              <RefreshCw className="w-8 h-8 text-violet-400 animate-spin" />
              <p className="font-mono text-slate-400">Consulting Groq LLaMA 3.3 for cognitive analysis...</p>
            </div>
          ) : aiCoachInsight ? (
            <>
              {/* Executive Summary */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-violet-400 font-mono text-[10px] uppercase">
                    Diagnostic Overview
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Confidence: {Math.round(aiCoachInsight.confidence * 100)}%
                  </span>
                </div>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {aiCoachInsight.summary}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed italic border-t border-slate-800/80 pt-2">
                  &ldquo;{aiCoachInsight.encouragement}&rdquo;
                </p>
              </div>

              {/* Core Pedagogical Advice */}
              <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-800/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-violet-300">
                  <MessageSquare className="w-4 h-4" />
                  <span>Pedagogical Recommendation</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {aiCoachInsight.suggestedCoachingMessage}
                </p>
              </div>

              {/* Groq Structured Lesson Cards */}
              {lessonCards.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-violet-300 text-xs">
                    <BookOpen className="w-4 h-4 text-violet-400" />
                    <span>Groq Strategy Lesson Cards</span>
                  </div>
                  <div className="space-y-2">
                    {lessonCards.map((card, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-950/80 border border-violet-800/30 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-xs">{card.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-700/50">
                            Target: {card.fact_or_family}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
                          Trick: {card.trick}
                        </p>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                          Worked: {card.worked_example}
                        </div>
                        <div className="p-2 rounded-xl bg-violet-950/30 border border-violet-900/40 text-[11px] text-violet-200 flex items-center gap-1.5">
                          <ArrowRight className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                          <span>Practice: {card.practice_prompt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Plan Adjustments */}
              {planAdjustments.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-white text-xs">
                    <Activity className="w-4 h-4 text-violet-400" />
                    <span>AI Plan Calibration Adjustments</span>
                  </div>
                  <div className="space-y-1.5">
                    {planAdjustments.map((adj, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] space-y-0.5"
                      >
                        <div className="flex items-center justify-between text-violet-300 font-mono text-[10px]">
                          <span className="uppercase font-bold">{adj.action}</span>
                          <span>Target: {adj.target}</span>
                        </div>
                        <p className="text-slate-400">{adj.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Strengths & Growth Areas */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                    <Zap className="w-4 h-4" />
                    <span>Observed Strengths</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {aiCoachInsight.observedStrengths.map((str, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400">
                    <Target className="w-4 h-4" />
                    <span>Priority Focus Edge</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {aiCoachInsight.priorityGaps.map((gap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 space-y-3">
              <Brain className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-slate-400">No active AI coach advice yet. Click below to consult.</p>
              <button
                onClick={() => requestAICoachFeedback()}
                disabled={isConsultDisabled}
                className={`px-4 py-2 rounded-xl text-white font-bold text-xs ${
                  isConsultDisabled
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-violet-600 hover:bg-violet-500'
                }`}
              >
                {tCoach('requestFeedback')}
              </button>
            </div>
          )}

          {/* Privacy & Zero-Retention Notice */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Offline &amp; Private In-Browser Architecture</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mentalis practice, spaced repetition, and coaching run 100% offline. All arithmetic reaction times, forgetting curves, error pattern diagnostics, and lesson cards are generated deterministically in your browser with zero network requests or API keys. All progress is safely preserved in localStorage.
            </p>
          </div>

          {/* Settings & Refresh Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <button
              onClick={() => toggleAICoaching()}
              className={`px-3 py-2 rounded-xl border text-xs font-semibold transition-colors ${
                aiCoachingEnabled
                  ? 'bg-violet-600/20 text-violet-300 border-violet-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {aiCoachingEnabled ? 'Adaptive Coach: Active' : 'Adaptive Coach: Paused'}
            </button>

            <button
              onClick={() => requestAICoachFeedback(true)}
              disabled={isLoadingAiCoach}
              className="px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingAiCoach ? 'animate-spin' : ''}`} />
              <span>
                {isLoadingAiCoach ? tCoach('analyzing') : tCoach('requestFeedback')}
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
