#!/usr/bin/env node

/**
 * ====================================================================
 * Mentalis Platform: Daily Database Pulse & Health Maintenance Engine
 * ====================================================================
 * Purpose:
 *  1. Keep Supabase active 365 days/year to prevent free-tier project pausing.
 *  2. Execute genuine, useful platform analytics & health diagnostics:
 *     - Measures database latency & connection health.
 *     - Aggregates community learning stats (total questions solved, accuracy %, practice time).
 *     - Audits profiles and user stats integrity.
 *     - Captures leaderboard rankings and top learner streaks.
 *     - Verifies Psychology / Mind module availability.
 *     - Optionally performs maintenance cleanup (expired challenges) if service key is provided.
 *  3. Generates structured output for terminal & GitHub Actions Step Summary.
 * ====================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * Load environment variables from .env.local or .env if not already present
 */
function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const match = trimmed.match(/^([\w.-]+)\s*=\s*(.*)$/);
      if (match) {
        const key = match[1];
        let val = match[2];
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  } catch (err) {
    console.warn(`[Mentalis DB Pulse] Warning reading ${filePath}:`, err.message);
  }
}

loadEnvFile(path.join(projectRoot, '.env.local'));
loadEnvFile(path.join(projectRoot, '.env'));

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('\n❌ [Mentalis DB Pulse] Missing Supabase configuration!');
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.');
  process.exit(1);
}

// Prefer service role key if available for administrative cleanup, otherwise use anon key
const activeKey = supabaseServiceRoleKey || supabaseAnonKey;
const isServiceRole = Boolean(supabaseServiceRoleKey);

