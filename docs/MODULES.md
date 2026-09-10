# Mentalis: Module Curriculum, Progression & Mastery System

## 1. Curriculum Structure

Mentalis provides 4 structured training tracks designed for cumulative cognitive mastery.

```
                  +-----------------------------------+
                  |          MENTALIS CORE            |
                  +-----------------+-----------------+
                                    |
        +---------------------------+---------------------------+
        |                           |                           |
+-------v-------+           +-------v-------+           +-------v-------+
|   MODULE A    |           |   MODULE B    |           |   MODULE C    |
|  ADD & SUB    |           |  MULTIPLICATION|           |SQUARES & CUBES|
| (Left-to-Right|           | (Tables 1-100)|           |  (1 to 100)   |
+-------+-------+           +-------+-------+           +-------+-------+
        |                           |                           |
        +---------------------------+---------------------------+
                                    |
                            +-------v-------+
                            | WORKING MEMORY|
                            |  ANZAN FLASH  |
                            | (Cognitive WT)|
                            +---------------+
```

---

## 2. Module A: Progressive Addition & Subtraction

| Level | Name | Description | Range & Constraints | Target Speed |
| :--- | :--- | :--- | :--- | :--- |
| **Level 1** | Foundations | 2-digit ± 1-digit | $A \in [10, 99], B \in [1, 9]$ (Phase 1: No bridging; Phase 2: Bridging 10) | $< 1.8\text{ s}$ |
| **Level 2** | Decade Strides | 2-digit ± 2-digit | $A, B \in [10, 99]$ (Left-to-right decade jumps) | $< 2.5\text{ s}$ |
| **Level 3** | Century Crossing | 3-digit ± 2-digit | $A \in [100, 999], B \in [10, 99]$ | $< 3.2\text{ s}$ |
| **Level 4** | Triple Digits | 3-digit ± 3-digit | $A, B \in [100, 999]$ | $< 4.5\text{ s}$ |
| **Level 5** | Quad Mastery | 4-digit ± 3-digit & 4-digit ± 4-digit | $A \in [1000, 9999], B \in [100, 9999]$ | $< 6.0\text{ s}$ |
| **Master** | Grandmaster Run | 5-digit Addition & Subtraction | $A, B \in [10000, 99999]$ | $< 8.0\text{ s}$ |

### Pedagogical Strategy Rules:
- Addition always begins with the highest place value: $1000\text{s} \to 100\text{s} \to 10\text{s} \to 1\text{s}$.
- Subtraction invokes Complements whenever borrowing across decades would occur.

---

## 3. Module B: Multiplication Mastery (1 to 100 Tables)

The 100-Table Matrix is categorized into four pedagogical difficulty tiers:

| Tier | Range | Strategic Focus | Target Speed |
| :--- | :--- | :--- | :--- |
| **Tier 1: Associative Anchor** | Tables 1–12 | Multipliers $1$ to $12$. Instant visual/phonological recall. | $< 1.5\text{ s}$ |
| **Tier 2: Split-and-Add** | Tables 13–20 | Multipliers $1$ to $12$. Distributive decomposition: $(10 + d) \times k$. | $< 2.2\text{ s}$ |
| **Tier 3: Decade Proximity** | Tables 21–50 | Multipliers $1$ to $12$. Rounding & compensation; Half-and-double. | $< 3.5\text{ s}$ |
| **Tier 4: Centurion Tables** | Tables 51–100 | Multipliers $1$ to $12$. Duplex decomposition and high-order compensation. | $< 4.5\text{ s}$ |

### Micro-Grading:
- **Grade N Table Master**: Awarded upon clearing Table $N$ with $\ge 95\%$ accuracy and average latency under the target threshold.
- **Grade 12 Master**: Cleared all foundation tables 1 through 12.
- **Grade 20 Master**: Cleared all intermediate tables 13 through 20.
- **Grade 50 Expert**: Cleared tables up to 50.
- **Grade 100 Grandmaster**: Cleared all tables up to 100.

---

## 4. Module C: Squares & Cubes (1 to 100)

| Sub-Track | Range | Pedagogical Rule | Target Speed |
| :--- | :--- | :--- | :--- |
| **Squares: Ending in 5** | $5, 15, 25, \dots, 95$ | $N(N+1) \mid 25$ | $< 2.0\text{ s}$ |
| **Squares: Near 50** | $40 \text{ to } 60$ | $(25 \pm x) \mid x^2$ | $< 2.8\text{ s}$ |
| **Squares: Near 100** | $80 \text{ to } 99$ | $(N - x) \mid x^2$ | $< 3.0\text{ s}$ |
| **Squares: General Duplex** | $11 \text{ to } 99$ | $(a+b)^2 = a^2 + 2ab + b^2$ | $< 4.5\text{ s}$ |
| **Cubes: Anchor Bases** | $1 \text{ to } 20$ | Memorization anchors and flash drills | $< 2.0\text{ s}$ |
| **Cubes: Higher Powers** | $21 \text{ to } 100$ | Last-digit rule & Binomial expansion $(a+b)^3$ | $< 6.5\text{ s}$ |

---

## 5. Cognitive Working Memory Engine (Anzan Flash)

Anzan training decouples arithmetic from visual persistence. The user selects:
- **Sequence Length**: $3, 5, 8, \text{ or } 10$ numbers.
- **Digit Magnitude**: $1$-digit, $2$-digit, or $3$-digit numbers.
- **Flash Interval**:
  - *Beginner*: $1200\text{ ms}$ (Relaxed accumulator pacing)
  - *Standard*: $800\text{ ms}$ (Active working memory hold)
  - *Pro*: $500\text{ ms}$ (Sub-vocal bypass)
  - *Zen Master*: $300\text{ ms}$ (Pure intuitive Soroban visual retention)

Between each number, a $150\text{ms}$ dark gap triggers a saccadic reset, preventing after-image visual retention and forcing the brain to encode the number into phonological working memory.

---

## 6. Spaced Repetition & Skill Decay Formula

Skill decay is determined by time elapsed since last practice:

$$\Delta t = \text{Date.now()} - \text{lastPracticedTimestamp}$$

1. **Active Mastery**:
   $$\text{Accuracy} \ge 0.95 \quad \land \quad \text{AvgSpeed} \le \text{Threshold} \quad \land \quad \Delta t < 7 \text{ days}$$
   $\implies \text{Status} = \mathbf{Mastered}$ (Displayed in vibrant green).

2. **Needs Refresh (Decay Warning)**:
   $$\text{Status} = \mathbf{Mastered} \quad \land \quad \Delta t \ge 7 \text{ days}$$
   $\implies \text{Status} = \mathbf{Needs\ Refresh}$ (Displayed in warning amber with a prompt to review).

3. **Calculations Per Minute (CPM) Metric**:
   $$\text{CPM} = \left( \frac{60000}{\overline{T}_{\text{resp}}} \right) \times \left( \frac{N_{\text{correct}}}{N_{\text{total}}} \right)$$
   Represents the effective net throughput of accurate mental computations.
