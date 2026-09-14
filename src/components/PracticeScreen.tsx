'use client';

import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Flame,
  Volume2,
  VolumeX,
  Lightbulb,
  Delete,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Zap,
  Pause,
  Play,
  RotateCcw,
  Eye,
  EyeOff,
  ArrowRight,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  AlertTriangle,
  Brain,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ADD_SUB_LEVELS } from '../core/calcEngine';
import { LearningMode } from '../core/types';
import { useTranslations } from 'next-intl';

interface PracticeScreenProps {
  onOpenTutorial?: () => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({ onOpenTutorial }) => {
  const tPractice = useTranslations('practice');
  const tCommon = useTranslations('common');

  const {
    currentQuestion,
    inputBuffer,
    isEvaluating,
    lastResult,
    lastAnswerSubmitted,
    lastCorrectAnswer,
    showStrategy,
    isPaused,
    streak,
    bestStreak,
    soundEnabled,
    timerVisible,
    reducedMotion,
    activeModule,
    activeAddSubLevel,
    activeTable,
    activeBootcampTable,
    activeExamSkill,
    activeSquareTrack,
    sessionConfig,
    sessionAnswered,
    sessionCorrect,
    sessionSummary,
    sessionStartTime,
    customDrillConfig,
    targetMasteryTable,
    tableMasteryAlert,
    advanceToNextTable,
    dismissTableMasteryAlert,
    learningMode,
    activeRepairCard,
    setLearningMode,
    dismissRepairCard,
    practiceFact,
    appendDigit,
    toggleNegative,
    backspace,
    clearBuffer,
    submitAnswer,
    selectMultipleChoiceOption,
    skipQuestion,
    loadNextQuestion,
    retrySimilarQuestion,
    toggleStrategy,
    toggleSound,
    toggleTimerVisibility,
    pauseSession,
    resumeSession,
    endSession,
    dismissSessionSummary,
    setViewMode,
  } = useQuizStore();

  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (!sessionConfig.timeLimitSeconds) {
      setSecondsRemaining(null);
      return;
    }

    const updateTimer = () => {
      if (isPaused) return;
      const elapsedSec = Math.floor((Date.now() - sessionStartTime) / 1000);
      const rem = Math.max(0, (sessionConfig.timeLimitSeconds || 0) - elapsedSec);
      setSecondsRemaining(rem);
      if (rem <= 0) {
        endSession();
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 500);
    return () => clearInterval(interval);
  }, [sessionConfig.timeLimitSeconds, sessionStartTime, isPaused, endSession]);

  // Load initial question if absent
  useEffect(() => {
    if (!currentQuestion) {
      loadNextQuestion();
    }
  }, [currentQuestion, loadNextQuestion]);

  // Physical Desktop Keyboard Listener
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (isPaused) {
        if (e.key === ' ' || e.key === 'Enter' || e.key.toLowerCase() === 'p') {
          e.preventDefault();
          resumeSession();
        }
        return;
      }

