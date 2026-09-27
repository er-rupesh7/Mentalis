/**
 * Mentalab Mind Privacy-First Practice Analytics & Adaptive Difficulty Engine
 * 
 * Tracks:
 * - attempts
 * - correct answers
 * - incorrect answers
 * - accuracy
 * - difficulty
 * - question type
 * - completion
 * 
 * Strict Privacy Guarantee:
 * Zero personal identifiable information (PII) is stored or collected.
 * Only anonymous educational telemetry (topic IDs, question types, performance tiers)
 * is retained in localStorage / memory.
 */

import {
  MindQuestionType,
  PracticeAnalyticsRecord,
  TopicPracticeSummary,
  OverallPracticeAnalytics,
  MindDifficulty,
} from './types';

export type {
  PracticeAnalyticsRecord,
  TopicPracticeSummary,
  OverallPracticeAnalytics,
};

const STORAGE_KEY_RECORDS = 'mentalab_mind_practice_records_v1';
const STORAGE_KEY_COMPLETED = 'mentalab_mind_completed_topics_v1';

const memoryFallbackMap = new Map<string, string>();

/**
 * Safely access localStorage with SSR and restricted environment fallback
 */
function safeGetStorage(key: string): string | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const val = window.localStorage.getItem(key);
      if (val !== null) return val;
    } catch {
      // Fallback to in-memory map
    }
  }
  return memoryFallbackMap.get(key) ?? null;
}

function safeSetStorage(key: string, value: string): void {
  memoryFallbackMap.set(key, value);
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Non-blocking in private browsing or quota limits
    }
  }
}

/**
 * Retrieve raw anonymous practice attempt records
 */
export function getPracticeRecords(): PracticeAnalyticsRecord[] {
  const data = safeGetStorage(STORAGE_KEY_RECORDS);
  if (!data) return [];
  try {
    return JSON.parse(data) as PracticeAnalyticsRecord[];
  } catch {
    return [];
  }
}

/**
 * Retrieve completed topic IDs
 */
export function getCompletedTopicIds(): string[] {
  const data = safeGetStorage(STORAGE_KEY_COMPLETED);
  if (!data) return [];
  try {
    return JSON.parse(data) as string[];
  } catch {
    return [];
  }
}

/**
 * Record a practice attempt with anonymous telemetry
 */
export function recordPracticeAttempt(
  entry: Omit<PracticeAnalyticsRecord, 'timestamp'>
): PracticeAnalyticsRecord {
  const fullRecord: PracticeAnalyticsRecord = {
    ...entry,
    timestamp: new Date().toISOString(),
  };

  const records = getPracticeRecords();
  records.push(fullRecord);
  
  // Cap at last 500 records to prevent storage unbounded growth
  const pruned = records.slice(-500);
  safeSetStorage(STORAGE_KEY_RECORDS, JSON.stringify(pruned));

  return fullRecord;
}

/**
 * Normalize difficulty string to easy | medium | hard
 */
export function normalizeDifficulty(
  diff: MindDifficulty | undefined
): 'easy' | 'medium' | 'hard' {
  if (diff === 'hard' || diff === 'advanced') return 'hard';
  if (diff === 'medium' || diff === 'intermediate') return 'medium';
  return 'easy';
}

/**
 * Compute performance summary for a specific psychology topic
 */
