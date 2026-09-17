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
  GraduationCap,
  ShieldCheck,
  SkipForward,
  Activity,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ADD_SUB_LEVELS } from '../core/calcEngine';
import { LearningMode, WorkoutMode } from '../core/types';
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
    tableMasterySession,
    tableMasteryAlert,
    advanceToNextTable,
    dismissTableMasteryAlert,
    learningMode,
    workoutMode,
    setWorkoutMode,
    recentPointsEarned,
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
    restartCurrentSession,
    dismissSessionSummary,
    setViewMode,
  } = useQuizStore();

  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  // Always ensure answer reveal state resets on new question
  useEffect(() => {
    setIsAnswerRevealed(false);
  }, [currentQuestion?.id]);

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
        if (workoutMode === 'practice') {
          e.preventDefault();
          toggleStrategy();
        }
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
      workoutMode,
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
    trackTitle = activeExamSkill ? activeExamSkill.replace(/_/g, ' ').toUpperCase() : 'APEX SPEED QUANT';
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
    <div className="flex-1 flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden bg-transparent text-slate-100 relative z-[2]">
      {/* Top Status Bar - Ultra-compact on mobile */}
      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b border-slate-800/80 shrink-0 h-11 sm:h-13">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              if (sessionAnswered > 0) {
                endSession();
              } else {
                setViewMode('dashboard');
              }
            }}
            className="flex items-center gap-1 p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800 focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Back to dashboard or finish session"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>

          <div className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 max-w-[120px] sm:max-w-none truncate">
            {trackTitle}
          </div>
        </div>

        {/* Center: Session Goal Indicator & Target Speed */}
        <div className="flex items-center gap-2">
          {tableMasterySession ? (
            <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-violet-950/50 border border-violet-500/40 text-[11px] sm:text-xs font-mono shadow-sm">
              <Flame className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span className="font-bold text-violet-200">{tableMasterySession.masteryScore}%</span>
              <span className="text-slate-600 hidden xs:inline">•</span>
              <span className="text-[10px] sm:text-[11px] text-violet-300 font-semibold truncate max-w-[85px] sm:max-w-none">
                {tableMasterySession.stage === 'stage_1_to_10'
                  ? 'Stage 1 (1–10)'
                  : tableMasterySession.stage === 'stage_11_to_20'
                  ? 'Stage 2 (11–20)'
                  : tableMasterySession.stage === 'stage_mixed_sprint'
                  ? 'Sprint (1–20)'
                  : 'Mastered!'}
              </span>
            </div>
          ) : !sessionConfig.isEndless ? (
            <div className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <span className="text-emerald-400 font-bold">{sessionAnswered}</span>
              <span className="text-slate-500"> / {sessionConfig.goalCount}</span>
            </div>
          ) : (
            <div className="text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1">
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
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Pause Button */}
          <button
            onClick={() => (isPaused ? resumeSession() : pauseSession())}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={isPaused ? 'Resume (P)' : 'Pause session (P)'}
            aria-label={isPaused ? 'Resume' : 'Pause'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          {/* Streak Indicator */}
          <motion.div
            animate={streak >= 2 ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all ${
              streak >= 5
                ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-300 border border-amber-500/60 shadow-md shadow-amber-500/30'
                : streak > 0
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${streak >= 5 ? 'text-orange-400 animate-bounce' : streak > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
            <span>{streak}</span>
            {streak >= 3 && (
              <span className="text-[9px] uppercase tracking-wider text-amber-400 font-extrabold hidden sm:inline">
                {streak >= 10 ? 'GODLIKE' : streak >= 5 ? 'MEGA' : 'COMBO'}
              </span>
            )}
          </motion.div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors hidden sm:flex"
            title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
            aria-label={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Sleek Progress Bar Strip (Mobile only — desktop has the full HUD progress bar below) */}
      {tableMasterySession ? (
        <div className="sm:hidden w-full h-1.5 bg-slate-900 overflow-hidden shrink-0">
          <motion.div
            className={`h-full ${
              tableMasterySession.masteryScore >= 85
                ? 'bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400'
                : tableMasterySession.masteryScore >= 50
                ? 'bg-gradient-to-r from-violet-500 to-cyan-400'
                : 'bg-gradient-to-r from-indigo-500 to-violet-500'
            }`}
            initial={{ width: 0 }}
            animate={{
              width: `${Math.min(100, Math.max(0, tableMasterySession.masteryScore))}%`,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      ) : sessionConfig.goalCount ? (
        <div className="sm:hidden w-full h-1 bg-slate-900 overflow-hidden shrink-0">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400"
            initial={{ width: 0 }}
            animate={{
              width: `${Math.min(100, (sessionAnswered / sessionConfig.goalCount) * 100)}%`,
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </div>
      ) : null}

      {/* Workout Mode Switcher Bar: Exercise (Exam) vs Practice (Study) */}
      <div className="flex w-full max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-4 py-1.5 items-center justify-between gap-2 border-b border-slate-800/60 bg-slate-900/20 backdrop-blur-[2px] shrink-0">
        <div className="inline-flex p-0.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <button
            onClick={() => setWorkoutMode('exercise')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              workoutMode === 'exercise'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Exercise Mode: Strict exam conditions with no hints or answer reveals. Awards full 100% normal XP."
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Exercise Mode</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                workoutMode === 'exercise' ? 'bg-black/25 text-emerald-200' : 'bg-slate-800 text-slate-400'
              }`}
            >
              100% XP
            </span>
          </button>
          <button
            onClick={() => setWorkoutMode('practice')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              workoutMode === 'practice'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Practice Mode: Study mode with optional hints and strategy breakdown. Awards 1/20th XP."
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Practice Mode</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                workoutMode === 'practice' ? 'bg-black/25 text-violet-200' : 'bg-slate-800 text-slate-400'
              }`}
            >
              1/20 XP
            </span>
          </button>
        </div>

        {workoutMode === 'exercise' ? (
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline">Exam Conditions</span>
            <span>• Zero Hints</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-violet-300 font-semibold px-2 sm:px-2.5 py-1 rounded-lg bg-violet-950/40 border border-violet-800/40 shrink-0">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">Study Mode</span>
            <span>• Hints On-Demand</span>
          </div>
        )}
      </div>

      {/* When in Practice Mode: 5 Focused Learning Modes Bar */}
      {workoutMode === 'practice' && (
        <div className="flex w-full max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-4 py-1.5 items-center justify-between gap-1.5 overflow-x-auto scrollbar-none border-b border-slate-800/40 bg-slate-900/20 backdrop-blur-[2px] shrink-0">
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
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all shrink-0 ${
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
            <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 font-bold shrink-0 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              <Zap className="w-3 h-3" />
              <span>Target: &lt;{currentQuestion.targetTimeSeconds}s</span>
            </div>
          )}
        </div>
      )}

      {/* Session Progress Bar & Questions Left HUD (Desktop only - mobile has top strip) */}
      {tableMasterySession ? (
        <div className="hidden sm:block w-full max-w-5xl xl:max-w-6xl mx-auto px-4 pt-3 pb-1">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-violet-400" />
                <span>Table ×{tableMasterySession.targetTable} Mastery:</span>
                <span className="text-violet-300 font-mono font-extrabold">{tableMasterySession.masteryScore}%</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30 text-[11px] font-semibold">
                {tableMasterySession.stage === 'stage_1_to_10'
                  ? 'Stage 1: ×1 to ×10 Foundations'
                  : tableMasterySession.stage === 'stage_11_to_20'
                  ? 'Stage 2: ×11 to ×20 Expansion'
                  : tableMasterySession.stage === 'stage_mixed_sprint'
                  ? 'Final Sprint: ×1 to ×20 Automaticity'
                  : 'Table Mastered!'}
              </span>
              {tableMasterySession.retestQueue.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[11px] font-mono">
                  {tableMasterySession.retestQueue.length} re-test queued
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-300 font-medium">
                {Object.values(tableMasterySession.facts).filter((f) => f.status === 'mastered').length} / 20 Facts Mastered
              </span>
            </div>
          </div>

          <div className="w-full h-2 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full transition-all ${
                tableMasterySession.masteryScore >= 85
                  ? 'bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400'
                  : tableMasterySession.masteryScore >= 50
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-400'
                  : 'bg-gradient-to-r from-indigo-500 to-violet-500'
              }`}
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(100, Math.max(0, tableMasterySession.masteryScore))}%`,
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </div>
      ) : (!sessionConfig.isEndless || secondsRemaining !== null) ? (
        <div className="hidden sm:block w-full max-w-5xl xl:max-w-6xl mx-auto px-4 pt-3 pb-1">
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
      ) : null}

      {/* Practice Workspace Container (Responsive Desktop Arena / Mobile Pinned Keypad) */}
      <div
        style={{ WebkitOverflowScrolling: 'touch' }}
        className={`flex-1 w-full mx-auto min-h-0 relative flex flex-col lg:flex-row items-center lg:items-center justify-start sm:justify-center px-3 sm:px-6 py-1.5 sm:py-3 gap-4 lg:gap-8 overflow-y-auto custom-scrollbar overscroll-y-contain ${
          showStrategy ? 'max-w-5xl xl:max-w-6xl' : 'max-w-xl xl:max-w-2xl'
        }`}
      >
        {/* Primary Practice Column: Arithmetic Question & Keypad */}
        <div className="flex-1 flex flex-col justify-between items-center w-full max-w-md mx-auto min-h-0 relative my-0 sm:my-auto py-1">
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
                className="absolute inset-x-2 top-2 z-20 p-4 rounded-2xl bg-amber-950/90 border border-amber-500/40 shadow-2xl backdrop-blur-md space-y-3"
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
                      <p className="text-[11px] text-amber-300/90 font-medium line-clamp-1">
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
                  <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-0.5">
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

                  <div className="p-2 rounded-xl bg-slate-900/90 border border-sky-500/30 space-y-0.5">
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

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-amber-300/70 italic">
                    Scheduled for re-test in 4 items
                  </span>
                  <button
                    onClick={() => {
                      dismissRepairCard();
                      loadNextQuestion();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md shadow-amber-500/30"
                  >
                    <span>Continue (↵)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 1. UPPER ZONE: Centered Arithmetic Question & Input */}
          <div className="flex-1 w-full flex flex-col items-center justify-center min-h-0 py-1">
            {/* Anchor Fact Landmark - Shown only in Practice Mode */}
            {workoutMode === 'practice' && currentQuestion.anchorFactPrompt && !activeRepairCard && (
              <div className="w-full mb-1.5 p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-amber-950/60 to-orange-950/40 border border-amber-500/40 text-amber-200 text-xs shadow-md flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] uppercase font-mono font-bold text-amber-300 mr-1.5 hidden sm:inline">Shortcut:</span>
                  <span className="text-amber-100 font-mono font-semibold text-xs sm:text-sm">{currentQuestion.anchorFactPrompt}</span>
                </div>
              </div>
            )}

            {/* Guided Learn Mode Preview Banner - Shown only in Practice Mode */}
            {workoutMode === 'practice' && learningMode === 'learn' && !activeRepairCard && (
              <div className="w-full mb-1.5 p-2 sm:p-2.5 rounded-xl bg-violet-950/40 border border-violet-500/30 text-xs text-violet-200 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span className="text-xs truncate">Guided: Study strategy, then solve.</span>
              </div>
            )}

            {/* NEURO-COGNITIVE AI BOT TELEMETRY HUD (Table Mastery Mode) */}
            {tableMasterySession && (
              <div className="w-full mb-2 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-slate-950/95 via-violet-950/40 to-slate-950/95 border border-violet-500/30 shadow-lg backdrop-blur-md">
                {/* Header row: AI Identity & Live Pathway Indicator */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {/* Animated Cyber-Neurology Orb */}
                    <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-violet-900/60 border border-violet-400/50 shadow-[0_0_12px_rgba(139,92,246,0.5)]">
                      <motion.div
                        animate={
                          tableMasterySession.aiTelemetry?.isSlip
                            ? { scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }
                            : { scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }
                        }
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className={`absolute inset-0 rounded-full ${
                          tableMasterySession.aiTelemetry?.isSlip
                            ? 'bg-amber-500/30'
                            : tableMasterySession.aiTelemetry?.retrievalPathway === 'direct_associative'
                            ? 'bg-emerald-500/30'
                            : 'bg-violet-500/30'
                        }`}
                      />
                      <Brain className={`w-4 h-4 relative z-10 ${
                        tableMasterySession.aiTelemetry?.isSlip
                          ? 'text-amber-300'
                          : tableMasterySession.aiTelemetry?.retrievalPathway === 'direct_associative'
                          ? 'text-emerald-300'
                          : 'text-violet-300'
                      }`} />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-violet-200">
                          SYNAPSE-AI Copilot
                        </span>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          <Activity className="w-2.5 h-2.5 animate-pulse text-violet-400" />
                          LIVE TELEMETRY
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Table ×{tableMasterySession.targetTable} • Pure Cognitive Latency Analysis
                      </div>
                    </div>
                  </div>

                  {/* Deliberate Practice 1/20th XP Pill */}
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>1/20 XP Deliberate Drill</span>
                    </span>
                  </div>
                </div>

                {/* Live AI Telemetry Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono mb-2">
                  {/* 1. Cognitive Latency */}
                  <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
                    <span className="text-slate-400 text-[9px] uppercase tracking-wider">Net Cognitive Time</span>
                    <span className="text-white font-bold text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {tableMasterySession.aiTelemetry
                        ? `${tableMasterySession.aiTelemetry.netCognitiveLatencyMs}ms`
                        : 'Calibrating...'}
                    </span>
                    <span className="text-[8px] text-slate-500 truncate">
                      Gross − {tableMasterySession.aiTelemetry?.motorLatencyEstimateMs ?? 700}ms motor offset
                    </span>
                  </div>

                  {/* 2. Retrieval Pathway */}
                  <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
                    <span className="text-slate-400 text-[9px] uppercase tracking-wider">Retrieval Pathway</span>
                    <span className={`font-bold text-xs truncate flex items-center gap-1 ${
                      tableMasterySession.aiTelemetry?.isSlip
                        ? 'text-amber-300'
                        : tableMasterySession.aiTelemetry?.retrievalPathway === 'direct_associative'
                        ? 'text-emerald-400'
                        : tableMasterySession.aiTelemetry?.retrievalPathway === 'mental_decomposition'
                        ? 'text-cyan-300'
                        : 'text-violet-300'
                    }`}>
                      {tableMasterySession.aiTelemetry?.isSlip
                        ? 'Keypad Slip Protected'
                        : tableMasterySession.aiTelemetry?.retrievalPathway === 'direct_associative'
                        ? 'Direct Synaptic Recall'
                        : tableMasterySession.aiTelemetry?.retrievalPathway === 'mental_decomposition'
                        ? 'Mental Decomposition'
                        : tableMasterySession.aiTelemetry?.retrievalPathway === 'interference_error'
                        ? 'Associative Interference'
                        : 'Ready for Input'}
                    </span>
                    <span className="text-[8px] text-slate-500 truncate">Neuro-linguistic model</span>
                  </div>

                  {/* 3. Automaticity Velocity */}
                  <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
                    <span className="text-slate-400 text-[9px] uppercase tracking-wider">Automaticity Velocity</span>
                    <span className="text-white font-bold text-xs flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      {tableMasterySession.aiTelemetry?.automaticityVelocity !== undefined
                        ? `${tableMasterySession.aiTelemetry.automaticityVelocity} ops/sec`
                        : '0.0 ops/sec'}
                    </span>
                    <span className="text-[8px] text-slate-500 truncate">Cognitive throughput</span>
                  </div>

                  {/* 4. Slip Safeguard Status */}
                  <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
                    <span className="text-slate-400 text-[9px] uppercase tracking-wider">Keypad Safeguard</span>
                    <span className={`font-bold text-xs truncate flex items-center gap-1 ${
                      tableMasterySession.aiTelemetry?.isSlip
                        ? 'text-amber-300'
                        : 'text-emerald-400'
                    }`}>
                      <ShieldCheck className="w-3 h-3 shrink-0" />
                      {tableMasterySession.aiTelemetry?.isSlip
                        ? 'Slip Shielded'
                        : 'Slip Defense Active'}
                    </span>
                    <span className="text-[8px] text-slate-500 truncate">Biomechanical filtering</span>
                  </div>
                </div>

                {/* AI Diagnosis Banner */}
                {tableMasterySession.aiTelemetry?.aiBotDiagnosis && (
                  <div className={`p-2 rounded-xl text-xs font-mono flex items-center gap-2 border ${
                    tableMasterySession.aiTelemetry.isSlip
                      ? 'bg-amber-950/60 border-amber-500/50 text-amber-200'
                      : tableMasterySession.aiTelemetry.retrievalPathway === 'direct_associative'
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
                      : tableMasterySession.aiTelemetry.retrievalPathway === 'interference_error'
                      ? 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                      : 'bg-violet-950/50 border-violet-500/40 text-violet-200'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
                    <span className="text-[11px] leading-snug">
                      {tableMasterySession.aiTelemetry.aiBotDiagnosis}
                    </span>
                  </div>
                )}
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
              className={`relative w-full p-3.5 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-slate-900/90 border-2 transition-colors flex flex-col items-center justify-center shadow-xl backdrop-blur-xl ${
                lastResult === 'correct'
                  ? 'border-emerald-500/80 bg-emerald-950/20 shadow-emerald-500/20'
                  : lastResult === 'skipped'
                  ? 'border-sky-500/80 bg-sky-950/20 shadow-sky-500/20'
                  : lastResult === 'incorrect'
                  ? 'border-rose-500/80 bg-rose-950/20 shadow-rose-500/20'
                  : 'border-slate-800 shadow-slate-950/60'
              }`}
            >
              {/* Header / Strategy / Helper Bar */}
              {workoutMode === 'exercise' ? (
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 sm:mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold text-xs">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                      Examination Question
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                    No Hints Allowed • 100% XP
                  </span>
                </div>
              ) : (
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 sm:mb-2.5">
                  <div className="flex items-center gap-1.5 max-w-[200px] sm:max-w-[240px] truncate">
                    <span className="flex items-center gap-1 text-violet-400 font-medium truncate text-xs">
                      <Zap className="w-3.5 h-3.5 shrink-0" />
                      {currentQuestion.strategyTitle}
                    </span>
                    {currentQuestion.tableMode && (
                      <span className="px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 text-[10px] font-mono font-bold uppercase shrink-0 border border-violet-500/30 hidden sm:inline">
                        {currentQuestion.tableMode.replace(/_/g, ' ')}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleStrategy()}
                    className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-xs transition-all shrink-0 ${
                      showStrategy
                        ? 'bg-violet-600 text-white font-semibold shadow-md shadow-violet-600/30'
                        : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300'
                    }`}
                    aria-label="Toggle Strategy Guide"
                  >
                    <Lightbulb className={`w-3.5 h-3.5 ${showStrategy ? 'text-amber-300' : 'text-amber-400'}`} />
                    <span>Strategy</span>
                  </button>
                </div>
              )}

              {/* Prompt Display */}
              <div className="my-1.5 sm:my-2.5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion.id}
                    initial={reducedMotion ? {} : { opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reducedMotion ? {} : { opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.12 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-mono text-center"
                  >
                    {currentQuestion.prompt}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Selection reason (Desktop only to prevent vertical pushing on mobile) */}
              {currentQuestion.selectionReason && (
                <div className="hidden sm:flex mb-2 px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 items-center gap-2 max-w-sm text-center shadow-sm">
                  <Brain className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span className="truncate" title={currentQuestion.selectionReason}>
                    <strong className="text-violet-300 font-semibold">Adaptive:</strong> {currentQuestion.selectionReason}
                  </span>
                </div>
              )}

              {/* Feedback Banners (Correct with XP, Skipped or Incorrect) */}
              <AnimatePresence>
                {lastResult === 'correct' && recentPointsEarned !== null && recentPointsEarned > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    className="mb-2 px-3 py-1 rounded-xl bg-emerald-950/80 border border-emerald-500/70 text-xs font-mono flex items-center gap-2 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300 font-bold">
                      +{recentPointsEarned} XP
                    </span>
                    <span className="text-[10px] text-emerald-400/80 font-sans">
                      {tableMasterySession
                        ? '(1/20 XP Table Mastery Drill)'
                        : workoutMode === 'practice'
                        ? '(1/20 XP Practice Mode)'
                        : '(Full Exam XP)'}
                    </span>
                  </motion.div>
                )}

                {lastResult === 'correct' && tableMasterySession?.lastFeedback?.type === 'hesitation' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mb-2 px-3 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500/50 text-xs font-mono flex items-center gap-2 shadow-sm text-amber-200"
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      {tableMasterySession?.lastFeedback?.message || 'Hesitation • Re-testing in 2–3 questions for instant automaticity'}
                    </span>
                  </motion.div>
                )}

                {lastResult === 'skipped' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mb-2 px-3 py-1 rounded-xl bg-sky-950/70 border border-sky-600/70 text-xs font-mono flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="text-slate-200">
                      Correct: <strong className="text-emerald-400 text-sm">{lastCorrectAnswer}</strong>
                    </span>
                  </motion.div>
                )}

                {lastResult === 'incorrect' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mb-2 px-3 py-1.5 rounded-xl bg-rose-950/80 border border-rose-800/80 text-xs font-mono flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 shadow-sm"
                  >
                    <div className="flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span className="text-slate-300">
                        Entered: {lastAnswerSubmitted} | Correct: <strong className="text-emerald-400 text-sm">{lastCorrectAnswer}</strong>
                      </span>
                    </div>
                    {tableMasterySession?.aiTelemetry?.isSlip ? (
                      <span className="text-[10px] text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full font-bold border border-amber-500/40 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Keypad Slip Protected • Mastery score preserved ({tableMasterySession.aiTelemetry.slipType})</span>
                      </span>
                    ) : tableMasterySession ? (
                      <span className="text-[10px] text-rose-300 bg-rose-900/60 px-2 py-0.5 rounded-full font-bold">
                        Mastery score dropped • Re-testing in 2 questions
                      </span>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Buffer / Options Answer Box */}
              {currentQuestion.options && currentQuestion.options.length > 0 ? (
                <div className="w-full max-w-[240px] sm:max-w-xs h-14 sm:h-13 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center px-4 relative overflow-hidden shadow-inner">
                  <span
                    className={`text-xl sm:text-2xl font-mono font-bold tracking-wider ${
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
                      className="absolute right-3 text-emerald-400"
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="w-full max-w-[240px] sm:max-w-xs h-14 sm:h-13 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center px-4 relative overflow-hidden shadow-inner">
                  <span
                    className={`text-2xl sm:text-3xl font-mono font-bold tracking-widest ${
                      lastResult === 'correct'
                        ? 'text-emerald-400'
                        : lastResult === 'incorrect'
                        ? 'text-rose-400'
                        : 'text-white'
                    }`}
                  >
                    {inputBuffer || (
                      <span className="text-slate-600 text-base sm:text-lg font-normal tracking-normal font-sans">
                        Type answer...
                      </span>
                    )}
                  </span>
                  <span className="w-0.5 h-6 sm:h-7 bg-violet-400 ml-1 animate-pulse" />

                  {lastResult === 'correct' && (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-3 text-emerald-400"
                      >
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -38, scale: 1.05 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ duration: 0.35 }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-slate-950 font-black font-mono text-xs shadow-lg shadow-emerald-500/50 flex items-center gap-1.5 z-30 pointer-events-none whitespace-nowrap"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
                        <span>+{recentPointsEarned || (workoutMode === 'exercise' ? 20 : 5)} XP</span>
                        {streak >= 2 && (
                          <span className="bg-black/35 text-amber-200 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold tracking-wider">
                            {streak}X COMBO 🔥
                          </span>
                        )}
                      </motion.div>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Desktop Keyboard Hints Toolbar */}
          <div className="hidden sm:flex items-center justify-center gap-2.5 py-1 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-bold">0-9</kbd>
              <span>Type</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-bold">↵ Enter</kbd>
              <span>Submit</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-bold">S</kbd>
              <span>Skip</span>
            </span>
            {workoutMode === 'practice' && (
              <>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-bold">H</kbd>
                  <span>Strategy</span>
                </span>
              </>
            )}
          </div>

          {/* 2. LOWER ZONE: Pinned Keypad & Ergonomic Controls (Never Pushed Off-Screen) */}
          <div className="w-full max-w-md shrink-0 pb-safe pb-2 sm:pb-3 pt-0.5">
            {/* Compact auxiliary toolbar directly above keypad */}
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 mb-1.5 sm:mb-2">
              <button
                onClick={skipQuestion}
                disabled={isEvaluating}
                className="btn-3d flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors disabled:opacity-40 font-medium"
                title="Skip question (Shortcut: S)"
              >
                <SkipForward className="w-3 h-3 text-amber-400" />
                <span>Skip (S)</span>
              </button>

              {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') && (
                <button
                  onClick={retrySimilarQuestion}
                  className="btn-3d flex items-center gap-1 px-2 py-1 rounded-lg bg-violet-950/60 border border-violet-700/60 text-violet-300 text-xs font-semibold hover:bg-violet-900/60 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retry Similar</span>
                </button>
              )}

              <button
                onClick={toggleTimerVisibility}
                className="hover:text-slate-200 transition-colors inline-flex items-center gap-1 text-slate-400"
                title="Toggle timer visibility"
              >
                {timerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">Timer</span>
              </button>
            </div>

            {/* Multiple Choice Grid vs Numeric Keypad */}
            {currentQuestion.options && currentQuestion.options.length > 0 ? (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {currentQuestion.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectMultipleChoiceOption(opt)}
                      disabled={isEvaluating}
                      className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-slate-900/90 hover:bg-violet-900/30 hover:border-violet-500/80 active:bg-violet-600 active:scale-95 border border-slate-800 text-lg sm:text-2xl font-bold font-mono text-slate-100 transition-all shadow-md flex items-center justify-between group disabled:opacity-50 touch-manipulation select-none"
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-800 group-hover:bg-violet-600 text-slate-300 group-hover:text-white flex items-center justify-center text-xs font-bold border border-slate-700 transition-colors">
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
                    className="btn-3d w-full h-14 sm:h-12 rounded-xl sm:rounded-2xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
                  >
                    <span>Next Question (↵ or Space)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => appendDigit(num.toString())}
                    disabled={isEvaluating}
                    className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-slate-900/90 hover:bg-slate-800 active:bg-violet-600 border border-slate-800 text-xl sm:text-2xl font-bold font-mono text-slate-100 transition-all shadow-sm flex items-center justify-center disabled:opacity-50 touch-manipulation select-none"
                  >
                    {num}
                  </button>
                ))}

                {/* Bottom row: [± and ⌫] [0] [Enter / Next ↵] */}
                <div className="grid grid-cols-2 gap-1">
                  <button
                    onClick={toggleNegative}
                    disabled={isEvaluating}
                    className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-700 border border-slate-800 text-slate-300 font-mono font-bold text-base sm:text-lg transition-all flex items-center justify-center disabled:opacity-50 touch-manipulation select-none"
                    title="Toggle negative (-)"
                  >
                    ±
                  </button>
                  <button
                    onClick={backspace}
                    disabled={isEvaluating}
                    className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-700 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center justify-center disabled:opacity-50 touch-manipulation select-none"
                    title="Backspace"
                  >
                    <Delete className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                <button
                  onClick={() => appendDigit('0')}
                  disabled={isEvaluating}
                  className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-slate-900/90 hover:bg-slate-800 active:bg-violet-600 border border-slate-800 text-xl sm:text-2xl font-bold font-mono text-slate-100 transition-all shadow-sm flex items-center justify-center disabled:opacity-50 touch-manipulation select-none"
                >
                  0
                </button>

                {/* Enter / Next Key */}
                {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') ? (
                  <button
                    onClick={() => loadNextQuestion()}
                    className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-1 touch-manipulation select-none"
                  >
                    <span>Next ↵</span>
                  </button>
                ) : (
                  <button
                    onClick={() => submitAnswer()}
                    disabled={isEvaluating || !inputBuffer || inputBuffer === '-'}
                    className="btn-3d h-14 sm:h-12 lg:h-13 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:bg-slate-900 disabled:text-slate-600 disabled:border-slate-800 text-white font-bold text-sm sm:text-base font-mono transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center touch-manipulation select-none"
                  >
                    Enter ↵
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Side Panel: Step-by-Step Pedagogical Strategy Breakdown */}
        <AnimatePresence>
          {showStrategy && workoutMode === 'practice' && (
            <motion.aside
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:flex flex-col w-[380px] xl:w-[420px] shrink-0 h-full max-h-[calc(100dvh-175px)] overflow-y-auto p-5 rounded-3xl bg-slate-900/95 border border-violet-500/30 shadow-2xl backdrop-blur-xl space-y-4 scrollbar-thin"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {currentQuestion.strategyTitle}
                      </h3>
                      <p className="text-[11px] text-slate-400">Step-by-step mental accumulator breakdown</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isAnswerRevealed ? (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold animate-in fade-in">
                        <span>Answer:</span>
                        <span className="text-emerald-400 text-sm font-black">{currentQuestion.correctAnswer}</span>
                        <button
                          onClick={() => setIsAnswerRevealed(false)}
                          className="ml-1 p-0.5 text-slate-400 hover:text-white rounded transition-colors"
                          title="Hide answer"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsAnswerRevealed(true)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 text-xs font-mono font-semibold transition-all group"
                        title="Answer is hidden by default. Click to reveal."
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Reveal Answer</span>
                      </button>
                    )}
                    <button
                      onClick={() => toggleStrategy(false)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Mental Tip */}
                <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-800/40 text-xs text-violet-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{currentQuestion.mentalTip}</span>
                </div>

                {/* Scannable Steps List */}
                <div className="space-y-2 max-h-52 lg:max-h-[46vh] overflow-y-auto pr-1 scrollbar-thin">
                  {currentQuestion.steps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-slate-300 font-semibold">{step.title}</span>
                        {String(step.intermediateValue) === String(currentQuestion.correctAnswer) && !isAnswerRevealed ? (
                          <button
                            onClick={() => setIsAnswerRevealed(true)}
                            className="text-[10px] text-amber-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-amber-500/30 hover:bg-amber-950/40 transition-colors flex items-center gap-1"
                            title="Tap to reveal final answer"
                          >
                            <Eye className="w-2.5 h-2.5" />
                            <span>Tap to reveal</span>
                          </button>
                        ) : (
                          <span className="text-emerald-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {step.intermediateValue}
                          </span>
                        )}
                      </div>
                      <div className="text-violet-300 font-medium font-sans flex items-center gap-1.5">
                        <span>🔊 Auditory Echo:</span>
                        <span className="italic text-violet-200">&ldquo;{step.subVocalization}&rdquo;</span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{step.explanation}</p>
                    </div>
                  ))}
                </div>

                {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') && (
                  <button
                    onClick={() => loadNextQuestion()}
                    className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-xs text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-violet-600/30"
                  >
                    <span>Understood, proceed to next (↵ or Space)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Slide-Up Bottom Sheet: Step-by-Step Pedagogical Strategy Breakdown */}
      <AnimatePresence>
        {showStrategy && workoutMode === 'practice' && (
          <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggleStrategy(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative z-10 w-full max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-violet-500/40 bg-slate-950/98 backdrop-blur-2xl shadow-2xl p-5 space-y-4"
            >
              <div className="w-12 h-1 rounded-full bg-slate-700 mx-auto -mt-1 mb-2" />
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {currentQuestion.strategyTitle}
                      </h3>
                      <p className="text-[11px] text-slate-400">Step-by-step mental accumulator breakdown</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isAnswerRevealed ? (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold animate-in fade-in">
                        <span>Answer:</span>
                        <span className="text-emerald-400 text-sm font-black">{currentQuestion.correctAnswer}</span>
                        <button
                          onClick={() => setIsAnswerRevealed(false)}
                          className="ml-1 p-0.5 text-slate-400 hover:text-white rounded transition-colors"
                          title="Hide answer"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsAnswerRevealed(true)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 text-xs font-mono font-semibold transition-all group"
                        title="Answer is hidden by default. Click to reveal."
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Reveal Answer</span>
                      </button>
                    )}
                    <button
                      onClick={() => toggleStrategy(false)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Mental Tip */}
                <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-800/40 text-xs text-violet-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{currentQuestion.mentalTip}</span>
                </div>

                {/* Scannable Steps List */}
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1 scrollbar-thin">
                  {currentQuestion.steps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-slate-300 font-semibold">{step.title}</span>
                        {String(step.intermediateValue) === String(currentQuestion.correctAnswer) && !isAnswerRevealed ? (
                          <button
                            onClick={() => setIsAnswerRevealed(true)}
                            className="text-[10px] text-amber-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-amber-500/30 hover:bg-amber-950/40 transition-colors flex items-center gap-1"
                            title="Tap to reveal final answer"
                          >
                            <Eye className="w-2.5 h-2.5" />
                            <span>Tap to reveal</span>
                          </button>
                        ) : (
                          <span className="text-emerald-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {step.intermediateValue}
                          </span>
                        )}
                      </div>
                      <div className="text-violet-300 font-medium font-sans flex items-center gap-1.5">
                        <span>🔊 Auditory Echo:</span>
                        <span className="italic text-violet-200">&ldquo;{step.subVocalization}&rdquo;</span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{step.explanation}</p>
                    </div>
                  ))}
                </div>

                {isEvaluating && (lastResult === 'incorrect' || lastResult === 'skipped') && (
                  <button
                    onClick={() => loadNextQuestion()}
                    className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-xs text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-violet-600/30"
                  >
                    <span>Understood, proceed to next (↵ or Space)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
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
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5 scrollbar-thin"
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
                    restartCurrentSession();
                  }}
                  className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98]"
                >
                  {tPractice('practiceAgain')}
                </button>
                <button
                  onClick={dismissSessionSummary}
                  className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors active:scale-[0.98]"
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
