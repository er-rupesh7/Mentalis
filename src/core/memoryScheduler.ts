/**
 * Adaptive Memory Scheduler & Pedagogical Remediation Engine for Mentalis
 * Implements deterministic SM-2 / Half-Life spaced retrieval prioritization,
 * error confusion diagnostics, repair card construction, and session queue mixing.
 */

import {
  FactKey,
  FactMemoryState,
  FactErrorPatternType,
  parseFactKey,
  formatFactKey,
  getFactCorrectAnswer,
  calculateForgettingRisk,
  createInitialFactMemoryState,
} from './factModel';
import { getBestStrategyForFact, StrategyDefinition } from './strategyCatalog';
import { FatigueSignal } from './learnerModel';

export interface RepairCard {
  factKey: FactKey;
  prompt: string;
  userAnswer: number;
  correctAnswer: number;
  detectedPattern: FactErrorPatternType;
  patternExplanation: string;
  bestStrategy: StrategyDefinition;
  anchorFact: {
    factKey: FactKey;
    prompt: string;
    correctAnswer: number;
    relationship: string;
  };
  contrastFact: {
    factKey: FactKey;
    prompt: string;
    correctAnswer: number;
    preventConfusionTip: string;
  };
  bridgeQuestionPrompt?: string;
  scheduledDelayedReviewIndex: number; // item count offset in session (e.g. 4 items later)
}

export interface CandidateScore {
  factKey: FactKey;
  score: number;
  category: 'weak_or_due' | 'consolidation' | 'interleaved_strong' | 'new_fact';
  reason: string;
}

/**
 * Detects specific cognitive error patterns from a submitted user answer.
 */
export function detectErrorPattern(
  factKey: FactKey,
  userAnswer: number,
  correctAnswer: number,
  latencyMs: number
): FactErrorPatternType {
  if (userAnswer === correctAnswer) return 'calculation_slip';

  // 1. Rapid careless guessing (< 500ms)
  if (latencyMs < 500) {
    return 'rapid_guess';
  }

  const parsed = parseFactKey(factKey);

  // 2. Digit Transposition (e.g. 54 -> 45, 63 -> 36, 128 -> 182)
  const userStr = Math.abs(userAnswer).toString();
  const correctStr = Math.abs(correctAnswer).toString();
  if (
    userStr.length === correctStr.length &&
    userStr.length >= 2 &&
    userStr !== correctStr &&
    userStr.split('').sort().join('') === correctStr.split('').sort().join('')
  ) {
    return 'digit_transposition';
  }

  // 3. Multiplication specific patterns
  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;

    // Decade zero omission (e.g. 30 x 7 = 210 answered as 21)
    if (correctAnswer % 10 === 0 && userAnswer === correctAnswer / 10) {
      return 'decade_zero_omission';
    }

    // Adjacent table confusion (e.g. user answered (table ± 1) * mult)
    if (userAnswer === (table + 1) * mult || userAnswer === (table - 1) * mult) {
      return 'adjacent_table_confusion';
    }

    // Adjacent multiplier confusion (e.g. user answered table * (mult ± 1), like 7x8 answered 7x9=63)
    if (userAnswer === table * (mult + 1) || userAnswer === table * (mult - 1)) {
      return 'adjacent_multiplier_confusion';
    }

    // Compensation direction error (e.g. 49x6 answered as 50x6 + 6 instead of -6)
    if (table % 10 === 9 || table % 10 === 8) {
      const rounded = Math.ceil(table / 10) * 10;
      const deficit = rounded - table;
      const wrongAddition = rounded * mult + deficit * mult;
      if (userAnswer === wrongAddition) {
        return 'compensation_direction_error';
      }
    }
  }

  // 4. Square specific patterns
  if (parsed.type === 'square') {
    const n = parsed.operandA;
    // Square padding mistake: e.g. 48^2 = 25 - 2 | 2^2 -> written as 234 instead of 2304
    if (n >= 40 && n <= 60) {
      const diff = Math.abs(n - 50);
      if (diff < 10 && diff * diff < 10) {
        const leading = 25 + (n - 50);
        const unpadded = parseInt(`${leading}${diff * diff}`, 10);
        if (userAnswer === unpadded) {
          return 'square_padding_mistake';
        }
      }
    }
  }

  // 5. Cube expansion mistakes
  if (parsed.type === 'cube') {
    return 'cube_expansion_mistake';
  }

  // 6. Hesitant calculation (> 4500ms)
  if (latencyMs > 4500) {
    return 'hesitant_calculation';
  }

  return 'calculation_slip';
}

