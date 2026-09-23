'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sparkles,
  BookOpen,
  Target,
  Play,
  RotateCcw,
  Volume2,
  ChevronRight,
  Eye,
  EyeOff,
  Award,
  Layers,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { playClickSound } from '../../core/soundEffects';

type PowerTab = 'squares' | 'cubes' | 'shortcuts';
type ShortcutId = 'ending_5' | 'near_50' | 'near_100' | 'universal_duplex';

const SHORTCUT_DETAILS: Record<ShortcutId, {
  title: string;
  formula: string;
  description: string;
  example: string;
  steps: string[];
}> = {
  ending_5: {
    title: 'Numbers Ending in 5',
    formula: 'N5² = [N × (N + 1)] | 25',
    description: 'Multiply the leading number by its successor and append 25 at the end.',
    example: '65² = (6 × 7) | 25 = 4225',
    steps: [
      'Take tens digit N = 6',
      'Multiply by next integer: 6 × 7 = 42',
      'Append 25: 4225',
    ],
  },
  near_50: {
    title: 'Numbers Near Base 50',
    formula: '(50 ± d)² = (25 ± d) | d²',
    description: 'Calculate deviation d from 50. Base is 25 ± d, followed by 2-digit d².',
    example: '54²: d = +4 → (25 + 4) | 4² = 2916',
    steps: [
      'Find distance from 50: d = 54 - 50 = +4',
      'Add deviation to 25: 25 + 4 = 29',
      'Square deviation (2 digits): 4² = 16 → 2916',
    ],
  },
  near_100: {
    title: 'Numbers Near Base 100',
    formula: '(100 ± d)² = (100 ± 2d) | d²',
    description: 'Double the deviation from 100, then append the square of the deviation.',
    example: '96²: d = -4 → (100 - 8) | (-4)² = 9216',
    steps: [
      'Find distance from 100: d = -4',
      'Double deviation: 96 - 4 = 92 (or 100 - 8 = 92)',
      'Square deviation (2 digits): (-4)² = 16 → 9216',
    ],
  },
  universal_duplex: {
    title: 'Universal 2-Digit Duplex (Dvandva)',
    formula: '(ab)² = a² | 2ab | b²',
    description: 'Universal Vedic squaring method for any two-digit number with mental carries.',
    example: '32² = 3² | 2(3)(2) | 2² = 9 | 12 | 4 = 1024',
    steps: [
      'Right unit square: 2² = 4',
      'Crosswise product doubled: 2 × (3 × 2) = 12 (write 2, carry 1)',
      'Left tens square: 3² = 9 + 1 carry = 10 → 1024',
    ],
  },
};

