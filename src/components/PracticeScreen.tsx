'use client';

import React, { useEffect, useCallback } from 'react';
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
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ADD_SUB_LEVELS } from '../core/calcEngine';

interface PracticeScreenProps {
  onOpenTutorial?: () => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({ onOpenTutorial }) => {
  const {
    currentQuestion,
    inputBuffer,
    isEvaluating,
    lastResult,
    showStrategy,
    streak,
    bestStreak,
    soundEnabled,
    activeModule,
    activeAddSubLevel,
    activeTable,
    activeSquareTrack,
    appendDigit,
    backspace,
    clearBuffer,
    submitAnswer,
    loadNextQuestion,
    toggleStrategy,
    toggleSound,
    setViewMode,
  } = useQuizStore();

  // Load initial question if absent
  useEffect(() => {
    if (!currentQuestion) {
      loadNextQuestion();
    }
  }, [currentQuestion, loadNextQuestion]);

  // Physical Desktop Keyboard Listener
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore if input/textarea has focus
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        appendDigit(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        backspace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (showStrategy && lastResult === 'incorrect') {
          // If viewing error breakdown, Enter advances to next question
          loadNextQuestion();
        } else {
          submitAnswer();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (showStrategy) {
          toggleStrategy(false);
        } else {
          clearBuffer();
        }
      } else if (e.key === ' ' || e.key === 'ArrowRight') {
        if (showStrategy && lastResult === 'incorrect') {
          e.preventDefault();
          loadNextQuestion();
        }
      } else if (e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 's') {
        e.preventDefault();
        toggleStrategy();
      }
    },
    [appendDigit, backspace, clearBuffer, submitAnswer, loadNextQuestion, showStrategy, lastResult, toggleStrategy]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-slate-400 animate-pulse font-mono">Initializing drill engine...</div>
      </div>
    );
  }

  // Determine current badge / title
  let trackTitle = '';
  if (activeModule === 'add_sub') {
    const lvl = ADD_SUB_LEVELS.find((l) => l.levelNumber === activeAddSubLevel);
    trackTitle = lvl ? lvl.title : `Level ${activeAddSubLevel}`;
  } else if (activeModule === 'multiplication') {
    trackTitle = `Table ${activeTable} Mastery`;
  } else {
    trackTitle = activeSquareTrack.replace('_', ' ').toUpperCase();
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 select-none">
      {/* Top Header / Status Bar */}
      <div className="w-full max-w-2xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
        <button
          onClick={() => setViewMode('dashboard')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </button>

        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
            {trackTitle}
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>&lt;{currentQuestion.targetTimeSeconds}s</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak Indicator */}
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              streak > 0
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20 animate-pulse-fast'
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
          >
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
            <span>{streak}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={soundEnabled ? 'Mute audio' : 'Unmute audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Zen Drill Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-4 max-w-md mx-auto w-full">
        {/* Arithmetic Prompt Card with Glow / Shake Effects */}
        <motion.div
          animate={
            lastResult === 'correct'
              ? { scale: [1, 1.04, 1], borderColor: '#10b981' }
              : lastResult === 'incorrect'
              ? { x: [-8, 8, -6, 6, -3, 3, 0], borderColor: '#ef4444' }
              : {}
          }
          transition={{ duration: 0.3 }}
          className={`relative w-full p-8 rounded-3xl bg-slate-900/90 border-2 transition-colors flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl ${
            lastResult === 'correct'
              ? 'border-emerald-500/80 bg-emerald-950/20 shadow-emerald-500/20'
              : lastResult === 'incorrect'
              ? 'border-rose-500/80 bg-rose-950/20 shadow-rose-500/20'
              : 'border-slate-800 shadow-slate-950/60'
          }`}
        >
          {/* Strategy / Tip Helper Pill */}
          <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-violet-400 font-medium">
              <Zap className="w-3.5 h-3.5" />
              {currentQuestion.strategyTitle}
            </span>
            <button
              onClick={() => toggleStrategy()}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <Lightbulb className="w-3 h-3 text-amber-400" />
              Strategy (H)
            </button>
          </div>

          {/* High-Contrast Prompt */}
          <div className="my-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono text-center"
              >
                {currentQuestion.prompt}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Input Buffer Display with Blinking Cursor */}
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
                <span className="text-slate-600 text-2xl font-normal tracking-normal font-sans">
                  Type answer...
                </span>
              )}
            </span>
            <span className="w-0.5 h-7 bg-violet-400 ml-1 animate-pulse" />

            {/* Micro feedback icons */}
            {lastResult === 'correct' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 text-emerald-400"
              >
                <CheckCircle2 className="w-6 h-6" />
              </motion.div>
            )}
            {lastResult === 'incorrect' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 text-rose-400"
              >
                <XCircle className="w-6 h-6" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Custom Ergonomic Numeric Keypad (Optimized for rapid thumb taps) */}
        <div className="w-full mt-6 grid grid-cols-3 gap-2.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => appendDigit(num.toString())}
              disabled={isEvaluating}
              className="h-14 sm:h-16 rounded-2xl bg-slate-900/90 hover:bg-slate-800 active:bg-violet-600 active:scale-95 border border-slate-800 text-2xl font-bold font-mono text-slate-100 transition-all shadow-md active:shadow-none flex items-center justify-center disabled:opacity-50"
            >
              {num}
            </button>
          ))}

          {/* Bottom row: Clear / Backspace, 0, Submit / Next */}
          <button
            onClick={backspace}
            disabled={isEvaluating}
            className="h-14 sm:h-16 rounded-2xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-700 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all flex items-center justify-center disabled:opacity-50"
            title="Backspace"
          >
            <Delete className="w-6 h-6" />
          </button>

          <button
            onClick={() => appendDigit('0')}
            disabled={isEvaluating}
            className="h-14 sm:h-16 rounded-2xl bg-slate-900/90 hover:bg-slate-800 active:bg-violet-600 active:scale-95 border border-slate-800 text-2xl font-bold font-mono text-slate-100 transition-all shadow-md active:shadow-none flex items-center justify-center disabled:opacity-50"
          >
            0
          </button>

          {lastResult === 'incorrect' && showStrategy ? (
            <button
              onClick={loadNextQuestion}
              className="h-14 sm:h-16 rounded-2xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-bold text-base transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center"
            >
              Next (↵)
            </button>
          ) : (
            <button
              onClick={submitAnswer}
              disabled={isEvaluating || !inputBuffer}
              className="h-14 sm:h-16 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 disabled:bg-slate-900 disabled:text-slate-600 disabled:border-slate-800 text-white font-bold text-lg font-mono transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center"
            >
              Enter
            </button>
          )}
        </div>

        {/* Quick Tutorial Trigger */}
        {onOpenTutorial && (
          <div className="mt-4 text-center">
            <button
              onClick={onOpenTutorial}
              className="text-xs text-slate-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              How does the Left-to-Right algorithm work?
            </button>
          </div>
        )}
      </div>

      {/* Step-by-Step Pedagogical Breakdown Modal / Drawer */}
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
                    <p className="text-xs text-slate-400">Mental decomposition breakdown</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-emerald-400 font-semibold">
                    Correct: {currentQuestion.correctAnswer}
                  </span>
                  <button
                    onClick={() => toggleStrategy(false)}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
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

              {/* Steps List */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {currentQuestion.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-slate-300 font-semibold">{step.title}</span>
                      <span className="text-emerald-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {step.intermediateValue}
                      </span>
                    </div>
                    <div className="text-violet-300 font-medium font-sans">
                      🔊 {step.subVocalization}
                    </div>
                    <p className="text-slate-400">{step.explanation}</p>
                  </div>
                ))}
              </div>

              {lastResult === 'incorrect' && (
                <button
                  onClick={loadNextQuestion}
                  className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-xs text-white transition-colors"
                >
                  Got it, try next question (Press Enter or Space)
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
