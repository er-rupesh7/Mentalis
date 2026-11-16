# Mentalis 🧠⚡
> **High-Performance Cognitive Arithmetic Engine, Psychological Foundations, and Mental Training Platform.**

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?style=flat&logo=supabase)](https://supabase.com/)
[![Vitest](https://img.shields.io/badge/Vitest-370%2B%20Tests%20Passing-green?style=flat&logo=vitest)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Mentalis is a modern, local-first web application engineered around cognitive science, working-memory expansion, left-to-right calculation pedagogy, and behavioral psychology. It is designed to train mental processing speed, mathematical fluency, working memory, and cognitive discernment through an offline-resilient architecture.

All core computational algorithms, memory schedulers (SM-2 adaptation), diagnostic heuristics, and state engines are written in **pure, framework-agnostic TypeScript**—ready to be ported 1:1 to React Native, Flutter, or desktop environments.

---

## 📑 Table of Contents

1. [Architectural Philosophy](#-architectural-philosophy)
2. [Complete Feature Breakdown](#-complete-feature-breakdown)
   - [Mental Math Foundations & Tables Matrix](#1-mental-math-foundations--tables-matrix)
   - [Advanced Mental Arithmetic & Vedic Techniques](#2-advanced-mental-arithmetic--vedic-techniques)
   - [Anzan Flash Memory Engine](#3-anzan-flash-memory-engine)
   - [Intelligent Typing Slip Detection & Motor Latency Scaling](#4-intelligent-typing-slip-detection--motor-latency-scaling)
   - [Mentalis Mind: Psychology & Behavioral Science](#5-mentalis-mind-psychology--behavioral-science)
   - [Multilingual Architecture (13 Languages + Hindi Devanagari Default)](#6-multilingual-architecture-13-languages--hindi-devanagari-default)
   - [Gamification, ELO Rating, Tiers & Leaderboards](#7-gamification-elo-rating-tiers--leaderboards)
   - [1v1 Live Battle Arena & Real-Time Presence](#8-1v1-live-battle-arena--real-time-presence)
   - [Local-First Architecture & Cloud Sync](#9-local-first-architecture--cloud-sync)
   - [4-Layer Supabase Keep-Alive & Platform Pulse Engine](#10-4-layer-supabase-keep-alive--platform-pulse-engine)
3. [Tech Stack](#-tech-stack)
4. [Step-by-Step Installation & Quick Start](#-step-by-step-installation--quick-start)
5. [Environment Variables Guide (.env)](#-environment-variables-guide-env)
6. [Supabase & Google OAuth Configuration](#-supabase--google-oauth-configuration)
7. [Available Scripts](#-available-scripts)
8. [Project Structure](#-project-structure)
9. [Automated Testing Suite](#-automated-testing-suite)
10. [Deployment (Vercel & GitHub Actions)](#-deployment-vercel--github-actions)
11. [License](#-license)

---

## 🏛 Architectural Philosophy

- **Local-First by Default**: 100% of arithmetic engines, diagnostic tools, psychology curriculum, and spaced-repetition schedules operate fully offline. Local state is managed via Zustand and persisted to `localStorage` (`mentalis_storage_v7`).
- **Zero Latency & Fluid Interactions**: Calculations happen on the client in sub-millisecond cycles. No network hops are required during active training.
- **Pure Decoupled Core**: All business logic lives in `src/core/` and has zero React dependencies. State engines, mastery models, and curriculum generators can be imported directly into mobile or command-line wrappers.
- **Defensive Reliability**: External services (Supabase, Google Auth, Vercel Crons) enhance the experience with cloud backup and social multiplayer, but failure of any external service never halts local practice.

---

## 🌟 Complete Feature Breakdown

### 1. Mental Math Foundations & Tables Matrix
- **Tables 1 to 100**: Master multiplication up to $100 \times 20$ with active recall drills, progressive unlock tiers, and randomized table challenges.
- **Squares Hub**: Complete coverage of squares from $1^2$ to $100^2$, featuring specialized mental anchors:
  - Squares ending in 5 ($n5^2 = n(n+1) \cdot 25$)
  - Squares near 50 ($(50 \pm d)^2 = 25 \pm d \mid d^2$)
  - Squares near 100 ($(100 \pm d)^2 = 100 \pm 2d \mid d^2$)
- **Cubes Hub**: Cubes from $1^3$ to $100^3$ with digit-sum checks and memory milestones.
- **Roots Studio**: Instant estimation and exact evaluation of square roots and cube roots.
- **Algebra & BODMAS Engine**: Multi-operator arithmetic challenges testing operational precedence under time pressure.

### 2. Advanced Mental Arithmetic & Vedic Techniques
- **Left-to-Right Accumulator**: Teaches decomposition by place value (e.g., $67 + 58 = (60+50) + (7+8) = 110 + 15 = 125$) rather than right-to-left school math that requires working-memory scratchpads.
- **Complements Method**: Instant calculation using base complements (to 10, 100, 1,000).
- **Bridging the Decade**: Rounding operands to friendly landmarks before applying compensatory deltas.
- **Vedic Multiplication Systems**:
  - *Nikhilam* (multiplication near powers of 10)
  - *Anurupyena* (proportional working bases)
  - *Urdhva Tiryagbhyam* (vertical and crosswise multiplication)
  - *Duplex Method* for multi-digit squaring
- **Rapid Shortcuts**: Dedicated strategies for $\times 9, \times 11, \times 12, \times 15, \times 25, \times 50, \times 125$.
- **3-Tier Progressive Technique Unlock**: Techniques unlock systematically based on demonstrated mastery points.

### 3. Anzan Flash Memory Engine
- **Japanese Soroban Anzan Pedagogy**: Numbers flash sequentially on screen at adjustable intervals ($300\text{ms}$ to $1,200\text{ms}$), forcing mental representation without paper or pen.
- **Auditory Rhythmic Pacing**: Synchronized audio ticks powered by the Web Audio API (zero external audio file dependencies).
- **Phonological Loop Expansion**: Trains active working memory buffers to hold intermediate accumulators.
- **Customizable Difficulty**: Supports 1 to 5 digits, negative subtraction modes, step inspection, and sequence replay.

### 4. Intelligent Typing Slip Detection & Motor Latency Scaling
- **Distinguishes Slips from Errors**: Does not penalize arithmetic rating when errors are mechanical:
  - *Keypad Adjacency Slips* (pressing 4 instead of 7 on a numpad).
  - *Digit Transpositions* (typing `42` instead of `24`).
  - *Double Strokes / Key Bounce* (typing `55` instead of `5`).
  - *Premature Enter* (submitting intermediate partial results).
- **Motor Latency Normalization**: Accounts for physical typing speed on multi-digit numbers so speed benchmarks remain fair across mobile and desktop.

### 5. Mentalis Mind: Psychology & Behavioral Science
A comprehensive, interactive psychology and mental model curriculum containing over 100 deep-dive modules across 8 major cognitive categories:
1. **Cognitive Biases**: Confirmation Bias, Dunning-Kruger Effect, Anchoring, Availability Heuristic, Sunk Cost Fallacy, Framing Effect, In-Group Favoritism.
2. **Social Psychology**: Social Proof, Reciprocity, Authority Compliance, Scarcity Heuristic, Bystander Effect.
3. **Persuasion & Influence**: Commitment & Consistency, Foot-in-the-Door, Door-in-the-Face.
4. **Manipulation Awareness**: Gaslighting, Guilt Tripping, Love Bombing, DARVO, Playing the Victim.
5. **Mental Models & Heuristics**: First Principles Thinking, Second-Order Thinking, Inversion, Occam’s Razor, Hanlon’s Razor.
6. **Emotional Intelligence & Regulation**: Cognitive Reframing, Locus of Control, Emotional Granularity, Stoic Dichotomy of Control.
7. **Logical Fallacies**: Ad Hominem, Straw Man, False Dilemma, Post Hoc Ergo Propter Hoc, Appeal to False Authority.
8. **Decision Making & Risk Analysis**: Prospect Theory, Loss Aversion, Regret Minimization Framework.

Each module includes:
- **30-Second Quick Takeaways** & **One-Line Plain Explanations**
- **Deep Historical & Theoretical Concepts**
- **Real-Life Behavioral Scenarios**
- **Interactive Decision Quizzes & Situational Simulations**
- **Search Engine Optimized Dynamic Static Generation** (`/mind/[category]/[slug]`) with structured JSON-LD schemas.

### 6. Multilingual Architecture (13 Languages + Hindi Devanagari Default)
- **Native Hindi Devanagari Default (`hi`)**: Designed from the ground up for Hindi-speaking learners, featuring complete curriculum and terminology in authentic Devanagari.
- **13 Fully Supported Languages**:
  1. Hindi (`hi`) [Default]
  2. English (`en`)
  3. Marathi (`mr`)
  4. Gujarati (`gu`)
  5. Tamil (`ta`)
  6. Telugu (`te`)
  7. Bengali (`bn`)
  8. Kannada (`kn`)
  9. Malayalam (`ml`)
  10. Punjabi (`pa`)
  11. Odia (`or`)
  12. Urdu (`ur` — with complete RTL layout support)
  13. Assamese (`as`)
- **Offline Bundled Translations**: 19 namespaces per locale bundled locally with deep-merge inheritance and zero-flash language switching.

### 7. Gamification, ELO Rating, Tiers & Leaderboards
- **ELO-Style Rating System**: Base rating starts at 1,200 points. Points scale dynamically with problem difficulty, accuracy, and response speed.
- **7 Competitive Tiers**: Bronze, Silver, Gold, Platinum, Diamond, Master, Grandmaster.
- **Level & XP Engine**: Experience points earned across practice sessions, streaks, and curriculum mastery.
- **Streak Tracker**: Tracks daily practice streaks with streak shields to protect against missed days.
- **Global & Tier Leaderboards**: Ranks top learners worldwide by XP, Rating, and Streaks.

### 8. 1v1 Live Battle Arena & Real-Time Presence
- **Multiplayer Duels (`challenges_1v1`)**: Real-time arithmetic battles powered by Supabase Realtime WebSocket channels.
- **Live User Presence**: Shows online learners in real time with active avatars, rank badges, and status indicators.
- **Cross-Tab Synchronization**: Uses `BroadcastChannel` APIs (`mentalis_avatar_sync`, `mentalis_theme_sync`) to keep open tabs in perfect harmony.

### 9. Local-First Architecture & Cloud Sync
- **Local Storage Engine (`mentalis_storage_v7`)**: Automatically migrates schemas forward without losing progress.
- **Debounced Cloud Synchronization**: When logged in via Google OAuth, stats and profile progress sync cleanly with Cloud Firestore/PostgreSQL in Supabase.
- **Public Profile Pages**: Every learner receives an optional public profile at `/[username]` showcasing mastery badges, overall accuracy, level, and achievements.

### 10. 4-Layer Supabase Keep-Alive & Platform Pulse Engine
Free-tier Supabase projects are paused by Supabase after 7 days of inactivity. Mentalis features a bulletproof 4-layer keep-alive architecture to ensure the database stays active 365 days a year:
1. **GitHub Actions Workflow** ([`.github/workflows/supabase-daily-keepalive.yml`](file:///Users/rupeshkumar/Documents/Mentalis/.github/workflows/supabase-daily-keepalive.yml)): Runs twice daily at `04:17 UTC` and `16:17 UTC` on GitHub cloud runners.
2. **Resilient Maintenance Script** ([`scripts/daily-db-maintenance.mjs`](file:///Users/rupeshkumar/Documents/Mentalis/scripts/daily-db-maintenance.mjs)): Built-in hardcoded credentials, input sanitization, 3-attempt cold-boot retry backoff, and dual-engine execution (works natively with or without external libraries).
3. **Vercel Cron** ([`vercel.json`](file:///Users/rupeshkumar/Documents/Mentalis/vercel.json)): Automatically triggers `/api/cron/daily-pulse` every day from Vercel's global edge network.
4. **Client-Side In-App Pulse** ([`useQuizStore.ts`](file:///Users/rupeshkumar/Documents/Mentalis/src/core/store/useQuizStore.ts)): Throttled non-blocking REST ping that executes in the background whenever anyone opens the application.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router, Server Components & Route Handlers) |
| **Language** | TypeScript 5.6 (Strict Type Checking) |
| **UI & Styling** | Tailwind CSS 3.4, Framer Motion, Lucide React |
| **State Management** | Zustand (Local-first persistence, cross-tab BroadcastChannel sync) |
| **Database & Auth** | Supabase (PostgreSQL, PostgREST API, Supabase Auth with Google OAuth, Realtime) |
| **Audio** | Web Audio API (Synthesized tone generator, 0 assets required) |
| **Testing** | Vitest (370+ unit & integration tests across 47 test suites) |
| **Deployment** | Vercel (Production Hosting, Edge Cron) + GitHub Actions (CI & Pulse) |

---

## 🚀 Step-by-Step Installation & Quick Start

### Prerequisites
- **Node.js**: v18.17.0 or higher (Node 20+ recommended)
- **npm**: v9 or higher

### 1. Clone the Repository
```bash
git clone https://github.com/er-rupesh7/Mentalis.git
cd Mentalis
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the example environment file:
```bash
cp .env.example .env.local
```
*(See the [Environment Variables Guide](#-environment-variables-guide-env) below for detailed instructions).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Mentalis will load immediately in offline mode.

---

## 🔐 Environment Variables Guide (.env)

Mentalis requires only a minimal set of environment variables for cloud authentication and database synchronization. If no variables are set, the application continues to run in **full offline mode**.

| Variable | Required | Where to Find / Format | Description |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | **Yes** (for cloud sync) | `https://<project-ref>.supabase.co`<br>*(Supabase Dashboard → Project Settings → API)* | The public REST endpoint of your Supabase project. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Yes** (for cloud sync) | `eyJhbGciOiJIUzI1NiIsInR5cCI6...`<br>*(Supabase Dashboard → Project Settings → API)* | The public anonymous JWT key for safe browser requests. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | `eyJhbGciOiJIUzI1NiIsInR5cCI6...`<br>*(Supabase Dashboard → Project Settings → API)* | Secret administrative key used **only** by server-side maintenance scripts for database cleanup. Never expose to client-side. |
| `CRON_SECRET` | Optional | Any random 32+ char string | Secret bearer token to protect the `/api/cron/daily-pulse` endpoint from unauthorized calls. |

### Complete `.env.local` Example
Create a `.env.local` file in the project root with your own Supabase credentials:

```env
# --------------------------------------------------------------------
# Supabase Configuration (Replace with your actual Supabase credentials)
# --------------------------------------------------------------------
# Find these in Supabase Dashboard -> Project Settings -> API
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# --------------------------------------------------------------------
# Server-Side Administration (Optional)
# --------------------------------------------------------------------
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key-here

# --------------------------------------------------------------------
# Cron Security Token (Optional)
# --------------------------------------------------------------------
CRON_SECRET=your-custom-secure-cron-secret-here
```

---

## 🗄️ Supabase & Google OAuth Configuration

To enable cloud accounts, progress sync, and 1v1 challenges with Supabase:

### 1. Database Schema
Run the migration script in your Supabase SQL Editor:
- `profiles` (stores user username, rating, level, XP, tier, avatar preferences)
- `user_stats` (stores practice duration, total questions, correct answers, streaks)
- `challenges_1v1` (real-time match states for 1v1 player duels)
- `psychology_topics` (optional cloud mirror for psychology topics)

### 2. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**.
2. Create an **OAuth 2.0 Client ID** (Web Application).
3. In **Authorized redirect URIs**, add your Supabase Auth callback URL:
   ```text
   https://<your-supabase-project-ref>.supabase.co/auth/v1/callback
   ```
4. Copy the **Client ID** and **Client Secret**.
5. In your [Supabase Dashboard](https://supabase.com/dashboard):
   - Navigate to **Authentication** → **Providers** → **Google**.
   - Enable Google, paste the Client ID and Client Secret, and click **Save**.

---

## 📜 Available Scripts

In your terminal, you can run:

```bash
# Start Next.js development server
npm run dev

# Run full TypeScript compilation & Next.js production build
npm run build

# Start production server
npm run start

# Run ESLint code checks
npm run lint

# Run all 370+ automated tests via Vitest
npm run test

# Run tests in watch mode during development
npm run test:watch

# Execute the database keep-alive pulse & diagnostics manually
npm run db:pulse
# or
npm run db:keepalive
```

---

## 📁 Project Structure

```text
Mentalis/
├── .github/
│   └── workflows/
│       └── supabase-daily-keepalive.yml # Automated twice-daily GitHub pulse
├── docs/
│   ├── ARCHITECTURE.md                  # Decoupled core design & porting manual
│   ├── PEDAGOGY.md                      # Left-to-Right & Vedic mental math proofs
│   ├── MODULES.md                       # Comprehensive curriculum & latency formulas
│   └── SUPABASE_KEEPALIVE_GUIDE.md      # Deep dive into the 4-layer pulse system
├── scripts/
│   └── daily-db-maintenance.mjs         # Resilient standalone database pulse engine
├── src/
│   ├── app/                             # Next.js 14 App Router
│   │   ├── [username]/                  # Dynamic public profile pages
│   │   ├── api/
│   │   │   ├── ai-coach/                # Offline deterministic coach route
│   │   │   └── cron/daily-pulse/        # Edge keep-alive endpoint
│   │   ├── mind/                        # Mentalis Mind psychology pages
│   │   │   ├── [category]/              # Category overview pages
│   │   │   └── [category]/[slug]/       # Deep-dive psychology topic modules
│   │   ├── globals.css                  # Tailwind styles and custom utilities
│   │   ├── layout.tsx                   # Root layout with Matrix rain canvas
│   │   └── page.tsx                     # Main interactive application hub
│   ├── components/                      # React UI Components
│   │   ├── auth/                        # Google Auth modal & session bar
│   │   ├── badges/                      # Mastery badge displays & drawers
│   │   ├── chat/                        # Real-time community chat drawer
│   │   ├── mind/                        # Mind reading, quizzes & progress
│   │   ├── navigation/                  # Header, tabs, language switcher
│   │   ├── ranking/                     # Leaderboards & ELO rank badges
│   │   ├── tables/                      # Table matrix, drills, squares/cubes
│   │   └── theme/                       # Matrix rain canvas & theme manager
│   ├── core/                            # 100% PURE TYPESCRIPT BUSINESS CORE
│   │   ├── __tests__/                   # 47 comprehensive Vitest test suites
│   │   ├── assessment/                  # 25-question cognitive baseline engine
│   │   ├── badges/                      # Badge definitions and unlock criteria
│   │   ├── mind/                        # Psychology topic definitions & models
│   │   ├── ranking/                     # ELO rating calculation & tier logic
│   │   ├── social/                      # Real-time presence & challenge engines
│   │   ├── storage/                     # LocalStorage v7 engine & Supabase sync
│   │   ├── store/                       # Zustand quiz store & state machine
│   │   ├── techniques/                  # Mental math generators (Vedic/BODMAS)
│   │   └── types.ts                     # TypeScript interfaces and domain models
│   ├── i18n/                            # Multilingual locale configuration
│   ├── lib/
│   │   └── supabase/                    # Supabase client singleton & typings
│   └── messages/                        # JSON translation dictionaries (13 locales)
├── vercel.json                          # Vercel Cron scheduled pulse configuration
├── package.json                         # Dependencies & project scripts
├── tsconfig.json                        # TypeScript strict compiler config
└── tailwind.config.ts                   # Tailwind theme styling & color tokens
```

---

## 🧪 Automated Testing Suite

Mentalis features an automated testing suite powered by [Vitest](https://vitest.dev/).

```bash
npm run test
```

### Coverage Highlights:
- **Calculation Engines**: Arithmetic accuracy across all operations, BODMAS rules, and Vedic techniques.
- **Diagnostics**: Typing slip detection (adjacent keypad slips, transpositions, bounce).
- **Spaced Repetition**: SM-2 intervals, memory stability curves, and forgetting risk projections.
- **Multilingual Support**: Translation completeness across all 13 languages, fallback inheritance, and Urdu RTL detection.
- **Social & Sync**: Offline storage versioning, conflict resolution, and ranking tiers.

---

## 🚢 Deployment (Vercel & GitHub Actions)

### 1. Deploying to Vercel
1. Push your code to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import `Mentalis`.
3. Add Environment Variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `CRON_SECRET` *(optional)*
4. Click **Deploy**. Vercel will automatically read [`vercel.json`](file:///Users/rupeshkumar/Documents/Mentalis/vercel.json) and register the daily `/api/cron/daily-pulse` cron job.

### 2. GitHub Actions Setup
The automated pulse workflow is pre-configured in [`.github/workflows/supabase-daily-keepalive.yml`](file:///Users/rupeshkumar/Documents/Mentalis/.github/workflows/supabase-daily-keepalive.yml).
- Runs automatically at `04:17 UTC` and `16:17 UTC` every day.
- To set custom production keys on GitHub:
  1. Open your repository on GitHub → **Settings** → **Secrets and variables** → **Actions**.
  2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute this codebase for educational and commercial purposes.

---

**Built with ❤️ for cognitive mastery, mental agility, and deep learning.**
