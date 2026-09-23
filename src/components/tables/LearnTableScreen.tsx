'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Shuffle,
  Volume2,
  Eye,
  EyeOff,
  Flame,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Award,
  BookOpen
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { useTranslations } from 'next-intl';
import { playClickSound } from '../../core/soundEffects';
import { formatFactKey } from '../../core/factModel';

const POPULAR_TABLES = [7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 29];

// Shuffles an array with Fisher-Yates
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function LearnTableScreen() {
  const tLearn = useTranslations('learnTable');
  const tNav = useTranslations('nav');

  const {
    selectedLearnTable,
    setSelectedLearnTable,
    startLearnTablePractice,
    factMemoryMap,
    setViewMode,
  } = useQuizStore();

  const currentTable = selectedLearnTable || 14;
  const [isRandomOrder, setIsRandomOrder] = useState<boolean>(true);
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedCards, setRevealedCards] = useState<Record<number, boolean>>({});
  const [drillCount, setDrillCount] = useState<number>(25);
  const [randomSeed, setRandomSeed] = useState<number>(1);
  const [activeSpeechIndex, setActiveSpeechIndex] = useState<number | null>(null);

  // Multipliers 1 to 20
  const multipliers = useMemo(() => {
    if (randomSeed < 0) return [];
    const list = Array.from({ length: 20 }, (_, i) => i + 1);
    return isRandomOrder ? shuffleArray(list) : list;
  }, [isRandomOrder, randomSeed]);

  // Reset revealed cards on table change or order change
  useEffect(() => {
    setRevealedCards({});
  }, [currentTable, isRandomOrder, randomSeed]);

  // Audio speech synthesis helper
  const speakMultiplication = (n1: number, n2: number, prod: number, idx: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setActiveSpeechIndex(idx);

    const utterance = new SpeechSynthesisUtterance(`${n1} multiplied by ${n2} equals ${prod}`);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setActiveSpeechIndex(null);
    utterance.onerror = () => setActiveSpeechIndex(null);

    window.speechSynthesis.speak(utterance);
  };

  const toggleRevealCard = (multiplier: number) => {
    playClickSound();
    setRevealedCards((prev) => ({
      ...prev,
      [multiplier]: !prev[multiplier],
    }));
  };

  const handleRevealAll = () => {
    playClickSound();
    const all: Record<number, boolean> = {};
    for (let i = 1; i <= 20; i++) all[i] = true;
    setRevealedCards(all);
  };

  const handleHideAll = () => {
    playClickSound();
    setRevealedCards({});
  };

  // Retention metrics for this table
  const tableStats = useMemo(() => {
    let mastered = 0;
    let totalAttempts = 0;
    let totalLatency = 0;
    let latencyCount = 0;

    for (let i = 1; i <= 20; i++) {
      const key = formatFactKey('multiplication', currentTable, i);
      const fact = factMemoryMap[key];
      if (fact) {
        totalAttempts += fact.attempts || 0;
        if (fact.masteryScore >= 0.85) mastered++;
        if (fact.medianLatencyMs) {
          totalLatency += fact.medianLatencyMs;
          latencyCount++;
        }
      }
    }

    const avgLatency = latencyCount > 0 ? (totalLatency / latencyCount / 1000).toFixed(1) : '–';
    const retentionRate = Math.round((mastered / 20) * 100);

    return { mastered, retentionRate, avgLatency, totalAttempts };
  }, [currentTable, factMemoryMap]);

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Flutter style Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-violet-400" />
              <span>Table Studio • Cognitive Associative Recall</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <span>Learn Table ×{currentTable}</span>
              <span className="text-xs sm:text-sm font-bold font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {tableStats.retentionRate}% Mastered
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Multiples are displayed in non-linear, randomized order to prevent rote song recitation and build instantaneous, direct neural reflexes.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 p-3 rounded-2xl">
            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Mastered</div>
              <div className="text-lg font-bold text-emerald-400 font-mono">
                {tableStats.mastered}/20
              </div>
            </div>
            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Avg Latency</div>
              <div className="text-lg font-bold text-sky-400 font-mono">
                {tableStats.avgLatency}s
              </div>
            </div>
            <div className="text-center px-3">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Drills Run</div>
              <div className="text-lg font-bold text-violet-400 font-mono">
                {tableStats.totalAttempts}
              </div>
            </div>
          </div>
        </div>

        {/* Table Selector Carousel */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-violet-400" />
              <span>Select Table to Study:</span>
            </span>

            {/* Direct Number Input */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Custom:</span>
              <input
                type="number"
                min="2"
                max="100"
                value={currentTable}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val >= 1 && val <= 100) {
                    setSelectedLearnTable(val);
                  }
                }}
                className="w-16 px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white text-xs focus:ring-1 focus:ring-violet-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {POPULAR_TABLES.map((num) => {
              const isSelected = num === currentTable;
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setSelectedLearnTable(num);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 ring-1 ring-violet-400'
                      : 'bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  ×{num}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Control Bar: Ordering & Flashcard Modes */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div className="flex items-center gap-2">
          {/* Random vs Sequential toggle */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setIsRandomOrder(!isRandomOrder);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              isRandomOrder
                ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40 shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>{isRandomOrder ? 'Random Associative Order' : 'Sequential Order'}</span>
          </button>

          {isRandomOrder && (
            <button
              type="button"
              onClick={() => {
                playClickSound();
                setRandomSeed((s) => s + 1);
              }}
              title="Reshuffle multiples"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Flashcard hide/show toggle */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setFlashcardMode(!flashcardMode);
              if (!flashcardMode) handleHideAll();
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              flashcardMode
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {flashcardMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{flashcardMode ? 'Flashcard Mode: ON' : 'Flashcard Mode'}</span>
          </button>
        </div>

        {/* Global Reveal / Hide buttons when in flashcard mode */}
        {flashcardMode && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRevealAll}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors"
            >
              Reveal All
            </button>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={handleHideAll}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors"
            >
              Hide All
            </button>
          </div>
        )}
      </div>

      {/* Multiplication Grid: Multiples in non-linear or sequential order */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {multipliers.map((multiplier, idx) => {
          const product = currentTable * multiplier;
          const isRevealed = !flashcardMode || revealedCards[multiplier];
          const isSpeaking = activeSpeechIndex === idx;

          // Check memory state
          const factKey = `fact:mul:${Math.min(currentTable, multiplier)}x${Math.max(currentTable, multiplier)}`;
          const fact = factMemoryMap[factKey];
          const isFactMastered = fact && fact.masteryScore >= 0.85;

          return (
            <motion.div
              key={`${currentTable}x${multiplier}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                if (flashcardMode) toggleRevealCard(multiplier);
              }}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between select-none relative group ${
                flashcardMode ? 'cursor-pointer hover:border-violet-500/60' : ''
              } ${
                isFactMastered
                  ? 'bg-slate-900/90 border-emerald-500/30 shadow-sm shadow-emerald-500/5'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900'
              }`}
            >
              {/* Top row: Order index & Speech / Mastered indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                <span className="text-slate-600">#{idx + 1}</span>
                <div className="flex items-center gap-1.5">
                  {isFactMastered && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Automatic Memory" />
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakMultiplication(currentTable, multiplier, product, idx);
                    }}
                    title="Pronounce"
                    className={`p-1 rounded-lg transition-colors ${
                      isSpeaking ? 'text-violet-400 bg-violet-500/20' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Main Equation */}
              <div className="text-center py-2">
                <div className="text-sm font-semibold text-slate-400">
                  {currentTable} × {multiplier}
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight mt-1">
                  {isRevealed ? (
                    <span className={isFactMastered ? 'text-emerald-400' : 'text-white'}>
                      {product}
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-0.5 rounded-lg bg-slate-800 text-slate-500 text-sm font-sans font-medium">
                      Tap to reveal
                    </span>
                  )}
                </div>
              </div>

              {/* Sub-label or Latency Hint */}
              <div className="text-center text-[10px] text-slate-500 font-mono mt-1">
                {fact?.medianLatencyMs ? `${(fact.medianLatencyMs / 1000).toFixed(1)}s recall` : 'unprobed'}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Flutter style Bottom Floating Action Card: Launch 20-30 Question Practice Drill */}
      <div className="sticky bottom-4 z-30 p-5 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950/90 border border-violet-500/30 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <h3 className="text-base font-bold text-white">
              Ready to verify Table ×{currentTable} Automaticity?
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Launch a targeted practice drill to benchmark recall latency and update your Memory Heatmap.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Drill Question Count Selector (20, 25, 30) */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
            {[20, 25, 30].map((cnt) => (
              <button
                key={cnt}
                type="button"
                onClick={() => {
                  playClickSound();
                  setDrillCount(cnt);
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors font-semibold ${
                  drillCount === cnt ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cnt}Q
              </button>
            ))}
          </div>

          {/* Launch Button */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              startLearnTablePractice(currentTable, drillCount);
            }}
            className="py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center gap-2 active:scale-[0.98] whitespace-nowrap"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Practice Table ×{currentTable}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
