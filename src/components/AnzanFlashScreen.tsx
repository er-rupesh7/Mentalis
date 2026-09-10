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
  Info,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { generateAnzanSequence } from '../core/calcEngine';
import { AnzanSequence } from '../core/types';
import { soundEngine } from '../core/soundEngine';

export const AnzanFlashScreen: React.FC = () => {
  const {
    anzanConfig,
    updateAnzanConfig,
    soundEnabled,
    toggleSound,
    setViewMode,
  } = useQuizStore();

  const [phase, setPhase] = useState<'idle' | 'countdown' | 'flashing' | 'input' | 'result'>('idle');
  const [countdown, setCountdown] = useState<number>(3);
  const [activeSequence, setActiveSequence] = useState<AnzanSequence | null>(null);
  const [currentFlashIndex, setCurrentFlashIndex] = useState<number>(-1);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [userBuffer, setUserBuffer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleStartFlash = () => {
    const seq = generateAnzanSequence(anzanConfig);
    setActiveSequence(seq);
    setUserBuffer('');
    setIsCorrect(null);
    setPhase('countdown');
    setCountdown(3);

    // 3 second countdown
    let count = 3;
    const countInterval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setCountdown(count);
        soundEngine.playTick();
      } else {
        clearInterval(countInterval);
        setPhase('flashing');
        startFlashingSequence(seq);
      }
    }, 1000);
  };

  const startFlashingSequence = (seq: AnzanSequence) => {
    let index = 0;

    const flashNext = () => {
      if (index < seq.numbers.length) {
        setCurrentFlashIndex(index);
        setCurrentNumber(seq.numbers[index]);
        soundEngine.playTick();

        // Flash display duration
        timerRef.current = setTimeout(() => {
          // Brief blank screen gap (120ms) to trigger saccadic reset
          setCurrentNumber(null);
          index += 1;

          timerRef.current = setTimeout(() => {
            flashNext();
          }, 120);
        }, seq.intervalMs);
      } else {
        // Flashing complete, enter user input phase
        setCurrentFlashIndex(-1);
        setCurrentNumber(null);
        setPhase('input');
      }
    };

    flashNext();
  };

  const handleDigit = useCallback((d: string) => {
    if (phase !== 'input') return;
    setUserBuffer((prev) => (prev.length < 8 ? prev + d : prev));
  }, [phase]);

  const handleBackspace = useCallback(() => {
    if (phase !== 'input') return;
    setUserBuffer((prev) => prev.slice(0, -1));
  }, [phase]);

  const handleSubmit = useCallback(() => {
    if (phase !== 'input' || !activeSequence || !userBuffer) return;
    const answer = parseInt(userBuffer.trim(), 10);
    const correct = answer === activeSequence.expectedSum;
    setIsCorrect(correct);
    setPhase('result');

    if (correct) {
      soundEngine.playStreak(5);
    } else {
      soundEngine.playError();
    }
  }, [phase, activeSequence, userBuffer]);

  // Keyboard handler for Anzan input
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase === 'input') {
        if (e.key >= '0' && e.key <= '9') {
          e.preventDefault();
          handleDigit(e.key);
        } else if (e.key === 'Backspace') {
          e.preventDefault();
          handleBackspace();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          handleSubmit();
        }
      } else if (phase === 'result' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleStartFlash();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, handleDigit, handleBackspace, handleSubmit]);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 select-none">
      {/* Top Header */}
      <div className="w-full max-w-2xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
        <button
          onClick={() => setViewMode('dashboard')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </button>

        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-bold text-white tracking-wide">
            Anzan Flash Memory Engine
          </span>
        </div>

        <button
          onClick={toggleSound}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-6 max-w-md mx-auto w-full">
        {/* Setup / Config View */}
        {phase === 'idle' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30 mb-1">
                <Zap className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-extrabold text-white">Cognitive Working Memory</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Numbers flash on screen and vanish. Hold the running accumulator using the{' '}
                <span className="text-violet-300 font-semibold">Auditory Echo</span> loop without visual crutches.
              </p>
            </div>

            {/* Config Options */}
            <div className="space-y-4 text-xs">
              {/* Sequence Count */}
              <div>
                <label className="text-slate-400 font-medium block mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-violet-400" />
                  Sequence Length (Numbers to Add)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 5, 8, 10].map((count) => (
                    <button
                      key={count}
                      onClick={() => updateAnzanConfig({ count })}
                      className={`py-2 rounded-xl font-mono font-bold transition-all ${
                        anzanConfig.count === count
                          ? 'bg-violet-600 text-white shadow-md shadow-violet-600/40'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Digits Magnitude */}
              <div>
                <label className="text-slate-400 font-medium block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Digit Magnitude
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '1-Digit', val: 1 as const },
                    { label: '2-Digit', val: 2 as const },
                    { label: '3-Digit', val: 3 as const },
                  ].map((item) => (
                    <button
                      key={item.val}
                      onClick={() => updateAnzanConfig({ digits: item.val })}
                      className={`py-2 rounded-xl font-medium transition-all ${
                        anzanConfig.digits === item.val
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/40'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flash Speed Interval */}
              <div>
                <label className="text-slate-400 font-medium block mb-2 flex items-center gap-1.5">
                  <Timer className="w-3.5 h-3.5 text-amber-400" />
                  Flash Interval (Cadence)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: '1.2s (Gentle)', val: 1200 },
                    { label: '800ms (Std)', val: 800 },
                    { label: '500ms (Fast)', val: 500 },
                    { label: '300ms (Zen)', val: 300 },
                  ].map((speed) => (
                    <button
                      key={speed.val}
                      onClick={() => updateAnzanConfig({ intervalMs: speed.val })}
                      className={`py-2 px-1 text-[11px] rounded-xl font-medium transition-all text-center ${
                        anzanConfig.intervalMs === speed.val
                          ? 'bg-amber-600 text-white shadow-md shadow-amber-600/40'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {speed.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={handleStartFlash}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold text-base transition-all shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Begin Anzan Flash Drill
            </button>
          </motion.div>
        )}

        {/* Countdown Phase */}
        {phase === 'countdown' && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Clear mental screen...
            </span>
            <motion.div
              key={countdown}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-8xl font-black font-mono text-violet-400"
            >
              {countdown}
            </motion.div>
          </div>
        )}

        {/* Active Flashing Phase */}
        {phase === 'flashing' && (
          <div className="w-full flex flex-col items-center justify-center space-y-8">
            <div className="text-xs font-mono text-slate-400">
              {currentFlashIndex >= 0 && activeSequence
                ? `Number ${currentFlashIndex + 1} of ${activeSequence.numbers.length}`
                : 'Processing...'}
            </div>

            <div className="h-44 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {currentNumber !== null ? (
                  <motion.div
                    key={`${currentFlashIndex}_${currentNumber}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.15 }}
                    transition={{ duration: 0.08 }}
                    className="text-7xl sm:text-8xl font-black font-mono tracking-wider text-white"
                  >
                    {currentNumber}
                  </motion.div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-slate-900/60 border border-slate-800" />
                )}
              </AnimatePresence>
            </div>

            <div className="w-48 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-violet-500 transition-all duration-200"
                style={{
                  width: `${
                    activeSequence
                      ? ((currentFlashIndex + 1) / activeSequence.numbers.length) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Input Phase (Numpad + keyboard) */}
        {phase === 'input' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <div className="text-xs font-mono text-slate-400 mb-3">
              SEQUENCE COMPLETE: Enter Final Held Total
            </div>

            <div className="w-full max-w-xs h-16 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center px-4 relative overflow-hidden shadow-inner mb-6">
              <span className="text-4xl font-mono font-bold text-white tracking-widest">
                {userBuffer || <span className="text-slate-600 text-xl font-normal">Total sum?</span>}
              </span>
              <span className="w-0.5 h-7 bg-violet-400 ml-1 animate-pulse" />
            </div>

            {/* Ergonomic Numpad */}
            <div className="w-full grid grid-cols-3 gap-2.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleDigit(num.toString())}
                  className="h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 active:bg-violet-600 border border-slate-800 text-2xl font-bold font-mono text-slate-100 transition-all flex items-center justify-center"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={handleBackspace}
                className="h-14 rounded-2xl bg-slate-900/80 hover:bg-slate-800 active:bg-slate-700 border border-slate-800 text-slate-400 transition-all flex items-center justify-center font-bold text-sm"
              >
                DEL
              </button>
              <button
                onClick={() => handleDigit('0')}
                className="h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 active:bg-violet-600 border border-slate-800 text-2xl font-bold font-mono text-slate-100 transition-all flex items-center justify-center"
              >
                0
              </button>
              <button
                onClick={handleSubmit}
                disabled={!userBuffer}
                className="h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold text-base transition-all flex items-center justify-center shadow-lg shadow-emerald-600/20"
              >
                Submit
              </button>
            </div>
          </motion.div>
        )}

        {/* Result & Ghost Carry Eliminator Breakdown */}
        {phase === 'result' && activeSequence && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-5"
          >
            <div className="flex items-center justify-center gap-3">
              {isCorrect ? (
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  Flawless Retention!
                </div>
              ) : (
                <div className="flex items-center gap-2 text-rose-400 font-bold text-lg">
                  <XCircle className="w-6 h-6" />
                  Accumulator Deviation
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400">Your Held Total</div>
                <div
                  className={`text-2xl font-mono font-bold ${
                    isCorrect ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {userBuffer}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400">Exact Sum</div>
                <div className="text-2xl font-mono font-bold text-emerald-400">
                  {activeSequence.expectedSum}
                </div>
              </div>
            </div>

            {/* Ghost Carry Eliminator: Left-to-Right Running Breakdown */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-violet-300 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ghost Carry Eliminator Buffer
                </span>
                <span>{activeSequence.intervalMs}ms flash</span>
              </div>

              {/* Running sequence steps */}
              <div className="space-y-1.5 text-xs font-mono max-h-36 overflow-y-auto pr-1">
                {activeSequence.numbers.map((num, i) => {
                  const runningTotal = activeSequence.numbers
                    .slice(0, i + 1)
                    .reduce((a, b) => a + b, 0);
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80"
                    >
                      <span className="text-slate-300">
                        {i === 0 ? 'Start' : `+ Flash ${i + 1}`}:{' '}
                        <strong className="text-white">{num}</strong>
                      </span>
                      <span className="text-emerald-400 font-bold">
                        Buffer: {runningTotal}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPhase('idle')}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                Change Settings
              </button>
              <button
                onClick={handleStartFlash}
                className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-xs font-bold text-white transition-colors shadow-lg shadow-violet-600/30 flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                Next Sequence (↵)
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
