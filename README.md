# Mentalis 🧠⚡

**Mentalis** is a web-first, high-performance Mental Math Training Application engineered around cognitive science, working-memory expansion, and left-to-right calculation pedagogy.

Built with a **strictly decoupled architecture**, all core calculation algorithms, mental decomposition strategies, spaced repetition engines, and state machines are pure TypeScript—ready to be ported 1:1 into React Native or Flutter.

---

## 🌟 Key Features

- **Pedagogical Left-to-Right Engine**: Replaces traditional school-style right-to-left calculation with the **Most Significant Digit (MSD) Accumulator** and **Complements Method**. Eliminates paper-based ghost carries.
- **1 to 100 Multiplication Table Matrix**: Graded progression spanning associative recall (1–12), Split-and-Add (13–20), and Rounding/Compensation & Half-and-Double (21–100).
- **Squares & Cubes (1 to 100)**: Vedic and algebraic mental shortcuts ($N5^2$, Near 50, Near 100, Algebraic Duplex, Cube unit-digit bijections).
- **Cognitive Working Memory Engine (Anzan Flash)**: Flashes sequential numbers at configurable intervals (300ms–1200ms) with auditory rhythm ticks, training active phonological buffer retention.
- **Micro-Grading & Spaced Repetition**: Tracks accuracy ($\ge 95\%$) and target speeds. 7-day decay algorithm highlights tables that need a refresh.
- **Web Audio API Procedural Synthesizer**: Clean, latency-free chords, chimes, and metronome clicks with zero external audio assets.
- **Distraction-Free Zen Practice Mode**: High-contrast arithmetic display, custom mobile thumb numpad, and desktop physical keyboard support (`0-9`, `Backspace`, `Enter`).
- **Interactive Step-by-Step Breakdown**: Interactive step slider illustrating exact sub-vocalizations and intermediate mental states whenever a mistake occurs or upon user request.

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

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Documentation & Architecture

For deep-dive documentation on pedagogical proofs, curriculum levels, and porting guides, see:
- [docs/ARCHITECTURE.md](file:///Users/rupeshkumar/Documents/Mentalis/docs/ARCHITECTURE.md) - Decoupled Core Architecture & Mobile Porting Guide (React Native / Flutter).
- [docs/PEDAGOGY.md](file:///Users/rupeshkumar/Documents/Mentalis/docs/PEDAGOGY.md) - Left-to-Right Accumulator, Complements, Duplex, & Anzan Mental Theory.
- [docs/MODULES.md](file:///Users/rupeshkumar/Documents/Mentalis/docs/MODULES.md) - Full Curriculum Breakdown, Target Latency Benchmarks, and Micro-Grading Formulas.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Lucide Icons + Framer Motion
- **State Engine**: Zustand (Decoupled & Offline Persistent via LocalStorage)
- **Audio**: Web Audio API (zero external asset dependencies)

---

## 📄 License
MIT License.
