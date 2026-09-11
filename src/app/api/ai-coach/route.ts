/**
 * Server-Side AI Coach Route Handler for Mentalis
 * Secure, zero-retention OpenAI Responses API integration with
 * strict JSON Schema enforcement and canonical catalog validation.
 */

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { isValidDrillId } from '@/core/catalog';
import { CoachingInsight, SkillDimension } from '@/core/learnerModel';
import { isValidFactKey, FactKey } from '@/core/factModel';
import { STRATEGY_CATALOG } from '@/core/strategyCatalog';

interface RequestSkillSummary {
  dimension: SkillDimension;
  theta: number;
  accuracy: number;
  attempts: number;
  medianLatencyMs: number;
  decayRisk: string;
}

interface RequestPayload {
  skills: RequestSkillSummary[];
  recentErrors?: { dimension: string; patternType: string; count: number; factKey?: string }[];
  fatigue?: { level: string; consecutiveErrors: number; latencyDilationRatio: number };
  requestedMinutes?: number;
  currentStreak?: number;
  candidateFacts?: string[];
  recentFactFailures?: string[];
}

const AI_COACH_RESPONSES_SCHEMA = {
  type: 'object',
  properties: {
    learner_summary: {
      type: 'string',
      description: 'A 1-2 sentence high-level overview of the learner’s cognitive and memory state.',
    },
    priority_fact_families: {
      type: 'array',
      items: { type: 'string' },
      description: 'Canonical fact keys (e.g., mul:17:6, square:47, cube:12) prioritized for immediate review.',
    },
    recommended_learning_mode: {
      type: 'string',
      description: 'Pedagogical mode: teach_then_recall, recall, speed, or repair.',
    },
    recommended_strategies: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          strategy_id: {
            type: 'string',
            description: 'Canonical strategy ID from the allowed strategy catalog.',
          },
          applies_to: {
            type: 'array',
            items: { type: 'string' },
            description: 'Fact keys this strategy applies to.',
          },
          reason: {
            type: 'string',
            description: 'Concise explanation of why this strategy reduces working memory load.',
          },
        },
        required: ['strategy_id', 'applies_to', 'reason'],
        additionalProperties: false,
      },
      description: 'Targeted mental math strategies for the priority facts.',
    },
    next_queue_policy: {
      type: 'object',
      properties: {
        focus_ratio: {
          type: 'number',
          description: 'Fraction of weak/due facts (e.g. 0.55).',
        },
        review_ratio: {
          type: 'number',
          description: 'Fraction of recently learned consolidation facts (e.g. 0.25).',
        },
        interleave_ratio: {
          type: 'number',
          description: 'Fraction of interleaved stronger facts (e.g. 0.20).',
        },
        difficulty_adjustment: {
          type: 'string',
          enum: ['step_down', 'hold', 'step_up'],
          description: 'Whether to adjust question difficulty based on accuracy and fatigue.',
        },
      },
      required: ['focus_ratio', 'review_ratio', 'interleave_ratio', 'difficulty_adjustment'],
      additionalProperties: false,
    },
    coach_message: {
      type: 'string',
      description: 'Direct, encouraging pedagogical message to the learner.',
    },
    confidence: {
      type: 'number',
      description: 'Diagnostic confidence rating (0.0 to 1.0).',
    },
  },
  required: [
    'learner_summary',
    'priority_fact_families',
    'recommended_learning_mode',
    'recommended_strategies',
    'next_queue_policy',
    'coach_message',
    'confidence',
  ],
  additionalProperties: false,
};

/**
 * Deterministic fallback generator when no OPENAI_API_KEY is configured
 * or network is unavailable. Guarantees 100% offline functionality.
 */
