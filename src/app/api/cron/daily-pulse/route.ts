import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * ====================================================================
 * Daily Database Pulse & Health API Route
 * ====================================================================
 * Endpoint: /api/cron/daily-pulse
 * Methods: GET, POST
 * 
 * Purpose:
 *  - Prevents Supabase project from pausing due to free-tier inactivity.
 *  - Performs a meaningful platform health check & metrics aggregation.
 *  - Can be invoked by Vercel Cron, GitHub Actions, cron-job.org, or uptime monitors.
 * ====================================================================
 */
export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get('authorization');

  // Verify CRON_SECRET if one is configured in production
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { error: 'Unauthorized: Invalid cron authorization token.' },
      { status: 401 }
    );
  }

  const startTime = Date.now();
  const supabase = getSupabase();

  if (!supabase) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Supabase client is not configured.',
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }

  try {
    // 1. Health & Latency Ping
    const pingStart = Date.now();
    const { count: profileCount, error: profileErr } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    const latencyMs = Date.now() - pingStart;

    if (profileErr) {
      throw new Error(`Profile query error: ${profileErr.message}`);
    }

    // 2. Aggregate Learning Stats
    const { data: statsRows, error: statsErr } = await supabase
      .from('user_stats')
      .select('total_questions_answered, total_correct, total_time_spent_seconds, current_streak, longest_streak');

    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalSeconds = 0;
    let highestStreak = 0;

    if (!statsErr && statsRows) {
      for (const row of statsRows) {
        totalQuestions += Number(row.total_questions_answered) || 0;
        totalCorrect += Number(row.total_correct) || 0;
        totalSeconds += Number(row.total_time_spent_seconds) || 0;
        const streak = Math.max(Number(row.current_streak) || 0, Number(row.longest_streak) || 0);
        if (streak > highestStreak) highestStreak = streak;
      }
    }

    // 3. Query Top 3 Players
    const { data: topProfiles } = await supabase
      .from('profiles')
      .select('username, rating, xp, level, tier')
      .order('xp', { ascending: false })
      .limit(3);

    const accuracy = totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(2)) : 0;
    const totalDuration = Date.now() - startTime;

    return NextResponse.json({
      status: 'ok',
      keepAlive: 'Supabase activity refreshed successfully.',
      timestamp: new Date().toISOString(),
      latencyMs,
      totalExecutionMs: totalDuration,
      metrics: {
        totalRegisteredLearners: profileCount || 0,
        totalQuestionsSolved: totalQuestions,
        totalCorrectAnswers: totalCorrect,
        overallAccuracyPercent: `${accuracy}%`,
        totalPracticeTimeHours: Number((totalSeconds / 3600).toFixed(2)),
        highestStreakDays: highestStreak,
      },
      topPlayers: (topProfiles || []).map((p, idx) => ({
        rank: idx + 1,
        username: p.username || 'Anonymous',
        level: p.level || 1,
        xp: p.xp || 0,
        rating: p.rating || 1200,
        tier: p.tier || 'Bronze',
      })),
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: err?.message || 'Database health pulse failed.',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  return GET(request);
}
