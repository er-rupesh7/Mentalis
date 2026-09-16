'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sliders,
  Check,
  Clock,
  Target,
  Sparkles,
  Layers,
  Calculator,
  Grid,
  Zap,
  Flame,
  Plus,
  Minus,
  RotateCcw,
  Play,
  Award,
  ChevronRight,
  Trash2,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ArithmeticCombination, CustomDrillConfig } from '../core/types';
import { useTranslations } from 'next-intl';

interface CustomDrillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DrillTab = 'tables' | 'squares_cubes' | 'arithmetic' | 'presets';

export const SQUARE_BANDS = [
  { min: 1, max: 25, label: '1² to 25²', desc: 'Foundational mental anchors (1 to 625)' },
  { min: 26, max: 50, label: '26² to 50²', desc: 'Base-50 method: (50 - d)² = 25 - d | d²' },
  { min: 51, max: 75, label: '51² to 75²', desc: 'Base-50 method: (50 + d)² = 25 + d | d²' },
  { min: 76, max: 100, label: '76² to 100²', desc: 'Base-100 method: (100 - d)² = 100 - 2d | d²' },
];

export const CUBE_BANDS = [
  { min: 1, max: 15, label: '1³ to 15³', desc: 'Anchor cubes for banking exam series (1 to 3375)' },
  { min: 16, max: 30, label: '16³ to 30³', desc: 'Advanced cubes for rapid quant simplification' },
];

const ARITHMETIC_COMBO_OPTIONS: { id: ArithmeticCombination; label: string; description: string }[] = [
  { id: 'add_sub_2d_1d', label: '2-digit ± 1-digit', description: 'e.g. 58 + 7, 73 - 6 (decade bridging)' },
  { id: 'add_sub_2d_2d', label: '2-digit ± 2-digit', description: 'e.g. 64 + 28, 92 - 47 (L2R striding)' },
  { id: 'add_sub_3d_1d', label: '3-digit ± 1-digit', description: 'e.g. 428 + 7, 603 - 8 (century crossing)' },
  { id: 'add_sub_3d_2d', label: '3-digit ± 2-digit', description: 'e.g. 347 + 68, 514 - 39 (split accumulation)' },
  { id: 'add_sub_3d_3d', label: '3-digit ± 3-digit', description: 'e.g. 682 + 259, 831 - 476 (3D H->T->U)' },
  { id: 'add_sub_4d_2d', label: '4-digit ± 2-digit', description: 'e.g. 3450 + 78, 4120 - 45' },
  { id: 'add_sub_4d_3d', label: '4-digit ± 3-digit', description: 'e.g. 2480 + 360, 5210 - 430' },
  { id: 'add_sub_4d_4d', label: '4-digit ± 4-digit', description: 'e.g. 3450 + 2680, 7120 - 3450' },
  { id: 'add_sub_chain_3', label: '3-Term Running Chain', description: 'e.g. 48 + 35 - 19 (fluid accumulator)' },
];

