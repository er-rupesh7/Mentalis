'use client';

import React from 'react';
import {
  X,
  Award,
  CheckCircle2,
  XCircle,
  BarChart2,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
} from 'lucide-react';
import {
  getOverallPracticeAnalytics,
  clearTopicPracticeAnalytics,
  type OverallPracticeAnalytics,
} from '../../core/mind/practiceAnalytics';

interface PracticeAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PracticeAnalyticsModal: React.FC<PracticeAnalyticsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [analytics, setAnalytics] = React.useState<OverallPracticeAnalytics | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setAnalytics(getOverallPracticeAnalytics());
    }
  }, [isOpen]);

  if (!isOpen || !analytics) return null;

  const handleReset = () => {
    if (confirm('Clear local practice analytics records? This cannot be undone.')) {
      clearTopicPracticeAnalytics();
      setAnalytics(getOverallPracticeAnalytics());
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-7 space-y-6 text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-violet-950 text-violet-400 border border-violet-800/50">
              <BarChart2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight">
                Practice Analytics & Mastery
              </h3>
              <p className="text-xs text-slate-400">
                Privacy-preserving local educational metrics
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Privacy Callout */}
        <div className="p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-indigo-300 text-xs flex items-center gap-2.5">
          <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            Zero personal information is collected or sent to third-party servers. All question attempts and accuracies remain private.
          </span>
        </div>

        {/* Overall Core Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
              {analytics.totalAttempts}
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400">
              Attempts
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono block">
              {analytics.totalCorrect}
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400">
              Correct
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-rose-400 font-mono block">
              {analytics.totalIncorrect}
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400">
              Incorrect
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-violet-400 font-mono block">
              {analytics.overallAccuracy}%
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400">
              Accuracy
            </span>
          </div>
        </div>

        {/* Completed Topics */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            <span>Completed Topics ({analytics.completedTopicIds.length})</span>
          </div>

          {analytics.completedTopicIds.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {analytics.completedTopicIds.map((tid) => (
                <span
                  key={tid}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{tid.replace(/_/g, ' ')}</span>
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">
              No completed topic loops yet. Finish an interactive learning loop to earn your mastery badge!
            </p>
          )}
        </div>

        {/* Performance by Difficulty */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Difficulty Distribution
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs">
            {['easy', 'medium', 'hard'].map((diff) => {
              let attempts = 0;
              let correct = 0;
              Object.values(analytics.topicSummaries).forEach((ts) => {
                const b = ts.difficultyBreakdown[diff as 'easy' | 'medium' | 'hard'];
                if (b) {
                  attempts += b.attempts;
                  correct += b.correct;
                }
              });
              const pct = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

              return (
                <div key={diff} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
                  <span className="block font-mono font-bold uppercase text-[11px] text-slate-300">
                    {diff}
                  </span>
                  <span className="text-base font-bold font-mono text-white block">
                    {pct}%
                  </span>
                  <span className="text-[10px] text-slate-500 block font-mono">
                    {correct}/{attempts}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-950/40 hover:text-rose-300 hover:border-rose-700/50 text-slate-400 border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Analytics</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
