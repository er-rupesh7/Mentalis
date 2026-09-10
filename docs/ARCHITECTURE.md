# Mentalis: Architecture & System Design Documentation

## 1. Overview & Architectural Philosophy

**Mentalis** is engineered as a high-performance, cognitive arithmetic training system. The core architectural philosophy is **strict decoupling of computational pedagogy from presentation**. 

In conventional web apps, business logic is frequently tangled with UI frameworks, DOM event listeners, and browser-specific APIs. In Mentalis, the mathematical calculation generators, mental decomposition algorithms, spaced repetition scheduling, micro-grading matrix, and reactive state machines are strictly isolated in a pure TypeScript core (`src/core/`).

```
+-------------------------------------------------------------------------+
|                          MENTALIS SYSTEM LAYOUT                         |
+-------------------------------------------------------------------------+
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |                  PRESENTATION LAYER (Web / Mobile)              |   |
|   |  - Next.js 14 App Router / React 18+ Components                 |   |
|   |  - Tailwind CSS + Framer Motion                                 |   |
|   |  - PracticeScreen (Zen Mode) / AnzanFlashScreen / Heatmap       |   |
|   |  - Custom Numpad & Desktop Physical Keypad Handlers             |   |
|   +---------------------------------+-------------------------------+   |
|                                     | Subscribes / Dispatches           |
|                                     v                                   |
|   +-----------------------------------------------------------------+   |
|   |                DECOUPLED STATE MACHINE (Zustand)                |   |
|   |  - useQuizStore.ts (Drill state, Buffer, Streak, CPM)           |   |
|   |  - Platform-agnostic storage adapter (LocalStorage / IndexedDB) |   |
|   +-------------------+-----------------------------+---------------+   |
|                       |                             |                   |
|                       v                             v                   |
|   +-----------------------------+ +---------------------------------+   |
|   |     CALCULATION ENGINE      | |        PEDAGOGY ENGINE          |   |
|   |  - calcEngine.ts            | |  - strategies.ts                |   |
|   |  - Modules A, B, C & Anzan  | |  - Left-to-Right Accumulator    |   |
|   |  - Exact algorithmic math   | |  - Complements & Duplex steps   |   |
|   |  - Deterministic generators | |  - Auditory Echo cues           |   |
|   +-----------------------------+ +---------------------------------+   |
|                       ^                             ^                   |
|                       |                             |                   |
|   +-------------------+-----------------------------+---------------+   |
|   |                    MASTERY & REPETITION LAYER                   |   |
|   |  - mastery.ts (Micro-grades, 7-day decay, Speed-Accuracy matrix)|   |
|   |  - soundEngine.ts (Web Audio API procedural sound synthesizer)  |   |
|   +-----------------------------------------------------------------+   |
|                                                                         |
+-------------------------------------------------------------------------+
```

---

## 2. Directory Structure & Layer Responsibilities

```
Mentalis/
├── docs/
│   ├── ARCHITECTURE.md          # This architectural blueprint & porting guide
│   ├── PEDAGOGY.md              # Detailed mathematical algorithms & cognitive proofs
│   └── MODULES.md               # Curriculum roadmap, tiers, and grading benchmarks
├── src/
│   ├── core/                    # ZERO-DEPENDENCY PLATFORM-AGNOSTIC CORE
│   │   ├── types.ts             # Strict TypeScript interfaces & domain models
│   │   ├── calcEngine.ts        # Algorithmic question generators (Pure functions)
│   │   ├── strategies.ts        # Step-by-step mental decomposition engine
│   │   ├── mastery.ts           # Spaced repetition decay, micro-grading, CPM index
│   │   ├── soundEngine.ts       # Procedural audio synthesizer (Web Audio API)
│   │   └── store/
│   │       └── useQuizStore.ts  # Decoupled Zustand state machine & storage sync
│   ├── components/              # PRESENTATION LAYER
│   │   ├── PracticeScreen.tsx   # Zen mode drill UI with custom thumb numpad
│   │   ├── AnzanFlashScreen.tsx # Cognitive Working Memory & Anzan flash trainer
│   │   ├── TutorialModal.tsx    # Interactive step-by-step mental slider
│   │   ├── TableHeatmap.tsx     # 1-100 Table mastery matrix (Red/Amber/Green)
│   │   ├── Dashboard.tsx        # Overview metrics, CPM index, streak counter
│   │   └── Navigation.tsx       # Mode switcher, sound toggle, streak HUD
│   └── app/
│       ├── layout.tsx           # Dark theme layout with Inter typography
│       ├── page.tsx             # Root orchestration container
│       └── globals.css          # Design system tokens, micro-animations, glass
```

---

## 3. Core Layer Design (`src/core/`)

### 3.1 `types.ts`
Establishes the single source of truth for all modules:
- `ModuleId`: `'add_sub' | 'multiplication' | 'squares_cubes' | 'working_memory'`
- `Question`: Carries both raw arithmetic properties (`operandA`, `operandB`, `operator`, `correctAnswer`) and rich pedagogical metadata (`strategyTitle`, `steps: CalculationStep[]`, `mentalTip`).
- `CalculationStep`: Stores the intermediate buffer value, auditory sub-vocalization cue, and textual explanation.
- `UserProgress`: Tracks historical accuracy, response latencies in milliseconds, mastery percentages, and spaced repetition timestamp.

