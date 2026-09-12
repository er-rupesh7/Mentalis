import { describe, it, expect } from 'vitest';
import {
  GroqCoachResponseSchema,
  GroqLessonCardSchema,
  GroqPlanAdjustmentSchema,
  generateDeterministicInsight,
} from '../groqCoachEngine';
import { STRATEGY_CATALOG } from '../strategyCatalog';
import { isValidFactKey } from '../factModel';

describe('Groq AI Coach Integration & Validation', () => {
  it('validates structured Groq responses using GroqCoachResponseSchema', () => {
    const validResponse = {
      summary: 'Strong performance on single digit tables; hesitation on teen squares.',
      priority_facts: ['m:17:8', 's:48'],
      priority_skills: ['teen_multiplication', 'near_50_squares'],
      recommended_plan_adjustments: [
        {
          target: 'm:17:8',
          action: 'teach_then_recall',
          strategy_id: 'mult_teen_distributive',
          reason: 'Decompose into 10x8 + 7x8 to bypass working memory overload.',
        },
      ],
      lesson_cards: [
        {
          title: 'Teen Multiplier Distribution',
          fact_or_family: 'm:17:8',
          trick: 'Split 17 into 10 and 7. (10x8) + (7x8) = 80 + 56 = 136.',
          worked_example: '17 x 8 = 80 + 56 = 136',
          practice_prompt: 'Try 18 x 7 using the same split.',
        },
      ],
      coach_message: 'Keep the tens stored firmly in your phonological loop before computing units.',
      confidence: 0.92,
    };

    const parseResult = GroqCoachResponseSchema.safeParse(validResponse);
    expect(parseResult.success).toBe(true);
    if (parseResult.success) {
      expect(parseResult.data.priority_facts).toHaveLength(2);
      expect(parseResult.data.confidence).toBe(0.92);
    }
  });

  it('rejects invalid or malformed Groq response structures', () => {
    const invalidResponse = {
      summary: 'Missing required arrays and fields',
      confidence: 'not-a-number',
    };

    const parseResult = GroqCoachResponseSchema.safeParse(invalidResponse);
    expect(parseResult.success).toBe(false);
  });

  it('validates facts against canonical fact schema to avoid hallucinations', () => {
    // Canonical facts
    expect(isValidFactKey('mul:17:8')).toBe(true);
    expect(isValidFactKey('mul:99:19')).toBe(true);
    expect(isValidFactKey('square:48')).toBe(true);
    expect(isValidFactKey('cube:12')).toBe(true);

    // Non-canonical / out-of-range facts
    expect(isValidFactKey('mul:105:25')).toBe(false);
    expect(isValidFactKey('square:150')).toBe(false);
    expect(isValidFactKey('cube:200')).toBe(false);
    expect(isValidFactKey('hallucinated_text')).toBe(false);
    expect(isValidFactKey('')).toBe(false);
  });

  it('validates strategy IDs against canonical STRATEGY_CATALOG', () => {
    const knownStrategies = Object.keys(STRATEGY_CATALOG);
    expect(knownStrategies.length).toBeGreaterThan(15);

    // Known strategies exist in catalog
    expect(STRATEGY_CATALOG['nines_compensation']).toBeDefined();
    expect(STRATEGY_CATALOG['square_near_50']).toBeDefined();
    expect(STRATEGY_CATALOG['square_ending_5']).toBeDefined();
    expect(STRATEGY_CATALOG['multiplication_split_add']).toBeDefined();

    // Unknown or hallucinated strategies
    expect(STRATEGY_CATALOG['fake_magic_math_trick']).toBeUndefined();
    expect(STRATEGY_CATALOG['random_string_123']).toBeUndefined();
  });

  it('generates rich deterministic coaching insight when Groq is unavailable', () => {
    const payload = {
      skills: [
        {
          dimension: 'mult_teen_tables' as const,
          theta: -0.8,
          accuracy: 50,
          attempts: 10,
          medianLatencyMs: 4200,
          decayRisk: 'high',
        },
        {
          dimension: 'mult_foundations' as const,
          theta: 1.5,
          accuracy: 95,
          attempts: 20,
          medianLatencyMs: 1200,
          decayRisk: 'low',
        },
      ],
      skippedFacts: ['m:17:8', 'm:19:7'],
      fatigue: { level: 'fresh', consecutiveErrors: 0, latencyDilationRatio: 1.0 },
    };

    const result = generateDeterministicInsight(payload);
    expect(result.insight).toBeDefined();
    expect(result.groqResponse).toBeDefined();
    expect(result.insight.observedStrengths.length).toBeGreaterThan(0);
    expect(result.insight.priorityGaps.length).toBeGreaterThan(0);
    expect(result.insight.lessonCards).toBeDefined();
    expect(result.groqResponse.priority_facts).toContain('m:17:8');
  });
});
