'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  BookOpen,
  Lock,
  Unlock,
  Layers,
  Box,
  Calculator,
  Grid,
  Trophy,
  ArrowRight,
  Clock,
  ShieldCheck,
  Activity,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { soundEngine } from '../../core/soundEngine';
import {
  playClickSound,
  playCorrectSound,
  playErrorSound,
  playLevelUpFanfare,
} from '../../core/soundEffects';
import { formatFactKey } from '../../core/factModel';
import {
  CalculationTechniqueId,
  TechniqueMasteryState,
  GeneratedTechniqueProblem,
} from '../../core/types';
import {
  TECHNIQUE_CURRICULUM,
  MODULE_METADATA,
  isTechniqueUnlocked,
  getTechniquePrerequisite,
  MIN_MASTERY_POINTS_TO_UNLOCK,
} from '../../core/techniques/techniqueCurriculum';
import { generateTechniqueProblem } from '../../core/techniques/techniqueGenerators';
import {
  generateBodmasQuestion,
  BodmasProblem,
} from '../../core/algebraBodmasEngine';
import { evaluateCognitiveState } from '../../core/aiCognitiveEngine';

const POPULAR_TABLES = [7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 29];

const SQUARE_TECHNIQUE_IDS: CalculationTechniqueId[] = [
  'sq_ending_5',
  'sq_base_50',
  'sq_base_100',
  'sq_ending_25',
  'sq_universal_duplex',
  'cube_algebraic_binomial',
];

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
  const {
    selectedLearnTable,
    setSelectedLearnTable,
    startLearnTablePractice,
    startSquaresPractice,
    startCubesPractice,
    startBodmasPractice,
    factMemoryMap,
    techniqueMasteryMap,
    recordTechniquePracticeResult,
    foundationsStudioTab,
    setFoundationsStudioTab,
    setIsArcadeHubOpen,
    setViewMode,
  } = useQuizStore();

  const currentTab = foundationsStudioTab || 'tables';
  const currentTable = selectedLearnTable || 14;

  // Ordering & Flashcard States for Tables / Squares / Cubes
  const [isRandomOrder, setIsRandomOrder] = useState<boolean>(false);
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedCards, setRevealedCards] = useState<Record<number, boolean>>({});
  const [drillCount, setDrillCount] = useState<number>(25);
  const [randomSeed, setRandomSeed] = useState<number>(1);
  const [activeSpeechIndex, setActiveSpeechIndex] = useState<number | null>(null);

  // Squares view range (1-25, 26-50, or all)
  const [squareRange, setSquareRange] = useState<'1_25' | '26_50' | 'all'>('1_25');

  // Shortcut Techniques State
  const [selectedTechniqueId, setSelectedTechniqueId] =
    useState<CalculationTechniqueId>('sq_ending_5');
  const [techniqueProblem, setTechniqueProblem] =
    useState<GeneratedTechniqueProblem | null>(null);
  const [techniqueInput, setTechniqueInput] = useState<string>('');
  const [techniqueFeedback, setTechniqueFeedback] = useState<boolean | null>(null);
  const [techniqueStartTime, setTechniqueStartTime] = useState<number>(Date.now());

  // BODMAS Interactive Practice State
  const [bodmasProblem, setBodmasProblem] = useState<BodmasProblem | null>(null);
  const [bodmasInput, setBodmasInput] = useState<string>('');
  const [bodmasFeedback, setBodmasFeedback] = useState<boolean | null>(null);
  const [bodmasShowStep, setBodmasShowStep] = useState<boolean>(false);

  // Load new technique problem on select or change
  useEffect(() => {
    if (currentTab === 'shortcuts') {
      try {
        const prob = generateTechniqueProblem(selectedTechniqueId, 2);
        setTechniqueProblem(prob);
        setTechniqueInput('');
        setTechniqueFeedback(null);
        setTechniqueStartTime(Date.now());
      } catch (err) {
        console.error('Error generating technique problem:', err);
      }
    }
  }, [selectedTechniqueId, currentTab]);

  // Load new BODMAS problem on select or change
  useEffect(() => {
    if (currentTab === 'bodmas') {
      const prob = generateBodmasQuestion(undefined, 2);
      setBodmasProblem(prob);
      setBodmasInput('');
      setBodmasFeedback(null);
      setBodmasShowStep(false);
    }
  }, [currentTab]);

  // Reset flashcards when changing tab, table, or order
  useEffect(() => {
    setRevealedCards({});
  }, [currentTab, currentTable, isRandomOrder, randomSeed, squareRange]);

  // Audio Speech reciter
  const speakText = (text: string, idx: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setActiveSpeechIndex(idx);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setActiveSpeechIndex(null);
    utterance.onerror = () => setActiveSpeechIndex(null);

    window.speechSynthesis.speak(utterance);
  };

  // Multipliers 1 to 20 for Tables
  const multipliers = useMemo(() => {
    if (randomSeed < 0) return [];
    const list = Array.from({ length: 20 }, (_, i) => i + 1);
    return isRandomOrder ? shuffleArray(list) : list;
  }, [isRandomOrder, randomSeed]);

  // Squares List (1 to 50)
  const squaresList = useMemo(() => {
    if (randomSeed < 0) return [];
    let list: number[] = [];
    if (squareRange === '1_25') {
      list = Array.from({ length: 25 }, (_, i) => i + 1);
    } else if (squareRange === '26_50') {
      list = Array.from({ length: 25 }, (_, i) => i + 26);
    } else {
      list = Array.from({ length: 50 }, (_, i) => i + 1);
    }
    return isRandomOrder ? shuffleArray(list) : list;
  }, [squareRange, isRandomOrder, randomSeed]);

  // Cubes List (1 to 25)
  const cubesList = useMemo(() => {
    if (randomSeed < 0) return [];
    const list = Array.from({ length: 25 }, (_, i) => i + 1);
    return isRandomOrder ? shuffleArray(list) : list;
  }, [isRandomOrder, randomSeed]);

  const toggleRevealCard = (key: number) => {
    playClickSound();
    setRevealedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRevealAll = (count: number) => {
    playClickSound();
    const all: Record<number, boolean> = {};
    for (let i = 1; i <= count; i++) all[i] = true;
    setRevealedCards(all);
  };

  const handleHideAll = () => {
    playClickSound();
    setRevealedCards({});
  };

  // Retention stats for current table
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

    const avgLatency =
      latencyCount > 0 ? (totalLatency / latencyCount / 1000).toFixed(1) : '–';
    const retentionRate = Math.round((mastered / 20) * 100);

    return { mastered, retentionRate, avgLatency, totalAttempts };
  }, [currentTable, factMemoryMap]);

  // Real-time AI Cognitive Engine Analysis
  const cognitiveState = useMemo(() => {
    return evaluateCognitiveState(null, factMemoryMap);
  }, [factMemoryMap]);

  // Handle technique practice answer submission
  const handleCheckTechniqueAnswer = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!techniqueProblem || techniqueFeedback !== null) return;

    const trimmed = techniqueInput.trim();
    const expected = techniqueProblem.correctAnswer.toString().toLowerCase();
    const isCorrect = trimmed === expected;
    const elapsed = Date.now() - techniqueStartTime;

    if (isCorrect) {
      soundEngine.playSuccess();
      setTechniqueFeedback(true);
      const updated = await recordTechniquePracticeResult(
        selectedTechniqueId,
        true,
        elapsed
      );

      // Check if user crossed unlock threshold
      if ((updated.masteryPoints || 0) >= MIN_MASTERY_POINTS_TO_UNLOCK) {
        soundEngine.playUnlock();
      }

      setTimeout(() => {
        try {
          const nextProb = generateTechniqueProblem(selectedTechniqueId, 2);
          setTechniqueProblem(nextProb);
          setTechniqueInput('');
          setTechniqueFeedback(null);
          setTechniqueStartTime(Date.now());
        } catch (err) {
          console.error(err);
        }
      }, 700);
    } else {
      soundEngine.playError();
      setTechniqueFeedback(false);
      await recordTechniquePracticeResult(selectedTechniqueId, false, elapsed);
      setTimeout(() => setTechniqueFeedback(null), 1200);
    }
  };

  // Handle BODMAS interactive answer submission
  const handleCheckBodmasAnswer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!bodmasProblem || bodmasFeedback !== null) return;

    const parsed = parseInt(bodmasInput.trim(), 10);
    const isCorrect = parsed === bodmasProblem.answer;

    if (isCorrect) {
      soundEngine.playSuccess();
      setBodmasFeedback(true);
      setTimeout(() => {
        const nextProb = generateBodmasQuestion(undefined, 2);
        setBodmasProblem(nextProb);
        setBodmasInput('');
        setBodmasFeedback(null);
        setBodmasShowStep(false);
      }, 800);
    } else {
      soundEngine.playError();
      setBodmasFeedback(false);
      setBodmasShowStep(true);
      setTimeout(() => setBodmasFeedback(null), 1200);
    }
  };

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-4 pt-4 sm:pt-6 pb-36 sm:pb-28 space-y-6">
      {/* ========================================================================= */}
      {/* TOP HIGH-VOLTAGE SEGMENTED SWITCHER: TABLES • SQUARES • CUBES • SHORTCUTS */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2 sm:p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full sm:w-auto">
          {[
            { id: 'tables', label: 'Tables (2–20+)', icon: Grid, color: 'text-emerald-400' },
            { id: 'squares', label: 'Squares (1–50)', icon: Zap, color: 'text-violet-400' },
            { id: 'cubes', label: 'Cubes (1–25)', icon: Box, color: 'text-amber-400' },
            { id: 'shortcuts', label: 'Square Shortcuts', icon: Sparkles, color: 'text-cyan-400' },
            { id: 'bodmas', label: 'Algebra & BODMAS', icon: Brain, color: 'text-indigo-400' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  playClickSound();
                  setFoundationsStudioTab(tab.id as any);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Arcade Arena Hub Launcher */}
        <button
          type="button"
          onClick={() => {
            playClickSound();
            setIsArcadeHubOpen(true);
          }}
          className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all shrink-0 active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>🎮 Discipline Arena</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* REAL-TIME AI COGNITIVE TELEMETRY STATUS BANNER                            */}
      {/* ========================================================================= */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white flex items-center gap-2">
              <span>AI Cognitive Engine: {cognitiveState.mentalStateLabel}</span>
              <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-mono text-[10px]">
                {cognitiveState.capacityIndex}% Neural Capacity
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {cognitiveState.mentalStateDescription}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundEngine.playStreak(4);
            if (currentTab === 'squares') startSquaresPractice(20);
            else if (currentTab === 'cubes') startCubesPractice(20);
            else if (currentTab === 'bodmas') startBodmasPractice(20);
            else startLearnTablePractice(currentTable, 20);
          }}
          className="px-3.5 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border border-violet-500/40 font-bold transition-all flex items-center justify-center gap-1.5 shrink-0"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch AI Recommended Drill</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: TIMES TABLES (2 TO 20+)                                            */}
      {/* ========================================================================= */}
      {currentTab === 'tables' && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Times Table Studio • Associative Reflex Engine</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                  <span>Learn Table ×{currentTable}</span>
                  <span className="text-xs sm:text-sm font-bold font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {tableStats.retentionRate}% Mastered
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                  Multiples are practiced in non-linear or sequential order to eliminate rote song recitation and build instantaneous, direct neural reflexes.
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

            {flashcardMode && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleRevealAll(20)}
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

          {/* Multiplication Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {multipliers.map((multiplier, idx) => {
              const product = currentTable * multiplier;
              const isRevealed = !flashcardMode || revealedCards[multiplier];
              const isSpeaking = activeSpeechIndex === idx;

              const factKey = `fact:mul:${Math.min(currentTable, multiplier)}x${Math.max(currentTable, multiplier)}`;
              const fact = factMemoryMap[factKey];
              const isFactMastered = fact && fact.masteryScore >= 0.85;

              return (
                <motion.div
                  key={`${currentTable}x${multiplier}`}
                  layout
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
                          speakText(`${currentTable} multiplied by ${multiplier} equals ${product}`, idx);
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

                  <div className="text-center text-[10px] text-slate-500 font-mono mt-1">
                    {fact?.medianLatencyMs ? `${(fact.medianLatencyMs / 1000).toFixed(1)}s recall` : 'unprobed'}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Card: Launch Practice Drill */}
          <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950/90 border border-violet-500/30 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <h3 className="text-base font-bold text-white">
                  Ready to test Table ×{currentTable} Automaticity?
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Launch a targeted practice drill to benchmark recall latency and update your Memory Heatmap.
              </p>
            </div>

            <div className="flex items-center gap-3">
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

              <button
                type="button"
                onClick={() => {
                  soundEngine.playStreak(4);
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
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SQUARES (1 TO 50) & SHORTCUT LINKS                                 */}
      {/* ========================================================================= */}
      {currentTab === 'squares' && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5 text-violet-400" />
                  <span>Squares Studio • 1² to 50² Masterclass</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Learn Squares (1–50)
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                  Memorize base squares and leverage shortcut strategies (Base 50, Base 100, Ekadhikena) to compute any 2-digit square instantly.
                </p>
              </div>

              {/* Range Selector */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                {(['1_25', '26_50', 'all'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setSquareRange(r);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      squareRange === r
                        ? 'bg-violet-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {r === '1_25' ? '1 to 25' : r === '26_50' ? '26 to 50' : 'All 1–50'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Shortcut Jump Links */}
            <div className="mt-6 pt-5 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Jump to Shortcut Mental Rules:</span>
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'sq_ending_5', name: 'Ending in 5', formula: 'n(n+1) | 25' },
                  { id: 'sq_base_50', name: 'Base 50 (40–60)', formula: '25±d | d²' },
                  { id: 'sq_base_100', name: 'Base 100 (90–110)', formula: 'N±d | d²' },
                  { id: 'sq_universal_duplex', name: 'Duplex Method', formula: 'General Squares' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setSelectedTechniqueId(s.id as any);
                      setFoundationsStudioTab('shortcuts');
                    }}
                    className="p-2.5 rounded-xl bg-slate-950/60 hover:bg-violet-950/30 border border-slate-800 hover:border-violet-500/40 text-left transition-all group"
                  >
                    <div className="text-xs font-bold text-white group-hover:text-violet-300">
                      {s.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {s.formula}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Control Bar: Ordering & Flashcard Modes */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2">
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
                <span>{isRandomOrder ? 'Random Order' : 'Sequential Order'}</span>
              </button>

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
                <span>{flashcardMode ? 'Flashcards: ON' : 'Flashcard Mode'}</span>
              </button>
            </div>

            {flashcardMode && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleRevealAll(50)}
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

          {/* Squares Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {squaresList.map((num, idx) => {
              const sqVal = num * num;
              const isRevealed = !flashcardMode || revealedCards[num];
              const isSpeaking = activeSpeechIndex === idx;

              // Shortcut hint badge
              let shortcutBadge = '';
              if (num % 10 === 5) shortcutBadge = 'Ekadhikena';
              else if (num >= 41 && num <= 59) shortcutBadge = 'Base 50';
              else if (num >= 91 && num <= 109) shortcutBadge = 'Base 100';

              return (
                <motion.div
                  key={`sq_${num}`}
                  layout
                  onClick={() => {
                    if (flashcardMode) toggleRevealCard(num);
                  }}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between select-none relative group ${
                    flashcardMode ? 'cursor-pointer hover:border-violet-500/60' : ''
                  } bg-slate-900/60 border-slate-800 hover:bg-slate-900`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                    <span className="text-slate-600">#{num}</span>
                    <div className="flex items-center gap-1.5">
                      {shortcutBadge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-semibold border border-violet-500/30">
                          {shortcutBadge}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(`${num} squared equals ${sqVal}`, idx);
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

                  <div className="text-center py-2">
                    <div className="text-sm font-semibold text-slate-400">
                      {num}²
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight mt-1 text-white">
                      {isRevealed ? (
                        <span>{sqVal}</span>
                      ) : (
                        <span className="inline-block px-3 py-0.5 rounded-lg bg-slate-800 text-slate-500 text-sm font-sans font-medium">
                          Tap to reveal
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-slate-500 font-mono mt-1">
                    {num % 10 === 5
                      ? `(${Math.floor(num / 10)}×${Math.floor(num / 10) + 1})|25`
                      : num >= 41 && num <= 59
                      ? `(25${num < 50 ? '-' : '+'}${Math.abs(50 - num)})|${(50 - num) ** 2}`
                      : `${num} × ${num}`}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Card: Launch 20Q Squares Practice Drill */}
          <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-purple-950/90 border border-violet-500/30 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-400" />
                <h3 className="text-base font-bold text-white">
                  Launch 20-Question Squares Deliberate Drill
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Sharpen automaticity across Base 50, Base 100, and ending in 5 square shortcuts.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playStreak(4);
                startSquaresPractice(20);
              }}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all flex items-center gap-2 active:scale-[0.98] whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Squares Drill (20Q)</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CUBES (1 TO 25) & BIJECTION PEGS                                   */}
      {/* ========================================================================= */}
      {currentTab === 'cubes' && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                  <Box className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cube Studio • 1³ to 25³ + Unit Bijection Pegs</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Learn Cubes (1–25)
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                  Cubes possess a flawless 1-to-1 bijection with their unit ending digits, making cube root and cube calculation rapid and effortless.
                </p>
              </div>
            </div>

            {/* Cube Unit Ending Bijection Pegs Guide */}
            <div className="mt-6 pt-5 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Law of Cube Unit Endings (1-to-1 Bijection):</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-300">Identity Endings (Same as Base):</div>
                  <div className="font-mono text-slate-300 text-[11px]">
                    0³→0, 1³→1, 4³→4 (64), 5³→5 (125), 6³→6 (216), 9³→9 (729)
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="font-bold text-cyan-300">Complementary Dyads (Sum to 10):</div>
                  <div className="font-mono text-slate-300 text-[11px]">
                    2 ⇄ 8 (2³=8, 8³=512 ending in 2) &bull; 3 ⇄ 7 (3³=27, 7³=343 ending in 3)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Control Bar: Ordering & Flashcard Modes */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  setIsRandomOrder(!isRandomOrder);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  isRandomOrder
                    ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{isRandomOrder ? 'Random Order' : 'Sequential Order'}</span>
              </button>

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
                <span>{flashcardMode ? 'Flashcards: ON' : 'Flashcard Mode'}</span>
              </button>
            </div>

            {flashcardMode && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleRevealAll(25)}
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

          {/* Cubes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cubesList.map((num, idx) => {
              const cubeVal = num * num * num;
              const isRevealed = !flashcardMode || revealedCards[num];
              const isSpeaking = activeSpeechIndex === idx;

              return (
                <motion.div
                  key={`cube_${num}`}
                  layout
                  onClick={() => {
                    if (flashcardMode) toggleRevealCard(num);
                  }}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between select-none relative group ${
                    flashcardMode ? 'cursor-pointer hover:border-amber-500/60' : ''
                  } bg-slate-900/60 border-slate-800 hover:bg-slate-900`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                    <span className="text-slate-600">#{num}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(`${num} cubed equals ${cubeVal}`, idx);
                      }}
                      title="Pronounce"
                      className={`p-1 rounded-lg transition-colors ${
                        isSpeaking ? 'text-amber-400 bg-amber-500/20' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-center py-2">
                    <div className="text-sm font-semibold text-slate-400">
                      {num}³
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight mt-1 text-amber-300">
                      {isRevealed ? (
                        <span>{cubeVal}</span>
                      ) : (
                        <span className="inline-block px-3 py-0.5 rounded-lg bg-slate-800 text-slate-500 text-sm font-sans font-medium">
                          Tap to reveal
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-slate-500 font-mono mt-1">
                    ends in {cubeVal % 10}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Card: Launch 20Q Cubes Practice Drill */}
          <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-amber-950/90 border border-amber-500/30 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  Launch 20-Question Cubes Deliberate Drill
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Build rock-solid recall of cubes 1³ through 25³ and unit ending pegs.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playStreak(4);
                startCubesPractice(20);
              }}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-xl shadow-amber-600/30 transition-all flex items-center gap-2 active:scale-[0.98] whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Cubes Drill (20Q)</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SQUARE SHORTCUT TECHNIQUES & PROGRESSIVE UNLOCK TREE               */}
      {/* ========================================================================= */}
      {currentTab === 'shortcuts' && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Progressive Technique Mastery Tree</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Square Shortcut Techniques
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                Master each technique sequentially! Earn at least {MIN_MASTERY_POINTS_TO_UNLOCK} Mastery Points in practice to unlock the next advanced strategy.
              </p>
            </div>
          </div>

          {/* Progressive Technique Unlock Tree Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SQUARE_TECHNIQUE_IDS.map((tId, idx) => {
              const lesson = TECHNIQUE_CURRICULUM[tId];
              const mastery = techniqueMasteryMap[tId];
              const isUnlocked = isTechniqueUnlocked(tId, techniqueMasteryMap);
              const isSelected = selectedTechniqueId === tId;
              const { prerequisiteId } = getTechniquePrerequisite(tId);
              const prereqMastery = prerequisiteId ? techniqueMasteryMap[prerequisiteId] : null;
              const prereqPoints = prereqMastery?.masteryPoints || 0;
              const points = mastery?.masteryPoints || 0;

              return (
                <motion.div
                  key={tId}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => {
                    if (isUnlocked) {
                      playClickSound();
                      setSelectedTechniqueId(tId);
                    } else {
                      soundEngine.playError();
                    }
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none relative ${
                    isSelected
                      ? 'bg-violet-950/40 border-violet-500 ring-1 ring-violet-500/40 shadow-lg'
                      : isUnlocked
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-950/40 border-slate-900 opacity-60'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500">
                        Track {idx + 1}
                      </span>
                      {isUnlocked ? (
                        <div className="flex items-center gap-1.5">
                          {mastery?.isMastered && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                              Mastered
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-violet-300">
                            {points} MP
                          </span>
                        </div>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          <Lock className="w-3 h-3" />
                          <span>Locked</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{lesson?.title || tId}</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {lesson?.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80">
                    {isUnlocked ? (
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="font-mono text-cyan-400">
                          {lesson?.algebraicFormula ? lesson.algebraicFormula.slice(0, 24) : 'Ready to practice'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                    ) : (
                      <div className="space-y-1 text-[11px]">
                        <div className="flex justify-between text-slate-400">
                          <span>Need {MIN_MASTERY_POINTS_TO_UNLOCK} MP in previous</span>
                          <span className="font-mono">{prereqPoints}/{MIN_MASTERY_POINTS_TO_UNLOCK}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-amber-500 transition-all"
                            style={{ width: `${Math.min(100, (prereqPoints / MIN_MASTERY_POINTS_TO_UNLOCK) * 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Technique Interactive Arena */}
          {selectedTechniqueId && TECHNIQUE_CURRICULUM[selectedTechniqueId] && (
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-violet-500/40 shadow-2xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-violet-400 font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Interactive Deliberate Practice</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {TECHNIQUE_CURRICULUM[selectedTechniqueId].title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {TECHNIQUE_CURRICULUM[selectedTechniqueId].subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Formula:</span>
                  <code className="px-3 py-1 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs border border-slate-800">
                    {TECHNIQUE_CURRICULUM[selectedTechniqueId].algebraicFormula}
                  </code>
                </div>
              </div>

              {/* Live Problem Box */}
              {techniqueProblem && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    Solve Using Mental Shortcut
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                    {techniqueProblem.prompt}
                  </div>

                  <form onSubmit={handleCheckTechniqueAnswer} className="max-w-xs mx-auto space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        autoFocus
                        value={techniqueInput}
                        onChange={(e) => setTechniqueInput(e.target.value)}
                        placeholder="Your answer..."
                        className={`w-full py-3 px-4 rounded-xl text-center font-mono font-bold text-lg outline-none transition-all ${
                          techniqueFeedback === true
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                            : techniqueFeedback === false
                            ? 'bg-rose-950/60 border-rose-500 text-rose-300'
                            : 'bg-slate-900 border-slate-700 text-white focus:ring-2 focus:ring-violet-500'
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Verify Shortcut (+10 MP)
                    </button>
                  </form>

                  {/* Mental tip hint */}
                  <div className="text-xs text-slate-400 max-w-md mx-auto pt-2">
                    💡 <span className="font-semibold text-slate-300">Mental Tip:</span>{' '}
                    {techniqueProblem.mentalTip}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: ALGEBRA & BODMAS RULE ENGINE                                       */}
      {/* ========================================================================= */}
      {currentTab === 'bodmas' && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>New Module • Mathematical Order of Operations</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Algebra & BODMAS Rules Engine
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                Master operator precedence (BODMAS / PEMDAS), difference of two squares identities ($a^2 - b^2$), distributive shortcuts, and mental equation balancing.
              </p>
            </div>
          </div>

          {/* BODMAS Law Hierarchy Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-violet-400">1. (B) Brackets First</div>
              <p className="text-slate-400 text-[11px]">
                Always evaluate expressions inside parentheses first: (4 + 6) × 3 = 10 × 3 = 30.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-cyan-400">2. (O) Orders & Powers</div>
              <p className="text-slate-400 text-[11px]">
                Squares, cubes & roots precede basic arithmetic: 5² - 3 × 4 = 25 - 12 = 13.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-emerald-400">3. (D/M) Divide & Multiply</div>
              <p className="text-slate-400 text-[11px]">
                Equal rank, evaluate strictly Left-to-Right: 20 ÷ 4 × 2 = 5 × 2 = 10.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-amber-400">4. (A/S) Add & Subtract</div>
              <p className="text-slate-400 text-[11px]">
                Final stage: 15 + 6 × 4 = 15 + 24 = 39. Never do addition before multiplication!
              </p>
            </div>
          </div>

          {/* Interactive BODMAS Problem Generator */}
          {bodmasProblem && (
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-cyan-500/40 shadow-2xl space-y-5 text-center">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-bold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>Rule: {bodmasProblem.bodmasRule}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight py-2">
                  {bodmasProblem.prompt}
                </div>
              </div>

              <form onSubmit={handleCheckBodmasAnswer} className="max-w-xs mx-auto space-y-3">
                <input
                  type="text"
                  autoFocus
                  value={bodmasInput}
                  onChange={(e) => setBodmasInput(e.target.value)}
                  placeholder="Enter result..."
                  className={`w-full py-3 px-4 rounded-xl text-center font-mono font-bold text-xl outline-none transition-all ${
                    bodmasFeedback === true
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                      : bodmasFeedback === false
                      ? 'bg-rose-950/60 border-rose-500 text-rose-300'
                      : 'bg-slate-950 border-slate-700 text-white focus:ring-2 focus:ring-cyan-500'
                  }`}
                />

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-600/30 transition-all"
                >
                  Verify BODMAS Precedence
                </button>
              </form>

              {/* Step by Step Breakdown */}
              {bodmasShowStep && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-lg mx-auto text-left space-y-2 text-xs">
                  <div className="font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Step-by-Step BODMAS Breakdown:</span>
                  </div>
                  {bodmasProblem.steps.map((s) => (
                    <div key={s.stepNumber} className="text-slate-300">
                      <span className="font-bold text-cyan-400">Step {s.stepNumber}:</span>{' '}
                      {s.explanation}
                    </div>
                  ))}
                  <div className="text-slate-400 pt-1 text-[11px]">
                    {bodmasProblem.mentalTip}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Card: Launch 20Q BODMAS Drill */}
          <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-cyan-950/90 border border-cyan-500/30 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white">
                  Launch 20-Question Algebra & BODMAS Drill
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Train order of operations, shortcut identities, and rapid mental bracket reduction.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playStreak(4);
                startBodmasPractice(20);
              }}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-600/30 transition-all flex items-center gap-2 active:scale-[0.98] whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start BODMAS Drill (20Q)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
