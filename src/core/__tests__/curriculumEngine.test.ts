import { describe, it, expect } from 'vitest';
import {
  CURRICULUM_PHASES,
  evaluateActiveCurriculumPhase,
  generate20MinDailyMission,
  identifyWeakestTable,
  MICRO_SESSION_PRESETS,
} from '../curriculumEngine';
import { createDefaultLearnerProfile } from '../learnerModel';
import { FactMemory } from '../factModel';

describe('60-Day RRB PO Curriculum & Micro-Session Engine', () => {
  it('has exactly 5 well-defined sequential curriculum phases spanning 60 days', () => {
    expect(CURRICULUM_PHASES).toHaveLength(5);
    expect(CURRICULUM_PHASES[0].phaseNumber).toBe(1);
    expect(CURRICULUM_PHASES[4].phaseNumber).toBe(5);
    for (const phase of CURRICULUM_PHASES) {
      expect(phase.title).toBeTruthy();
      expect(phase.description).toBeTruthy();
      expect(phase.focusSkills.length).toBeGreaterThan(0);
      expect(phase.benchmarkRequirements.length).toBeGreaterThan(0);
    }
  });

  it('strictly retains beginner learner in Phase 1 even on day 40 if tables 11-15 not mastered', () => {
    const freshProfile = createDefaultLearnerProfile();
    const phase = evaluateActiveCurriculumPhase(40, freshProfile);
    expect(phase.phaseNumber).toBe(1);
  });

  it('accelerates capable learner to Phase 2 once Tables 11-15 are mastered', () => {
    const profile = createDefaultLearnerProfile();
    // Simulate mastery of tables 11 to 15
    for (const t of ['table_11', 'table_12', 'table_13', 'table_14', 'table_15'] as const) {
      profile.skills[t] = {
        dimension: t,
        accuracy: 95,
        medianLatencyMs: 1800,
        rollingLatencyMs: [1800],
        totalAttempts: 20,
        correctCount: 19,
        consecutiveCorrect: 10,
        lastPracticedAt: Date.now(),
        speedLadderLevel: 5,
        cognitiveState: 'recalled',
        exposures: 20,
        errorRate: 0.05,
      };
    }

    const phase = evaluateActiveCurriculumPhase(5, profile);
    // Should graduate to Phase 2 even on day 5
    expect(phase.phaseNumber).toBe(2);
  });

  it('generates a complete 5-block 20-minute daily mission', () => {
    const profile = createDefaultLearnerProfile();
    const plan = generate20MinDailyMission(1, profile);

    expect(plan.blocks).toHaveLength(5);
    expect(plan.totalEstimatedMinutes).toBe(20);

    const blockTypes = plan.blocks.map((b) => b.blockType);
    expect(blockTypes).toContain('warmup');
    expect(blockTypes).toContain('priority_weakness');
    expect(blockTypes).toContain('mixed_retrieval');
    expect(blockTypes).toContain('strategy_refinement');
    expect(blockTypes).toContain('cool_down');
  });

  it('identifies weakest teen table among 11 to 20 accurately', () => {
    const profile = createDefaultLearnerProfile();
    // Initialize all tables 11 to 20 with good performance
    for (let t = 11; t <= 20; t++) {
      const dim = `table_${t}` as const;
      profile.skills[dim] = {
        dimension: dim,
        accuracy: 90,
        medianLatencyMs: 2000,
        rollingLatencyMs: [2000],
        totalAttempts: 15,
        correctCount: 14,
        consecutiveCorrect: 5,
        lastPracticedAt: Date.now(),
        speedLadderLevel: 4,
        cognitiveState: 'recalled',
        exposures: 15,
        errorRate: 0.1,
      };
    }

    // Mark table 19 as having lowest accuracy
    profile.skills['table_19'] = {
      dimension: 'table_19',
      accuracy: 30,
      medianLatencyMs: 4500,
      rollingLatencyMs: [4500],
      totalAttempts: 15,
      correctCount: 4,
      consecutiveCorrect: 0,
      lastPracticedAt: Date.now(),
      speedLadderLevel: 1,
      cognitiveState: 'wrong',
      exposures: 15,
      errorRate: 0.7,
    };

    const weakest = identifyWeakestTable(profile);
    expect(weakest).toBe(19);
  });

  it('provides 4 validated Micro-Session speed presets', () => {
    expect(MICRO_SESSION_PRESETS).toHaveLength(4);
    const durations = MICRO_SESSION_PRESETS.map((p) => p.durationMinutes);
    expect(durations).toEqual([2, 5, 10, 20]);
    for (const preset of MICRO_SESSION_PRESETS) {
      expect(preset.id).toBeTruthy();
      expect(preset.name).toBeTruthy();
      expect(preset.description).toBeTruthy();
      expect(preset.targetModule).toBeTruthy();
    }
  });
});
