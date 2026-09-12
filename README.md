# Mentalis 🧠⚡

**Mentalis** is a local-first, high-performance Mental Math Training Application engineered around cognitive science, working-memory expansion, and left-to-right calculation pedagogy.

Built with a **strictly decoupled architecture**, all core calculation algorithms, mental decomposition strategies, spaced repetition engines, and state machines are pure TypeScript—ready to be ported 1:1 into React Native or Flutter.

---

## 🌟 Key Features

- **Local-First Personalized Training Engine**: 100% offline memory modeling, spaced repetition scheduling, and daily 5-block routine generation. Tracks memory stability (0–100%), forgetting risk curves, and SM-2 spaced intervals locally in `localStorage` without any network dependency.
- **Level 0 Foundation Plan (Offline)**: Comprehensive, deterministic curriculum covering:
  - Single-digit and two-digit addition/subtraction place-value foundations (left-to-right accumulation, bridging decade, complements to 100).
  - Multiplication anchors (×1, ×2, ×5, ×10).
  - Progressive times tables (3, 4, 6, 7, 8, 9, 11, 12).
  - Multiplication shortcuts (×9, ×11, ×12, ×15, ×25, ×50).
  - Square anchors (1²–20², ending in 5, near 50, near 100) and cube anchors (1³–20³).
  - Explicit personal rationale referencing actual user skips, error slips, and latency bottlenecks.
- **Zero-Retention Groq AI Coach (LLaMA 3.3 70B)**: Optional cloud enhancement via `groq-sdk` with structured Zod response parsing. Keys remain strictly server-side (`GROQ_API_KEY`). Automatically detects missing keys, rate limits (429 with `Retry-After`), and network unavailability, gracefully falling back to the local deterministic engine.
- **Strict Cooldown & Double-Click Protection**: 15–30 minute configurable cooldown (default 30 min) persisted across sessions, server-side rate limiting per anonymous `learnerId`, and double-click guards preventing quota exhaustion.
- **Transparent AI Provider States**: Visual dashboard indicator for all 6 states: `ready`, `cooldown` (with live MM:SS countdown), `rate_limited` (with retry countdown), `missing_key` (offline mode), `network_error`, and `pending_sync`.
- **Fact-Level Adaptive Memory Engine**: Granular tracking across 2,000+ individual arithmetic facts (multiplication tables 1–100 through ×20, squares 1²–100², and cubes 1³–100³).
- **Intelligent Error Diagnostics & Repair Cards**: Real-time identification of cognitive slips (adjacent multiplier confusion like 7×8 vs 7×9, digit transposition, decade zero omissions, and rapid careless guessing). Generates contextual Repair Cards complete with anchor landmarks, contrast facts, and automatic delayed re-testing.
- **5 Focused Pedagogical Learning Modes**:
  1. *Learn*: Step-by-step strategy breakdown + worked examples + guided mental accumulator.
  2. *Recall*: Distraction-free active retrieval with optional hints.
  3. *Speed*: Fluency pacing (<2.0s goal) without careless guessing.
  4. *Repair*: Targeted remediation addressing active confusion patterns and recent errors.
  5. *Review*: Spaced retrieval queue targeting facts approaching their forgetting threshold.
- **Interactive Adaptive Memory Map**: Comprehensive visual heatmap across all multiplication families, squares, and cubes. Inspect memory stability, forgetting risk, latency, and recommended mental shortcuts per fact.
- **Active Table Chart & Self-Test Mode**: Complete reference for multiplication tables 1–100 (×20), squares, cubes, square roots, and cube roots, featuring self-test hide/reveal toggles, strategy guides, and direct row drilling.
- **Cognitive Working Memory Engine (Anzan Flash)**: Flashes sequential numbers at configurable intervals (300ms–1200ms) with auditory rhythm ticks, training active phonological buffer retention. Includes presets, negative subtraction toggle, sequence replay, and step inspection.
- **100% Offline & Private**: Zero remote tracking or telemetry. All progress is preserved locally via `mentalis_storage_v6`.

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone https://github.com/your-username/Mentalis.git
cd Mentalis
npm install
```

### 2. Environment Configuration (Optional)
Mentalis operates 100% offline out-of-the-box. To enable optional Groq AI coaching:
```bash
cp .env.example .env
```
Edit `.env`:
```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Automated Tests
```bash
npm run test
```
Runs 140 unit tests across 18 test suites covering calculation engines, memory schedulers, strategy catalogs, Groq validation, Level 0 offline plans, and AI cooldown state machines via Vitest.

### 5. Production Build & Lint
```bash
npm run lint
npm run build
npm run start
```

---

## 📂 Documentation & Architecture

For deep-dive documentation on pedagogical proofs, curriculum levels, and porting guides, see:
- [docs/ARCHITECTURE.md](file:///Users/rupeshkumar/Documents/Mentalis/docs/ARCHITECTURE.md) - Decoupled Core Architecture, State Engine & Mobile Porting Guide (React Native / Flutter).
- [docs/PEDAGOGY.md](file:///Users/rupeshkumar/Documents/Mentalis/docs/PEDAGOGY.md) - Left-to-Right Accumulator, Complements, Duplex, & Anzan Mental Theory.
- [docs/MODULES.md](file:///Users/rupeshkumar/Documents/Mentalis/docs/MODULES.md) - Full Curriculum Breakdown, Target Latency Benchmarks, and Micro-Grading Formulas.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Lucide Icons + Framer Motion
- **AI Runtime**: Groq Cloud SDK (`groq-sdk`) + Zod structured validation (strictly server-side)
- **Testing**: Vitest (140 tests across 18 suites)
- **State Engine**: Zustand (Decoupled & Offline Persistent via LocalStorage with `mentalis_storage_v6` migration)
- **Audio**: Web Audio API (Zero external asset dependencies)

---

## 📄 License
MIT License.