      // Check if question has multiple-choice options (1-4 selection)
      const hasOptions = !!(currentQuestion?.options && currentQuestion.options.length > 0);
      if (hasOptions && !isEvaluating) {
        if (e.key >= '1' && e.key <= '4') {
          const optIdx = parseInt(e.key, 10) - 1;
          if (optIdx < currentQuestion.options!.length) {
            e.preventDefault();
            selectMultipleChoiceOption(currentQuestion.options![optIdx]);
            return;
          }
        }
      }

      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        appendDigit(e.key);
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        toggleNegative();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        backspace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped')) {
          loadNextQuestion();
        } else if (!isEvaluating) {
          submitAnswer();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (activeRepairCard) {
          dismissRepairCard();
        } else if (showStrategy) {
          toggleStrategy(false);
        } else {
          clearBuffer();
        }
      } else if (e.key === ' ' || e.key === 'ArrowRight') {
        if (activeRepairCard) {
          e.preventDefault();
          dismissRepairCard();
          loadNextQuestion();
        } else if (isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped')) {
          e.preventDefault();
          loadNextQuestion();
        }
      } else if (e.key.toLowerCase() === 'h') {
        e.preventDefault();
        toggleStrategy();
      } else if (e.key.toLowerCase() === 's') {
        e.preventDefault();
        if (!isEvaluating) {
          skipQuestion();
        }
      } else if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        if (isPaused) resumeSession();
        else pauseSession();
      }
    },
    [
      isPaused,
      isEvaluating,
      lastResult,
      showStrategy,
      currentQuestion,
      selectMultipleChoiceOption,
      appendDigit,
      toggleNegative,
      backspace,
      submitAnswer,
      loadNextQuestion,
      clearBuffer,
      toggleStrategy,
      skipQuestion,
      resumeSession,
      pauseSession,
      activeRepairCard,
      dismissRepairCard,
    ]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-950 text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          <span>Calibrating arithmetic engine...</span>
        </div>
      </div>
    );
  }

  // Determine current badge / title
  let trackTitle = '';
  if (activeModule === 'add_sub') {
    const lvl = ADD_SUB_LEVELS.find((l) => l.levelNumber === activeAddSubLevel);
    trackTitle = lvl ? lvl.title : `Level ${activeAddSubLevel}`;
  } else if (activeModule === 'multiplication') {
    trackTitle = `Table ${activeTable} Drill`;
  } else if (activeModule === 'tables_bootcamp') {
    trackTitle = `Bootcamp Table ${activeBootcampTable ?? 11}`;
  } else if (activeModule === 'exam_quant') {
    trackTitle = activeExamSkill ? activeExamSkill.replace(/_/g, ' ').toUpperCase() : 'RRB PO QUANT';
  } else if (activeModule === 'fractions_percentages') {
    trackTitle = 'Fraction ↔ Percentage';
  } else if (activeModule === 'custom_drill') {
    if (targetMasteryTable) {
      trackTitle = `Table ×${targetMasteryTable} Automaticity`;
    } else if (customDrillConfig?.name) {
      trackTitle = customDrillConfig.name;
    } else {
      trackTitle = 'Custom Workout';
    }
  } else {
    trackTitle = activeSquareTrack.replace(/_/g, ' ').toUpperCase();
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 select-none">
      {/* Top Status Bar */}
      <div className="w-full max-w-2xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (sessionAnswered > 0) {
                endSession();
              } else {
                setViewMode('dashboard');
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800 focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Back to dashboard or finish session"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>

          <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20 max-w-[140px] sm:max-w-none truncate">
            {trackTitle}
          </div>
        </div>

        {/* Center: Session Goal Indicator & Target Speed */}
        <div className="flex items-center gap-2">
          {!sessionConfig.isEndless ? (
            <div className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
              <span className="text-emerald-400 font-bold">{sessionAnswered}</span>
              <span className="text-slate-500"> / {sessionConfig.goalCount}</span>
            </div>
          ) : (
            <div className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Zen</span>
            </div>
          )}

          {timerVisible && (
            <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>&lt;{currentQuestion.targetTimeSeconds}s</span>
            </div>
          )}
        </div>

        {/* Right HUD: Pause, Streak, Sound */}
        <div className="flex items-center gap-2">
          {/* Pause Button */}
          <button
            onClick={() => (isPaused ? resumeSession() : pauseSession())}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={isPaused ? 'Resume (P)' : 'Pause session (P)'}
            aria-label={isPaused ? 'Resume' : 'Pause'}
          >
            {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
          </button>

          {/* Streak Indicator */}
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              streak > 0
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
          >
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
            <span>{streak}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
            aria-label={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 5 Focused Learning Modes Bar */}
      <div className="w-full max-w-2xl mx-auto px-4 py-2 flex items-center justify-between gap-1.5 overflow-x-auto scrollbar-none border-b border-slate-800/60 bg-slate-950/60">
        <div className="flex items-center gap-1.5">
          {(
            [
              { id: 'learn', label: 'Learn', icon: BookOpen, desc: 'Strategy Breakdown + Guided Practice' },
              { id: 'recall', label: 'Recall', icon: Target, desc: 'Pure Retrieval Practice' },
              { id: 'speed', label: 'Speed', icon: Zap, desc: 'Speed Fluency (<2s Goal)' },
              { id: 'repair', label: 'Repair', icon: RotateCcw, desc: 'Target Confusions & Slips' },
              { id: 'review', label: 'Review', icon: Clock, desc: 'Spaced Retrieval Due Facts' },
            ] as const
          ).map((m) => {
            const Icon = m.icon;
            const isActive = learningMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setLearningMode(m.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
                }`}
                title={m.desc}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {learningMode === 'speed' && (
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-amber-400 font-bold shrink-0 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
            <Zap className="w-3 h-3" />
            <span>Target: &lt;{currentQuestion.targetTimeSeconds}s</span>
          </div>
        )}
      </div>

      {/* Session Progress Bar & Questions Left HUD */}
      {(!sessionConfig.isEndless || secondsRemaining !== null) && (
        <div className="w-full max-w-2xl mx-auto px-4 pt-3 pb-1">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">
                {sessionConfig.goalCount
                  ? `${sessionAnswered} of ${sessionConfig.goalCount} Questions`
                  : `${sessionAnswered} Questions Completed`}
              </span>
              {sessionConfig.goalCount && sessionConfig.goalCount > sessionAnswered && (
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[11px] font-mono">
                  {sessionConfig.goalCount - sessionAnswered} left
                </span>
              )}
            </div>

            {secondsRemaining !== null && (
              <div
                className={`flex items-center gap-1 font-mono font-bold text-xs px-2 py-0.5 rounded ${
                  secondsRemaining < 30
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse'
                    : secondsRemaining < 60
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {Math.floor(secondsRemaining / 60)}:
                  {(secondsRemaining % 60).toString().padStart(2, '0')} left
                </span>
              </div>
            )}
          </div>

          {sessionConfig.goalCount && (
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(100, (sessionAnswered / sessionConfig.goalCount) * 100)}%`,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          )}
        </div>
      )}

      {/* Main Zen Drill Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-4 max-w-md mx-auto w-full relative">
        {/* Pause Overlay */}
        <AnimatePresence>
          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center space-y-5 rounded-3xl"
            >
              <div className="p-4 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Pause className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{tPractice('sessionPaused')}</h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Your timer is frozen. Take a breath and resume whenever your working memory is ready.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 w-full max-w-xs">
                <button
                  onClick={resumeSession}
                  className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {tPractice('resume')}
                </button>
                <button
                  onClick={endSession}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  {tPractice('returnDashboard')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remediation Repair Card Overlay */}
        <AnimatePresence>
          {activeRepairCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              className="w-full mb-4 p-4 rounded-2xl bg-amber-950/50 border border-amber-500/40 shadow-xl backdrop-blur-md space-y-3"
            >
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-200 uppercase tracking-wider font-mono">
                      Remediation Repair: {activeRepairCard.prompt}
                    </h4>
                    <p className="text-[11px] text-amber-300/90 font-medium">
                      {activeRepairCard.patternExplanation}
                    </p>
                  </div>
                </div>
                <button
                  onClick={dismissRepairCard}
                  className="text-xs px-2.5 py-1 rounded-lg bg-amber-900/60 hover:bg-amber-800/80 text-amber-200 border border-amber-700/50 font-semibold"
                >
                  Dismiss
                </button>
              </div>

              {/* Anchor & Contrast Fact Anchors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {/* Anchor Fact */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-1">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    Anchor Fact
                  </div>
                  <div className="text-sm font-bold text-white">
                    {activeRepairCard.anchorFact.prompt} = {activeRepairCard.anchorFact.correctAnswer}
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    {activeRepairCard.anchorFact.relationship}
                  </p>
                </div>

                {/* Contrast Fact */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 space-y-1">
                  <div className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                    Contrast Fact
                  </div>
                  <div className="text-sm font-bold text-white">
                    {activeRepairCard.contrastFact.prompt} = {activeRepairCard.contrastFact.correctAnswer}
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    {activeRepairCard.contrastFact.preventConfusionTip}
                  </p>
                </div>
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-amber-300/70 italic">
                  Scheduled for delayed re-test in 4 items
                </span>
                <button
                  onClick={() => {
                    dismissRepairCard();
                    loadNextQuestion();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md shadow-amber-500/30"
                >
                  <span>Continue Drill (↵)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Anchor Fact Landmark & Mental Shortcut Banner */}
        {currentQuestion.anchorFactPrompt && !activeRepairCard && (
          <div className="w-full mb-3 p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-orange-950/40 border border-amber-500/40 text-amber-200 text-xs shadow-lg backdrop-blur-md flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="font-bold text-amber-300 uppercase tracking-wider text-[10px] font-mono">
                Anchor Fact Landmark & Mental Shortcut
              </div>
              <div className="text-amber-100 font-medium font-mono text-sm">
                {currentQuestion.anchorFactPrompt}
              </div>
            </div>
          </div>
        )}

        {/* Guided Learn Mode Preview Banner */}
        {learningMode === 'learn' && !activeRepairCard && (
          <div className="w-full mb-3 p-3 rounded-2xl bg-violet-950/40 border border-violet-500/30 text-xs text-violet-200 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-violet-300">Guided Learn Mode: </span>
              <span>Study the strategy below and type the answer once you feel the accumulator pattern.</span>
            </div>
          </div>
        )}

        {/* Arithmetic Card */}
        <motion.div
          animate={
            reducedMotion
              ? {}
              : lastResult === 'correct'
              ? { scale: [1, 1.03, 1], borderColor: '#10b981' }
              : lastResult === 'skipped'
              ? { scale: [1, 1.01, 1], borderColor: '#38bdf8' }
              : lastResult === 'incorrect'
              ? { x: [-6, 6, -4, 4, -2, 2, 0], borderColor: '#ef4444' }
              : {}
          }
          transition={{ duration: 0.25 }}
          className={`relative w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 transition-colors flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl ${
            lastResult === 'correct'
              ? 'border-emerald-500/80 bg-emerald-950/20 shadow-emerald-500/20'
              : lastResult === 'skipped'
              ? 'border-sky-500/80 bg-sky-950/20 shadow-sky-500/20'
              : lastResult === 'incorrect'
              ? 'border-rose-500/80 bg-rose-950/20 shadow-rose-500/20'
              : 'border-slate-800 shadow-slate-950/60'
          }`}
        >
          {/* Strategy / Tip Helper Bar */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
            <div className="flex items-center gap-1.5 max-w-[240px] truncate">
              <span className="flex items-center gap-1 text-violet-400 font-medium truncate">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                {currentQuestion.strategyTitle}
              </span>
              {currentQuestion.tableMode && (
                <span className="px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 text-[10px] font-mono font-bold uppercase shrink-0 border border-violet-500/30">
                  {currentQuestion.tableMode.replace(/_/g, ' ')}
                </span>
              )}
            </div>
            <button
              onClick={() => toggleStrategy()}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
              aria-label="Toggle Strategy Guide"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Strategy (H)</span>
            </button>
          </div>

          {/* Prompt Display */}
          <div className="my-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reducedMotion ? {} : { opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.12 }}
                className="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono text-center"
              >
                {currentQuestion.prompt}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Why this question explanation badge */}
          {currentQuestion.selectionReason && (
            <div className="mb-4 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2 max-w-sm text-center shadow-sm">
              <Brain className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span className="truncate" title={currentQuestion.selectionReason}>
                <strong className="text-violet-300 font-semibold">Adaptive reason:</strong> {currentQuestion.selectionReason}
              </span>
            </div>
          )}

          {/* Correct / Incorrect / Skipped Clear Comparison Pill */}
          <AnimatePresence>
            {lastResult === 'skipped' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mb-3 px-4 py-2 rounded-xl bg-sky-950/70 border border-sky-600/70 text-xs font-mono flex items-center gap-2 shadow-inner"
              >
                <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="text-sky-300 font-bold">Marking this for learning.</span> Correct:{' '}
                  <strong className="text-emerald-400 text-sm">{lastCorrectAnswer}</strong>
                </span>
              </motion.div>
            )}

            {lastResult === 'incorrect' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mb-3 px-3.5 py-1.5 rounded-xl bg-rose-950/70 border border-rose-800/80 text-xs font-mono flex items-center gap-2 shadow-inner"
              >
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-slate-300">
                  You entered: {lastAnswerSubmitted}. Correct:{' '}
                  <strong className="text-emerald-400 text-sm">{lastCorrectAnswer}</strong>
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Buffer / Multiple Choice Prompt Display */}
          {currentQuestion.options && currentQuestion.options.length > 0 ? (
            <div className="w-full max-w-xs h-16 rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center px-4 relative overflow-hidden shadow-inner">
              <span
                className={`text-2xl sm:text-3xl font-mono font-bold tracking-wider ${
                  lastResult === 'correct'
                    ? 'text-emerald-400'
                    : lastResult === 'incorrect'
                    ? 'text-rose-400'
                    : 'text-slate-400'
                }`}
              >
                {isEvaluating ? (lastAnswerSubmitted ?? '...') : 'Select Option (1-4)'}
              </span>
              {lastResult === 'correct' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 text-emerald-400"
                >
                  <CheckCircle2 className="w-6 h-6" />
                </motion.div>
              )}
            </div>
          ) : (
            <div className="w-full max-w-xs h-16 rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center px-4 relative overflow-hidden shadow-inner">
              <span
                className={`text-3xl sm:text-4xl font-mono font-bold tracking-widest ${
                  lastResult === 'correct'
                    ? 'text-emerald-400'
                    : lastResult === 'incorrect'
                    ? 'text-rose-400'
                    : 'text-white'
                }`}
              >
                {inputBuffer || (
                  <span className="text-slate-600 text-xl font-normal tracking-normal font-sans">
                    Type answer...
                  </span>
                )}
              </span>
              <span className="w-0.5 h-7 bg-violet-400 ml-1 animate-pulse" />

              {/* Micro feedback icon */}
              {lastResult === 'correct' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 text-emerald-400"
                >
                  <CheckCircle2 className="w-6 h-6" />
                </motion.div>
              )}
            </div>
          )}
        </motion.div>

        {/* Post-Error Action Row */}
        {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') && (
          <div className="w-full mt-3 flex items-center gap-2">
            <button
              onClick={retrySimilarQuestion}
              className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-violet-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Practice Similar
            </button>
            <button
              onClick={() => loadNextQuestion()}
              className="flex-1 py-2.5 px-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-xs font-bold text-white shadow-md shadow-violet-600/30 flex items-center justify-center gap-1.5 transition-colors"
            >
              Next Question (↵)
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Custom Ergonomic Input Area: Options vs Keypad */}
        {currentQuestion.options && currentQuestion.options.length > 0 ? (
          <div className="w-full mt-4 space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <span className="uppercase tracking-wider">Multiple Choice</span>
              <span className="text-violet-400">Keys [1] [2] [3] [4] or tap</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => selectMultipleChoiceOption(opt)}
                  disabled={isEvaluating}
                  className="h-16 sm:h-20 p-4 rounded-2xl bg-slate-900/90 hover:bg-violet-900/30 hover:border-violet-500/80 active:bg-violet-600 active:scale-95 border border-slate-800 text-xl sm:text-2xl font-bold font-mono text-slate-100 transition-all shadow-md flex items-center justify-between group disabled:opacity-50"
                >
                  <span className="w-8 h-8 rounded-xl bg-slate-800 group-hover:bg-violet-600 text-slate-300 group-hover:text-white flex items-center justify-center text-xs font-bold border border-slate-700 transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-right font-black tracking-wide text-white group-hover:text-violet-200">
                    {opt}
                  </span>
                </button>
              ))}
            </div>
            {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') && (
              <button
                onClick={() => loadNextQuestion()}
                className="w-full h-13 mt-3 rounded-2xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-bold text-base transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
              >
                <span>Next Question (↵ or Space)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          <div className="w-full mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => appendDigit(num.toString())}
                disabled={isEvaluating}
                className="h-13 sm:h-15 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 active:bg-violet-600 active:scale-95 border border-slate-800 text-2xl font-bold font-mono text-slate-100 transition-all shadow-md active:shadow-none flex items-center justify-center disabled:opacity-50"
              >
                {num}
              </button>
            ))}

            {/* Bottom row: Negative toggle / Backspace, 0, Submit / Next */}
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={toggleNegative}
                disabled={isEvaluating}
                className="h-13 sm:h-15 rounded-2xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-700 border border-slate-800 text-slate-300 font-mono font-bold text-lg transition-all flex items-center justify-center disabled:opacity-50"
                title="Toggle negative number (-)"
              >
                ±
              </button>
              <button
                onClick={backspace}
                disabled={isEvaluating}
                className="h-13 sm:h-15 rounded-2xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-700 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all flex items-center justify-center disabled:opacity-50"
                title="Backspace"
              >
                <Delete className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={() => appendDigit('0')}
              disabled={isEvaluating}
              className="h-13 sm:h-15 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 active:bg-violet-600 active:scale-95 border border-slate-800 text-2xl font-bold font-mono text-slate-100 transition-all shadow-md active:shadow-none flex items-center justify-center disabled:opacity-50"
            >
              0
            </button>

            {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') ? (
              <button
                onClick={() => loadNextQuestion()}
                className="h-13 sm:h-15 rounded-2xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-bold text-base transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center"
              >
                Next (↵)
              </button>
            ) : (
              <button
                onClick={() => submitAnswer()}
                disabled={isEvaluating || !inputBuffer || inputBuffer === '-'}
                className="h-13 sm:h-15 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 disabled:bg-slate-900 disabled:text-slate-600 disabled:border-slate-800 text-white font-bold text-lg font-mono transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center"
              >
                Enter
              </button>
            )}
          </div>
        )}

        {/* Auxiliary actions: Skip, Tutorial, Timer toggle */}
        <div className="mt-4 flex items-center justify-between w-full text-xs text-slate-400 px-1">
          <button
            onClick={skipQuestion}
            disabled={isEvaluating}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors disabled:opacity-40 font-medium"
            title="Skip if you don't know this fact (Shortcut: S)"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Skip / I don’t know (S)</span>
          </button>

          {onOpenTutorial && (
            <button
              onClick={onOpenTutorial}
              className="hover:text-violet-400 transition-colors inline-flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pedagogy Guide</span>
            </button>
          )}

          <button
            onClick={toggleTimerVisibility}
            className="hover:text-slate-200 transition-colors inline-flex items-center gap-1"
            title="Toggle timer visibility"
          >
            {timerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>Timer</span>
          </button>
        </div>
      </div>

      {/* Step-by-Step Pedagogical Strategy Breakdown Drawer */}
      <AnimatePresence>
        {showStrategy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl p-5 shadow-2xl z-20"
          >
            <div className="max-w-xl mx-auto space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {currentQuestion.strategyTitle}
                    </h3>
                    <p className="text-xs text-slate-400">Step-by-step mental accumulator breakdown</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-bold border border-slate-700">
                    Answer: {currentQuestion.correctAnswer}
                  </span>
                  <button
                    onClick={() => toggleStrategy(false)}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Mental Tip */}
              <div className="p-3 rounded-lg bg-violet-950/30 border border-violet-800/40 text-xs text-violet-200 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>{currentQuestion.mentalTip}</span>
              </div>

              {/* Scannable Steps List */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {currentQuestion.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-300 font-semibold">{step.title}</span>
                      <span className="text-emerald-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {step.intermediateValue}
                      </span>
                    </div>
                    <div className="text-violet-300 font-medium font-sans flex items-center gap-1.5">
                      <span>🔊 Auditory Echo:</span>
                      <span className="italic">{step.subVocalization}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{step.explanation}</p>
                  </div>
                ))}
              </div>

              {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') && (
                <button
                  onClick={() => loadNextQuestion()}
                  className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-xs text-white transition-colors flex items-center justify-center gap-1"
                >
                  <span>Understood, proceed to next (Press Enter or Space)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Session Summary Modal */}
      <AnimatePresence>
        {sessionSummary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="w-full max-w-lg p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5"
            >
              <div className="text-center space-y-1">
                <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">{tPractice('sessionComplete')}</h3>
                <p className="text-xs text-slate-400">
                  {tPractice('congratulations')}
                </p>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">{tCommon('accuracy')}</div>
                  <div className="text-lg font-bold text-emerald-400">
                    {sessionSummary.accuracy}%
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">{tCommon('speed')}</div>
                  <div className="text-lg font-bold text-sky-400">
                    {sessionSummary.cpm} <span className="text-[10px] font-normal">CPM</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">{tPractice('avgSpeed')}</div>
                  <div className="text-lg font-bold text-violet-400">
                    {(sessionSummary.avgResponseTimeMs / 1000).toFixed(1)}s
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] uppercase">{tPractice('totalAnswered')}</div>
                  <div className="text-lg font-bold text-white">
                    {sessionSummary.correctCount}/{sessionSummary.totalAnswered}
                  </div>
                </div>
              </div>

              {/* Recommended Next Step */}
              <div className="p-3.5 rounded-2xl bg-violet-950/30 border border-violet-800/40 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-violet-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>Recommended Next: {sessionSummary.recommendedNextDrill.title}</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {sessionSummary.recommendedNextDrill.reason}
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    dismissSessionSummary();
                    loadNextQuestion('standard');
                  }}
                  className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all"
                >
                  {tPractice('practiceAgain')}
                </button>
                <button
                  onClick={dismissSessionSummary}
                  className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
                >
                  {tPractice('returnDashboard')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table Automaticity Level-Up Celebration Modal */}
      <AnimatePresence>
        {tableMasteryAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-slate-900 border-2 border-emerald-500/60 rounded-2xl p-6 shadow-2xl shadow-emerald-500/20 text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/20">
                🏆
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Automaticity Achieved!
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Table ×{tableMasteryAlert.table} Mastered!
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  You have hit zero-hesitation retrieval speed across all multiples of {tableMasteryAlert.table}!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Accuracy</div>
                  <div className="text-lg font-black text-emerald-400 font-mono">
                    {tableMasteryAlert.accuracy}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Median Speed</div>
                  <div className="text-lg font-black text-cyan-400 font-mono">
                    {(tableMasteryAlert.medianLatencyMs / 1000).toFixed(2)}s
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => advanceToNextTable()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Advance to Table ×{tableMasteryAlert.nextTable}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => dismissTableMasteryAlert()}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Keep Practicing Table ×{tableMasteryAlert.table}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