export function SquaresAndCubesHub() {
  const { startSession, setActiveSquareTrack, setViewMode } = useQuizStore();

  const [activeTab, setActiveTab] = useState<PowerTab>('squares');
  const [selectedShortcut, setSelectedShortcut] = useState<ShortcutId>('ending_5');
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedCards, setRevealedCards] = useState<Record<number, boolean>>({});

  // Squares 1 to 50
  const squaresList = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      num: i + 1,
      square: (i + 1) * (i + 1),
    }));
  }, []);

  // Cubes 1 to 30
  const cubesList = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      num: i + 1,
      cube: (i + 1) * (i + 1) * (i + 1),
    }));
  }, []);

  const toggleCard = (n: number) => {
    playClickSound();
    setRevealedCards((prev) => ({ ...prev, [n]: !prev[n] }));
  };

  const handleStartSquarePractice = () => {
    playClickSound();
    setActiveSquareTrack('near_50');
    setViewMode('practice');
    startSession({ goalCount: 20, mode: 'standard' });
  };

  const handleStartCubePractice = () => {
    playClickSound();
    setActiveSquareTrack('cubes_anchor');
    setViewMode('practice');
    startSession({ goalCount: 20, mode: 'standard' });
  };

  const currentShortcut = SHORTCUT_DETAILS[selectedShortcut];

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
              <span>Powers & Exponents Studio</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Squares & Cubes Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Master squares up to 50, cubes up to 30, and high-velocity Vedic shortcut algorithms for instant competitive calculation.
            </p>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-bold">
            <button
              onClick={() => {
                playClickSound();
                setActiveTab('squares');
              }}
              className={`px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'squares'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Squares 1–50
            </button>
            <button
              onClick={() => {
                playClickSound();
                setActiveTab('cubes');
              }}
              className={`px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'cubes'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cubes 1–30
            </button>
            <button
              onClick={() => {
                playClickSound();
                setActiveTab('shortcuts');
              }}
              className={`px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'shortcuts'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fast Shortcuts
            </button>
          </div>
        </div>
      </div>

      {/* SQUARES TAB */}
      {activeTab === 'squares' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlashcardMode(!flashcardMode)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  flashcardMode
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {flashcardMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{flashcardMode ? 'Flashcard Mode: ON' : 'Flashcard Mode'}</span>
              </button>
            </div>

            <button
              onClick={handleStartSquarePractice}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-violet-600/20 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start 20Q Practice Drill</span>
            </button>
          </div>

          {/* Squares Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {squaresList.map(({ num, square }) => {
              const isRevealed = !flashcardMode || revealedCards[num];
              return (
                <div
                  key={num}
                  onClick={() => flashcardMode && toggleCard(num)}
                  className={`p-3.5 rounded-2xl border text-center transition-all select-none ${
                    flashcardMode ? 'cursor-pointer hover:border-violet-500/60' : ''
                  } bg-slate-900/70 border-slate-800 hover:bg-slate-900`}
                >
                  <div className="text-xs font-semibold text-slate-400 font-mono">
                    {num}²
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-violet-300 mt-1">
                    {isRevealed ? square : <span className="text-xs text-slate-600">Tap</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CUBES TAB */}
      {activeTab === 'cubes' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlashcardMode(!flashcardMode)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  flashcardMode
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {flashcardMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{flashcardMode ? 'Flashcard Mode: ON' : 'Flashcard Mode'}</span>
              </button>
            </div>

            <button
              onClick={handleStartCubePractice}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-bold shadow-lg shadow-amber-600/20 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start 20Q Cubes Drill</span>
            </button>
          </div>

          {/* Cubes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {cubesList.map(({ num, cube }) => {
              const isRevealed = !flashcardMode || revealedCards[num + 100];
              return (
                <div
                  key={num}
                  onClick={() => flashcardMode && toggleCard(num + 100)}
                  className={`p-3.5 rounded-2xl border text-center transition-all select-none ${
                    flashcardMode ? 'cursor-pointer hover:border-amber-500/60' : ''
                  } bg-slate-900/70 border-slate-800 hover:bg-slate-900`}
                >
                  <div className="text-xs font-semibold text-slate-400 font-mono">
                    {num}³
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-amber-300 mt-1">
                    {isRevealed ? cube.toLocaleString() : <span className="text-xs text-slate-600">Tap</span>}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    ends in {cube % 10}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FAST SHORTCUTS TAB */}
      {activeTab === 'shortcuts' && (
        <div className="space-y-6">
          {/* Shortcut Selector Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {(Object.keys(SHORTCUT_DETAILS) as ShortcutId[]).map((id) => {
              const item = SHORTCUT_DETAILS[id];
              const isSelected = selectedShortcut === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    playClickSound();
                    setSelectedShortcut(id);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/70 shadow-lg shadow-amber-950/20 ring-1 ring-amber-500/30'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-bold text-white text-xs truncate">{item.title}</div>
                  <div className="text-[10px] text-amber-400 font-mono mt-0.5 truncate">{item.formula}</div>
                </button>
              );
            })}
          </div>

          {/* Active Shortcut Details Card */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{currentShortcut.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{currentShortcut.description}</p>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono font-bold text-sm">
                {currentShortcut.formula}
              </div>
            </div>

            {/* Worked Example */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Worked Example
                </div>
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  {currentShortcut.example}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Algorithm Breakdown
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentShortcut.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono font-bold">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Launch Practice for this Shortcut */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  playClickSound();
                  setActiveSquareTrack(
                    selectedShortcut === 'ending_5' ? 'ending_5' :
                    selectedShortcut === 'near_50' ? 'near_50' :
                    selectedShortcut === 'near_100' ? 'near_100' : 'general_duplex'
                  );
                  setViewMode('practice');
                  startSession({ goalCount: 20, mode: 'standard' });
                }}
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-xl shadow-amber-600/20 transition-all flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Practice {currentShortcut.title} (20Q)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