const PRESET_WORKOUTS: {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  config: Partial<CustomDrillConfig>;
}[] = [
  {
    id: 'rrb_speed_sprint',
    name: 'Apex Speed Arithmetic Sprint',
    subtitle: 'High-frequency teen tables (13-19) + 2d±2d and 3d±2d speed addition',
    badge: 'High Velocity',
    config: {
      selectedTables: [13, 14, 15, 16, 17, 18, 19],
      selectedSquareRanges: [{ min: 1, max: 25 }, { min: 26, max: 50 }],
      selectedCubeRanges: [{ min: 1, max: 15 }],
      selectedArithmeticCombos: ['add_sub_2d_2d', 'add_sub_3d_2d'],
      operatorPreference: 'mixed',
      timeLimitSeconds: 300,
      goalCount: 25,
      interleavePreviousLearned: true,
    },
  },
  {
    id: 'teen_tables_mastery',
    name: 'Teen Tables Mastery (12–19)',
    subtitle: 'Zero-hesitation automaticity drill on the hardest multiplication tables',
    badge: 'Automaticity',
    config: {
      selectedTables: [12, 13, 14, 15, 16, 17, 18, 19],
      selectedSquareRanges: [],
      selectedCubeRanges: [],
      selectedArithmeticCombos: [],
      operatorPreference: '×',
      timeLimitSeconds: 300,
      goalCount: 20,
      interleavePreviousLearned: true,
    },
  },
  {
    id: 'banker_multi_digit_add',
    name: 'Banker Multi-Digit Addition/Subtraction',
    subtitle: 'Place-value Left-to-Right training across 2d, 3d, and 4d combinations',
    badge: 'Place Value',
    config: {
      selectedTables: [],
      selectedSquareRanges: [],
      selectedCubeRanges: [],
      selectedArithmeticCombos: [
        'add_sub_2d_2d',
        'add_sub_3d_2d',
        'add_sub_3d_3d',
        'add_sub_chain_3',
      ],
      operatorPreference: 'mixed',
      timeLimitSeconds: 300,
      goalCount: 20,
      interleavePreviousLearned: true,
    },
  },
  {
    id: 'squares_and_cubes_flash',
    name: 'Squares & Cubes 1–50',
    subtitle: 'Memory anchors for squares (1–50) and cubes (1–30) via algebraic bases',
    badge: 'Memory Anchor',
    config: {
      selectedTables: [],
      selectedSquareRanges: [{ min: 1, max: 25 }, { min: 26, max: 50 }],
      selectedCubeRanges: [{ min: 1, max: 15 }, { min: 16, max: 30 }],
      selectedArithmeticCombos: [],
      operatorPreference: 'mixed',
      timeLimitSeconds: 300,
      goalCount: 20,
      interleavePreviousLearned: true,
    },
  },
];

