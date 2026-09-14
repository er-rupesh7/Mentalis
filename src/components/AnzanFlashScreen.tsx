'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  Brain,
  Layers,
  Timer,
  Sliders,
  Award,
  Eye,
  EyeOff,
  History,
  Info,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { generateAnzanSequence } from '../core/calcEngine';
import { AnzanSequence, AnzanConfig } from '../core/types';
import { soundEngine } from '../core/soundEngine';
import { useTranslations } from 'next-intl';
import { getLocalizedAnzanPreset } from '../i18n/contentTranslations';

const PRESETS: { name: string; description: string; config: AnzanConfig }[] = [
  {
    name: 'Novice Warmup',
    description: '5 numbers, 1-digit, 1200ms. Ideal for gentle phonological buffer pacing.',
    config: { count: 5, digits: 1, intervalMs: 1200, allowNegatives: false, presetName: 'Novice Warmup' },
  },
  {
    name: 'Standard Flow',
    description: '5 numbers, 2-digit, 800ms. Standard rhythm for active working memory.',
    config: { count: 5, digits: 2, intervalMs: 800, allowNegatives: false, presetName: 'Standard Flow' },
  },
  {
    name: 'Soroban Pro',
    description: '8 numbers, 2-digit, 500ms, with negatives. Fast sub-vocal bypass.',
    config: { count: 8, digits: 2, intervalMs: 500, allowNegatives: true, presetName: 'Soroban Pro' },
  },
  {
    name: 'Grandmaster Flash',
    description: '10 numbers, 3-digit, 300ms, with negatives. Elite mental soroban speed.',
    config: { count: 10, digits: 3, intervalMs: 300, allowNegatives: true, presetName: 'Grandmaster Flash' },
  },
];

