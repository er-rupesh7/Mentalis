/**
 * 60-Day RRB PO / IBPS Prelims Adaptive Curriculum Engine
 * Dynamically governs progression based on actual demonstrated automaticity,
 * accuracy, and latency—never merely by calendar days or question counts.
 */

import { SkillDimension, LearnerProfile, TrainingPlan, TrainingBlock } from './learnerModel';
import { ModuleId, TableTrainingMode, ExamSubSkill } from './types';

export interface CurriculumPhase {
  phaseNumber: number; // 1 to 5
  title: string;
  nominalDays: string; // e.g. "Days 1–10"
  description: string;
  focusSkills: SkillDimension[];
  benchmarkRequirements: string[];
}

export const CURRICULUM_PHASES: CurriculumPhase[] = [
  {
    phaseNumber: 1,
    title: 'Phase 1: Arithmetic Foundation & Tables 11–15',
    nominalDays: 'Days 1–10',
    description:
      'Build automaticity on Tables 11–15, Base-100 complements, and Left-to-Right addition/subtraction bridging.',
    focusSkills: [
      'table_11',
      'table_12',
      'table_13',
      'table_14',
      'table_15',
      'complements_100',
      'doubles_halves',
      'add_2d_2d',
      'sub_2d_2d',
    ],
    benchmarkRequirements: [
      'Tables 11–15 accuracy ≥ 90%',
      'Tables 11–15 median latency ≤ 2.5s',
      'Base-100 complements accuracy ≥ 95%',
    ],
  },
  {
    phaseNumber: 2,
    title: 'Phase 2: Teen Tables 16–20 & Division Fluency',
    nominalDays: 'Days 11–20',
    description:
      'Master difficult teen tables (17, 19), inverse division fluency, and 2-digit × 1-digit mental decomposition.',
    focusSkills: [
      'table_16',
      'table_17',
      'table_18',
      'table_19',
      'table_20',
      'div_by_1d',
      'mult_2d_1d',
      'near_doubles',
    ],
    benchmarkRequirements: [
      'Tables 16–20 accuracy ≥ 90%',
      'Tables 16–20 median latency ≤ 2.5s',
      'Division by 1-digit latency ≤ 2.0s',
    ],
  },
  {
    phaseNumber: 3,
    title: 'Phase 3: Banking Calculation Fluency & Benchmarks',
    nominalDays: 'Days 21–35',
    description:
      'Master 1/2 to 1/40 fraction ↔ percentage conversions, squares 1²–50², and cubes 1³–20³ for instant recognition.',
    focusSkills: [
      'fraction_percentage_equiv',
      'squares_1_20',
      'squares_ending_5',
      'squares_near_50',
      'cubes_anchors',
      'quant_percentage',
    ],
    benchmarkRequirements: [
      'Fraction ↔ Percentage accuracy ≥ 95% under 1.8s',
      'Squares 1–25 instant recall ≤ 2.0s',
      'Percentage mental calculation accuracy ≥ 85%',
    ],
  },
  {
    phaseNumber: 4,
    title: 'Phase 4: Speed Math, BODMAS & Approximation',
    nominalDays: 'Days 36–50',
    description:
      'Train high-speed Simplification (BODMAS factoring), Approximation estimation, Ratio splitting, and Mean calculation.',
    focusSkills: [
      'quant_simplification',
      'quant_approximation',
      'quant_ratio',
      'quant_average',
      'mult_2d_2d',
      'div_by_2d',
    ],
    benchmarkRequirements: [
      'Simplification BODMAS accuracy ≥ 85% under 6.0s',
      'Approximation accuracy ≥ 85% under 5.0s',
      'Ratio splitting accuracy ≥ 90%',
    ],
  },
  {
    phaseNumber: 5,
    title: 'Phase 5: Prelims Exam Mode & DI Micro-Calculations',
    nominalDays: 'Days 51–60',
    description:
      'Simulate high-pressure exam calculation blocks: mixed simplification, DI sums/differences/ratios, and number series.',
    focusSkills: [
      'quant_simplification',
      'quant_approximation',
      'quant_di_arithmetic',
      'quant_number_series',
      'quant_profit_loss',
      'quant_si_ci',
    ],
    benchmarkRequirements: [
      'Mixed exam calculation set accuracy ≥ 90%',
      'Overall speed-math composite latency ≤ 5.0s',
      'Zero unforced errors on table/multiplication facts',
    ],
  },
];

/**
 * Micro-Session Presets
 */