### 3.2 `calcEngine.ts`
A pure functional engine with zero side effects:
- Generates questions according to exact mathematical constraints (e.g., ensuring bridging vs. non-bridging for Level 1 addition, bounding table multipliers from 2 to 100, generating duplex squares and binomial cubes).
- Generates Anzan sequences: an array of $K$ integers timed at interval $T$, where intermediate sums never exceed safe cognitive bounds.

### 3.3 `strategies.ts`
The pedagogical core. Unlike conventional math software that merely evaluates `a + b == user_input`, Mentalis builds a step-by-step decomposition graph for every problem:
- Deconstructs operands into Most-Significant-Digit (MSD) components.
- Builds the **Running Total Buffer** to simulate human short-term working memory.
- Emits **Auditory Echo** strings (e.g., *"Say '130' in your head, then add 7 to reach 137"*).

### 3.4 `mastery.ts`
Implements the micro-grading and spaced-repetition logic:
- Evaluates if accuracy $\ge 95\%$ AND average response time is below the module's target threshold (e.g., $< 3.0$ seconds for 2-digit addition, $< 2.0$ seconds for Table 7).
- Applies a **7-Day Decay Check**: If `Date.now() - lastPracticedTimestamp > 7 * 86400 * 1000`, status is transitioned from `mastered` to `needs_refresh`.
- Calculates **Calculations Per Minute (CPM)**: `(60000 / avgResponseTimeMs) * accuracyRatio`.

### 3.5 `soundEngine.ts`
Procedural synthesizer powered by the Web Audio API. Eliminates all external audio file downloads:
- Synthesizes clean sinusoidal and triangle waveforms with rapid exponential gain decay.
- Chords: Triad in C-Major for standard success; pentatonic arpeggio for streak milestones (5, 10, 25, 50); low damped sine frequency ramp for errors; 1200Hz 30ms square-wave click for Anzan cadence.
- Exposes a clean interface: `playSuccess()`, `playStreak()`, `playError()`, `playTick()`.

---

## 4. Decoupled State Management (`useQuizStore.ts`)

Zustand acts as the headless state controller:
1. **Headless & Reactive**: Can be consumed by React web components, React Native views, or NodeJS CLI tools without modification.
2. **Buffer Management**: Handles custom keypad input strings, parses negative/positive values, and triggers evaluation on target lengths or explicit Enter.
3. **Persistence Layer**: Implements Zustand's `persist` middleware targeting `window.localStorage` on Web, which maps cleanly to `AsyncStorage` in React Native or `Hive`/`shared_preferences` in Flutter.

---

## 5. Porting Guide: React Native & Flutter

### 5.1 Porting to React Native (1:1 Core Reuse)

Because the `src/core/` directory contains zero DOM or Next.js code, porting to React Native is practically instantaneous:

1. **Copy Core Files Directly**:
   ```bash
   cp -r src/core/ /path/to/react-native-app/src/core/
   ```
2. **Swap Audio Adapter**:
   Replace the Web Audio context in `soundEngine.ts` with `expo-av` or `react-native-sound`:
   ```typescript
   // React Native Sound Adapter
   import { Audio } from 'expo-av';

   export const playSuccess = async () => {
     const { sound } = await Audio.Sound.createAsync(
       require('./assets/sounds/success.wav')
     );
     await sound.playAsync();
   };
   ```
3. **Swap Storage Engine**:
   In `useQuizStore.ts`, change the storage engine to `AsyncStorage`:
   ```typescript
   import AsyncStorage from '@react-native-async-storage/async-storage';
   import { createJSONStorage } from 'zustand/middleware';

   // In persist configuration:
   storage: createJSONStorage(() => AsyncStorage)
   ```
4. **Recreate UI with React Native Primitives**:
   - `<div className="flex flex-col">` -> `<View style={styles.container}>`
   - Custom numpad buttons -> `<Pressable>` with Haptic feedback (`expo-haptics`).

---

### 5.2 Porting to Flutter (Dart Mapping)

To bring Mentalis to Flutter for high-frame-rate iOS & Android compilation:

1. **Model Translation**:
   Map `types.ts` to immutable Dart data classes:
   ```dart
   class Question {
     final String id;
     final String module;
     final int operandA;
     final int operandB;
     final String operator;
     final int correctAnswer;
     final List<CalculationStep> steps;
     final String mentalTip;
     // constructor, fromJson, toJson
   }
   ```
2. **Engine Translation**:
   Translate `calcEngine.ts` and `strategies.ts` into a pure Dart package (`lib/core/calc_engine.dart`). Since math operations and string formatting are identical, the logic translates line-for-line.
3. **State Management**:
   Use `flutter_riverpod` or `bloc` to mirror `useQuizStore`:
   - `QuizNotifier` holds `QuizState(activeQuestion, buffer, streak, masteryMap)`.
4. **Audio & Storage**:
   - Audio: Use `audioplayers` package for sound playback.
   - Storage: Use `shared_preferences` or `isar` for offline state persistence.

---

## 6. Offline-First & Privacy Architecture

- **No Remote Server Dependency**: Mentalis operates 100% client-side. Calculations, pedagogical logic, and storage execute locally on the user's device.
- **Zero Latency**: There is no HTTP roundtrip between submitting an answer and rendering the feedback. Evaluation takes $< 1\text{ms}$.
- **Privacy Guaranteed**: User performance, speed indexes, and training history remain on the client device.
