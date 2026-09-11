'use client';

import React from 'react';
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
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';

interface AICoachDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AICoachDrawer: React.FC<AICoachDrawerProps> = ({ isOpen, onClose }) => {
  const {
    aiCoachInsight,
    isLoadingAiCoach,
    requestAICoachFeedback,
    aiCoachingEnabled,
    toggleAICoaching,
  } = useQuizStore();

  if (!isOpen) return null;

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
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Mentalis AI Coach
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {aiCoachInsight?.source === 'ai' ? 'OpenAI Structured' : 'Deterministic Engine'}
                </span>
              </h2>
              <p className="text-xs text-slate-400">Cognitive strategy & pedagogical guidance</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 text-slate-300 text-xs">
          {isLoadingAiCoach ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-3">
              <RefreshCw className="w-8 h-8 text-violet-400 animate-spin" />
              <p className="font-mono text-slate-400">Analyzing cognitive ability vector...</p>
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
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs"
              >
                Request Coach Guidance
              </button>
            </div>
          )}

          {/* Privacy & Zero-Retention Notice */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Leakage Privacy Guarantee</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mentalis functions 100% offline. When AI Coaching is enabled, only de-identified aggregated ability numbers ($\theta$) are sent via a server route with <code className="text-violet-300">store: false</code>. No personal data is ever stored remotely.
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
              {aiCoachingEnabled ? 'AI Coaching: Enabled' : 'AI Coaching: Offline Only'}
            </button>

            <button
              onClick={() => requestAICoachFeedback()}
              disabled={isLoadingAiCoach}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingAiCoach ? 'animate-spin' : ''}`} />
              <span>Refresh Advice</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
