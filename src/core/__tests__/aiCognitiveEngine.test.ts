import { describe, it, expect } from 'vitest';
import { evaluateCognitiveState } from '../aiCognitiveEngine';
import { createDefaultLearnerProfile } from '../learnerModel';

describe('Cognitive AI Decision Engine', () => {
  it('detects optimal flow state when responses are fast and accurate', () => {
    const profile = createDefaultLearnerProfile();
    const latencies = [1500, 1800, 1600, 1400, 1700];
    const state = evaluateCognitiveState(profile, null, latencies, 0);

    expect(state.mentalState).toBe('optimal_flow');
    expect(state.capacityIndex).toBeGreaterThanOrEqual(85);
    expect(state.recommendedTechnique).toBeDefined();
    expect(state.recommendedTechnique.name).toBeDefined();
    expect(state.recommendedTechnique.practiceRoute).toBeDefined();
  });

  it('detects cognitive overload when latency dilates and consecutive errors occur', () => {
    const profile = createDefaultLearnerProfile();
    const latencies = [4200, 4800, 5200, 5900];
    const state = evaluateCognitiveState(profile, null, latencies, 3);

    expect(state.mentalState).toBe('cognitive_overload');
    expect(state.capacityIndex).toBeLessThan(50);
    expect(state.nextExercisePace).toBe('cooldown_pause');
  });

  it('prescribes teen split-and-add when bottleneck includes teen facts', () => {
    const profile = createDefaultLearnerProfile();
    const fakeMemoryMap: any = {
      'mul:17:8': {
        key: 'mul:17:8',
        factKey: 'mul:17:8',
        masteryState: 'fragile',
        consecutiveErrors: 2,
        medianLatencyMs: 4100,
        attempts: 3,
      },
    };

    const state = evaluateCognitiveState(profile, fakeMemoryMap, [3800, 4000], 1);
    expect(state.activeBottleneck).toBeDefined();
    expect(state.activeBottleneck?.domain).toContain('Teen');
    expect(state.recommendedTechnique.techniqueId).toBe('split_add_teen');
    expect(state.recommendedTechnique.mentalFormula).toContain('17 × 8');
  });

  it('maps all 7 diagnostic domains into frontier probes', () => {
    const profile = createDefaultLearnerProfile();
    const state = evaluateCognitiveState(profile, null, [2000, 2200], 0);

    const domains = Object.keys(state.frontierProbes);
    expect(domains).toContain('tables');
    expect(domains).toContain('addition');
    expect(domains).toContain('subtraction');
    expect(domains).toContain('multiplication');
    expect(domains).toContain('division');
    expect(domains).toContain('squares_cubes');
    expect(domains).toContain('shakuntala_feats');
  });
});
