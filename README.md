# Mentalis 🧠⚡

**Mentalis** is an offline-first, high-performance Mental Math Training Application engineered around cognitive science, working-memory expansion, and left-to-right calculation pedagogy.

Built with a **strictly decoupled architecture**, all core calculation algorithms, mental decomposition strategies, spaced repetition engines, and state machines are pure TypeScript—ready to be ported 1:1 into React Native or Flutter.

---

## 🌟 Key Features

- **Pedagogical Left-to-Right Engine**: Replaces traditional school-style right-to-left calculation with the **Most Significant Digit (MSD) Accumulator** and **Complements Method**. Eliminates paper-based ghost carries.
- **Adaptive Spaced Repetition**: Dynamic priority queue interleaves weak skills (<75% accuracy), slow skills, and stale skills decayed past the 7-day threshold.
- **Calendar-Day Daily Streak**: Robust date-diff tracking based on local calendar days, accurately incrementing on consecutive days and resetting after missed days.
- **1 to 100 Multiplication Table Matrix**: Graded progression spanning associative recall (1–12), Split-and-Add (13–20), Rounding & Compensation (21–50), and Centurions (51–100). Full keyboard arrow navigation across the matrix.
- **Squares & Cubes (1 to 100)**: Vedic and algebraic mental shortcuts ($N5^2$, Near 50, Near 100, Algebraic Duplex, Decade Anchors, and Binomial Cubes up to 100).
- **Cognitive Working Memory Engine (Anzan Flash)**: Flashes sequential numbers at configurable intervals (300ms–1200ms) with auditory rhythm ticks, training active phonological buffer retention. Includes presets, negative subtraction toggle, sequence replay, and step inspection.
- **Distraction-Free Zen Practice Mode**: High-contrast arithmetic display, custom mobile thumb numpad, negative input toggle (`±`), physical keyboard support (`0-9`, `-`, `Backspace`, `Enter`, `Space`), and pause/resume session controls.
- **Interactive Step-by-Step Breakdown**: Scannable cards illustrating exact sub-vocalizations, running accumulator state, and mental tips on errors or user request (`H`).
- **Web Audio API Procedural Synthesizer**: Clean, latency-free chords, chimes, and metronome clicks with zero external audio assets.
- **100% Offline & Private**: Zero external telemetry, remote APIs, tracking, or user authentication. All progress is stored locally in `localStorage` with versioned schema migrations.

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