/**
 * Builds an actionable, pedagogical Repair Card after an error.
 */
export function generateRepairCard(
  factKey: FactKey,
  userAnswer: number,
  latencyMs: number = 2000
): RepairCard {
  const correctAnswer = getFactCorrectAnswer(factKey);
  const pattern = detectErrorPattern(factKey, userAnswer, correctAnswer, latencyMs);
  const bestStrategy = getBestStrategyForFact(factKey);
  const parsed = parseFactKey(factKey);

  let prompt = '';
  let patternExplanation = '';
  let anchorFactKey: FactKey = factKey;
  let anchorPrompt = '';
  let anchorAnswer = 0;
  let anchorRelationship = '';

  let contrastFactKey: FactKey = factKey;
  let contrastPrompt = '';
  let contrastAnswer = 0;
  let contrastTip = '';

  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;
    prompt = `${table} × ${mult}`;

    if (pattern === 'adjacent_multiplier_confusion' && userAnswer === table * (mult + 1)) {
      patternExplanation = `You answered ${userAnswer}, which is ${table} × ${mult + 1}, instead of ${table} × ${mult}.`;
    } else if (pattern === 'adjacent_multiplier_confusion' && userAnswer === table * (mult - 1)) {
      patternExplanation = `You answered ${userAnswer}, which is ${table} × ${mult - 1}, instead of ${table} × ${mult}.`;
    } else if (pattern === 'digit_transposition') {
      patternExplanation = `Digit transposition slip: you reversed digits (${userAnswer} vs ${correctAnswer}).`;
    } else if (pattern === 'decade_zero_omission') {
      patternExplanation = 'Decade zero omitted: remember to append the trailing zero after multiplying.';
    } else {
      patternExplanation = `Calculated ${userAnswer} instead of correct answer ${correctAnswer}.`;
    }

    // Anchor: nearest simple benchmark (e.g. x10, x5, or x(mult-1))
    const anchorMult = mult <= 5 ? 2 : mult <= 10 ? 5 : 10;
    anchorFactKey = formatFactKey('multiplication', table, anchorMult);
    anchorAnswer = table * anchorMult;
    anchorPrompt = `${table} × ${anchorMult}`;
    anchorRelationship = `Known anchor: ${table} × ${anchorMult} = ${anchorAnswer}. Step from here!`;

    // Contrast fact to prevent the specific confusion
    const contrastMult = mult === 8 ? 9 : mult === 9 ? 8 : mult + 1;
    contrastFactKey = formatFactKey('multiplication', table, contrastMult);
    contrastAnswer = table * contrastMult;
    contrastPrompt = `${table} × ${contrastMult}`;
    contrastTip = `Contrast: ${table} × ${contrastMult} = ${contrastAnswer}. Keep these distinct!`;
  } else if (parsed.type === 'square') {
    const n = parsed.operandA;
    prompt = `${n}²`;
    patternExplanation = `Submitted ${userAnswer} for ${n}² = ${correctAnswer}.`;

    const nearestDecade = Math.round(n / 10) * 10;
    anchorFactKey = formatFactKey('square', nearestDecade);
    anchorAnswer = nearestDecade * nearestDecade;
    anchorPrompt = `${nearestDecade}²`;
    anchorRelationship = `Decade anchor: ${nearestDecade}² = ${anchorAnswer}.`;

    const contrastN = n % 10 === 5 ? n - 1 : n + 1;
    contrastFactKey = formatFactKey('square', contrastN);
    contrastAnswer = contrastN * contrastN;
    contrastPrompt = `${contrastN}²`;
    contrastTip = `Contrast: ${contrastN}² = ${contrastAnswer}.`;
  } else if (parsed.type === 'cube') {
    const n = parsed.operandA;
    prompt = `${n}³`;
    patternExplanation = `Submitted ${userAnswer} for ${n}³ = ${correctAnswer.toLocaleString()}.`;

    const nearestDecade = Math.max(10, Math.round(n / 10) * 10);
    anchorFactKey = formatFactKey('cube', nearestDecade);
    anchorAnswer = nearestDecade * nearestDecade * nearestDecade;
    anchorPrompt = `${nearestDecade}³`;
    anchorRelationship = `Decade benchmark: ${nearestDecade}³ = ${anchorAnswer.toLocaleString()}.`;

    contrastFactKey = formatFactKey('cube', Math.max(1, n - 1));
    contrastAnswer = (n - 1) * (n - 1) * (n - 1);
    contrastPrompt = `${n - 1}³`;
    contrastTip = `Contrast: ${n - 1}³ = ${contrastAnswer.toLocaleString()}.`;
  }

  return {
    factKey,
    prompt,
    userAnswer,
    correctAnswer,
    detectedPattern: pattern,
    patternExplanation,
    bestStrategy,
    anchorFact: {
      factKey: anchorFactKey,
      prompt: anchorPrompt,
      correctAnswer: anchorAnswer,
      relationship: anchorRelationship,
    },
    contrastFact: {
      factKey: contrastFactKey,
      prompt: contrastPrompt,
      correctAnswer: contrastAnswer,
      preventConfusionTip: contrastTip,
    },
    bridgeQuestionPrompt: anchorPrompt,
    scheduledDelayedReviewIndex: 4, // ask again after 4 questions
  };
}