const supabase = createClient(supabaseUrl, activeKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

function formatDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

async function runDatabasePulse() {
  const startTime = Date.now();
  console.log('='.repeat(70));
  console.log('⚡ Mentalis Platform — Daily Database Pulse & Health Engine');
  console.log(`📅 Timestamp: ${new Date().toISOString()} (${new Date().toLocaleString()})`);
  console.log(`🌐 Supabase Target: ${supabaseUrl}`);
  console.log(`🔑 Auth Level: ${isServiceRole ? 'Service Role (Full Admin)' : 'Anon Public (Standard)'}`);
  console.log('='.repeat(70));

  const pulseReport = {
    timestamp: new Date().toISOString(),
    supabaseUrl,
    authLevel: isServiceRole ? 'service_role' : 'anon',
    dbOnline: false,
    latencyMs: 0,
    metrics: {
      totalProfiles: 0,
      activeProfilesRecent: 0,
      totalQuestionsSolved: 0,
      totalCorrectAnswers: 0,
      overallAccuracyPercent: '0.00%',
      totalPracticeDuration: '0s',
      totalPracticeSeconds: 0,
      highestStreak: 0,
      psychologyTopicsCount: 0,
    },
    topLearners: [],
    integrityStatus: 'Checking...',
    actionsPerformed: [],
    errors: [],
  };

  try {
    // 1. LATENCY & HEALTH CHECK
    const pingStart = Date.now();
    const { count: profileCount, error: profileErr } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    pulseReport.latencyMs = Date.now() - pingStart;

    if (profileErr) {
      throw new Error(`Failed to query profiles table: ${profileErr.message}`);
    }

    pulseReport.dbOnline = true;
    pulseReport.metrics.totalProfiles = profileCount || 0;
    console.log(`\n✅ [1/5] Database Connectivity: ONLINE (Latency: ${pulseReport.latencyMs}ms)`);
    console.log(`       Total Registered Learners: ${pulseReport.metrics.totalProfiles}`);

    // 2. COMMUNITY LEARNING STATS AGGREGATION
    console.log('\n📊 [2/5] Aggregating Platform Learning Metrics...');
    const { data: statsRows, error: statsErr } = await supabase
      .from('user_stats')
      .select('user_id, total_questions_answered, total_correct, total_time_spent_seconds, current_streak, longest_streak, updated_at');

    if (statsErr) {
      console.warn('⚠️  Could not read user_stats:', statsErr.message);
      pulseReport.errors.push(`user_stats: ${statsErr.message}`);
    } else if (statsRows && statsRows.length > 0) {
      let totalQuestions = 0;
      let totalCorrect = 0;
      let totalSeconds = 0;
      let highestStreak = 0;

      for (const row of statsRows) {
        totalQuestions += Number(row.total_questions_answered) || 0;
        totalCorrect += Number(row.total_correct) || 0;
        totalSeconds += Number(row.total_time_spent_seconds) || 0;
        const streak = Math.max(Number(row.current_streak) || 0, Number(row.longest_streak) || 0);
        if (streak > highestStreak) highestStreak = streak;
      }

      pulseReport.metrics.totalQuestionsSolved = totalQuestions;
      pulseReport.metrics.totalCorrectAnswers = totalCorrect;
      pulseReport.metrics.totalPracticeSeconds = totalSeconds;
      pulseReport.metrics.totalPracticeDuration = formatDuration(totalSeconds);
      pulseReport.metrics.highestStreak = highestStreak;

      const accuracy = totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(2) : '0.00';
      pulseReport.metrics.overallAccuracyPercent = `${accuracy}%`;

      console.log(`       • Total Problems Solved: ${totalQuestions.toLocaleString()}`);
      console.log(`       • Correct Answers:       ${totalCorrect.toLocaleString()} (${accuracy}% accuracy)`);
      console.log(`       • Total Practice Time:   ${pulseReport.metrics.totalPracticeDuration}`);
      console.log(`       • Longest Practice Streak: ${highestStreak} days 🔥`);
    }

    // 3. TOP LEARNERS / LEADERBOARD AUDIT
    console.log('\n🏆 [3/5] Querying Top Learners & Leaderboard Snapshot...');
    const { data: topProfiles, error: topErr } = await supabase
      .from('profiles')
      .select('id, username, display_name, rating, tier, xp, level')
      .order('xp', { ascending: false })
      .limit(5);

    if (topErr) {
      console.warn('⚠️  Could not read top profiles:', topErr.message);
      pulseReport.errors.push(`top profiles: ${topErr.message}`);
    } else if (topProfiles) {
      pulseReport.topLearners = topProfiles.map((p, idx) => ({
        rank: idx + 1,
        username: p.username || 'Anonymous',
        displayName: p.display_name || p.username || 'Learner',
        level: p.level || 1,
        xp: p.xp || 0,
        rating: p.rating || 1200,
        tier: p.tier || 'Bronze',
      }));

      pulseReport.topLearners.forEach((l) => {
        console.log(`       #${l.rank} ${l.username.padEnd(20)} Level ${String(l.level).padEnd(2)} | ${String(l.xp).padStart(6)} XP | Rating: ${l.rating} (${l.tier})`);
      });
    }

    // 4. PSYCHOLOGY & CONTENT HEALTH CHECK
    console.log('\n🧠 [4/5] Checking Psychology & Mind Content System...');
    const { count: psychCount, error: psychErr } = await supabase
      .from('psychology_topics')
      .select('*', { count: 'exact', head: true });

    if (psychErr) {
      console.warn('⚠️  Could not check psychology_topics:', psychErr.message);
      pulseReport.errors.push(`psychology_topics: ${psychErr.message}`);
    } else {
      pulseReport.metrics.psychologyTopicsCount = psychCount || 0;
      console.log(`       Psychology Topics Active: ${pulseReport.metrics.psychologyTopicsCount}`);
    }

    // 5. MAINTENANCE & CLEANUP ACTIONS (If Service Key or Admin is active)
    console.log('\n🧹 [5/5] Performing Maintenance Checks & Integrity Audit...');
    const statsUserCount = statsRows ? statsRows.length : 0;
    const diff = (pulseReport.metrics.totalProfiles || 0) - statsUserCount;

    if (diff === 0) {
      pulseReport.integrityStatus = 'All profiles have matching user_stats rows (100% synchronized).';
      console.log('       ✓ Profile-to-Stats Integrity: 100% in sync.');
    } else {
      pulseReport.integrityStatus = `Discrepancy detected: ${diff} profile(s) missing user_stats records.`;
      console.warn(`       ⚠️  ${diff} profile(s) may be missing user_stats.`);
    }

    // Check open 1v1 challenges if accessible
    try {
      const { data: openChallenges, error: chalErr } = await supabase
        .from('challenges_1v1')
        .select('id, created_at, status')
        .eq('status', 'waiting')
        .limit(10);

      if (!chalErr && openChallenges) {
        console.log(`       Active Waiting 1v1 Challenges: ${openChallenges.length}`);
        
        // If service role is active, clean up stale waiting challenges older than 7 days
        if (isServiceRole && openChallenges.length > 0) {
          const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
          const staleIds = openChallenges
            .filter((c) => c.created_at < sevenDaysAgo)
            .map((c) => c.id);

          if (staleIds.length > 0) {
            const { error: delErr } = await supabase
              .from('challenges_1v1')
              .update({ status: 'cancelled' })
              .in('id', staleIds);

            if (!delErr) {
              const msg = `Cleaned up ${staleIds.length} expired 1v1 challenge(s).`;
              pulseReport.actionsPerformed.push(msg);
              console.log(`       ✓ ${msg}`);
            }
          }
        }
      }
    } catch {
      // Non-critical check
    }

    const totalDuration = Date.now() - startTime;
    console.log('\n' + '='.repeat(70));
    console.log(`✨ Daily Database Pulse Completed Successfully in ${totalDuration}ms`);
    console.log('🛡️  Supabase Inactivity Countdown Reset: ACTIVE for next 7 days.');
    console.log('='.repeat(70) + '\n');

    // Write to GitHub Actions Step Summary if running in GitHub Actions CI
    if (process.env.GITHUB_STEP_SUMMARY) {
      writeGitHubSummary(pulseReport, totalDuration);
    }

    return pulseReport;
  } catch (error) {
    console.error('\n❌ [Mentalis DB Pulse] Maintenance failed:', error.message);
    process.exit(1);
  }
}

function writeGitHubSummary(report, totalDuration) {
  try {
    const summaryPath = process.env.GITHUB_STEP_SUMMARY;
    let md = `## ⚡ Mentalis Daily Database Health & Pulse Report\n\n`;
    md += `> **Status:** 🟢 **DATABASE ONLINE & ACTIVE** | **Latency:** \`${report.latencyMs}ms\` | **Total Run Time:** \`${totalDuration}ms\`\n`;
    md += `> **Supabase Keep-Alive:** Reset successfully. Project will remain unpaused.\n\n`;

    md += `### 📊 Platform Metrics Summary\n\n`;
    md += `| Metric | Value |\n`;
    md += `| :--- | :--- |\n`;
    md += `| **Registered Learners** | \`${report.metrics.totalProfiles}\` |\n`;
    md += `| **Total Math Problems Solved** | \`${report.metrics.totalQuestionsSolved.toLocaleString()}\` |\n`;
    md += `| **Correct Answers** | \`${report.metrics.totalCorrectAnswers.toLocaleString()}\` (${report.metrics.overallAccuracyPercent}) |\n`;
    md += `| **Total Practice Time** | \`${report.metrics.totalPracticeDuration}\` |\n`;
    md += `| **Peak Streak** | \`${report.metrics.highestStreak} days 🔥\` |\n`;
    md += `| **Psychology Topics** | \`${report.metrics.psychologyTopicsCount}\` |\n`;
    md += `| **Data Integrity** | \`${report.integrityStatus}\` |\n\n`;

    if (report.topLearners.length > 0) {
      md += `### 🏆 Current Top Learners\n\n`;
      md += `| Rank | Username | Level | XP | Rating | Tier |\n`;
      md += `| :---: | :--- | :---: | :---: | :---: | :---: |\n`;
      report.topLearners.forEach((l) => {
        md += `| **#${l.rank}** | \`${l.username}\` | ${l.level} | ${l.xp.toLocaleString()} | **${l.rating}** | ${l.tier} |\n`;
      });
      md += `\n`;
    }

    if (report.actionsPerformed.length > 0) {
      md += `### 🛠️ Actions Performed\n\n`;
      report.actionsPerformed.forEach((a) => {
        md += `- ${a}\n`;
      });
      md += `\n`;
    }

    md += `*Report generated automatically at ${new Date().toUTCString()} by Mentalis Daily Pulse Engine.*\n`;

    fs.appendFileSync(summaryPath, md, 'utf-8');
    console.log('📝 Appended detailed report to GitHub Actions Step Summary.');
  } catch (err) {
    console.warn('⚠️  Could not write GitHub step summary:', err.message);
  }
}

runDatabasePulse();
