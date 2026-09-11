# Mentalis 🧠⚡

**Mentalis** is an offline-first, high-performance Mental Math Training Application engineered around cognitive science, working-memory expansion, and left-to-right calculation pedagogy.

Built with a **strictly decoupled architecture**, all core calculation algorithms, mental decomposition strategies, spaced repetition engines, and state machines are pure TypeScript—ready to be ported 1:1 into React Native or Flutter.

---

## 🌟 Key Features

- **Fact-Level Adaptive Memory Engine**: Granular memory modeling across 2,000+ individual arithmetic facts (multiplication tables 1–100 through ×20, squares 1²–100², and cubes 1³–100³). Tracks memory stability (0–100%), forgetting risk curves, and SM-2 spaced retrieval intervals.
- **Intelligent Error Diagnostics & Repair Cards**: Real-time identification of cognitive slips (adjacent multiplier confusion like 7×8 vs 7×9, digit transposition, decade zero omissions, and rapid careless guessing). Generates contextual Repair Cards complete with anchor landmarks, contrast facts, and automatic delayed re-testing.
- **5 Focused Pedagogical Learning Modes**:
  1. *Learn*: Step-by-step strategy breakdown + worked examples + guided mental accumulator.
  2. *Recall*: Distraction-free active retrieval with optional hints.
  3. *Speed*: Fluency pacing (<2.0s goal) without careless guessing.
  4. *Repair*: Targeted remediation addressing active confusion patterns and recent errors.
  5. *Review*: Spaced retrieval queue targeting facts approaching their forgetting threshold.
- **Interactive Adaptive Memory Map**: Comprehensive visual heatmap across all multiplication families, squares, and cubes. Inspect memory stability, forgetting risk, latency, and recommended mental shortcuts per fact.
- **Active Table Chart & Self-Test Mode**: Complete reference for multiplication tables 1–100 (×20), squares, cubes, square roots, and cube roots, featuring self-test hide/reveal toggles, strategy guides, and direct row drilling.
- **Zero-Retention AI Coach (OpenAI Responses API)**: Server-side integration using official `openai` SDK, Responses API (`openai.responses.create`), strict JSON Schema, `store: false`, candidate fact set validation, and zero client-side secret exposure. Gracefully falls back to 100% deterministic offline coaching when unconfigured or offline.
- **Pedagogical Left-to-Right Engine**: Replaces traditional school-style right-to-left calculation with the **Most Significant Digit (MSD) Accumulator** and **Complements Method**. Eliminates paper-based ghost carries.
- **Cognitive Working Memory Engine (Anzan Flash)**: Flashes sequential numbers at configurable intervals (300ms–1200ms) with auditory rhythm ticks, training active phonological buffer retention. Includes presets, negative subtraction toggle, sequence replay, and step inspection.
- **100% Offline & Private**: Zero external telemetry, remote tracking, or user authentication. All progress is stored locally in `localStorage` with v4 schema migration.

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone https://github.com/your-username/Mentalis.git
cd Mentalis
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Automated Tests
```bash
npm run test
```
Runs 42+ unit tests across calculation generators, strategies, mastery evaluations, calendar streaks, and adaptive scheduling via Vitest.

### 4. Production Build & Lint
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
- **Testing**: Vitest
- **State Engine**: Zustand (Decoupled & Offline Persistent via LocalStorage with Schema Migration)
- **Audio**: Web Audio API (Zero external asset dependencies)

---

## 📄 License
MIT License.
