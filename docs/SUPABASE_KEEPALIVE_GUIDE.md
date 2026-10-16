# ⚡ Mentalis — Supabase Daily Keep-Alive & Platform Pulse Guide

## 📌 Why Does Supabase Pause Databases?
On the **Supabase Free Tier**, projects that receive **no API or database requests for 7 consecutive days are automatically paused** to preserve resources. When paused, your app will fail to load user profiles, stats, and auth until you manually log into the Supabase dashboard and click "Restore project".

---

## 🎯 How We Solve It (And Make It Truly Useful)
Instead of sending a useless dummy ping (`SELECT 1`), we created the **Mentalis Daily Database Pulse & Health Engine**.

Every day, it performs **genuine, valuable platform operations**:
1. **Health & Latency Audit**: Measures roundtrip API latency to Supabase and verifies uptime.
2. **Community Learning Aggregates**:
   - Total registered learner profiles count
   - Total math questions answered across all users
   - Total correct answers and platform-wide accuracy percentage
   - Total practice duration accumulated (hours, minutes)
   - Peak practice streaks across all active learners
3. **Leaderboard & Ranking Snapshot**: Queries top players by XP, level, and rating (keeps cache and indexes fresh).
4. **Data Integrity Check**: Ensures every registered profile has a synchronized `user_stats` record.
5. **Psychology & Mind System Health**: Verifies content availability in `psychology_topics`.
6. **Automatic Inactivity Reset**: Satisfies Supabase's activity requirement so your database **stays active 365 days a year**.

---

## 🚀 3 Ways This Runs

### 1. Fully Automated in Cloud: GitHub Actions (Recommended)
- **Workflow File:** [`.github/workflows/supabase-daily-keepalive.yml`](file:///Users/rupeshkumar/Documents/Mentalis/.github/workflows/supabase-daily-keepalive.yml)
- **Schedule:** Runs automatically **every single day at 06:00 UTC (11:30 AM IST)**.
- **Cost:** **100% Free** (runs on GitHub's cloud runners; does not require your computer to be turned on).
- **Manual Trigger:** You can also run it on demand anytime:
  1. Go to your GitHub repository: [github.com/er-rupesh7/Mentalis](https://github.com/er-rupesh7/Mentalis)
  2. Click **Actions** tab.
  3. Select **"Supabase Daily Keep-Alive & Platform Pulse"**.
  4. Click **Run workflow**.
  5. View the rich Markdown summary report in the GitHub run summary!

#### (Optional) GitHub Secrets Configuration
The workflow already has your public project URL and anon key as fallback, but for production best practices you can configure repository secrets:
1. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**.
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` *(optional, for admin maintenance tasks)*

---

### 2. Local Terminal Command
You can run the health pulse anytime from your terminal:

```bash
npm run db:pulse
# or
npm run db:keepalive
```

---

### 3. Next.js API Route (`/api/cron/daily-pulse`)
- **Route File:** [`src/app/api/cron/daily-pulse/route.ts`](file:///Users/rupeshkumar/Documents/Mentalis/src/app/api/cron/daily-pulse/route.ts)
- Returns JSON with database status, latency, total registered learners, total problems solved, accuracy, and top players.
- Can be hooked into:
  - **Vercel Cron** (if deployed to Vercel)
  - **cron-job.org** or **UptimeRobot** (free external web pingers)
- Protected with optional `CRON_SECRET` authorization header if configured.

---

## 📊 Sample Output

```text
======================================================================
⚡ Mentalis Platform — Daily Database Pulse & Health Engine
📅 Timestamp: 2026-10-16T12:24:16.392Z
🌐 Supabase Target: https://aqgjnqsuwdoegpjznfag.supabase.co
🔑 Auth Level: Anon Public (Standard)
======================================================================

✅ [1/5] Database Connectivity: ONLINE (Latency: 6726ms)
       Total Registered Learners: 18

📊 [2/5] Aggregating Platform Learning Metrics...
       • Total Problems Solved: 1,920
       • Correct Answers:       1,714 (89.27% accuracy)
       • Total Practice Time:   4h 7m 16s
       • Longest Practice Streak: 30 days 🔥

🏆 [3/5] Querying Top Learners & Leaderboard Snapshot...
       #1 boss                 Level 23 |  21243 XP | Rating: 2274 (Bronze)
       #2 laxmikeshavbawane_c859 Level 8  |   3468 XP | Rating: 1568 (Bronze)
       #3 kpbavane1986_caa0    Level 6  |   1895 XP | Rating: 1695 (Bronze)
       #4 rekhaddeshmukh2024_1dac Level 4  |    876 XP | Rating: 1644 (Bronze)
       #5 vj2511271_ac4f       Level 3  |    708 XP | Rating: 1499 (Bronze)

🧠 [4/5] Checking Psychology & Mind Content System...
       Psychology Topics Active: 1

🧹 [5/5] Performing Maintenance Checks & Integrity Audit...
       ✓ Profile-to-Stats Integrity: 100% in sync.
       Active Waiting 1v1 Challenges: 0

======================================================================
✨ Daily Database Pulse Completed Successfully
🛡️  Supabase Inactivity Countdown Reset: ACTIVE for next 7 days.
======================================================================
```
