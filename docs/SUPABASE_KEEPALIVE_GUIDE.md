# ⚡ Mentalis — Supabase Keep-Alive & Platform Pulse Architecture

## 📌 Why Does Supabase Pause Projects?
On the **Supabase Free Tier**, projects that receive **no API or database requests for 7 consecutive days are automatically paused** to preserve cloud resources.

### What the Errors in Your Supabase Logs Mean:
When a Supabase project is paused, you will observe the following signature in the Supabase Dashboard logs:
1. **`HTTP 521` (Web Server is Down)**: Cloudflare edge gateway cannot establish a connection to your Supabase PostgreSQL / PostgREST container because the instance is sleeping.
2. **`GET /auth/v1/authorize?provider=google` returning `521`**: Google OAuth attempts fail immediately because the auth server is paused.
3. **`57P01 terminating connection due to administrator command`**: PostgreSQL internal code indicating an administrative pause/restart or recovery signal.
4. **`42P01 relation "realtime.subscription" does not exist`**: Occurs briefly during cold container bootstrap before database migrations and extensions are initialized.

---

## 🔍 Root Cause of the Previous Failure
In the earlier configuration, the GitHub Actions workflow used:
```yaml
NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL || 'https://aqgjnqsuwdoegpjznfag.supabase.co' }}
```
In GitHub Actions expression syntax (`${{ ... }}`), the `||` operator evaluates to a **boolean** (`true`), **not** a JavaScript fallback! As a result, the runner set `NEXT_PUBLIC_SUPABASE_URL="true"`, causing the Supabase client to throw `Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL` and terminate in 0.0 seconds without making any network calls.

---

## 🛡️ The 4-Layer "Never-Pause" Defense

We implemented a defense-in-depth architecture across 4 independent layers:

### Layer 1: GitHub Actions (Automated Cloud Runners)
- **Workflow File:** [`.github/workflows/supabase-daily-keepalive.yml`](file:///Users/rupeshkumar/Documents/Mentalis/.github/workflows/supabase-daily-keepalive.yml)
- **Schedule:** Runs **twice daily** at `04:17 UTC` and `16:17 UTC` (9:47 AM & 9:47 PM IST).
- **Staggered Minute:** Uses `:17` to avoid queue congestion at the top of the hour.
- **Resilient Config:** Passes variables cleanly; the script itself handles all fallbacks safely.

### Layer 2: Resilient Script Engine (`scripts/daily-db-maintenance.mjs`)
- **Direct Built-in Credentials:** Automatically falls back to the official Mentalis Supabase URL and anon key if environment variables are missing or corrupted.
- **Input Sanitization:** Strips out invalid values like `"true"`, `"null"`, or empty strings.
- **Wake-Up & Retry Logic:** Retries up to 3 times with 10-second pauses if Supabase is cold-starting.
- **Dual Engine:** Works with `@supabase/supabase-js` or native Node `fetch()` without any dependencies.

### Layer 3: Vercel Cron (`vercel.json`)
- **Config File:** [`vercel.json`](file:///Users/rupeshkumar/Documents/Mentalis/vercel.json)
- **Schedule:** Calls `/api/cron/daily-pulse` every day at `05:15 UTC` directly from Vercel's global edge network.

### Layer 4: Client-Side In-App Pulse
- Whenever any user opens the Mentalis app (web or PWA), a non-blocking background pulse pings Supabase's REST endpoint (throttled to at most once every 12 hours via `localStorage`).

---

## 🚀 Manual Commands

### Test Locally
```bash
npm run db:pulse
# or
npm run db:keepalive
```

### Manual Trigger on GitHub
1. Open [github.com/er-rupesh7/Mentalis](https://github.com/er-rupesh7/Mentalis)
2. Go to the **Actions** tab.
3. Select **"Supabase Daily Keep-Alive & Platform Pulse"**.
4. Click **Run workflow**.
