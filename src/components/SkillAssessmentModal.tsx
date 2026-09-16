'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  Target,
  Award,
  ChevronRight,
  Pause,
  Play,
  Lightbulb,
  Sparkles,
  BookOpen,
  HelpCircle,
  Crown,
  TrendingUp,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { getDimensionLabel } from '../core/learnerModel';
import { getBestStrategyForFact } from '../core/strategyCatalog';
import { FactKey } from '../core/factModel';
import { TIER_NAMES, DOMAIN_LABELS, PRIMARY_DIAGNOSTIC_DOMAINS } from '../core/diagnosticEngine';
import { useTranslations } from 'next-intl';

export const SkillAssessmentModal: React.FC = () => {
  const tAssessment = useTranslations('assessment');
  const tCommon = useTranslations('common');

  const {
    activeAssessment,
    assessmentInputBuffer,
    appendAssessmentDigit,
    toggleAssessmentNegative,
    backspaceAssessment,
    clearAssessmentBuffer,
    submitAssessmentAnswer,
    skipAssessmentQuestion,
    skipAssessment,
    pauseAssessment,
    resumeAssessment,
    learnerProfile,
    generateDailyPlan,
    startSession,
    setViewMode,
  } = useQuizStore();

  const [skipNotice, setSkipNotice] = useState<{
    prompt: string;
    correctAnswer: number;
    trickTip: string;
  } | null>(null);

  const handleSkipCurrent = useCallback(() => {
    if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;
    const currentQ = activeAssessment.questions[activeAssessment.currentQuestionIndex];
    if (!currentQ) return;

    let trickTip = currentQ.mentalTip || 'We will teach you this mental decomposition before testing again.';
    if (currentQ.subTrack?.startsWith('mul:') || currentQ.subTrack?.startsWith('square:') || currentQ.subTrack?.startsWith('cube:')) {
      const strat = getBestStrategyForFact(currentQ.subTrack as FactKey);
      if (strat?.mentalScript) {
        trickTip = strat.mentalScript;
      }
    }

    setSkipNotice({
      prompt: currentQ.prompt,
      correctAnswer: currentQ.correctAnswer,
      trickTip,
    });

    skipAssessmentQuestion();
  }, [activeAssessment, skipAssessmentQuestion]);

  // Keyboard handler for assessment input
  useEffect(() => {
    if (!activeAssessment || activeAssessment.status !== 'in_progress') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (skipNotice) {
        if (e.key === 'Enter' || e.key === ' ' || e.key.toLowerCase() === 's') {
          e.preventDefault();
          setSkipNotice(null);
        }
        return;
      }

      if (activeAssessment.isPaused) {
        if (e.key.toLowerCase() === 'p' || e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          resumeAssessment();
        }
        return;
      }

      if (e.key >= '0' && e.key <= '9') {
        appendAssessmentDigit(e.key);
      } else if (e.key === '-' || e.key === '_') {
        toggleAssessmentNegative();
      } else if (e.key === 'Backspace') {
        backspaceAssessment();
      } else if (e.key === 'Escape') {
        clearAssessmentBuffer();
      } else if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        pauseAssessment();
      } else if (e.key.toLowerCase() === 's' || e.key === 'Tab') {
        e.preventDefault();
        handleSkipCurrent();
      } else if (e.key === 'Enter') {
        if (assessmentInputBuffer && assessmentInputBuffer !== '-') {
          submitAssessmentAnswer();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeAssessment,
    assessmentInputBuffer,
    skipNotice,
    handleSkipCurrent,
    appendAssessmentDigit,
    toggleAssessmentNegative,
    backspaceAssessment,
    clearAssessmentBuffer,
    submitAssessmentAnswer,
    pauseAssessment,
    resumeAssessment,
  ]);

  if (!activeAssessment) return null;

  const isCompleted = activeAssessment.status === 'completed';
  const report = learnerProfile.baselineReport;
  const currentQ = activeAssessment.questions[activeAssessment.currentQuestionIndex];
  const progressPercent = Math.min(
    100,
    Math.round((activeAssessment.currentQuestionIndex / activeAssessment.totalQuestions) * 100)
  );

  // Resolve active domain key for current probe
  const resolveDomainKey = (q?: any): string => {
    if (!q) return 'tables';
    if (q.id?.includes('tables') || q.subTrack?.startsWith('mul:') || q.module === 'tables_bootcamp') return 'tables';
    if (q.id?.includes('shakuntala') || q.subTrack?.startsWith('shakuntala:')) return 'shakuntala_feats';
    if (q.id?.includes('squares_cubes') || q.operator === '²' || q.operator === '³' || q.subTrack?.startsWith('square:') || q.subTrack?.startsWith('cube:')) return 'squares_cubes';
    if (q.id?.includes('division') || q.operator === '÷') return 'division';
    if (q.id?.includes('multiplication') || q.operator === '×') return 'multiplication';
    if (q.id?.includes('subtraction') || q.operator === '-') return 'subtraction';
    return 'addition';
  };

  const activeDomain = resolveDomainKey(currentQ);
  const activeDomainName = DOMAIN_LABELS[activeDomain] || 'Mental Arithmetic';
  const activeTierLevel = currentQ?.difficultyRating || 3;
  const activeTierName = TIER_NAMES[activeTierLevel] || 'Normal';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 perspective-1000"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                7-Domain CAT Adaptive Assessment
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  9 Difficulty Tiers
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Cognitive evaluation discovering frontiers across Tables, Powers, Complements & Shakuntala Roots
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isCompleted && (
              <button
                onClick={activeAssessment.isPaused ? resumeAssessment : pauseAssessment}
                className="flex items-center gap-1 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
                title="Pause or resume assessment (P)"
              >
                {activeAssessment.isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{activeAssessment.isPaused ? 'Resume' : 'Pause'}</span>
              </button>
            )}

            <button
              onClick={skipAssessment}
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
              title="Skip diagnostic and go to Dashboard"
            >
              Exit
            </button>
          </div>
        </div>

        {/* In Progress View */}
        {!isCompleted && currentQ && (
          <div className="p-6 sm:p-8 space-y-6 relative card-3d">
            {/* Paused Overlay */}
            {activeAssessment.isPaused && (
              <div className="absolute inset-0 z-20 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Pause className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Assessment Paused</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Take a breath. Mental math is about clarity and neural automaticity, not rush. Resume whenever you’re ready.
                  </p>
                </div>
                <button
                  onClick={resumeAssessment}
                  className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Resume Assessment (P)</span>
                </button>
              </div>
            )}

            {/* Skip Gentle State Overlay */}
            {skipNotice && (
              <div className="absolute inset-0 z-20 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="space-y-2 max-w-md">
                  <div className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30">
                    Marking this for guided training
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    {skipNotice.prompt} = <span className="text-emerald-400">{skipNotice.correctAnswer}</span>
                  </div>
                  <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 text-left flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Shortcut Secret:</strong> {skipNotice.trickTip}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    We’ve scheduled this fact for technique practice before challenging you with it again.
                  </p>
                </div>
                <button
                  onClick={() => setSkipNotice(null)}
                  className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2"
                >
                  <span>Next Question (Enter)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Progress Bar & Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>
                  {tAssessment('questionOf', {
                    current: activeAssessment.currentQuestionIndex + 1,
                    total: activeAssessment.totalQuestions,
                  })}
                </span>
                <span className="text-violet-400">{progressPercent}% Calibrated</span>
              </div>
              <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-violet-600 via-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Domain & Tier Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-semibold text-violet-300 bg-violet-950/60 px-3 py-1 rounded-full border border-violet-500/30">
                Domain: {activeDomainName}
              </span>
              <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
                Tier {activeTierLevel}: {activeTierName}
              </span>
            </div>

            {/* Arithmetic Prompt */}
            <div className="text-center py-4">
              <div className="text-5xl sm:text-6xl font-extrabold text-white font-mono tracking-tight select-none">
                {currentQ.prompt}
              </div>
              <div className="text-xs text-slate-500 mt-2 font-mono">
                Target: ~{currentQ.targetTimeSeconds}s • Rapid correct (+2 Tiers) • Error locks ceiling
              </div>
            </div>

            {/* User Input Buffer Display */}
            <div className="flex justify-center">
              <div className="w-64 h-16 rounded-2xl bg-slate-950 border-2 border-violet-500/40 flex items-center justify-center text-3xl font-mono font-bold text-white shadow-inner select-none">
                {assessmentInputBuffer || (
                  <span className="text-slate-600 animate-pulse">_</span>
                )}
              </div>
            </div>

            {/* Mechanical Gaming Virtual Numpad */}
            <div className="max-w-xs mx-auto grid grid-cols-3 gap-2 pt-1 select-none">
              {['7', '8', '9', '4', '5', '6', '1', '2', '3', '±', '0', '⌫'].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (btn === '±') toggleAssessmentNegative();
                    else if (btn === '⌫') backspaceAssessment();
                    else appendAssessmentDigit(btn);
                  }}
                  className="h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 active:bg-slate-600 text-white font-bold font-mono text-lg border border-slate-700/80 shadow-md transition-all select-none touch-manipulation numpad-btn"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Action Bar: Submit & Visible Skip */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xs mx-auto">
              <button
                onClick={handleSkipCurrent}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5 touch-manipulation"
                title="Skip if you don’t know this fact (Shortcut: S or Tab)"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Skip / Don’t know (S)</span>
              </button>

              <button
                onClick={submitAssessmentAnswer}
                disabled={!assessmentInputBuffer || assessmentInputBuffer === '-'}
                className="w-full sm:flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 disabled:opacity-40 disabled:hover:bg-violet-600 text-white font-bold text-sm shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 touch-manipulation"
              >
                <span>Submit (Enter)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Completed Baseline Mind Analysis Report View */}
        {isCompleted && report && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-1">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">Mind Analysis Calibrated!</h3>
              <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                {report.summaryMessage ||
                  'Your mental calculation profile has been mapped across all 7 operational domains.'}
              </p>
            </div>

            {/* Overall Tier & Pace */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Estimated Proficiency Tier</div>
                <div className="text-lg font-bold text-violet-400">{report.overallTier}</div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Ability Rating: θ = {report.overallTheta > 0 ? `+${report.overallTheta}` : report.overallTheta}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Recommended Daily Pace</div>
                <div className="text-lg font-bold text-emerald-400">
                  {report.recommendedDailyPaceMinutes} min / day
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Adaptive cognitive load pacing
                </div>
              </div>
            </div>

            {/* 7-Domain Breakdown Grid */}
            {report.domainProficiencies && report.domainProficiencies.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-violet-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    7-Domain Cognitive Analysis & Technique Recommendations
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {report.domainProficiencies.map((dp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">{dp.label}</span>
                        <span
                          className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase border ${
                            dp.status === 'champion'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : dp.status === 'proficient'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                          }`}
                        >
                          {dp.status === 'champion' ? 'Champion 👑' : dp.status === 'proficient' ? 'Proficient ⚡' : 'Strengthen 🎯'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Tier {dp.tierLevel}: {dp.tierName}</span>
                        <span className="text-violet-400">{dp.accuracy}% Acc</span>
                      </div>

                      {dp.recommendedTechnique && (
                        <div className="pt-1 border-t border-slate-800/80">
                          <div className="text-[10px] font-semibold text-amber-400">
                            Prescribed Technique:
                          </div>
                          <div className="text-[11px] text-slate-300 font-medium">
                            {dp.recommendedTechnique}
                          </div>
                          {dp.techniqueExplanation && (
                            <div className="text-[10px] text-slate-400 leading-snug mt-0.5">
                              {dp.techniqueExplanation}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strengths & Priority Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>Identified Strengths</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {report.strengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>
                        <strong className="text-white">{s.label}:</strong> {s.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-400">
                  <Target className="w-4 h-4" />
                  <span>Priority Focus Areas</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {report.priorityGaps.map((g, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>
                        <strong className="text-white">{g.label}:</strong> {g.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1st-Week Roadmap */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-1.5 font-mono uppercase text-slate-400">
                <Award className="w-4 h-4 text-violet-400" />
                Roadmap to Shakuntala Devi Level
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {report.firstWeekRoadmap.map((step, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-violet-600/30 text-violet-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="leading-tight">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  generateDailyPlan(report.recommendedDailyPaceMinutes);
                  startSession({ mode: 'standard' });
                  setViewMode('practice');
                }}
                className="flex-1 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 touch-manipulation"
              >
                <span>Start My Calibrated Practice</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  generateDailyPlan(report.recommendedDailyPaceMinutes);
                  setViewMode('dashboard');
                }}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-semibold text-xs border border-slate-700 transition-all touch-manipulation"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