export interface MicroSessionPreset {
  id: string;
  name: string;
  durationMinutes: number;
  description: string;
  targetModule: ModuleId;
  targetTableMode?: TableTrainingMode;
  examSubSkill?: ExamSubSkill;
  focusHint: string;
}

export const MICRO_SESSION_PRESETS: MicroSessionPreset[] = [
  {
    id: 'table_sprint_2m',
    name: '2-Min Table Sprint',
    durationMinutes: 2,
    description: 'Rapid-fire 120s sprint on Tables 11–20 to sharpen reflex recall under mild pressure.',
    targetModule: 'tables_bootcamp',
    targetTableMode: 'recognition',
    focusHint: 'Aim for sub-1.8s response per fact. Don’t pause—trust your mental muscle memory.',
  },
  {
    id: 'mult_builder_5m',
    name: '5-Min Multiplication Builder',
    durationMinutes: 5,
    description: 'Targeted drill on your current weakest table using bidirectional & decomposition anchors.',
    targetModule: 'tables_bootcamp',
    targetTableMode: 'decomposition',
    focusHint: 'Split tens and units (e.g. 17×6 = 60 + 42 = 102).',
  },
  {
    id: 'workout_10m',
    name: '10-Min Calculation Workout',
    durationMinutes: 10,
    description: 'Balanced mental fitness session: tables, bridging arithmetic, and fraction conversions.',
    targetModule: 'tables_bootcamp',
    targetTableMode: 'recall',
    focusHint: 'Focus on zero errors; accuracy builds confidence, speed follows automatically.',
  },
  {
    id: 'quant_warmup_20m',
    name: '20-Min Apex Quant Warm-Up',
    durationMinutes: 20,
    description: 'Comprehensive 5-block calculation session covering all 10 speed arithmetic sub-skills.',
    targetModule: 'exam_quant',
    examSubSkill: 'quant_simplification',
    focusHint: 'Full velocity readiness warm-up: 3m warmup, 5m weak table, 4m arithmetic, 5m speed quant, 3m review.',
  },
];

/**
 * Determines the active curriculum phase based on learner profile mastery benchmarks.
 * If user has not mastered Phase 1 tables (11-15), they are retained in Phase 1 regardless of day count.
 * If user demonstrates rapid mastery, they can accelerate into later phases early.
 */
export function evaluateActiveCurriculumPhase(
  calendarDay: number,
  profile?: LearnerProfile
): CurriculumPhase {
  if (!profile || !profile.skills) {
    return CURRICULUM_PHASES[0];
  }

  // Check Phase 1 mastery: Tables 11–15
  const phase1Tables: SkillDimension[] = ['table_11', 'table_12', 'table_13', 'table_14', 'table_15'];
  let phase1MasteredCount = 0;
  for (const t of phase1Tables) {
    const s = profile.skills[t];
    if (s && s.accuracy >= 85 && s.totalAttempts >= 5 && (s.medianLatencyMs <= 3000 || s.medianLatencyMs === 0)) {
      phase1MasteredCount++;
    }
  }
  const phase1Mastered = phase1MasteredCount >= 4;

  // Check Phase 2 mastery: Tables 16–20
  const phase2Tables: SkillDimension[] = ['table_16', 'table_17', 'table_18', 'table_19', 'table_20'];
  let phase2MasteredCount = 0;
  for (const t of phase2Tables) {
    const s = profile.skills[t];
    if (s && s.accuracy >= 85 && s.totalAttempts >= 5 && (s.medianLatencyMs <= 3000 || s.medianLatencyMs === 0)) {
      phase2MasteredCount++;
    }
  }
  const phase2Mastered = phase1Mastered && phase2MasteredCount >= 4;

  // Check Phase 3 mastery: Fractions, Squares
  const fracSkill = profile.skills['fraction_percentage_equiv'];
  const sqSkill = profile.skills['squares_1_20'];
  const phase3Mastered =
    phase2Mastered &&
    (fracSkill?.accuracy || 0) >= 80 &&
    (sqSkill?.accuracy || 0) >= 80;

  // Check Phase 4 mastery: Simplification, Approximation
  const simpSkill = profile.skills['quant_simplification'];
  const approxSkill = profile.skills['quant_approximation'];
  const phase4Mastered =
    phase3Mastered &&
    (simpSkill?.accuracy || 0) >= 80 &&
    (approxSkill?.accuracy || 0) >= 80;

  // Governor logic: Ability strictly overrides calendar day
  if (!phase1Mastered) {
    return CURRICULUM_PHASES[0]; // Retain on Phase 1
  }

  if (!phase2Mastered) {
    return CURRICULUM_PHASES[1]; // Phase 2: Teen tables
  }

  if (!phase3Mastered && calendarDay <= 35) {
    return CURRICULUM_PHASES[2]; // Phase 3: Banking fractions & squares
  }

  if (!phase4Mastered && calendarDay <= 50) {
    return CURRICULUM_PHASES[3]; // Phase 4: Speed math & BODMAS
  }

  return CURRICULUM_PHASES[4]; // Phase 5: Prelims Exam Mode
}

