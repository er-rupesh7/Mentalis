/**
 * Groq Coach Engine & Zod Validation for Mentalis
 * Encapsulates structured response validation and deterministic fallback logic.
 */

import { z } from 'zod';
import {
  CoachingInsight,
  SkillDimension,
  GroqCoachResponse,
  GroqLessonCard,
  GroqPlanAdjustment,
} from './learnerModel';

// -------------------------------------------------------------
// ZOD SCHEMAS FOR STRUCTURED GROQ RESPONSES
// -------------------------------------------------------------
export const GroqPlanAdjustmentSchema = z.object({
  target: z.string(),
  action: z.string(),
  strategy_id: z.string(),
  reason: z.string(),
});

export const GroqLessonCardSchema = z.object({
  title: z.string(),
  fact_or_family: z.string(),
  trick: z.string(),
  worked_example: z.string(),
  practice_prompt: z.string(),
});

export const GroqCoachResponseSchema = z.object({
  summary: z.string(),
  priority_facts: z.array(z.string()),
  priority_skills: z.array(z.string()),
  recommended_plan_adjustments: z.array(GroqPlanAdjustmentSchema),
  lesson_cards: z.array(GroqLessonCardSchema),
  coach_message: z.string(),
  confidence: z.number().min(0).max(1).default(0.85),
});

export interface RequestSkillSummary {
  dimension: SkillDimension;
  theta: number;
  accuracy: number;
  attempts: number;
  medianLatencyMs: number;
  decayRisk: string;
}

export interface RequestPayload {
  learnerId?: string;
  skills: RequestSkillSummary[];
  recentErrors?: { dimension: string; patternType: string; count: number; factKey?: string }[];
  fatigue?: { level: string; consecutiveErrors: number; latencyDilationRatio: number };
  requestedMinutes?: number;
  currentStreak?: number;
  candidateFacts?: string[];
  recentFactFailures?: string[];
  skippedFacts?: string[];
  slowFacts?: string[];
}

/**
 * Deterministic fallback generator when no GROQ_API_KEY is configured,
 * Groq is rate-limited (429), or the network is unavailable.
 * Guarantees 100% offline, local-first functionality.
 */
export function generateDeterministicInsight(payload: RequestPayload): { insight: CoachingInsight; groqResponse: GroqCoachResponse } {
  const sortedByTheta = [...(payload.skills || [])]
    .filter((s) => s.attempts > 0)
    .sort((a, b) => a.theta - b.theta);

  const weakest = sortedByTheta[0];
  const strongest = sortedByTheta[sortedByTheta.length - 1];

  const focusLabel = weakest ? weakest.dimension.replace(/_/g, ' ') : 'core tables and teen multipliers';
  const strengthLabel = strongest ? strongest.dimension.replace(/_/g, ' ') : 'foundations';

  const defaultFacts = (payload.skippedFacts && payload.skippedFacts.length > 0)
    ? payload.skippedFacts.slice(0, 3)
    : (payload.candidateFacts && payload.candidateFacts.length > 0)
    ? payload.candidateFacts.slice(0, 3)
    : ['mul:7:8', 'mul:17:6', 'square:48'];

  const defaultStrategy = 'split_and_add';

  const groqResponse: GroqCoachResponse = {
    summary: `Cognitive profile indicates solid automaticity in ${strengthLabel}, with targeted opportunity in ${focusLabel}.`,
    priority_facts: defaultFacts,
    priority_skills: ['multiplication_split_add'],
    recommended_plan_adjustments: [
      {
        target: defaultFacts[0] || 'mul:17:6',
        action: 'teach_then_recall',
        strategy_id: defaultStrategy,
        reason: 'Decomposes multi-digit operands into tens and units to reduce working memory load.',
      },
    ],
    lesson_cards: [
      {
        title: 'Split-and-Add Mental Accumulator',
        fact_or_family: defaultFacts[0] || 'mul:17:6',
        trick: 'Multiply tens first, then units, accumulating left-to-right.',
        worked_example: '17 × 6 = (10 × 6) + (7 × 6) = 60 + 42 = 102',
        practice_prompt: 'Compute 17 × 8 mentally using the same split.',
      },
    ],
    coach_message: 'Anchor tens first before adding units. Let your phonological loop hold the running sum.',
    confidence: 0.88,
  };

  const insight: CoachingInsight = {
    summary: groqResponse.summary,
    learner_summary: groqResponse.summary,
    priority_fact_families: defaultFacts,
    recommended_learning_mode: 'teach_then_recall',
    recommended_strategies: [
      {
        strategy_id: 'split_and_add',
        applies_to: [defaultFacts[0] || 'mul:17:6'],
        reason: 'Decomposes multi-digit operands into tens and units to reduce working memory load.',
      },
    ],
    next_queue_policy: {
      focus_ratio: 0.55,
      review_ratio: 0.25,
      interleave_ratio: 0.20,
      difficulty_adjustment: payload.fatigue?.level === 'high_fatigue' ? 'step_down' : 'hold',
    },
    coach_message: groqResponse.coach_message,
    encouragement: 'Consistent daily retrieval builds permanent mental math representations. Keep the accumulator steady!',
    observedStrengths: [
      `High accuracy and automaticity in ${strengthLabel}.`,
      'Consistent practice rhythm maintaining neural pathways.',
    ],
    priorityGaps: [
      `Technique refinement in ${focusLabel} to reduce calculation latency.`,
    ],
    recommendedFocus: `Dedicate today's core focus block to mastering ${focusLabel}.`,
    suggestedCoachingMessage: 'Focus on clean visualization rather than raw speed. When bridging, mentally hold the running decade in working memory.',
    planAdjustments: [
      {
        suggestedDrillId: 'table_17',
        reason: 'Targeted repair on primary weakness to consolidate accuracy.',
      },
    ],
    lessonCards: groqResponse.lesson_cards,
    groqResponse,
    confidence: 0.88,
    generatedAt: Date.now(),
    source: 'deterministic',
  };

  return { insight, groqResponse };
}
