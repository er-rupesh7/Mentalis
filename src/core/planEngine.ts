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
import { FactMemoryState, FactKey } from './factModel';
import { generateQuestionFromFact } from './factEngine';

export interface TrainingBlockExt extends TrainingBlock {
  targetFactKeys?: FactKey[];
}

/**
 * Generates a structured daily training plan based on fact-level memory states,
 * cognitive profile, prioritized weak areas, and allocated minutes.
 */
export function generateDailyTrainingPlan(
  profile: LearnerProfile,
  requestedMinutes: number = profile.preferredDailyMinutes || 15,
  factMemoryMap?: Record<string, FactMemoryState>
): TrainingPlan {
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
  const allSkills = Object.values(profile.skills);
  const totalAttemptsAcrossAll = allSkills.reduce((acc, s) => acc + s.totalAttempts, 0);
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

  const warmupDim: SkillDimension = isBeginner ? 'mult_foundations' : 'mult_core_tables';
  const weaknessDim: SkillDimension = (lowestSkill && lowestSkill.theta < 0.2 && lowestSkill.totalAttempts > 0)
    ? lowestSkill.dimension
    : 'mult_teen_tables';

  const mixedDim: SkillDimension = decayedSkill ? decayedSkill.dimension : 'mult_decade_ext';

  // Dynamic block minute allocations based on requestedMinutes
  const warmupMin = Math.max(2, Math.round(totalMinutes * 0.20));
  const repairMin = Math.max(3, Math.round(totalMinutes * 0.30));
  const mixedMin = Math.max(2, Math.round(totalMinutes * 0.20));
  const squareMin = Math.max(2, Math.round(totalMinutes * 0.15));
  const anzanMin = Math.max(1, totalMinutes - (warmupMin + repairMin + mixedMin + squareMin));

  // Build targeted block titles and descriptions with explicit fact names
  const dueFactSample = dueMulFacts.slice(0, 3).map((f) => `${f.operandA}×${f.operandB || 1}`).join(', ') || '7×8, 8×6, 9×7';
  const repairTable = weakMulFacts[0]?.operandA || 17;

  const blocks: TrainingBlock[] = [
    {
      id: `block_warmup_${Date.now()}_1`,
      blockType: 'warmup',
      title: `${warmupMin} min: Due Spaced Review (${dueFactSample})`,
      description: 'Strengthen facts nearing their forgetting threshold before memory fades.',
      dimension: warmupDim,
      drillId: isBeginner ? 'table_2' : 'table_7',
      targetCount: Math.round(warmupMin * 3.5),
      allocatedMinutes: warmupMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_repair_${Date.now()}_2`,
      blockType: 'priority_weakness',
      title: `${repairMin} min: Repair Priority Weakness (${weaknessDim.replace(/_/g, ' ')})`,
      description: `Targeted repair on table ×${repairTable} and primary weakness to consolidate accuracy.`,
      dimension: weaknessDim,
      drillId: weaknessDim.startsWith('add_sub') ? 'add_sub_level_2' : `table_${repairTable}`,
      targetCount: Math.round(repairMin * 3.0),
      allocatedMinutes: repairMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_mixed_${Date.now()}_3`,
      blockType: 'mixed_retrieval',
      title: `${mixedMin} min: Mixed Retrieval & Spaced Refresh`,
      description: 'Interleaved fact retrieval across varied operations.',
      dimension: mixedDim,
      drillId: mixedDim.startsWith('mult') ? 'table_8' : 'table_7',
      targetCount: Math.round(mixedMin * 3.0),
      allocatedMinutes: mixedMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_strategy_${Date.now()}_4`,
      blockType: 'strategy_refinement',
      title: `${squareMin} min: Squares Near 50 & Ending in 5 (47², 48², 55²)`,
      description: 'Apply (50 ± d)² and Ekadhikena shortcuts to compute 2-digit squares in under 3 seconds.',
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
      title: `${anzanMin} min: Working Memory Agility`,
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
    focusDimensions: ['mult_core_tables', 'mult_teen_tables', 'squares_near_50'],
    rationale: `Targeted daily plan prioritizing due recall (${dueFactSample}), table ${repairTable} repair, and squares/cubes benchmarks.`,
    isCompleted: false,
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
 */
export function getQuestionForTrainingBlock(block: TrainingBlock): Question {
  switch (block.dimension) {
    case 'mult_foundations':
      return generateMultiplicationQuestion(4);
    case 'mult_core_tables':
      return generateMultiplicationQuestion(7);
    case 'mult_teen_tables':
      return generateMultiplicationQuestion(17);
    case 'mult_decade_ext':
      return generateMultiplicationQuestion(25);
    case 'squares_ending_5':
      return generateSquareCubeQuestion('ending_5');
    case 'squares_near_50':
      return generateSquareCubeQuestion('near_50');
    case 'squares_near_100':
      return generateSquareCubeQuestion('near_100');
    case 'squares_duplex_general':
      return generateSquareCubeQuestion('general_duplex');
    case 'cubes_anchors':
      return generateSquareCubeQuestion('cubes_anchor');
    case 'cubes_advanced':
      return generateSquareCubeQuestion('cubes_advanced');
    case 'add_sub_non_bridging':
      return generateAddSubQuestion(1);
    case 'add_sub_bridging_decade':
      return generateAddSubQuestion(2);
    case 'add_sub_complements_100':
      return generateAddSubQuestion(3);
    case 'add_sub_multidigit_l2r':
      return generateAddSubQuestion(4);
    case 'add_sub_mixed_chain':
      return generateAddSubQuestion(5);
    default:
      return generateMultiplicationQuestion(8);
  }
}
