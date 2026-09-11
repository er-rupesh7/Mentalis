/**
 * Deterministic Plan Engine for Mentalis
 * Constructs structured 10-25 minute cognitive training plans,
 * enforcing spaced review prior to 7-day decay, cognitive interleaving,
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
  getDrillById,
  getDefaultDrillForDimension,
  DrillDefinition,
} from './catalog';

/**
 * Generates a structured daily training plan based on the user's cognitive profile,
 * prioritized weak areas, spaced decay risks, and allocated minutes.
 */
export function generateDailyTrainingPlan(
  profile: LearnerProfile,
  requestedMinutes: number = profile.preferredDailyMinutes || 15
): TrainingPlan {
  const totalMinutes = Math.max(10, Math.min(30, requestedMinutes));
  const todayStr = new Date().toISOString().split('T')[0];

  // 1. Identify decayed skills (lastPracticed > 7 days ago or critical risk)
  const now = Date.now();
  const decayedSkills = ALL_SKILL_DIMENSIONS.filter((dim) => {
    const s = profile.skills[dim];
    return s && s.totalAttempts > 0 && (now - s.lastPracticed) / (1000 * 60 * 60 * 24) >= 5;
  });

  // 2. Identify priority weak skills (lowest theta with at least some attempts, or lowest accuracy)
  const assessedSkills = ALL_SKILL_DIMENSIONS.filter((dim) => profile.skills[dim]?.totalAttempts > 0);
  const sortedByTheta = [...assessedSkills].sort(
    (a, b) => (profile.skills[a]?.theta || 0) - (profile.skills[b]?.theta || 0)
  );

  const primaryWeakSkill: SkillDimension =
    sortedByTheta.length > 0 ? sortedByTheta[0] : 'add_sub_bridging_decade';

  // 3. Identify strong/anchor skill for warm-up
  const sortedStrong = [...assessedSkills].sort(
    (a, b) => (profile.skills[b]?.theta || 0) - (profile.skills[a]?.theta || 0)
  );
  const warmUpSkill: SkillDimension =
    sortedStrong.length > 0 ? sortedStrong[0] : 'mult_foundations';

  // 4. Interleaving candidate: distinct module from primary weak skill
  const candidateInterleaved: SkillDimension =
    primaryWeakSkill.startsWith('add_sub')
      ? 'mult_core_tables'
      : primaryWeakSkill.startsWith('mult')
      ? 'squares_ending_5'
      : 'add_sub_multidigit_l2r';

  const mixedSkill: SkillDimension =
    decayedSkills.length > 0 ? decayedSkills[0] : candidateInterleaved;

  // 5. Strategy refinement candidate
  const strategySkill: SkillDimension =
    primaryWeakSkill === 'squares_near_50' || primaryWeakSkill === 'squares_near_100'
      ? primaryWeakSkill
      : 'squares_near_50';

  // Build the 5-6 structured blocks scaled to requested minutes
  // Minute proportions:
  // Warmup (~15%), Priority Weak (~35%), Mixed Retrieval (~20%), Strategy (~15%), Anzan (~15%)
  const warmUpMin = Math.max(2, Math.round(totalMinutes * 0.15));
  const priorityMin = Math.max(3, Math.round(totalMinutes * 0.35));
  const mixedMin = Math.max(2, Math.round(totalMinutes * 0.20));
  const strategyMin = Math.max(2, Math.round(totalMinutes * 0.15));
  const anzanMin = Math.max(2, totalMinutes - (warmUpMin + priorityMin + mixedMin + strategyMin));

  const warmUpDrill = getDefaultDrillForDimension(warmUpSkill);
  const priorityDrill = getDefaultDrillForDimension(primaryWeakSkill);
  const mixedDrill = getDefaultDrillForDimension(mixedSkill);
  const strategyDrill = getDefaultDrillForDimension(strategySkill);
  const anzanDrill = getDefaultDrillForDimension('anzan_stream');

  const blocks: TrainingBlock[] = [
    {
      id: `block_warmup_${Date.now()}`,
      blockType: 'warmup',
      title: `Warm-Up: ${warmUpDrill.title}`,
      description: 'Prime neural pathways with familiar recall to establish steady rhythm.',
      dimension: warmUpSkill,
      drillId: warmUpDrill.id,
      targetCount: Math.round(warmUpMin * 3.5),
      allocatedMinutes: warmUpMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_weakness_${Date.now()}`,
      blockType: 'priority_weakness',
      title: `Core Focus: ${priorityDrill.title}`,
      description: 'High-impact focus targeting your primary developmental edge.',
      dimension: primaryWeakSkill,
      drillId: priorityDrill.id,
      targetCount: Math.round(priorityMin * 3.0),
      allocatedMinutes: priorityMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_mixed_${Date.now()}`,
      blockType: 'mixed_retrieval',
      title: `Interleaved Spaced Review: ${mixedDrill.title}`,
      description: 'Prevent decay and build cognitive flexibility by switching contexts.',
      dimension: mixedSkill,
      drillId: mixedDrill.id,
      targetCount: Math.round(mixedMin * 3.0),
      allocatedMinutes: mixedMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_strategy_${Date.now()}`,
      blockType: 'strategy_refinement',
      title: `Strategy Deep Dive: ${strategyDrill.title}`,
      description: 'Refine mental representations, anchor landmarks, and decomposition.',
      dimension: strategySkill,
      drillId: strategyDrill.id,
      targetCount: Math.round(strategyMin * 2.5),
      allocatedMinutes: strategyMin,
      completedCount: 0,
      status: 'pending',
    },
    {
      id: `block_anzan_${Date.now()}`,
      blockType: 'anzan_working_memory',
      title: 'Working Memory Anzan Stream',
      description: 'Fast sequential number flash to expand inner working memory buffer.',
      dimension: 'anzan_stream',
      drillId: anzanDrill.id,
      targetCount: Math.max(3, Math.round(anzanMin * 1.5)),
      allocatedMinutes: anzanMin,
      completedCount: 0,
      status: 'pending',
    },
  ];

  const focusDimensions = [primaryWeakSkill, mixedSkill, strategySkill];

  return {
    id: `plan_${todayStr}_${Date.now()}`,
    date: todayStr,
    createdAt: Date.now(),
    totalEstimatedMinutes: totalMinutes,
    blocks,
    rationale: `Prioritizing ${priorityDrill.title} with interleaved reinforcement of ${mixedDrill.title} and Anzan working memory conditioning.`,
    focusDimensions,
    isCompleted: false,
  };
}

/**
 * Adjusts an active training plan when cognitive fatigue signals are detected.
 */
export function adjustPlanForFatigue(plan: TrainingPlan, fatigue: FatigueSignal): TrainingPlan {
  if (fatigue.level === 'fresh' || fatigue.level === 'optimal') {
    return plan;
  }

  const updatedBlocks = plan.blocks.map((block) => {
    if (block.status === 'completed') return block;

    if (fatigue.level === 'high_fatigue') {
      // Scale down target count by 50% and switch high difficulty blocks to lower target
      const reducedCount = Math.max(3, Math.round(block.targetCount * 0.5));
      return {
        ...block,
        targetCount: reducedCount,
        description: `${block.description} (Adjusted for cognitive recovery: 50% load).`,
      };
    }

    if (fatigue.level === 'mild_fatigue') {
      const reducedCount = Math.max(4, Math.round(block.targetCount * 0.75));
      return {
        ...block,
        targetCount: reducedCount,
      };
    }

    return block;
  });

  return {
    ...plan,
    blocks: updatedBlocks,
    rationale: `${plan.rationale} [Adjusted: ${fatigue.message}]`,
  };
}

/**
 * Generates a calibrated Question object for a specific TrainingBlock.
 */
export function getQuestionForTrainingBlock(block: TrainingBlock): Question {
  const drill = getDrillById(block.drillId) || getDefaultDrillForDimension(block.dimension);
  return generateQuestionForDrill(drill);
}

/**
 * Internal helper to generate a question given a DrillDefinition.
 */
export function generateQuestionForDrill(drill: DrillDefinition): Question {
  if (drill.module === 'add_sub') {
    return generateAddSubQuestion(drill.params.addSubLevel || 2);
  }

  if (drill.module === 'multiplication') {
    return generateMultiplicationQuestion(drill.params.table || 7);
  }

  if (drill.module === 'squares_cubes') {
    return generateSquareCubeQuestion(drill.params.squareTrack || 'ending_5');
  }

  // Working memory fallback: fast mental chain
  return generateAddSubQuestion(3);
}
