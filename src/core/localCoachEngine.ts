/**
 * Mentalis Local Adaptive Coach Engine
 * 100% deterministic, offline cognitive reasoning system.
 * Replaces all external cloud AI APIs (OpenAI / Groq) with local pedagogical algorithms.
 * Generates personalized learner diagnostics, lesson cards, worked examples,
 * and plan adjustments directly in-browser using localStorage data.
 */

import {
  LearnerProfile,
  CoachingInsight,
  SkillDimension,
  getDimensionLabel,
} from './learnerModel';
import { FactMemory, parseFactKey } from './factModel';
import { getBestStrategyForFact } from './strategyCatalog';

export interface LocalLessonCard {
  title: string;
  fact_or_family: string;
  trick: string;
  worked_example: string;
  practice_prompt: string;
}

/**
 * Deterministically generates coaching insights, lesson cards, and plan recommendations
 * with zero network requests or API dependencies.
 */
export function consultLocalAdaptiveCoach(
  profile: LearnerProfile,
  factMemoryMap: Record<string, FactMemory> = {},
  requestedMinutes: number = 15
): CoachingInsight {
  const now = Date.now();
  const facts = Object.values(factMemoryMap);

  // 1. Identify specific learner struggle signals
  const skippedFacts = facts.filter((f) => (f.skippedAttempts || f.skipCount || 0) > 0);
  const repeatedErrorFacts = facts.filter(
    (f) => (f.consecutiveIncorrect || f.consecutiveErrors || 0) >= 2 || f.masteryState === 'fragile'
  );
  const slowRecallFacts = facts.filter(
    (f) => (f.attempts || f.totalAttempts || 0) >= 2 && f.recentAccuracy >= 65 && f.medianLatencyMs > 3500
  );
  const dueFacts = facts.filter((f) => now >= (f.nextReviewAt || f.nextReviewTimestamp || 0));
  const masteredFacts = facts.filter((f) => f.masteryState === 'mastered');

  // 2. Identify strongest and weakest dimensions
  const skillEntries = Object.entries(profile.skills) as [SkillDimension, any][];
  const practicedSkills = skillEntries.filter(([, s]) => s.totalAttempts > 0);

  const sortedByTheta = [...practicedSkills].sort(([, a], [, b]) => b.theta - a.theta);
  const observedStrengths = sortedByTheta.slice(0, 3).map(([dim, s]) => {
    return `${getDimensionLabel(dim)} (${s.accuracy}% accuracy, ${Math.round(s.medianLatencyMs)}ms latency)`;
  });

  if (observedStrengths.length === 0) {
    observedStrengths.push('Foundational addition and core times tables (starting point).');
  }

  const priorityGaps: string[] = [];
  if (skippedFacts.length > 0) {
    const sample = skippedFacts.slice(0, 3).map((f) => f.key || f.factKey).join(', ');
    priorityGaps.push(`Skipped facts requiring strategy introduction: ${sample}`);
  }
  if (repeatedErrorFacts.length > 0) {
    const sample = repeatedErrorFacts.slice(0, 3).map((f) => f.key || f.factKey).join(', ');
    priorityGaps.push(`Recurring mistakes on facts: ${sample}`);
  }
  if (slowRecallFacts.length > 0) {
    const sample = slowRecallFacts.slice(0, 3).map((f) => f.key || f.factKey).join(', ');
    priorityGaps.push(`Known but slow recall (>3.5s latency): ${sample}`);
  }
  if (priorityGaps.length === 0) {
    priorityGaps.push('Teen multiplication tables (×13 to ×19) and base-50 squares.');
  }

  // 3. Generate structured lesson cards for priority facts
  const targetFactsForLessons = [...skippedFacts, ...repeatedErrorFacts, ...slowRecallFacts].slice(0, 3);
  const lessonCards: LocalLessonCard[] = [];

  for (const fact of targetFactsForLessons) {
    const factKey = (fact.key || fact.factKey) as any;
    const strategy = getBestStrategyForFact(factKey);
    const parsed = parseFactKey(factKey);
    const example = parsed.type === 'multiplication'
      ? strategy.generateWorkedExample(parsed.operandA, parsed.operandB || 1)
      : strategy.generateWorkedExample(parsed.operandA);

    const stepSummary = example.steps.map((s) => `${s.title}: ${s.subVocalization}`).join(' -> ');

    lessonCards.push({
      title: `${strategy.name} (${factKey})`,
      fact_or_family: factKey,
      trick: strategy.mentalScript,
      worked_example: stepSummary,
      practice_prompt: `Apply "${strategy.name}" on ${factKey} to compute ${example.verifiedResult} in one fluid breath.`,
    });
  }

  // If no specific weak facts, add foundational lessons
  if (lessonCards.length === 0) {
    const defaultStrategy = getBestStrategyForFact('mul:17:6');
    const ex = defaultStrategy.generateWorkedExample(17, 6);
    lessonCards.push({
      title: 'Split & Add Strategy (17 × 6)',
      fact_or_family: 'mul:17:6',
      trick: 'Split 17 into (10 + 7): 10 × 6 = 60, 7 × 6 = 42. Combine: 60 + 42 = 102.',
      worked_example: ex.steps.map((s) => `${s.title}: ${s.subVocalization}`).join(' -> '),
      practice_prompt: 'Try 18 × 4 using the same split-and-add principle: 10×4 + 8×4.',
    });
  }

  // 4. Determine recommended learning mode
  let recommendedMode = 'recall';
  if (skippedFacts.length > 0 || repeatedErrorFacts.length > 0) {
    recommendedMode = 'teach';
  } else if (slowRecallFacts.length > 0) {
    recommendedMode = 'speed';
  }

  // 5. Formulate friendly, cognitive coaching message
  let suggestedCoachingMessage =
    'Your memory map shows solid progress. Keep your recall rhythm calm and decompose two-digit numbers left to right.';
  if (profile.fatigueState?.level === 'high_fatigue') {
    suggestedCoachingMessage =
      'Cognitive fatigue detected from latency dilation. Take a 2-minute water break and resume with foundational anchor facts.';
  } else if (skippedFacts.length > 0) {
    suggestedCoachingMessage =
      `You skipped ${skippedFacts.length} fact${skippedFacts.length > 1 ? 's' : ''}. We have queued their mental tricks so you master them step-by-step without pressure.`;
  } else if (repeatedErrorFacts.length > 0) {
    suggestedCoachingMessage =
      'Focus on bridge anchors before tackling difficult multi-digit facts. Review the repair card for each error pattern.';
  } else if (masteredFacts.length >= 10) {
    suggestedCoachingMessage =
      `Outstanding! You have permanently locked ${masteredFacts.length} arithmetic facts into long-term memory. Speed drills are unlocked.`;
  }

  // 6. Plan adjustments
  const planAdjustments = [
    {
      suggestedDrillId: skippedFacts.length > 0 ? 'table_7' : 'sq_near_50',
      reason:
        skippedFacts.length > 0
          ? 'Prioritizing skipped items in today\'s repair block.'
          : 'Consolidating near-50 squares shortcuts.',
    },
  ];

  const summary = `Local Cognitive Assessment: ${masteredFacts.length} facts mastered, ${dueFacts.length} due for spaced review, ${skippedFacts.length} skipped. Mode recommended: ${recommendedMode}.`;

  return {
    summary,
    learner_summary: summary,
    priority_fact_families: targetFactsForLessons.map((f) => f.key || f.factKey),
    recommended_learning_mode: recommendedMode,
    recommended_strategies: targetFactsForLessons.map((f) => ({
      strategy_id: getBestStrategyForFact((f.key || f.factKey) as any).id,
      applies_to: [f.key || f.factKey],
      reason: 'Deterministic match from strategy catalog.',
    })),
    next_queue_policy: {
      focus_ratio: 0.50,
      review_ratio: 0.25,
      interleave_ratio: 0.15,
      difficulty_adjustment: profile.fatigueState?.level === 'high_fatigue' ? 'step_down' : 'hold',
    },
    coach_message: suggestedCoachingMessage,
    encouragement: 'Every mental calculation strengthens neural retrieval pathways. Consistency beats marathon cramming.',
    observedStrengths,
    priorityGaps,
    recommendedFocus: priorityGaps[0] || 'Progressive times tables and square shortcuts.',
    suggestedCoachingMessage,
    planAdjustments,
    lessonCards,
    confidence: Math.min(1.0, Math.max(0.2, facts.length / 30)),
    generatedAt: now,
    source: 'deterministic',
  };
}