export const CustomDrillModal: React.FC<CustomDrillModalProps> = ({ isOpen, onClose }) => {
  const { startCustomDrill, startSingleTableMastery } = useQuizStore();
  const tDrill = useTranslations('customDrill');
  const tCommon = useTranslations('common');

  const [activeTab, setActiveTab] = useState<DrillTab>('tables');

  // Custom drill configuration state (Default: empty arrays for squares, cubes, combos so no phantom counts!)
  const [selectedTables, setSelectedTables] = useState<number[]>([18, 19]);
  const [singleTableMasteryMode, setSingleTableMasteryMode] = useState<boolean>(false);
  const [singleTableTarget, setSingleTableTarget] = useState<number>(18);

  const [selectedSquareRanges, setSelectedSquareRanges] = useState<{ min: number; max: number }[]>([]);
  const [selectedCubeRanges, setSelectedCubeRanges] = useState<{ min: number; max: number }[]>([]);
  const [selectedArithmeticCombos, setSelectedArithmeticCombos] = useState<ArithmeticCombination[]>([]);

  const [operatorPreference, setOperatorPreference] = useState<'+' | '-' | '×' | 'mixed'>('mixed');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(5); // 0 = zen/unlimited
  const [goalCount, setGoalCount] = useState<number>(20);
  const [interleavePreviousLearned, setInterleavePreviousLearned] = useState<boolean>(true);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Toggle table helper
  const toggleTable = (num: number) => {
    if (selectedTables.includes(num)) {
      setSelectedTables(selectedTables.filter((t) => t !== num));
    } else {
      setSelectedTables([...selectedTables, num].sort((a, b) => a - b));
    }
  };

  const selectPresetTables = (type: 'core' | 'teens' | 'decades' | 'all30' | 'clear') => {
    if (type === 'clear') {
      setSelectedTables([]);
      return;
    }
    if (type === 'core') setSelectedTables([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    if (type === 'teens') setSelectedTables([13, 14, 15, 16, 17, 18, 19]);
    if (type === 'decades') setSelectedTables([20, 25, 30, 40, 50, 60, 75]);
    if (type === 'all30') {
      const all: number[] = [];
      for (let i = 2; i <= 30; i++) all.push(i);
      setSelectedTables(all);
    }
  };

  const toggleSquareRange = (min: number, max: number) => {
    const exists = selectedSquareRanges.some((r) => r.min === min && r.max === max);
    if (exists) {
      setSelectedSquareRanges(selectedSquareRanges.filter((r) => !(r.min === min && r.max === max)));
    } else {
      setSelectedSquareRanges([...selectedSquareRanges, { min, max }]);
    }
  };

  const toggleCubeRange = (min: number, max: number) => {
    const exists = selectedCubeRanges.some((r) => r.min === min && r.max === max);
    if (exists) {
      setSelectedCubeRanges(selectedCubeRanges.filter((r) => !(r.min === min && r.max === max)));
    } else {
      setSelectedCubeRanges([...selectedCubeRanges, { min, max }]);
    }
  };

  const selectAllSquareRanges = () => {
    if (selectedSquareRanges.length === SQUARE_BANDS.length) {
      setSelectedSquareRanges([]);
    } else {
      setSelectedSquareRanges(SQUARE_BANDS.map((b) => ({ min: b.min, max: b.max })));
    }
  };

  const selectAllCubeRanges = () => {
    if (selectedCubeRanges.length === CUBE_BANDS.length) {
      setSelectedCubeRanges([]);
    } else {
      setSelectedCubeRanges(CUBE_BANDS.map((b) => ({ min: b.min, max: b.max })));
    }
  };

  const toggleCombo = (id: ArithmeticCombination) => {
    if (selectedArithmeticCombos.includes(id)) {
      setSelectedArithmeticCombos(selectedArithmeticCombos.filter((c) => c !== id));
    } else {
      setSelectedArithmeticCombos([...selectedArithmeticCombos, id]);
    }
  };

  const selectAllCombos = () => {
    if (selectedArithmeticCombos.length === ARITHMETIC_COMBO_OPTIONS.length) {
      setSelectedArithmeticCombos([]);
    } else {
      setSelectedArithmeticCombos(ARITHMETIC_COMBO_OPTIONS.map((c) => c.id));
    }
  };

  const handleLaunch = () => {
    if (singleTableMasteryMode) {
      startSingleTableMastery(singleTableTarget);
      onClose();
      return;
    }

    const config: CustomDrillConfig = {
      id: `custom_${Date.now()}`,
      name:
        selectedTables.length > 0 && selectedArithmeticCombos.length === 0 && selectedSquareRanges.length === 0
          ? `Tables [${selectedTables.join(', ')}] Drill`
          : 'Custom Workout',
      selectedTables,
      selectedSquareRanges,
      selectedCubeRanges,
      selectedArithmeticCombos,
      selectedExamSkills: [],
      operatorPreference,
      timeLimitSeconds: timeLimitMinutes > 0 ? timeLimitMinutes * 60 : undefined,
      goalCount: goalCount > 0 ? goalCount : undefined,
      interleavePreviousLearned,
    };

    startCustomDrill(config);
    onClose();
  };

  const applyPreset = (preset: typeof PRESET_WORKOUTS[0]) => {
    setSelectedTables(preset.config.selectedTables || []);
    setSelectedSquareRanges(preset.config.selectedSquareRanges || []);
    setSelectedCubeRanges(preset.config.selectedCubeRanges || []);
    setSelectedArithmeticCombos(preset.config.selectedArithmeticCombos || []);
    setOperatorPreference(preset.config.operatorPreference || 'mixed');
    setTimeLimitMinutes(preset.config.timeLimitSeconds ? preset.config.timeLimitSeconds / 60 : 5);
    setGoalCount(preset.config.goalCount || 20);
    setSingleTableMasteryMode(false);
  };

  // Strictly filter only bands that actually exist in the UI so phantom selections are mathematically impossible
  const validSelectedSquaresCount = selectedSquareRanges.filter((r) =>
    SQUARE_BANDS.some((b) => b.min === r.min && b.max === r.max)
  ).length;

  const validSelectedCubesCount = selectedCubeRanges.filter((r) =>
    CUBE_BANDS.some((b) => b.min === r.min && b.max === r.max)
  ).length;

  const totalSquaresAndCubesCount = validSelectedSquaresCount + validSelectedCubesCount;

  const totalSelectedCount =
    selectedTables.length +
    validSelectedSquaresCount +
    validSelectedCubesCount +
    selectedArithmeticCombos.length;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="relative w-full h-full sm:h-auto sm:max-h-[92vh] max-w-3xl bg-slate-900 border-0 sm:border border-slate-800/90 rounded-none sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">{tDrill('title')}</h2>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    Adaptive Engine
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  {tDrill('subtitle')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {(totalSelectedCount > 0 || singleTableMasteryMode) && (
                <button
                  onClick={() => {
                    setSelectedTables([]);
                    setSelectedSquareRanges([]);
                    setSelectedCubeRanges([]);
                    setSelectedArithmeticCombos([]);
                    setSingleTableMasteryMode(false);
                  }}
                  className="text-xs text-slate-400 hover:text-rose-400 font-semibold px-2.5 py-1.5 rounded-xl hover:bg-slate-800 transition-colors min-h-[36px]"
                  title={tCommon('clear')}
                >
                  {tCommon('clear')}
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={tCommon('close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs (Smooth touch scrolling on mobile) */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 px-3 sm:px-5 pt-2 gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none shrink-0" style={{ WebkitOverflowScrolling: 'touch' }}>
            <button
              onClick={() => setActiveTab('tables')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'tables'
                  ? 'border-violet-500 text-violet-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{tDrill('multiplication')}</span>
              {selectedTables.length > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-bold font-mono">
                  {selectedTables.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('squares_cubes')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'squares_cubes'
                  ? 'border-amber-500 text-amber-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{tDrill('squares')} & {tDrill('cubes')}</span>
              {totalSquaresAndCubesCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold font-mono">
                  {totalSquaresAndCubesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('arithmetic')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'arithmetic'
                  ? 'border-emerald-500 text-emerald-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{tDrill('multiDigit')}</span>
              {selectedArithmeticCombos.length > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold font-mono">
                  {selectedArithmeticCombos.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('presets')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'presets'
                  ? 'border-cyan-500 text-cyan-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tDrill('competitivePresets')}</span>
            </button>
          </div>

          {/* Tab Content (Scrollable with mobile momentum) */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* TAB 1: MULTIPLICATION TABLES */}
            {activeTab === 'tables' && (
              <div className="space-y-5">
                {/* Single Table Mastery Callout */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-violet-950/30 border border-violet-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-bold text-white">Single-Table Automaticity Focus</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Target 1 table (e.g. Table 18 or 19). Drills facts until 95% accuracy & &lt;2.2s latency with automatic next-table level-up!
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <select
                      value={singleTableTarget}
                      onChange={(e) => setSingleTableTarget(parseInt(e.target.value, 10))}
                      className="bg-slate-900 text-white font-mono font-bold text-xs border border-violet-500/40 rounded-xl px-3 py-2 focus:outline-none focus:border-violet-400 min-h-[44px]"
                    >
                      {Array.from({ length: 99 }, (_, i) => i + 2).map((t) => (
                        <option key={t} value={t}>
                          Table ×{t}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => setSingleTableMasteryMode(!singleTableMasteryMode)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                        singleTableMasteryMode
                          ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {singleTableMasteryMode ? 'Active ✓' : 'Activate'}
                    </button>
                  </div>
                </div>

                {/* Quick Selection Buttons */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Quick Select Table Bands
                    </span>
                    <button
                      onClick={() => selectPresetTables('clear')}
                      className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => selectPresetTables('core')}
                      className="px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-200 text-left transition-colors min-h-[44px]"
                    >
                      Core Tables 2–12
                    </button>
                    <button
                      onClick={() => selectPresetTables('teens')}
                      className="px-3 py-2.5 rounded-xl bg-violet-950/40 hover:bg-violet-950/60 border border-violet-700/40 text-xs font-semibold text-violet-200 text-left transition-colors min-h-[44px]"
                    >
                      Teen Tables 13–19 🔥
                    </button>
                    <button
                      onClick={() => selectPresetTables('decades')}
                      className="px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-200 text-left transition-colors min-h-[44px]"
                    >
                      Decades 20, 25, 30...
                    </button>
                    <button
                      onClick={() => selectPresetTables('all30')}
                      className="px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-200 text-left transition-colors min-h-[44px]"
                    >
                      All Tables 2–30
                    </button>
                  </div>
                </div>

                {/* Primary Grid (2 to 30) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Primary Tables (2 to 30)
                    </span>
                    <span className="text-xs text-violet-400 font-medium">
                      {selectedTables.length} selected
                    </span>
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
                    {Array.from({ length: 29 }, (_, i) => i + 2).map((num) => {
                      const isSelected = selectedTables.includes(num);
                      const isTeen = num >= 13 && num <= 19;
                      return (
                        <button
                          key={num}
                          onClick={() => {
                            setSingleTableMasteryMode(false);
                            toggleTable(num);
                          }}
                          className={`py-2.5 px-1 text-center rounded-xl text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                            isSelected
                              ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/40 border border-violet-400'
                              : isTeen
                              ? 'bg-violet-950/30 text-violet-300 border border-violet-800/40 hover:bg-violet-900/40'
                              : 'bg-slate-800/70 text-slate-300 border border-slate-700/50 hover:bg-slate-800'
                          }`}
                        >
                          ×{num}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Higher Tables (31 to 100) */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Advanced Multiples (Selected 31–100)
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[32, 35, 36, 42, 45, 48, 54, 56, 63, 64, 72, 75, 84, 96].map((num) => {
                      const isSelected = selectedTables.includes(num);
                      return (
                        <button
                          key={num}
                          onClick={() => {
                            setSingleTableMasteryMode(false);
                            toggleTable(num);
                          }}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
                            isSelected
                              ? 'bg-violet-600 text-white border border-violet-400 shadow-sm'
                              : 'bg-slate-800/60 text-slate-300 border border-slate-700/40 hover:bg-slate-800'
                          }`}
                        >
                          ×{num}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SQUARES & CUBES */}
            {activeTab === 'squares_cubes' && (
              <div className="space-y-6">
                {/* Square Number Bands */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <h3 className="text-sm font-bold text-white">Square Number Bands (n²)</h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <button
                        onClick={selectAllSquareRanges}
                        className="text-amber-400 hover:text-amber-300 font-semibold"
                      >
                        {selectedSquareRanges.length === SQUARE_BANDS.length ? 'Deselect All' : 'Select All'}
                      </button>
                      {selectedSquareRanges.length > 0 && (
                        <button
                          onClick={() => setSelectedSquareRanges([])}
                          className="text-slate-400 hover:text-rose-400 transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SQUARE_BANDS.map((band) => {
                      const isSelected = selectedSquareRanges.some(
                        (r) => r.min === band.min && r.max === band.max
                      );
                      return (
                        <button
                          key={band.label}
                          onClick={() => toggleSquareRange(band.min, band.max)}
                          className={`p-3.5 rounded-2xl border text-left transition-all min-h-[64px] ${
                            isSelected
                              ? 'bg-amber-950/40 border-amber-500/60 text-white shadow-sm shadow-amber-500/20'
                              : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-amber-200">{band.label}</span>
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                                isSelected
                                  ? 'bg-amber-500 border-amber-400 text-slate-950'
                                  : 'border-slate-700 bg-slate-900/60'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{band.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Cube Number Bands */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-sm font-bold text-white">Cube Number Bands (n³)</h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <button
                        onClick={selectAllCubeRanges}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        {selectedCubeRanges.length === CUBE_BANDS.length ? 'Deselect All' : 'Select All'}
                      </button>
                      {selectedCubeRanges.length > 0 && (
                        <button
                          onClick={() => setSelectedCubeRanges([])}
                          className="text-slate-400 hover:text-rose-400 transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CUBE_BANDS.map((band) => {
                      const isSelected = selectedCubeRanges.some(
                        (r) => r.min === band.min && r.max === band.max
                      );
                      return (
                        <button
                          key={band.label}
                          onClick={() => toggleCubeRange(band.min, band.max)}
                          className={`p-3.5 rounded-2xl border text-left transition-all min-h-[64px] ${
                            isSelected
                              ? 'bg-cyan-950/40 border-cyan-500/60 text-white shadow-sm shadow-cyan-500/20'
                              : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-cyan-200">{band.label}</span>
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                                isSelected
                                  ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                                  : 'border-slate-700 bg-slate-900/60'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{band.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ADDITION & SUBTRACTION */}
            {activeTab === 'arithmetic' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Multi-Digit Addition & Subtraction</h3>
                    <p className="text-xs text-slate-400">
                      Select individual digit combinations for Left-to-Right training.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      onClick={selectAllCombos}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      {selectedArithmeticCombos.length === ARITHMETIC_COMBO_OPTIONS.length ? 'Deselect All' : 'Select All'}
                    </button>
                    {selectedArithmeticCombos.length > 0 && (
                      <button
                        onClick={() => setSelectedArithmeticCombos([])}
                        className="text-slate-400 hover:text-rose-400 transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ARITHMETIC_COMBO_OPTIONS.map((combo) => {
                    const isSelected = selectedArithmeticCombos.includes(combo.id);
                    return (
                      <button
                        key={combo.id}
                        onClick={() => toggleCombo(combo.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all min-h-[64px] ${
                          isSelected
                            ? 'bg-emerald-950/40 border-emerald-500/60 text-white shadow-sm shadow-emerald-500/20'
                            : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-emerald-200">{combo.label}</span>
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                                : 'border-slate-700 bg-slate-900/60'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{combo.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 4: EXAM PRESETS */}
            {activeTab === 'presets' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">Curated Competitive Exam Workouts</h3>
                  <p className="text-xs text-slate-400">
                    Instant 1-click presets engineered for banking and quant automaticity.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {PRESET_WORKOUTS.map((preset) => (
                    <div
                      key={preset.id}
                      className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">{preset.name}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {preset.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{preset.subtitle}</p>
                      </div>

                      <button
                        onClick={() => applyPreset(preset)}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors shrink-0 text-center min-h-[44px]"
                      >
                        Load Preset
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GLOBAL SESSION CONTROLS */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Operator Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1.5">
                    Operator Preference
                  </label>
                  <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
                    {(['mixed', '+', '-', '×'] as const).map((op) => (
                      <button
                        key={op}
                        onClick={() => setOperatorPreference(op)}
                        className={`py-2 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                          operatorPreference === op
                            ? 'bg-violet-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {op === 'mixed' ? 'All' : op}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Budget */}
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1.5">
                    {tDrill('timerSetting')}
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[2, 3, 5, 10, 0].map((mins) => (
                      <button
                        key={mins}
                        onClick={() => setTimeLimitMinutes(mins)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all min-h-[38px] ${
                          timeLimitMinutes === mins
                            ? 'bg-violet-600 text-white border-violet-500 shadow-sm'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        {mins === 0 ? 'Zen' : `${mins}m`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question Count Goal */}
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1.5">
                    {tDrill('problemCount')}
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[10, 20, 30, 50].map((count) => (
                      <button
                        key={count}
                        onClick={() => setGoalCount(count)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all min-h-[38px] ${
                          goalCount === count
                            ? 'bg-violet-600 text-white border-violet-500 shadow-sm'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        {count}q
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interleaving Option */}
              <div className="flex items-center justify-between py-2.5 px-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">
                      Dynamic Revision Interleaving (25%)
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Mix in previously practiced facts to prevent long-term memory decay.
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={interleavePreviousLearned}
                  onChange={(e) => setInterleavePreviousLearned(e.target.checked)}
                  className="w-5 h-5 accent-violet-600 rounded cursor-pointer shrink-0"
                />
              </div>
            </div>
          </div>

          {/* Footer Action (Mobile friendly stacked/full-width) */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/95 shrink-0 pb-safe">
            <div className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>
                {timeLimitMinutes > 0 ? `${timeLimitMinutes} min sprint` : 'Zen continuous practice'} •{' '}
                {goalCount > 0 ? `${goalCount} questions goal` : 'Endless'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors min-h-[44px]"
              >
                {tCommon('cancel')}
              </button>

              <button
                onClick={handleLaunch}
                disabled={totalSelectedCount === 0 && !singleTableMasteryMode}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{tDrill('startWorkout')}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