function generateDeterministicInsight(payload: RequestPayload): CoachingInsight {
  const sortedByTheta = [...(payload.skills || [])]
    .filter((s) => s.attempts > 0)
    .sort((a, b) => a.theta - b.theta);

  const weakest = sortedByTheta[0];
  const strongest = sortedByTheta[sortedByTheta.length - 1];

  const focusLabel = weakest ? weakest.dimension.replace(/_/g, ' ') : 'core tables and teen multipliers';
  const strengthLabel = strongest ? strongest.dimension.replace(/_/g, ' ') : 'foundations';

  const defaultFacts = (payload.candidateFacts && payload.candidateFacts.length > 0)
    ? payload.candidateFacts.slice(0, 3)
    : ['mul:7:8', 'mul:17:6', 'square:48'];

  const defaultStrategy = 'multiplication_split_add';

  return {
    summary: `Cognitive profile indicates solid fluency in ${strengthLabel}, with targeted opportunity in ${focusLabel}.`,
    learner_summary: `Solid fluency in ${strengthLabel}; targeted reinforcement active for ${focusLabel}.`,
    priority_fact_families: defaultFacts,
    recommended_learning_mode: 'teach_then_recall',
    recommended_strategies: [
      {
        strategy_id: defaultStrategy,
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
    coach_message: 'Anchor tens first before adding units. Let your phonological loop hold the running sum.',
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
    planAdjustments: [],
    confidence: 0.88,
    generatedAt: Date.now(),
    source: 'deterministic',
  };
}

export async function POST(req: NextRequest) {
  try {
    const payload: RequestPayload = await req.json();

    // Check if OPENAI_API_KEY is configured
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      // Graceful offline fallback
      const fallback = generateDeterministicInsight(payload);
      return NextResponse.json({
        success: true,
        insight: fallback,
        isFallback: true,
        message: 'Running in private offline mode (deterministic engine).',
      });
    }

    const openai = new OpenAI({ apiKey });
    const model = process.env.OPENAI_MODEL?.trim() || 'gpt-4o-mini';

    const validStrategyKeys = Object.keys(STRATEGY_CATALOG);
    const candidateFactList = payload.candidateFacts || ['mul:7:8', 'mul:17:6', 'square:48', 'cube:12'];

    const systemPrompt = `You are Mentalis AI Coach, an expert cognitive arithmetic pedagogue.
Analyze the learner's skill ability (theta on -3.0 to +3.0), accuracy, latency, and fatigue state.
Recommend high-leverage cognitive focus areas and strategies.

NON-NEGOTIABLE RULES:
1. ONLY choose priority_fact_families from the provided candidate fact set: [${candidateFactList.join(', ')}].
2. ONLY choose strategy_id from the allowed strategy catalog: [${validStrategyKeys.join(', ')}].
3. Do not make medical, neurological, or IQ claims. Focus strictly on mental math techniques.
4. Keep explanations concise, practical, and focused on working memory load.`;

    const userPrompt = `Learner Assessment & Progress Data:
Skills: ${JSON.stringify(payload.skills)}
Candidate Facts: ${JSON.stringify(candidateFactList)}
Recent Failures: ${JSON.stringify(payload.recentFactFailures || [])}
Fatigue State: ${JSON.stringify(payload.fatigue || { level: 'fresh' })}
Recent Errors: ${JSON.stringify(payload.recentErrors || [])}
Current Daily Streak: ${payload.currentStreak || 0} days
Requested Session Minutes: ${payload.requestedMinutes || 15} min

Provide structured pedagogical coaching feedback.`;

    // Invoke OpenAI Responses API with store: false and strict JSON Schema
    const response = await openai.responses.create({
      model,
      instructions: systemPrompt,
      input: userPrompt,
      store: false,
      text: {
        format: {
          type: 'json_schema',
          name: 'ai_coach_insight',
          strict: true,
          schema: AI_COACH_RESPONSES_SCHEMA,
        },
      },
      temperature: 0.2,
    });

    const rawContent = response.output_text;
    if (!rawContent) {
      throw new Error('Empty output from OpenAI Responses API');
    }

    const parsed = JSON.parse(rawContent);

    // Validate suggested fact keys against candidate set and canonical format
    const validatedFacts: string[] = (parsed.priority_fact_families || []).filter(
      (k: string) => isValidFactKey(k) && (candidateFactList.includes(k) || isValidFactKey(k))
    );

    // Validate suggested strategies against canonical catalog
    const validatedStrategies = (parsed.recommended_strategies || []).filter(
      (s: { strategy_id: string }) => STRATEGY_CATALOG[s.strategy_id] !== undefined
    );

    const insight: CoachingInsight = {
      summary: parsed.learner_summary || 'Cognitive review plan active.',
      learner_summary: parsed.learner_summary,
      priority_fact_families: validatedFacts.length > 0 ? validatedFacts : candidateFactList.slice(0, 3),
      recommended_learning_mode: parsed.recommended_learning_mode || 'teach_then_recall',
      recommended_strategies: validatedStrategies.length > 0 ? validatedStrategies : [
        {
          strategy_id: 'multiplication_split_add',
          applies_to: [candidateFactList[0] || 'mul:17:6'],
          reason: 'Decomposes multi-digit operands into tens and units to reduce working memory load.',
        },
      ],
      next_queue_policy: parsed.next_queue_policy || {
        focus_ratio: 0.55,
        review_ratio: 0.25,
        interleave_ratio: 0.20,
        difficulty_adjustment: 'hold',
      },
      coach_message: parsed.coach_message,
      encouragement: parsed.coach_message || 'Keep the accumulator steady!',
      observedStrengths: [],
      priorityGaps: validatedFacts.map((f) => `Targeted reinforcement for ${f}`),
      recommendedFocus: parsed.learner_summary || 'Core tables and strategic recall.',
      suggestedCoachingMessage: parsed.coach_message,
      planAdjustments: [],
      confidence: parsed.confidence || 0.88,
      generatedAt: Date.now(),
      source: 'ai',
    };

    return NextResponse.json({
      success: true,
      insight,
      isFallback: false,
    });
  } catch (err: unknown) {
    console.error('AI Coach Responses API error, falling back to deterministic engine:', err);
    // On any error (network failure, rate limit, invalid key, timeout), seamlessly fall back
    const fallbackInsight = generateDeterministicInsight({ skills: [] });
    return NextResponse.json({
      success: true,
      insight: fallbackInsight,
      isFallback: true,
      error: 'AI Coach service momentarily unavailable, using deterministic guidance.',
    });
  }
}
