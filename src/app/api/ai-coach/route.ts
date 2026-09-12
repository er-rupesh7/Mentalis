/**
 * Local-First AI Coach Route Handler for Mentalis
 * 100% Deterministic and fully offline compatible.
 * Zero external AI API calls, zero rate limits, zero keys required.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  generateDeterministicInsight,
  RequestPayload,
} from '@/core/groqCoachEngine';

export async function POST(req: NextRequest) {
  try {
    let payload: RequestPayload;
    try {
      payload = await req.json();
    } catch {
      payload = { skills: [] };
    }

    const { insight, groqResponse } = generateDeterministicInsight(payload);

    return NextResponse.json({
      success: true,
      insight,
      groqResponse,
      isFallback: true,
      providerStatus: 'ready',
      message: 'Mentalis deterministic offline adaptive engine active.',
    });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      {
        success: false,
        error: errorMsg,
      },
      { status: 500 }
    );
  }
}