export function getTopicPracticeSummary(topicId: string): TopicPracticeSummary {
  const allRecords = getPracticeRecords();
  const topicRecords = allRecords.filter((r) => r.topicId === topicId);
  const completedTopics = getCompletedTopicIds();

  const attempts = topicRecords.length;
  const correctAnswers = topicRecords.filter((r) => r.isCorrect).length;
  const incorrectAnswers = attempts - correctAnswers;
  const accuracy = attempts > 0 ? Math.round((correctAnswers / attempts) * 100) : 0;
  const isCompleted = completedTopics.includes(topicId);

  const difficultyBreakdown = {
    easy: { attempts: 0, correct: 0 },
    medium: { attempts: 0, correct: 0 },
    hard: { attempts: 0, correct: 0 },
  };

  const typeBreakdown: Partial<Record<MindQuestionType, { attempts: number; correct: number }>> = {};

  for (const r of topicRecords) {
    const diff = normalizeDifficulty(r.difficulty);
    difficultyBreakdown[diff].attempts += 1;
    if (r.isCorrect) {
      difficultyBreakdown[diff].correct += 1;
    }

    if (!typeBreakdown[r.questionType]) {
      typeBreakdown[r.questionType] = { attempts: 0, correct: 0 };
    }
    const tb = typeBreakdown[r.questionType]!;
    tb.attempts += 1;
    if (r.isCorrect) {
      tb.correct += 1;
    }
  }

  const lastAttemptAt = topicRecords.length > 0
    ? topicRecords[topicRecords.length - 1].timestamp
    : new Date().toISOString();

  return {
    topicId,
    attempts,
    correctAnswers,
    incorrectAnswers,
    accuracy,
    completed: isCompleted,
    difficultyBreakdown,
    typeBreakdown,
    lastAttemptAt,
  };
}

/**
 * Mark a topic as completed in the educational loop
 */
export function markTopicCompleted(topicId: string): void {
  const completed = getCompletedTopicIds();
  if (!completed.includes(topicId)) {
    completed.push(topicId);
    safeSetStorage(STORAGE_KEY_COMPLETED, JSON.stringify(completed));
  }
}

/**
 * Calculate adaptive recommended difficulty for next question
 * 
 * Rules:
 * - If user has accuracy >= 80% with >= 2 attempts: promote difficulty
 * - If user has accuracy < 50% with >= 2 attempts: recommend easier or reinforcement
 * - Otherwise: start or remain at 'medium' or current level
 */
export function getRecommendedDifficulty(
  topicId: string,
  preferredDifficulty?: MindDifficulty
): 'easy' | 'medium' | 'hard' {
  if (preferredDifficulty) {
    return normalizeDifficulty(preferredDifficulty);
  }

  const summary = getTopicPracticeSummary(topicId);
  if (summary.attempts < 2) {
    return 'easy';
  }

  if (summary.accuracy >= 80) {
    if (summary.difficultyBreakdown.medium.attempts >= 2 && summary.difficultyBreakdown.medium.correct >= 2) {
      return 'hard';
    }
    return 'medium';
  }

  if (summary.accuracy < 50) {
    return 'easy';
  }

  return 'medium';
}

/**
 * Compute overall aggregate practice analytics across all psychology topics
 */
export function getOverallPracticeAnalytics(): OverallPracticeAnalytics {
  const allRecords = getPracticeRecords();
  const completedTopicIds = getCompletedTopicIds();

  const totalAttempts = allRecords.length;
  const totalCorrect = allRecords.filter((r) => r.isCorrect).length;
  const totalIncorrect = totalAttempts - totalCorrect;
  const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  const topicSummaries: Record<string, TopicPracticeSummary> = {};
  const topicIds = Array.from(new Set(allRecords.map((r) => r.topicId)));

  for (const tid of topicIds) {
    topicSummaries[tid] = getTopicPracticeSummary(tid);
  }

  return {
    totalAttempts,
    totalCorrect,
    totalIncorrect,
    overallAccuracy,
    completedTopicIds,
    topicSummaries,
  };
}

/**
 * Clear practice records for a specific topic (or all)
 */
export function clearTopicPracticeAnalytics(topicId?: string): void {
  if (!topicId) {
    safeSetStorage(STORAGE_KEY_RECORDS, JSON.stringify([]));
    safeSetStorage(STORAGE_KEY_COMPLETED, JSON.stringify([]));
    return;
  }

  const records = getPracticeRecords().filter((r) => r.topicId !== topicId);
  safeSetStorage(STORAGE_KEY_RECORDS, JSON.stringify(records));

  const completed = getCompletedTopicIds().filter((id) => id !== topicId);
  safeSetStorage(STORAGE_KEY_COMPLETED, JSON.stringify(completed));
}