/**
 * Calculates priority score for a candidate fact based on:
 * - forgetting risk
 * - error history & consecutive errors
 * - latency hesitation
 * - session fatigue adjustments
 */
export function calculateFactPriority(
  fact: FactMemoryState,
  nowMs: number = Date.now(),
  fatigue?: FatigueSignal
): CandidateScore {
  let score = 0;
  let category: CandidateScore['category'] = 'new_fact';
  let reason = '';

  if (fact.totalAttempts === 0) {
    score = 40;
    category = 'new_fact';
    reason = 'Unseen curriculum fact';
    return { factKey: fact.factKey, score, category, reason };
  }

  // 1. Highest priority for skipped facts (user explicitly signaled lack of knowledge)
  if (fact.skipCount > 0 && (fact.correctAttempts === 0 || nowMs - (fact.lastSkipped || 0) < 24 * 60 * 60 * 1000)) {
    score = 180 + fact.skipCount * 25;
    category = 'weak_or_due';
    reason = `Skipped fact (${fact.skipCount} skip${fact.skipCount > 1 ? 's' : ''}). Priority strategy instruction.`;
    return {
      factKey: fact.factKey,
      score,
      category,
      reason,
    };
  }

  // 2. Spaced review overdue check
  const isOverdue = nowMs >= fact.nextReviewTimestamp;
  const forgettingRisk = calculateForgettingRisk(fact.lastSeen, fact.stabilityScore, nowMs);

  // 3. High priority for consecutive errors (active struggles)
  if (fact.consecutiveErrors >= 2) {
    score += 150 + fact.consecutiveErrors * 40;
    category = 'weak_or_due';
    reason = `Repeated errors (${fact.consecutiveErrors} consecutive). High urgency repair.`;
  } else if (fact.consecutiveErrors === 1) {
    score += 100;
    category = 'weak_or_due';
    reason = 'Recent error requiring reinforcement.';
  } else if (isOverdue || forgettingRisk > 0.45) {
    score += 80 + Math.round(forgettingRisk * 50);
    category = 'weak_or_due';
    reason = `Spaced review due (forgetting risk: ${Math.round(forgettingRisk * 100)}%).`;
  } else if (fact.stabilityScore < 70) {
    score += 50 + Math.round((70 - fact.stabilityScore) / 2);
    category = 'consolidation';
    reason = 'Developing fact requiring memory consolidation.';
  } else {
    score += 15;
    category = 'interleaved_strong';
    reason = 'Mastered anchor fact for retention interleaving.';
  }

  // 4. Boost for neighboring fact confusions
  if (
    fact.identifiedErrorPattern === 'adjacent_table_confusion' ||
    fact.identifiedErrorPattern === 'adjacent_multiplier_confusion'
  ) {
    score += 40;
  }

  // 5. Latency hesitation penalty/boost
  if (fact.medianLatencyMs > 3500) {
    score += 35;
  }

  // 6. Recency suppression: down-weight facts seen in the last 90 seconds
  const elapsedSecs = (nowMs - fact.lastSeen) / 1000;
  if (elapsedSecs < 90) {
    score -= 80;
  }

  // 7. Fatigue adjustment: if fatigued, prioritize easier anchor facts over heavy 2-digit facts
  if (fatigue && (fatigue.level === 'mild_fatigue' || fatigue.level === 'high_fatigue')) {
    if (category === 'interleaved_strong' || fact.stabilityScore >= 70) {
      score += 40; // boost confidence builders
    } else if (fact.consecutiveErrors > 2) {
      score -= 30; // avoid cognitive overwhelm
    }
  }

  return {
    factKey: fact.factKey,
    score: Math.max(0, score),
    category,
    reason,
  };
}

