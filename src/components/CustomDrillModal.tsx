'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { ArithmeticCombination, CustomDrillConfig } from '../core/types';

interface CustomDrillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DrillTab = 'tables' | 'squares_cubes' | 'arithmetic' | 'presets';

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
    name: 'RRB PO Prelims Speed Sprint',
    subtitle: 'High-frequency teen tables (13-19) + 2d±2d and 3d±2d speed addition',
    badge: 'Exam Focused',
    config: {
      selectedTables: [13, 14, 15, 16, 17, 18, 19],
      selectedSquareRanges: [{ min: 11, max: 40 }],
      selectedCubeRanges: [{ min: 1, max: 20 }],
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
    subtitle: 'Memory anchors for squares (1–50) and cubes (1–25) via algebraic bases',
    badge: 'Memory Anchor',
    config: {
      selectedTables: [],
      selectedSquareRanges: [{ min: 1, max: 50 }],
      selectedCubeRanges: [{ min: 1, max: 25 }],
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

  const [activeTab, setActiveTab] = useState<DrillTab>('tables');

  // Custom drill configuration state
  const [selectedTables, setSelectedTables] = useState<number[]>([18, 19]);
  const [singleTableMasteryMode, setSingleTableMasteryMode] = useState<boolean>(false);
  const [singleTableTarget, setSingleTableTarget] = useState<number>(18);

  const [selectedSquareRanges, setSelectedSquareRanges] = useState<{ min: number; max: number }[]>([
    { min: 11, max: 35 },
  ]);
  const [selectedCubeRanges, setSelectedCubeRanges] = useState<{ min: number; max: number }[]>([
    { min: 1, max: 15 },
  ]);

  const [selectedArithmeticCombos, setSelectedArithmeticCombos] = useState<ArithmeticCombination[]>([
    'add_sub_2d_2d',
    'add_sub_3d_2d',
  ]);

  const [operatorPreference, setOperatorPreference] = useState<'+' | '-' | '×' | 'mixed'>('mixed');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(5); // 0 = zen/unlimited
  const [goalCount, setGoalCount] = useState<number>(20);
  const [interleavePreviousLearned, setInterleavePreviousLearned] = useState<boolean>(true);

  if (!isOpen) return null;

  // Toggle table helper
  const toggleTable = (num: number) => {
    if (selectedTables.includes(num)) {
      if (selectedTables.length > 1) {
        setSelectedTables(selectedTables.filter((t) => t !== num));
      }
    } else {
      setSelectedTables([...selectedTables, num].sort((a, b) => a - b));
    }
  };

  const selectPresetTables = (type: 'core' | 'teens' | 'decades' | 'all30') => {
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

  const toggleCombo = (id: ArithmeticCombination) => {
    if (selectedArithmeticCombos.includes(id)) {
      if (selectedArithmeticCombos.length > 1 || selectedTables.length > 0 || selectedSquareRanges.length > 0) {
        setSelectedArithmeticCombos(selectedArithmeticCombos.filter((c) => c !== id));
      }
    } else {
      setSelectedArithmeticCombos([...selectedArithmeticCombos, id]);
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

  const totalSelectedCount =
    selectedTables.length +
    selectedSquareRanges.length +
    selectedCubeRanges.length +
    selectedArithmeticCombos.length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800/90 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white tracking-tight">Custom Workout Builder</h2>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    Adaptive Engine
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Select specific tables, square ranges, multi-digit combinations, and time budgets.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close custom workout builder"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/50 px-4 pt-2 gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('tables')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-semibold transition-all border-b-2 ${
                activeTab === 'tables'
                  ? 'border-violet-500 text-violet-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Multiplication Tables</span>
              {selectedTables.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-bold">
                  {selectedTables.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('squares_cubes')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-semibold transition-all border-b-2 ${
                activeTab === 'squares_cubes'
                  ? 'border-amber-500 text-amber-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Squares & Cubes</span>
              {(selectedSquareRanges.length > 0 || selectedCubeRanges.length > 0) && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                  {selectedSquareRanges.length + selectedCubeRanges.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('arithmetic')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-semibold transition-all border-b-2 ${
                activeTab === 'arithmetic'
                  ? 'border-emerald-500 text-emerald-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Addition & Subtraction</span>
              {selectedArithmeticCombos.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  {selectedArithmeticCombos.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('presets')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-semibold transition-all border-b-2 ${
                activeTab === 'presets'
                  ? 'border-cyan-500 text-cyan-300 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Exam Presets</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 p-5 overflow-y-auto space-y-6">
            {/* TAB 1: MULTIPLICATION TABLES */}
            {activeTab === 'tables' && (
              <div className="space-y-5">
                {/* Single Table Mastery Callout */}
                <div className="p-3.5 rounded-xl bg-violet-950/30 border border-violet-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-bold text-white">Single-Table Automaticity Focus</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Target 1 table (e.g. Table 18 or 19). Drills all facts until 95% accuracy and &lt;2.2s latency, with dynamic revision of previous tables!
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={singleTableTarget}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        setSingleTableTarget(val);
                        setSingleTableMasteryMode(true);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-semibold text-violet-200 focus:outline-none focus:border-violet-400"
                    >
                      {Array.from({ length: 99 }, (_, i) => i + 2).map((t) => (
                        <option key={t} value={t}>
                          Table ×{t}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => setSingleTableMasteryMode(!singleTableMasteryMode)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Quick Select Table Bands
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => selectPresetTables('core')}
                      className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-200 text-left transition-colors"
                    >
                      Core Tables 2–12
                    </button>
                    <button
                      onClick={() => selectPresetTables('teens')}
                      className="px-3 py-2 rounded-lg bg-violet-950/40 hover:bg-violet-950/60 border border-violet-700/40 text-xs font-semibold text-violet-200 text-left transition-colors"
                    >
                      Teen Tables 13–19 🔥
                    </button>
                    <button
                      onClick={() => selectPresetTables('decades')}
                      className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-200 text-left transition-colors"
                    >
                      Decades 20, 25, 30...
                    </button>
                    <button
                      onClick={() => selectPresetTables('all30')}
                      className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-200 text-left transition-colors"
                    >
                      All Tables 2–30
                    </button>
                  </div>
                </div>

                {/* High-Frequency Teen Tables & Primary Grid */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Primary Tables (2 to 30)
                    </span>
                    <span className="text-xs text-violet-400 font-medium">
                      {selectedTables.length} selected
                    </span>
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
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
                          className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/40 border border-violet-400'
                              : isTeen
                              ? 'bg-violet-950/20 text-violet-300 border border-violet-800/30 hover:bg-violet-900/30'
                              : 'bg-slate-800/60 text-slate-300 border border-slate-700/40 hover:bg-slate-800'
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
                    Advanced Tables (Selected 31–100)
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[32, 35, 36, 42, 45, 48, 54, 56, 63, 64, 72, 75, 84, 96].map((num) => {
                      const isSelected = selectedTables.includes(num);
                      return (
                        <button
                          key={num}
                          onClick={() => {
                            setSingleTableMasteryMode(false);
                            toggleTable(num);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-violet-600 text-white border border-violet-400'
                              : 'bg-slate-800/50 text-slate-300 border border-slate-700/40 hover:bg-slate-800'
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
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-bold text-white">Square Number Bands (n²)</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { min: 1, max: 25, label: '1² to 25²', desc: 'Foundational mental anchors (1 to 625)' },
                      { min: 26, max: 50, label: '26² to 50²', desc: 'Base-50 method: (50 - d)² = 25 - d | d²' },
                      { min: 51, max: 75, label: '51² to 75²', desc: 'Base-50 method: (50 + d)² = 25 + d | d²' },
                      { min: 76, max: 100, label: '76² to 100²', desc: 'Base-100 method: (100 - d)² = 100 - 2d | d²' },
                    ].map((band) => {
                      const isSelected = selectedSquareRanges.some(
                        (r) => r.min === band.min && r.max === band.max
                      );
                      return (
                        <button
                          key={band.label}
                          onClick={() => toggleSquareRange(band.min, band.max)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-amber-950/40 border-amber-500/60 text-white shadow-sm shadow-amber-500/20'
                              : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-amber-200">{band.label}</span>
                            {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{band.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-white">Cube Number Bands (n³)</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { min: 1, max: 15, label: '1³ to 15³', desc: 'Anchor cubes for banking exam series (1 to 3375)' },
                      { min: 16, max: 30, label: '16³ to 30³', desc: 'Advanced cubes for rapid quant simplification' },
                    ].map((band) => {
                      const isSelected = selectedCubeRanges.some(
                        (r) => r.min === band.min && r.max === band.max
                      );
                      return (
                        <button
                          key={band.label}
                          onClick={() => toggleCubeRange(band.min, band.max)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-cyan-950/40 border-cyan-500/60 text-white shadow-sm shadow-cyan-500/20'
                              : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-cyan-200">{band.label}</span>
                            {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{band.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ARITHMETIC COMBINATIONS */}
            {activeTab === 'arithmetic' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Granular Multi-Digit Combinations (Always Non-Negative)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setSelectedArithmeticCombos(ARITHMETIC_COMBO_OPTIONS.map((o) => o.id))
                      }
                      className="text-xs text-emerald-400 hover:underline font-medium"
                    >
                      Select All
                    </button>
                    <span className="text-slate-600">•</span>
                    <button
                      onClick={() => setSelectedArithmeticCombos(['add_sub_2d_2d'])}
                      className="text-xs text-slate-400 hover:underline font-medium"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ARITHMETIC_COMBO_OPTIONS.map((combo) => {
                    const isSelected = selectedArithmeticCombos.includes(combo.id);
                    return (
                      <button
                        key={combo.id}
                        onClick={() => toggleCombo(combo.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-950/40 border-emerald-500/60 text-white shadow-sm shadow-emerald-500/20'
                            : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-200">{combo.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">{combo.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 4: PRESETS */}
            {activeTab === 'presets' && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Curated RRB PO / IBPS Examination Workouts
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {PRESET_WORKOUTS.map((preset) => (
                    <div
                      key={preset.id}
                      className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
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
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors shrink-0"
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
                  <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
                    {(['mixed', '+', '-', '×'] as const).map((op) => (
                      <button
                        key={op}
                        onClick={() => setOperatorPreference(op)}
                        className={`py-1 rounded text-xs font-bold transition-all ${
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
                    Time Budget
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[2, 3, 5, 10, 0].map((mins) => (
                      <button
                        key={mins}
                        onClick={() => setTimeLimitMinutes(mins)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
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
                    Question Count Goal
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[10, 20, 30, 50].map((count) => (
                      <button
                        key={count}
                        onClick={() => setGoalCount(count)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
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
              <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <div>
                    <span className="text-xs font-semibold text-slate-200">
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
                  className="w-4 h-4 accent-violet-600 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="px-5 py-4 border-t border-slate-800 flex items-center justify-between bg-slate-900/90">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>
                {timeLimitMinutes > 0 ? `${timeLimitMinutes} min sprint` : 'Zen continuous practice'} •{' '}
                {goalCount > 0 ? `${goalCount} questions goal` : 'Endless'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={handleLaunch}
                disabled={totalSelectedCount === 0 && !singleTableMasteryMode}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Launch Workout</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
