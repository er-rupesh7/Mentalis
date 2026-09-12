import { describe, it, expect } from 'vitest';
import { consultLocalAdaptiveCoach } from '../localCoachEngine';
import { createDefaultLearnerProfile } from '../learnerModel';
import { createInitialFactMemoryState } from '../factModel';

describe('Local Cognitive Coach Engine (100% Offline & Deterministic)', () => {
  it('generates deterministic coaching insights with zero network dependencies', () => {
    const profile = createDefaultLearnerProfile();
    const insight = consultLocalAdaptiveCoach(profile, {}, 15);

    expect(insight).toBeDefined();
    expect(insight.source).toBe('deterministic');
    expect(insight.summary).toContain('Local Cognitive Assessment');
    expect(insight.observedStrengths.length).toBeGreaterThan(0);
    expect(insight.lessonCards!.length).toBeGreaterThan(0);
    expect(insight.lessonCards![0].worked_example).toContain('->');
    expect(insight.next_queue_policy!.focus_ratio).toBe(0.5);
  });

  it('detects skipped facts and transitions recommended mode to teach with targeted tricks', () => {
    const profile = createDefaultLearnerProfile();
    const fact = createInitialFactMemoryState('mul:19:7');
    fact.skipCount = 2;
    fact.skippedAttempts = 2;
    fact.lastSkippedAt = Date.now();

    const insight = consultLocalAdaptiveCoach(profile, { 'mul:19:7': fact }, 15);

    expect(insight.recommended_learning_mode).toBe('teach');
    expect(insight.coach_message).toContain('skipped 1 fact');
    expect(insight.priorityGaps.some((g) => g.includes('Skipped facts'))).toBe(true);

    const card = insight.lessonCards!.find((c) => c.fact_or_family === 'mul:19:7');
    expect(card).toBeDefined();
    expect(card?.trick.length).toBeGreaterThan(10);
    expect(card?.worked_example.length).toBeGreaterThan(10);
  });

  it('detects recurring errors and fragile facts to offer repair lessons', () => {
    const profile = createDefaultLearnerProfile();
    const fact = createInitialFactMemoryState('square:48');
    fact.consecutiveErrors = 3;
    fact.consecutiveIncorrect = 3;
    fact.masteryState = 'fragile';

    const insight = consultLocalAdaptiveCoach(profile, { 'square:48': fact }, 15);

    expect(insight.recommended_learning_mode).toBe('teach');
    expect(insight.priorityGaps.some((g) => g.includes('Recurring mistakes'))).toBe(true);
    expect(insight.lessonCards!.some((c) => c.fact_or_family === 'square:48')).toBe(true);
  });

  it('detects fatigue signals and steps down queue difficulty with a break recommendation', () => {
    const profile = createDefaultLearnerProfile();
    profile.fatigueState = {
      level: 'high_fatigue',
      consecutiveErrors: 3,
      latencyDilationRatio: 1.6,
      recommendation: 'take_break',
      message: 'Fatigue detected',
    };

    const insight = consultLocalAdaptiveCoach(profile, {}, 10);

    expect(insight.coach_message).toContain('Cognitive fatigue detected');
    expect(insight.next_queue_policy!.difficulty_adjustment).toBe('step_down');
  });

  it('identifies slow recall facts and suggests speed mode with latency warnings', () => {
    const profile = createDefaultLearnerProfile();
    const fact = createInitialFactMemoryState('mul:14:8');
    fact.attempts = 5;
    fact.recentAccuracy = 80;
    fact.medianLatencyMs = 4500; // > 3500ms slow threshold

    const insight = consultLocalAdaptiveCoach(profile, { 'mul:14:8': fact }, 15);

    expect(insight.recommended_learning_mode).toBe('speed');
    expect(insight.priorityGaps.some((g) => g.includes('slow recall'))).toBe(true);
  });
});