/**
 * Selects the next fact to present according to target queue mix ratios:
 * - 50-60% weak or due
 * - 20-30% consolidation
 * - 15-25% interleaved stronger
 * - small number of new facts
 */
export function selectNextFact(
  candidateFactKeys: FactKey[],
  factMemoryMap: Record<string, FactMemoryState>,
  recentAskedKeys: FactKey[] = [],
  fatigue?: FatigueSignal,
  delayedReviewQueue: { factKey: FactKey; dueAtCount: number }[] = [],
  currentSessionQuestionCount: number = 0
): { factKey: FactKey; selectionReason: string; category: CandidateScore['category'] } {
  // 1. Check if a delayed review repair item is due now
  const dueDelayed = delayedReviewQueue.find((item) => item.dueAtCount <= currentSessionQuestionCount);
  if (dueDelayed) {
    return {
      factKey: dueDelayed.factKey,
      selectionReason: 'Delayed retrieval test following error repair',
      category: 'weak_or_due',
    };
  }

  const now = Date.now();
  const scoredCandidates: CandidateScore[] = [];

  for (const key of candidateFactKeys) {
    // Avoid repeating immediately
    if (recentAskedKeys.slice(-2).includes(key)) continue;

    const state = factMemoryMap[key] || createInitialFactMemoryState(key);
    const scored = calculateFactPriority(state, now, fatigue);
    scoredCandidates.push(scored);
  }

  if (scoredCandidates.length === 0) {
    const fallback = candidateFactKeys[0] || 'mul:7:8';
    return {
      factKey: fallback,
      selectionReason: 'Default candidate fallback',
      category: 'new_fact',
    };
  }

  // Group by category
  const weakOrDue = scoredCandidates.filter((c) => c.category === 'weak_or_due').sort((a, b) => b.score - a.score);
  const consolidation = scoredCandidates.filter((c) => c.category === 'consolidation').sort((a, b) => b.score - a.score);
  const interleaved = scoredCandidates.filter((c) => c.category === 'interleaved_strong').sort((a, b) => b.score - a.score);
  const newFacts = scoredCandidates.filter((c) => c.category === 'new_fact').sort((a, b) => b.score - a.score);

  // Roll dice according to target pedagogical distribution (55% weak/due, 25% consolidation, 15% interleaved, 5% new)
  const roll = Math.random();

  if (roll < 0.55 && weakOrDue.length > 0) {
    const pick = weakOrDue[0];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'weak_or_due' };
  } else if (roll < 0.80 && consolidation.length > 0) {
    const pick = consolidation[0];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'consolidation' };
  } else if (roll < 0.95 && interleaved.length > 0) {
    const pick = interleaved[Math.floor(Math.random() * Math.min(3, interleaved.length))];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'interleaved_strong' };
  } else if (newFacts.length > 0) {
    const pick = newFacts[0];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'new_fact' };
  }

  // Fallback to highest scored candidate
  scoredCandidates.sort((a, b) => b.score - a.score);
  const top = scoredCandidates[0];
  return {
    factKey: top.factKey,
    selectionReason: top.reason,
    category: top.category,
  };
}