/**
 * Finds the learner's single weakest table among 11 through 20.
 */
export function identifyWeakestTable(profile?: LearnerProfile): number {
  if (!profile || !profile.skills) return 13;

  let weakestTable = 13;
  let lowestScore = 999;

  for (let t = 11; t <= 20; t++) {
    const dim = `table_${t}` as SkillDimension;
    const skill = profile.skills[dim];
    if (!skill || skill.totalAttempts === 0) {
      return t; // Untrained table has highest priority
    }

    // Score based on accuracy (weight 50%) and latency (weight 50%)
    const acc = skill.accuracy;
    const latencyFactor = Math.min(100, (skill.medianLatencyMs / 3000) * 50);
    const score = acc - latencyFactor;

    if (score < lowestScore) {
      lowestScore = score;
      weakestTable = t;
    }
  }

  return weakestTable;
}

/**
 * Generates the 20-Minute Daily Mission consisting of 5 pedagogical blocks:
 * 1. 3 min: Warm-Up (Complements to 100 & Rapid Doubling/Halving)
 * 2. 5 min: Priority Weak Table or Focus Table (Recognition -> Decomposition -> Recall)
 * 3. 4 min: Mental Arithmetic (Bridging Addition/Subtraction or Multi-Digit Accumulation)
 * 4. 5 min: Speed Calculations (RRB Quant Simplification / Approximation)
 * 5. 3 min: Retention Review (Spaced retrieval of earlier bands)
 */
export function generate20MinDailyMission(
  calendarDay: number,
  profile?: LearnerProfile
): TrainingPlan {
  const phase = evaluateActiveCurriculumPhase(calendarDay, profile);
  const weakestTable = identifyWeakestTable(profile);
  const now = Date.now();
  const dateStr = new Date(now).toISOString().split('T')[0];

  const blocks: TrainingBlock[] = [
    {
      id: `block_1_warmup_${now}`,
      blockType: 'warmup',
      title: 'Mental Warm-Up (Complements & Doubling)',
      description: 'Prime your neural calculation buffer with base-100 complements and fast doubling.',
      dimension: 'complements_100',
      drillId: 'add_sub_level_3',
      targetCount: 15,
      allocatedMinutes: 3,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_2_table_${now}`,
      blockType: 'priority_weakness',
      title: `Table ×${weakestTable} Automaticity Drill`,
      description: `Targeted mastery of Table ×${weakestTable} through recognition and decomposition shortcuts.`,
      dimension: `table_${weakestTable}` as SkillDimension,
      drillId: `table_${weakestTable}`,
      targetCount: 25,
      allocatedMinutes: 5,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_3_arithmetic_${now}`,
      blockType: 'mixed_retrieval',
      title: 'Left-to-Right Mental Arithmetic',
      description: '2-digit addition and subtraction using the Most Significant Digit accumulation strategy.',
      dimension: 'add_2d_2d',
      drillId: 'add_sub_level_4',
      targetCount: 15,
      allocatedMinutes: 4,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_4_quant_${now}`,
      blockType: 'strategy_refinement',
      title: 'RRB Prelims Speed Simplification',
      description: 'BODMAS priority, fraction shortcuts, and rapid mental approximation.',
      dimension: 'quant_simplification',
      drillId: 'quant_simplification',
      targetCount: 12,
      allocatedMinutes: 5,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_5_retention_${now}`,
      blockType: 'cool_down',
      title: 'Spaced Memory Retention Review',
      description: 'Mixed retrieval test of earlier mastered tables and benchmark squares.',
      dimension: 'squares_1_20',
      drillId: 'sq_cube_precision',
      targetCount: 10,
      allocatedMinutes: 3,
      completedCount: 0,
      status: 'pending',
    },
  ];

  return {
    id: `mission_rrb_${dateStr}_${now}`,
    date: dateStr,
    createdAt: now,
    totalEstimatedMinutes: 20,
    blocks,
    rationale: `Mission customized for ${phase.title}. Focusing on Table ×${weakestTable} and speed calculation shortcuts.`,
    focusDimensions: [`table_${weakestTable}` as SkillDimension, 'quant_simplification', 'complements_100'],
    isCompleted: false,
    source: 'offline',
  };
}