export const AnzanFlashScreen: React.FC = () => {
  const {
    anzanConfig,
    updateAnzanConfig,
    anzanStats,
    recordAnzanRun,
    soundEnabled,
    toggleSound,
    reducedMotion,
    toggleReducedMotion,
    setViewMode,
    locale,
  } = useQuizStore();

  const tAnzan = useTranslations('anzan');
  const tCommon = useTranslations('common');

  const [phase, setPhase] = useState<'idle' | 'countdown' | 'flashing' | 'input' | 'result'>('idle');
  const [countdown, setCountdown] = useState<number>(3);
  const [activeSequence, setActiveSequence] = useState<AnzanSequence | null>(null);
  const [currentFlashIndex, setCurrentFlashIndex] = useState<number>(-1);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [userBuffer, setUserBuffer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showReview, setShowReview] = useState<boolean>(false);

  const isMountedRef = useRef<boolean>(true);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const flashStartTimeRef = useRef<number>(Date.now());

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      clearAllTimers();
    };
  }, [clearAllTimers]);

  const scheduleTimeout = useCallback((fn: () => void, delayMs: number) => {
    const id = setTimeout(() => {
      if (isMountedRef.current) fn();
    }, delayMs);
    timersRef.current.push(id);
    return id;
  }, []);

  const handleCancel = useCallback(() => {
    clearAllTimers();
    setPhase('idle');
    setCurrentNumber(null);
    setCurrentFlashIndex(-1);
    setUserBuffer('');
    setIsCorrect(null);
    setShowReview(false);
  }, [clearAllTimers]);

  const startFlashingSequence = useCallback((seq: AnzanSequence) => {
    let index = 0;
    flashStartTimeRef.current = Date.now();

    const flashNext = () => {
      if (!isMountedRef.current) return;
      if (index < seq.numbers.length) {
        setCurrentFlashIndex(index);
        setCurrentNumber(seq.numbers[index]);
        soundEngine.playTick();

        // Active display duration
        scheduleTimeout(() => {
          if (!isMountedRef.current) return;
          // Saccadic blank screen reset gap (140ms)
          setCurrentNumber(null);
          index += 1;

          scheduleTimeout(() => {
            if (!isMountedRef.current) return;
            flashNext();
          }, 140);
        }, seq.intervalMs);
      } else {
        // All numbers flashed; transition to input phase
        setCurrentFlashIndex(-1);
        setCurrentNumber(null);
        setPhase('input');
      }
    };

    flashNext();
  }, [scheduleTimeout]);

  const handleStartFlash = useCallback((customSeq?: AnzanSequence) => {
    clearAllTimers();
    const seq = customSeq || generateAnzanSequence(anzanConfig);
    setActiveSequence(seq);
    setUserBuffer('');
    setIsCorrect(null);
    setShowReview(false);
    setPhase('countdown');
    setCountdown(3);
    soundEngine.playTick();

    // Clean 3-second countdown without setInterval leaks
    scheduleTimeout(() => {
      setCountdown(2);
      soundEngine.playTick();
      scheduleTimeout(() => {
        setCountdown(1);
        soundEngine.playTick();
        scheduleTimeout(() => {
          setPhase('flashing');
          startFlashingSequence(seq);
        }, 1000);
      }, 1000);
    }, 1000);
  }, [anzanConfig, clearAllTimers, scheduleTimeout, startFlashingSequence]);

  const handleDigit = useCallback((d: string) => {
    if (phase !== 'input') return;
    setUserBuffer((prev) => (prev.length < 8 ? prev + d : prev));
  }, [phase]);

  const handleNegative = useCallback(() => {
    if (phase !== 'input') return;
    setUserBuffer((prev) => (prev.startsWith('-') ? prev.substring(1) : '-' + prev));
  }, [phase]);

  const handleBackspace = useCallback(() => {
    if (phase !== 'input') return;
    setUserBuffer((prev) => prev.slice(0, -1));
  }, [phase]);

  const handleSubmit = useCallback(() => {
    if (phase !== 'input' || !activeSequence || !userBuffer) return;
    const answer = parseInt(userBuffer.trim(), 10);
    const correct = answer === activeSequence.expectedSum;
    const duration = Date.now() - flashStartTimeRef.current;

    setIsCorrect(correct);
    setPhase('result');

    if (correct) {
      soundEngine.playStreak(5);
    } else {
      soundEngine.playError();
    }

    // Persist Anzan Run in Store
    recordAnzanRun({
      config: anzanConfig,
      numbers: activeSequence.numbers,
      expectedSum: activeSequence.expectedSum,
      userAnswer: answer,
      isCorrect: correct,
      durationMs: duration,
    });
  }, [phase, activeSequence, userBuffer, anzanConfig, recordAnzanRun]);

  // Physical Desktop Keyboard Listener for Anzan
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase === 'input') {
        if (e.key >= '0' && e.key <= '9') {
          e.preventDefault();
          handleDigit(e.key);
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          handleNegative();
        } else if (e.key === 'Backspace') {
          e.preventDefault();
          handleBackspace();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          handleSubmit();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          handleCancel();
        }
      } else if (phase === 'result' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleStartFlash();
      } else if (phase === 'countdown' || phase === 'flashing') {
        if (e.key === 'Escape') {
          e.preventDefault();
          handleCancel();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, handleDigit, handleNegative, handleBackspace, handleSubmit, handleStartFlash, handleCancel]);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 select-none">
      {/* Top Header */}
      <div className="w-full max-w-2xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
        <button
          onClick={() => {
            handleCancel();
            setViewMode('dashboard');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{tCommon('back')}</span>
        </button>

        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-bold text-white tracking-wide">
            {tAnzan('title')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-6 max-w-md mx-auto w-full">
        {/* 1. Setup / Config Phase */}
        {phase === 'idle' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-5"
          >
            <div className="text-center space-y-1.5">
              <div className="inline-flex p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30 mb-1">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-extrabold text-white">{tAnzan('title')}</h2>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                {tAnzan('subtitle')}
              </p>
            </div>

            {/* Quick Presets */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                {tAnzan('presets')}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {PRESETS.map((p) => {
                  const isSelected = anzanConfig.presetName === p.name;
                  const locPreset = getLocalizedAnzanPreset(p.name, locale);
                  return (
                    <button
                      key={p.name}
                      onClick={() => updateAnzanConfig(p.config)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        isSelected
                          ? 'bg-violet-600/20 border-violet-500 text-white font-bold shadow-md shadow-violet-600/20'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="font-semibold">{locPreset.name}</div>
                      <div className="text-[10px] text-slate-400 font-normal mt-0.5 line-clamp-1">
                        {p.config.count}n • {p.config.digits}d • {p.config.intervalMs}ms
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Sliders */}
            <div className="space-y-3 pt-2 border-t border-slate-850">
              {/* Digit Count */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">{tAnzan('digits')}</span>
                  <span className="text-violet-400 font-bold">{anzanConfig.digits}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={3}
                  value={anzanConfig.digits}
                  onChange={(e) =>
                    updateAnzanConfig({ digits: Number(e.target.value) as 1 | 2 | 3, presetName: undefined })
                  }
                  className="w-full accent-violet-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Number Count */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">{tAnzan('numbers')}</span>
                  <span className="text-violet-400 font-bold">{anzanConfig.count}</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={15}
                  value={anzanConfig.count}
                  onChange={(e) =>
                    updateAnzanConfig({ count: Number(e.target.value), presetName: undefined })
                  }
                  className="w-full accent-violet-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Flash Interval Speed */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">{tAnzan('speedMs')}</span>
                  <span className="text-violet-400 font-bold">{anzanConfig.intervalMs}ms</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={2000}
                  step={50}
                  value={anzanConfig.intervalMs}
                  onChange={(e) =>
                    updateAnzanConfig({ intervalMs: Number(e.target.value), presetName: undefined })
                  }
                  className="w-full accent-violet-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Negative Numbers Toggle */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-400 font-mono">{tAnzan('allowNegatives')}</span>
                <button
                  onClick={() =>
                    updateAnzanConfig({
                      allowNegatives: !anzanConfig.allowNegatives,
                      presetName: undefined,
                    })
                  }
                  className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition-colors ${
                    anzanConfig.allowNegatives
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {anzanConfig.allowNegatives ? tCommon('enabled') : tCommon('disabled')}
                </button>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={() => handleStartFlash()}
              className="w-full py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 active:scale-98 text-white font-bold text-sm transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              {tAnzan('start')}
            </button>

            {/* Offline Anzan Record Pill */}
            {anzanStats.totalRuns > 0 && (
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950 border border-slate-850 text-xs font-mono text-slate-400">
                <span>Completed: {anzanStats.totalRuns}</span>
                <span>Accuracy: {Math.round((anzanStats.totalCorrect / anzanStats.totalRuns) * 100)}%</span>
                <span>Streak: {anzanStats.bestStreak}</span>
              </div>
            )}
          </motion.div>
        )}

        {/* 2. Countdown Phase */}
        {phase === 'countdown' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            className="flex flex-col items-center justify-center p-12 text-center space-y-6"
          >
            <div className="text-8xl sm:text-9xl font-black font-mono text-violet-400 animate-pulse">
              {countdown}
            </div>
            <div className="text-xs font-mono text-slate-400">
              Clear your mind. Hold the auditory accumulator loop...
            </div>
            <button
              onClick={handleCancel}
              className="text-xs px-3 py-1 rounded-lg bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800"
            >
              Cancel (Esc)
            </button>
          </motion.div>
        )}

        {/* 3. Flashing Phase */}
        {phase === 'flashing' && (
          <div className="flex flex-col items-center justify-center w-full min-h-[320px] relative">
            <div className="absolute top-0 text-xs font-mono text-slate-500">
              Step {currentFlashIndex + 1} of {activeSequence?.numbers.length}
            </div>

            <div className="h-40 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {currentNumber !== null && (
                  <motion.div
                    key={`${currentFlashIndex}_${currentNumber}`}
                    initial={reducedMotion ? { opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={reducedMotion ? { opacity: 0 } : { scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.08 }}
                    className={`text-6xl sm:text-7xl font-black font-mono tracking-tight ${
                      currentNumber < 0 ? 'text-rose-400' : 'text-white'
                    }`}
                  >
                    {currentNumber > 0 && activeSequence?.allowNegatives ? `+${currentNumber}` : currentNumber}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-xs font-mono text-slate-500">
              Saccadic reset intervals active
            </div>
          </div>
        )}

        {/* 4. Input Phase */}
        {phase === 'input' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full space-y-4"
          >
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col items-center justify-center space-y-4">
              <span className="text-xs font-mono text-slate-400">
                Enter the final accumulated sum:
              </span>
              <div className="w-full max-w-xs h-16 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center px-4">
                <span className="text-4xl font-mono font-bold tracking-widest text-white">
                  {userBuffer || <span className="text-slate-600 text-xl font-sans">Final sum...</span>}
                </span>
                <span className="w-0.5 h-7 bg-violet-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Custom Thumb Keypad */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <button
                  key={n}
                  onClick={() => handleDigit(n.toString())}
                  className="h-13 rounded-2xl bg-slate-900 hover:bg-slate-800 active:bg-violet-600 text-2xl font-bold font-mono text-slate-100 border border-slate-800 transition-all flex items-center justify-center"
                >
                  {n}
                </button>
              ))}

              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={handleNegative}
                  className="h-13 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono font-bold text-lg border border-slate-800 flex items-center justify-center"
                  title="Toggle negative (-)"
                >
                  ±
                </button>
                <button
                  onClick={handleBackspace}
                  className="h-13 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800 flex items-center justify-center"
                  title="Backspace"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => handleDigit('0')}
                className="h-13 rounded-2xl bg-slate-900 hover:bg-slate-800 active:bg-violet-600 text-2xl font-bold font-mono text-slate-100 border border-slate-800 transition-all flex items-center justify-center"
              >
                0
              </button>

              <button
                onClick={handleSubmit}
                disabled={!userBuffer || userBuffer === '-'}
                className="h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-900 disabled:text-slate-600 text-white font-bold font-mono text-lg transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center"
              >
                Submit
              </button>
            </div>
          </motion.div>
        )}

        {/* 5. Result Phase */}
        {phase === 'result' && activeSequence && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5 text-center"
          >
            <div className="space-y-1">
              {isCorrect ? (
                <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              ) : (
                <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-2">
                  <XCircle className="w-8 h-8" />
                </div>
              )}
              <h3 className="text-xl font-bold text-white">
                {isCorrect ? 'Working Memory Retained!' : 'Accumulator Slip'}
              </h3>
              <p className="text-xs text-slate-400">
                {isCorrect
                  ? 'Your phonological buffer accurately preserved the sequential flash!'
                  : 'A number in the stream deviated. Review the breakdown to inspect each step.'}
              </p>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block mb-1">Your Answer</span>
                <span
                  className={`text-2xl font-bold ${
                    isCorrect ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {userBuffer}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block mb-1">Expected Sum</span>
                <span className="text-2xl font-bold text-emerald-400">
                  {activeSequence.expectedSum}
                </span>
              </div>
            </div>

            {/* Sequence Review Drawer */}
            {showReview && (
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 max-h-48 overflow-y-auto">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Step-by-Step Stream Accumulation
                </span>
                {(() => {
                  let running = 0;
                  return activeSequence.numbers.map((n, i) => {
                    running += n;
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs font-mono py-1 border-b border-slate-900"
                      >
                        <span className="text-slate-400">#{i + 1}:</span>
                        <span className={`font-bold ${n < 0 ? 'text-rose-400' : 'text-white'}`}>
                          {n > 0 ? `+${n}` : n}
                        </span>
                        <span className="text-emerald-400 font-semibold">
                          Running: {running}
                        </span>
                      </div>
                    );
                  });
                })()}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleStartFlash()}
                className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 font-bold text-xs text-white shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                Flash Next Sequence (Enter or Space)
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleStartFlash(activeSequence)}
                  className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Replay Sequence
                </button>
                <button
                  onClick={() => setShowReview(!showReview)}
                  className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5" />
                  {showReview ? 'Hide Numbers' : 'Inspect Numbers'}
                </button>
              </div>

              <button
                onClick={handleCancel}
                className="text-xs text-slate-400 hover:text-slate-200 py-1 transition-colors"
              >
                Back to Anzan Settings
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
