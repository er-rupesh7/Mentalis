/**
 * Fact-Based Deterministic Plan Engine for Mentalis
 * Constructs structured, fact-targeted 10-25 minute cognitive training plans
 * with explicit reasons, spaced review targets, repair fact families,
 * and dynamic fatigue-aware block adjustments.
 */

import { Question } from './types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  generateArithmeticComboQuestion,
  generateTwoDigitMultiplicationQuestion,
  randomInt,
} from './calcEngine';
import {
  LearnerProfile,
  SkillDimension,
  TrainingBlock,
  TrainingPlan,
  FatigueSignal,
  ALL_SKILL_DIMENSIONS,
} from './learnerModel';
import {
  getDefaultDrillForDimension,
} from './catalog';
import { FactMemoryState, FactKey, parseFactKey } from './factModel';
import { generateQuestionFromFact } from './factEngine';

export interface TrainingBlockExt extends TrainingBlock {
  targetFactKeys?: FactKey[];
}

/**
 * Robust, fully offline "Foundation Plan".
 * Calibrates difficulty according to user level (Level 1 vs Level 20+).
 */
export function generateLevel0FoundationPlan(
  profile: LearnerProfile,
  requestedMinutes: number = profile.preferredDailyMinutes || 15,
  factMemoryMap?: Record<string, FactMemoryState>,
  userLevel: number = 1
): TrainingPlan {
  const totalMinutes = Math.max(10, Math.min(30, requestedMinutes));
  const todayStr = new Date().toISOString().split('T')[0];
  const now = Date.now();
  const isHighLevel = userLevel >= 15;

  const facts = factMemoryMap ? Object.values(factMemoryMap) : [];

  // Identify specific signals from real local data
  const skippedFacts = facts.filter((f) => (f.skipCount || 0) > 0);
  const slowFacts = facts.filter((f) => f.totalAttempts >= 2 && f.recentAccuracy >= 60 && f.medianLatencyMs > 3500);
  const weakSquares = facts.filter((f) => f.factType === 'square' && (f.consecutiveErrors > 0 || f.stabilityScore < 60));
  const weakCubes = facts.filter((f) => f.factType === 'cube' && (f.consecutiveErrors > 0 || f.medianLatencyMs > 3500));

  // Determine accuracy trend
  const practicedFacts = facts.filter((f) => f.totalAttempts > 0);
  const avgAccuracy = practicedFacts.length > 0
    ? practicedFacts.reduce((acc, f) => acc + f.recentAccuracy, 0) / practicedFacts.length
    : 100;
  const hasAccuracyDeclined = practicedFacts.length >= 5 && avgAccuracy < 70;

  // Construct specific personal notes from current saved data
  const personalNotes: string[] = [];

  if (skippedFacts.length > 0) {
    const skipList = skippedFacts.slice(0, 2).map((f) => {
      if (f.factType === 'multiplication') return `${f.operandA}×${f.operandB || 1}`;
      if (f.factType === 'square') return `${f.operandA}²`;
      return `${f.operandA}³`;
    }).join(' and ');
    const maxSkips = Math.max(...skippedFacts.map((f) => f.skipCount || 1));
    personalNotes.push(`Review ${skipList} because they were skipped ${maxSkips > 1 ? `${maxSkips} times` : 'recently'}.`);
  }

  const near50Square = weakSquares.find((f) => Math.abs(f.operandA - 50) <= 9);
  if (near50Square) {
    personalNotes.push(`Practice ${near50Square.operandA}² and 52² using the near-50 method.`);
  } else if (weakSquares.length > 0) {
    personalNotes.push(`Practice ${weakSquares[0].operandA}² using base anchors.`);
  }

  if (weakCubes.length > 0) {
    personalNotes.push(`Revisit ${weakCubes[0].operandA}³ after slow recall.`);
  } else if (slowFacts.length > 0) {
    const slowItem = slowFacts[0];
    const label = slowItem.factType === 'multiplication' ? `${slowItem.operandA}×${slowItem.operandB}` : `${slowItem.operandA}²`;
    personalNotes.push(`Revisit ${label} after slow recall.`);
  }

  if (hasAccuracyDeclined) {
    personalNotes.push('Use a shorter mixed session because recent accuracy has declined.');
  }

  if (personalNotes.length === 0) {
    personalNotes.push('Master anchor tables (×1, ×2, ×5, ×10), place-value addition/subtraction, and base-50 squares.');
  }

  const defaultRationale = `Level 0 Foundation Plan: ${personalNotes.join(' ')}`;

  // Block time allocations
  const block1Min = Math.max(2, Math.round(totalMinutes * 0.20));
  const block2Min = Math.max(2, Math.round(totalMinutes * 0.25));
  const block3Min = Math.max(2, Math.round(totalMinutes * 0.25));
  const block4Min = Math.max(2, Math.round(totalMinutes * 0.15));
  const block5Min = Math.max(1, totalMinutes - (block1Min + block2Min + block3Min + block4Min));

  // Determine repair target table
  const repairTable = skippedFacts.find((f) => f.factType === 'multiplication')?.operandA || 7;

  const blocks: TrainingBlock[] = isHighLevel
    ? [
        {
          id: `block_l20_warmup_${now}_1`,
          blockType: 'warmup',
          title: `${block1Min} min: High-Teen & Decade Reflex Warmup (Tables 16–29)`,
          description: 'Zero-hesitation automaticity drill on teen and decade multipliers.',
          dimension: 'mult_teen_tables',
          drillId: 'table_19',
          targetCount: Math.round(block1Min * 3.5),
          allocatedMinutes: block1Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l20_2d_mult_${now}_2`,
          blockType: 'priority_weakness',
          title: `${block2Min} min: 2-Digit × 2-Digit Speed Multiplication & Shortcuts`,
          description: 'Master Vedic Criss-Cross and Base-100 cross multiplication without scratch paper.',
          dimension: 'mult_decade_ext',
          drillId: 'table_24',
          targetCount: Math.round(block2Min * 2.5),
          allocatedMinutes: block2Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l20_addsub_${now}_3`,
          blockType: 'mixed_retrieval',
          title: `${block3Min} min: 3-Digit & 4-Digit Place-Value Chains (H→T→U)`,
          description: 'High-bandwidth fluid accumulation across 3-digit and 4-digit numbers.',
          dimension: 'add_sub_multidigit_l2r',
          drillId: 'add_sub_level_4',
          targetCount: Math.round(block3Min * 2.8),
          allocatedMinutes: block3Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l20_squares_${now}_4`,
          blockType: 'strategy_refinement',
          title: `${block4Min} min: Base-50 & Base-100 Squares (35²–99²)`,
          description: 'Algebraic squaring shortcuts: (50 ± d)² and (100 - d)² under 2.5 seconds.',
          dimension: 'squares_near_50',
          drillId: 'sq_near_50',
          targetCount: Math.round(block4Min * 2.5),
          allocatedMinutes: block4Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l20_anzan_${now}_5`,
          blockType: 'anzan_working_memory',
          title: `${block5Min} min: High-Speed Anzan Serial Working Memory`,
          description: 'Expand phonological loop buffer capacity through rapid flash accumulation.',
          dimension: 'anzan_stream',
          drillId: 'anzan_standard',
          targetCount: Math.round(block5Min * 2.5),
          allocatedMinutes: block5Min,
          completedCount: 0,
          status: 'pending',
        },
      ]
    : [
        {
          id: `block_l0_addsub_${now}_1`,
          blockType: 'warmup',
          title: `${block1Min} min: Addition & Subtraction Place-Value Foundations`,
          description: 'Left-to-right accumulation and complements to 100 for rapid baseline calculation.',
          dimension: 'mult_foundations',
          drillId: 'add_sub_level_2',
          targetCount: Math.round(block1Min * 3.5),
          allocatedMinutes: block1Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l0_repair_${now}_2`,
          blockType: 'priority_weakness',
          title: `${block2Min} min: Progressive Tables & Skipped Repair (Table ×${repairTable})`,
          description: skippedFacts.length > 0
            ? `Targeted repair on skipped items (${skippedFacts.slice(0, 3).map((f) => `${f.operandA}×${f.operandB || 1}`).join(', ')}) to build direct memory.`
            : `Progressive times table fluency for core tables 3, 4, 6, 7, 8, 9, 11, 12.`,
          dimension: 'mult_core_tables',
          drillId: `table_${repairTable}`,
          targetCount: Math.round(block2Min * 3.0),
          allocatedMinutes: block2Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l0_shortcuts_${now}_3`,
          blockType: 'mixed_retrieval',
          title: `${block3Min} min: Multiplication Anchors & Shortcuts (×2, ×5, ×9, ×11, ×12, ×15, ×25, ×50)`,
          description: 'Internalize anchor relationships: ×9 = ×10−group, ×11 patterns, ×12 = ×10+×2, ×25 = ÷4×100.',
          dimension: 'mult_decade_ext',
          drillId: 'table_4',
          targetCount: Math.round(block3Min * 3.0),
          allocatedMinutes: block3Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l0_squares_${now}_4`,
          blockType: 'strategy_refinement',
          title: `${block4Min} min: Squares (1²–20², Ending in 5, Near 50) & Cube Anchors`,
          description: 'Apply Ekadhikena for ending in 5 (N(N+1)|25) and near-50 base 25 shortcuts (48²=2304).',
          dimension: 'squares_near_50',
          drillId: 'sq_near_50',
          targetCount: Math.round(block4Min * 2.5),
          allocatedMinutes: block4Min,
          completedCount: 0,
          status: 'pending',
        },
        {
          id: `block_l0_anzan_${now}_5`,
          blockType: 'anzan_working_memory',
          title: `${block5Min} min: Working Memory Agility (Anzan Flash)`,
          description: 'Strengthen phonological loop capacity through rapid flash serial accumulation.',
          dimension: 'anzan_stream',
          drillId: 'anzan_standard',
          targetCount: Math.round(block5Min * 2.5),
          allocatedMinutes: block5Min,
          completedCount: 0,
          status: 'pending',
        },
      ];

  return {
    id: `plan_l0_${todayStr}_${now}`,
    date: todayStr,
    createdAt: now,
    totalEstimatedMinutes: totalMinutes,
    blocks,
    focusDimensions: isHighLevel
      ? ['mult_teen_tables', 'mult_decade_ext', 'add_sub_multidigit_l2r', 'squares_near_50']
      : ['mult_foundations', 'mult_core_tables', 'mult_decade_ext', 'squares_near_50'],
    rationale: isHighLevel
      ? 'Advanced Level 20+ plan prioritizing multi-digit cross-multiplication, high-teen tables, and 3D place-value accumulation.'
      : defaultRationale,
    isCompleted: false,
    source: 'offline',
    isLevel0: true,
  };
}

/**
 * Generates a structured daily training plan based on fact-level memory states,
 * cognitive profile, prioritized weak areas, user level, and allocated minutes.
 */
export function generateDailyTrainingPlan(
  profile: LearnerProfile,
  requestedMinutes: number = profile.preferredDailyMinutes || 15,
  factMemoryMap?: Record<string, FactMemoryState>,
  userLevel: number = 1
): TrainingPlan {
  const isHighLevel = userLevel >= 15;
  const allSkills = Object.values(profile.skills);
  const totalAttemptsAcrossAll = allSkills.reduce((acc, s) => acc + s.totalAttempts, 0);

  if (!profile.baselineReport && totalAttemptsAcrossAll === 0) {
    return generateLevel0FoundationPlan(profile, requestedMinutes, factMemoryMap, userLevel);
  }

  const totalMinutes = Math.max(10, Math.min(30, requestedMinutes));
  const todayStr = new Date().toISOString().split('T')[0];
  const now = Date.now();

  const facts = factMemoryMap ? Object.values(factMemoryMap) : [];

  // 1. Identify overdue or high-risk multiplication facts
  const dueMulFacts = facts.filter(
    (f) => f.factType === 'multiplication' && (now >= f.nextReviewTimestamp || f.forgettingRisk > 0.4 || f.consecutiveErrors > 0)
  );

  // 2. Identify weak fact families (e.g. teen tables or specific table)
  const weakMulFacts = facts.filter(
    (f) => f.factType === 'multiplication' && (f.masteryState === 'weak' || f.consecutiveErrors >= 2)
  );

  // 3. Identify square targets
  const squareTargets = facts.filter(
    (f) => f.factType === 'square' && (f.consecutiveErrors > 0 || f.stabilityScore < 60)
  );

  // 4. Identify cube targets
  const cubeTargets = facts.filter(
    (f) => f.factType === 'cube' && (f.consecutiveErrors > 0 || f.totalAttempts === 0)
  );

  // Check if beginner or has specific profile skill weaknesses
  const isBeginner = totalAttemptsAcrossAll === 0;

  // Find lowest ability skill or high-risk decayed skill among practiced skills
  const practicedDecayed = allSkills
    .filter((s) => s.totalAttempts > 0 && (s.decayRisk === 'critical' || s.decayRisk === 'high' || s.decayRisk === 'moderate'))
    .sort((a, b) => {
      const riskOrder: Record<string, number> = { critical: 3, high: 2, moderate: 1 };
      return (riskOrder[b.decayRisk] || 0) - (riskOrder[a.decayRisk] || 0);
    });
  const decayedSkill = practicedDecayed[0];
  const sortedByTheta = [...allSkills].sort((a, b) => a.theta - b.theta);
  const lowestSkill = sortedByTheta.find((s) => s.totalAttempts > 0) || sortedByTheta[0];

  const warmupDim: SkillDimension = isHighLevel
    ? 'mult_teen_tables'
    : isBeginner
    ? 'mult_foundations'
    : 'mult_core_tables';

  const weaknessDim: SkillDimension = isHighLevel
    ? 'mult_decade_ext'
    : (lowestSkill && lowestSkill.theta < 0.2 && lowestSkill.totalAttempts > 0)
    ? lowestSkill.dimension
    : 'mult_teen_tables';

  const mixedDim: SkillDimension = isHighLevel
    ? 'add_sub_multidigit_l2r'
    : decayedSkill
    ? decayedSkill.dimension
    : 'mult_decade_ext';

  // Dynamic block minute allocations based on requestedMinutes
  const warmupMin = Math.max(2, Math.round(totalMinutes * 0.20));
  const repairMin = Math.max(3, Math.round(totalMinutes * 0.30));
  const mixedMin = Math.max(2, Math.round(totalMinutes * 0.20));
  const squareMin = Math.max(2, Math.round(totalMinutes * 0.15));
  const anzanMin = Math.max(1, totalMinutes - (warmupMin + repairMin + mixedMin + squareMin));

  // Build targeted block titles and descriptions with explicit fact names
  const dueFactSample = isHighLevel
    ? '17×14, 18×16, 24×8'
    : dueMulFacts.slice(0, 3).map((f) => `${f.operandA}×${f.operandB || 1}`).join(', ') || '7×8, 8×6, 9×7';
  const repairTable = isHighLevel ? 19 : weakMulFacts[0]?.operandA || 17;

  const blocks: TrainingBlock[] = [
    {
      id: `block_warmup_${Date.now()}_1`,
      blockType: 'warmup',
      title: isHighLevel
        ? `${warmupMin} min: Teen Tables Reflex Warmup (Tables 16–19)`
        : `${warmupMin} min: Due Spaced Review (${dueFactSample})`,
      description: isHighLevel
        ? 'High-speed automaticity drill on advanced multiplication tables (16 to 19).'
        : 'Strengthen facts nearing their forgetting threshold before memory fades.',
      dimension: warmupDim,
      drillId: isHighLevel ? 'table_19' : isBeginner ? 'table_2' : 'table_7',
      targetCount: Math.round(warmupMin * 3.5),
      allocatedMinutes: warmupMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_repair_${Date.now()}_2`,
      blockType: 'priority_weakness',
      title: isHighLevel
        ? `${repairMin} min: 2-Digit × 2-Digit Multiplication & Decades (21–99)`
        : `${repairMin} min: Repair Priority Weakness (${weaknessDim.replace(/_/g, ' ')})`,
      description: isHighLevel
        ? 'Vedic Criss-Cross and Base-100 multiplication algorithms without paper.'
        : `Targeted repair on table ×${repairTable} and primary weakness to consolidate accuracy.`,
      dimension: weaknessDim,
      drillId: isHighLevel ? 'table_24' : weaknessDim.startsWith('add_sub') ? 'add_sub_level_2' : `table_${repairTable}`,
      targetCount: Math.round(repairMin * 3.0),
      allocatedMinutes: repairMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_mixed_${Date.now()}_3`,
      blockType: 'mixed_retrieval',
      title: isHighLevel
        ? `${mixedMin} min: 3-Digit & 4-Digit Place-Value Left-to-Right`
        : `${mixedMin} min: Mixed Retrieval & Spaced Refresh`,
      description: isHighLevel
        ? 'Rapid Left-to-Right place-value accumulation across 3-digit and 4-digit numbers.'
        : 'Interleaved fact retrieval across varied operations.',
      dimension: mixedDim,
      drillId: isHighLevel ? 'add_sub_level_4' : mixedDim.startsWith('mult') ? 'table_8' : 'table_7',
      targetCount: Math.round(mixedMin * 3.0),
      allocatedMinutes: mixedMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_strategy_${Date.now()}_4`,
      blockType: 'strategy_refinement',
      title: isHighLevel
        ? `${squareMin} min: Base-50 & Base-100 Squares (35²–99²)`
        : `${squareMin} min: Squares Near 50 & Ending in 5 (47², 48², 55²)`,
      description: 'Apply (50 ± d)² and (100 - d)² algebraic shortcuts under 2.5 seconds.',
      dimension: 'squares_near_50',
      drillId: 'sq_near_50',
      targetCount: Math.round(squareMin * 2.5),
      allocatedMinutes: squareMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_anzan_${Date.now()}_5`,
      blockType: 'anzan_working_memory',
      title: `${anzanMin} min: Working Memory Agility (Anzan Flash)`,
      description: 'Hold intermediate calculations active in working memory.',
      dimension: 'anzan_stream',
      drillId: 'anzan_standard',
      targetCount: Math.round(anzanMin * 2.5),
      allocatedMinutes: anzanMin,
      completedCount: 0,
      status: 'pending',
    },
  ];

  return {
    id: `plan_${todayStr}_${Date.now()}`,
    date: todayStr,
    createdAt: Date.now(),
    totalEstimatedMinutes: totalMinutes,
    blocks,
    focusDimensions: isHighLevel
      ? ['mult_teen_tables', 'mult_decade_ext', 'squares_near_50']
      : ['mult_core_tables', 'mult_teen_tables', 'squares_near_50'],
    rationale: isHighLevel
      ? `Elite Level 20+ plan: Teen Tables (16-19), Decades (21-99), 2D×2D cross multiplication, and Base-50/100 squares.`
      : `Targeted daily plan prioritizing due recall (${dueFactSample}), table ${repairTable} repair, and squares/cubes benchmarks.`,
    isCompleted: false,
    source: 'offline',
  };
}

/**
 * Adjusts an active training plan dynamically when cognitive fatigue is detected.
 */
export function adjustPlanForFatigue(
  plan: TrainingPlan,
  fatigue: FatigueSignal
): TrainingPlan {
  if (fatigue.level === 'fresh' || fatigue.level === 'optimal') {
    return plan;
  }

  const reductionFactor = fatigue.level === 'high_fatigue' ? 0.6 : 0.8;

  const adjustedBlocks = plan.blocks.map((block) => {
    if (block.status === 'completed') return block;

    const newTarget = Math.max(4, Math.round(block.targetCount * reductionFactor));
    const newMinutes = Math.max(1, Math.round(block.allocatedMinutes * reductionFactor));

    return {
      ...block,
      targetCount: newTarget,
      allocatedMinutes: newMinutes,
      description: `${block.description} (Paced down due to cognitive fatigue signal)`,
    };
  });

  return {
    ...plan,
    blocks: adjustedBlocks,
    rationale: `${plan.rationale} [Fatigue adjustment applied: target volume reduced by ${Math.round((1 - reductionFactor) * 100)}%]`,
  };
}

/**
 * Returns an appropriate question for the active training block.
 * Strictly enforces single-digit anti-repetition guard and scales with user level.
 */
export function getQuestionForTrainingBlock(
  block: TrainingBlock,
  profile?: LearnerProfile,
  userLevel: number = 1,
  previousQuestion?: Question
): Question {
  const isHighLevel = userLevel >= 15;
  const wasPrevSingleDigit = previousQuestion
    ? previousQuestion.operandA < 10 && (previousQuestion.operandB || 1) < 10
    : false;

  switch (block.dimension) {
    case 'mult_foundations':
      if (isHighLevel) {
        return generateMultiplicationQuestion(
          randomInt(16, 29),
          wasPrevSingleDigit ? randomInt(11, 20) : randomInt(7, 20),
          { forbidSingleDigit: true, userLevel }
        );
      }
      return generateMultiplicationQuestion(4, wasPrevSingleDigit ? randomInt(11, 19) : randomInt(2, 12));

    case 'mult_core_tables': {
      if (isHighLevel) {
        // High-level users get teen tables or decades with multi-digit multipliers!
        const tables = [14, 16, 17, 18, 19, 23, 24, 27, 28, 29];
        const tbl = tables[Math.floor(Math.random() * tables.length)];
        const mult = wasPrevSingleDigit ? randomInt(11, 20) : randomInt(7, 20);
        return generateMultiplicationQuestion(tbl, mult, { forbidSingleDigit: true, userLevel });
      }
      // Standard users: rotate across tables 6, 7, 8, 9, 12
      const coreTables = [6, 7, 8, 9, 11, 12];
      const tbl = coreTables[Math.floor(Math.random() * coreTables.length)];
      const mult = wasPrevSingleDigit ? randomInt(11, 20) : randomInt(2, 12);
      return generateMultiplicationQuestion(tbl, mult, { forbidSingleDigit: wasPrevSingleDigit, userLevel });
    }

    case 'mult_teen_tables': {
      const teenTables = [13, 14, 15, 16, 17, 18, 19];
      const tbl = teenTables[Math.floor(Math.random() * teenTables.length)];
      const mult = isHighLevel
        ? wasPrevSingleDigit
          ? randomInt(11, 20)
          : randomInt(7, 20)
        : wasPrevSingleDigit
        ? randomInt(11, 19)
        : randomInt(2, 12);
      return generateMultiplicationQuestion(tbl, mult, { forbidSingleDigit: wasPrevSingleDigit, userLevel });
    }

    case 'mult_decade_ext': {
      if (isHighLevel) {
        // 50% chance of 2-digit × 2-digit Criss-Cross speed question
        if (Math.random() < 0.5) {
          return generateTwoDigitMultiplicationQuestion(14, 48);
        }
        const decades = [21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 35, 36, 42, 45, 48, 54, 75];
        const tbl = decades[Math.floor(Math.random() * decades.length)];
        const mult = randomInt(7, 20);
        return generateMultiplicationQuestion(tbl, mult, { forbidSingleDigit: true, userLevel });
      }
      return generateMultiplicationQuestion(25, wasPrevSingleDigit ? randomInt(11, 19) : randomInt(2, 12));
    }

    case 'squares_ending_5':
      return generateSquareCubeQuestion('ending_5');

    case 'squares_near_50': {
      if (isHighLevel && Math.random() < 0.45) {
        return generateSquareCubeQuestion('near_100');
      }
      return generateSquareCubeQuestion('near_50');
    }

    case 'squares_near_100':
      return generateSquareCubeQuestion('near_100');

    case 'squares_duplex_general':
      return generateSquareCubeQuestion('general_duplex');

    case 'cubes_anchors':
      return generateSquareCubeQuestion(isHighLevel ? 'cubes_advanced' : 'cubes_anchor');

    case 'cubes_advanced':
      return generateSquareCubeQuestion('cubes_advanced');

    case 'add_sub_non_bridging':
      return isHighLevel ? generateArithmeticComboQuestion('add_sub_3d_2d') : generateAddSubQuestion(1);

    case 'add_sub_bridging_decade':
      return isHighLevel ? generateArithmeticComboQuestion('add_sub_3d_3d') : generateAddSubQuestion(2);

    case 'add_sub_complements_100':
      return isHighLevel ? generateArithmeticComboQuestion('add_sub_chain_3') : generateAddSubQuestion(3);

    case 'add_sub_multidigit_l2r':
      return isHighLevel
        ? Math.random() < 0.5
          ? generateArithmeticComboQuestion('add_sub_4d_3d')
          : generateArithmeticComboQuestion('add_sub_3d_3d')
        : generateAddSubQuestion(4);

    case 'add_sub_mixed_chain':
      return generateArithmeticComboQuestion('add_sub_chain_3');

    default:
      if (isHighLevel) {
        return generateMultiplicationQuestion(randomInt(16, 29), randomInt(11, 20), { forbidSingleDigit: true, userLevel });
      }
      return generateMultiplicationQuestion(8, wasPrevSingleDigit ? randomInt(11, 19) : randomInt(2, 12));
  }
}
