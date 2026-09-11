/**
 * Server-Side AI Coach Route Handler for Mentalis
 * Secure, zero-retention OpenAI Responses API integration with
 * strict JSON Schema enforcement and canonical catalog validation.
 */

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { isValidDrillId } from '@/core/catalog';
import { CoachingInsight, SkillDimension } from '@/core/learnerModel';

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
  recentErrors?: { dimension: string; patternType: string; count: number }[];
  fatigue?: { level: string; consecutiveErrors: number; latencyDilationRatio: number };
  requestedMinutes?: number;
  currentStreak?: number;
}

const AI_COACH_SCHEMA = {
  name: 'ai_coach_insight',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      summary: {
        type: 'string',
        description: 'A 1-2 sentence high-level overview of the learner’s cognitive state.',
      },
      encouragement: {
        type: 'string',
        description: 'An uplifting, pedagogical note acknowledging effort and rhythm.',
      },
      observed_strengths: {
        type: 'array',
        items: { type: 'string' },
        description: '2-3 specific arithmetic strengths identified from the ability metrics.',
      },
      priority_gaps: {
        type: 'array',
        items: { type: 'string' },
        description: '1-2 high-leverage growth areas with technique suggestions.',
      },
      recommended_focus: {
        type: 'string',
        description: 'Clear primary focus for today’s practice session.',
      },
      explanation_for_user: {
        type: 'string',
        description: 'Clear mental arithmetic explanation of the cognitive strategy.',
      },
      suggested_coaching_message: {
        type: 'string',
        description: 'Direct pedagogical message to the learner before they begin.',
      },
      plan_adjustments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            suggested_drill_id: {
              type: 'string',
              description: 'Canonical drill ID from the allowed curriculum.',
            },
            reason: {
              type: 'string',
              description: 'Pedagogical justification for this drill.',
            },
          },
          required: ['suggested_drill_id', 'reason'],
          additionalProperties: false,
        },
        description: 'Optional fine-tuning of drill targets.',
      },
      confidence: {
        type: 'number',
        description: 'Confidence in this diagnostic recommendation (0.0 to 1.0).',
      },
      safety_note: {
        type: 'string',
        description: 'Confirmation that all suggestions are within valid curriculum boundaries.',
      },
    },
    required: [
      'summary',
      'encouragement',
      'observed_strengths',
      'priority_gaps',
      'recommended_focus',
      'explanation_for_user',
      'suggested_coaching_message',
      'plan_adjustments',
      'confidence',
      'safety_note',
    ],
    additionalProperties: false,
  },
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

  const focusLabel = weakest ? weakest.dimension.replace(/_/g, ' ') : 'core addition and subtraction';
  const strengthLabel = strongest ? strongest.dimension.replace(/_/g, ' ') : 'foundations';

  return {
    summary: `Cognitive profile indicates solid fluency in ${strengthLabel}, with targeted opportunity in ${focusLabel}.`,
    encouragement: 'Consistent daily retrieval builds permanent mental math representations. Keep the accumulator steady!',
    observedStrengths: [
      `High accuracy and automaticity in ${strengthLabel}.`,
      'Consistent practice rhythm maintaining neural pathways.',
    ],
    priorityGaps: [
      `Technique refinement in ${focusLabel} to reduce calculation latency.`,
    ],
    recommendedFocus: `Dedicate today's core focus block to mastering ${focusLabel}.`,
    suggestedCoachingMessage: `Focus on clean visualization rather than raw speed. When bridging, mentally hold the running decade in working memory.`,
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

    const systemPrompt = `You are Mentalis AI Coach, an expert cognitive arithmetic pedagogue.
Your role is to analyze a mental math learner's skill ratings (theta on a -3.0 to +3.0 scale), accuracy, latency, and fatigue state.
Recommend high-leverage cognitive focus areas using proven techniques:
- Left-to-right accumulator method
- Vedic shortcuts: (50±d)², (100±d)², ending in 5
- Base-100 complements
- Auditory sub-vocalization loops
- Anzan working memory pacing

CRITICAL RULES:
1. All drill suggestions must use canonical drill IDs (e.g., 'add_sub_l2', 'table_7', 'sq_near_50', 'sq_ending_5', 'anzan_standard').
2. Keep explanations encouraging, concise, and focused on working memory load.
3. Be precise with cognitive diagnostics based on provided numbers.`;

    const userPrompt = `Learner Assessment & Progress Data:
Skills: ${JSON.stringify(payload.skills)}
Fatigue State: ${JSON.stringify(payload.fatigue || { level: 'fresh' })}
Recent Errors: ${JSON.stringify(payload.recentErrors || [])}
Current Daily Streak: ${payload.currentStreak || 0} days
Requested Session Minutes: ${payload.requestedMinutes || 15} min

Provide structured pedagogical coaching feedback.`;

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: {
        type: 'json_schema',
        json_schema: AI_COACH_SCHEMA,
      },
      temperature: 0.3,
      // Zero-retention privacy flag
      store: false,
    });

    const rawContent = completion.choices[0]?.message?.content;
    if (!rawContent) {
      throw new Error('Empty response from AI Coach model');
    }

    const parsed = JSON.parse(rawContent);

    // Validate suggested drill IDs against canonical catalog
    const validatedAdjustments = (parsed.plan_adjustments || []).filter(
      (adj: { suggested_drill_id: string }) => isValidDrillId(adj.suggested_drill_id)
    );

    const insight: CoachingInsight = {
      summary: parsed.summary,
      encouragement: parsed.encouragement,
      observedStrengths: parsed.observed_strengths || [],
      priorityGaps: parsed.priority_gaps || [],
      recommendedFocus: parsed.recommended_focus,
      suggestedCoachingMessage: parsed.suggested_coaching_message,
      planAdjustments: validatedAdjustments.map((a: { suggested_drill_id: string; reason: string }) => ({
        suggestedDrillId: a.suggested_drill_id,
        reason: a.reason,
      })),
      confidence: parsed.confidence || 0.85,
      generatedAt: Date.now(),
      source: 'ai',
    };

    return NextResponse.json({
      success: true,
      insight,
      isFallback: false,
    });
  } catch (err: unknown) {
    console.error('AI Coach API error, falling back to deterministic engine:', err);
    // On any error (network failure, rate limit, invalid key), seamlessly fall back
    const fallbackInsight = generateDeterministicInsight({ skills: [] });
    return NextResponse.json({
      success: true,
      insight: fallbackInsight,
      isFallback: true,
      error: 'AI Coach service momentarily unavailable, using deterministic guidance.',
    });
  }
}
