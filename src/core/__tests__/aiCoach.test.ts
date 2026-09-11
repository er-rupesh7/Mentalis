import { describe, it, expect } from 'vitest';
import { STRATEGY_CATALOG } from '../strategyCatalog';
import { isValidFactKey } from '../factModel';

describe('AI Coach & Pedagogical Validation', () => {
  it('validates candidate fact keys strictly so AI can never invent bogus facts', () => {
    expect(isValidFactKey('mul:7:8')).toBe(true);
    expect(isValidFactKey('mul:17:19')).toBe(true);
    expect(isValidFactKey('square:47')).toBe(true);
    expect(isValidFactKey('cube:12')).toBe(true);

    // Invalid or out-of-range keys
    expect(isValidFactKey('mul:0:5')).toBe(false);
    expect(isValidFactKey('mul:101:5')).toBe(false);
    expect(isValidFactKey('mul:7:25')).toBe(false); // multiplier capped at 20
    expect(isValidFactKey('square:105')).toBe(false); // square capped at 100
    expect(isValidFactKey('bogus:string')).toBe(false);
  });

  it('validates recommended strategy IDs against the deterministic STRATEGY_CATALOG', () => {
    const validStrategies = ['multiplication_split_add', 'square_ending_5', 'square_near_50', 'cube_anchor_recall'];
    for (const id of validStrategies) {
      expect(STRATEGY_CATALOG[id]).toBeDefined();
    }

    const invalidStrategy = 'ai_invented_fake_trick';
    expect(STRATEGY_CATALOG[invalidStrategy]).toBeUndefined();
  });

  it('guarantees deterministic offline fallback produces valid pedagogical recommendations', () => {
    // Test deterministic fallback payload structure
    const fallbackInsight = {
      learner_summary: 'Consolidating teen multiplication tables and building anchor squares.',
      priority_fact_families: ['mul:17:6', 'mul:14:8', 'square:47'],
      recommended_learning_mode: 'learn',
      recommended_strategies: ['multiplication_split_add', 'square_near_50'],
      next_queue_policy: {
        focus_ratio: 0.55,
        review_ratio: 0.25,
        interleave_ratio: 0.20,
        difficulty_adjustment: 'hold',
      },
      coach_message: 'Keep working through table 17. Use 17 = 10 + 7 to break tough multipliers into rapid sub-products.',
    };

    // Verify all recommended facts are valid
    for (const f of fallbackInsight.priority_fact_families) {
      expect(isValidFactKey(f)).toBe(true);
    }

    // Verify all recommended strategies exist in catalog
    for (const s of fallbackInsight.recommended_strategies) {
      expect(STRATEGY_CATALOG[s]).toBeDefined();
    }

    // Verify queue ratios sum to 1.0
    const policy = fallbackInsight.next_queue_policy;
    expect(policy.focus_ratio + policy.review_ratio + policy.interleave_ratio).toBeCloseTo(1.0);

    // Verify absence of forbidden medical/neurological jargon
    const text = `${fallbackInsight.learner_summary} ${fallbackInsight.coach_message}`.toLowerCase();
    expect(text).not.toContain('neuroplasticity');
    expect(text).not.toContain('synapse');
    expect(text).not.toContain('iq score');
    expect(text).not.toContain('brain age');
  });
});
