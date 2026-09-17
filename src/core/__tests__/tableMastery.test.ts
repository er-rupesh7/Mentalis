import {
  createInitialTableMasteryState,
  evaluateTableMasteryAttempt,
  getNextTableMasteryMultiplier,
  calculateTableMasteryMotorOffset,
  calculateTableMasteryInstantThreshold,
} from '../adaptive';
import { useQuizStore } from '../store/useQuizStore';

describe('Table Mastery Engine & Adaptive Spaced Retention', () => {
  it('initializes Table Mastery with stage 1 (1 to 10) and clean state', () => {
    const state = createInitialTableMasteryState(13);
    expect(state.targetTable).toBe(13);
    expect(state.stage).toBe('stage_1_to_10');
    expect(state.masteryScore).toBe(0);
    expect(state.retestQueue).toHaveLength(0);
    expect(Object.keys(state.facts)).toHaveLength(20);
    for (let m = 1; m <= 20; m++) {
      expect(state.facts[m].status).toBe('untested');
    }
  });

  it('restricts questions in Stage 1 strictly to multipliers 1 through 10', () => {
    const state = createInitialTableMasteryState(13);
    for (let i = 0; i < 30; i++) {
      const choice = getNextTableMasteryMultiplier(state);
      expect(choice.multiplier).toBeGreaterThanOrEqual(1);
      expect(choice.multiplier).toBeLessThanOrEqual(10);
    }
  });

  it('queues a fact for spaced re-test after 2 or 3 questions when the user hesitates (> 1.8s)', () => {
    let state = createInitialTableMasteryState(13);

    // User answers 13 x 4 correctly, but takes 2400ms (slow recall / hesitation)
    const { nextState, event } = evaluateTableMasteryAttempt(state, 4, true, 2400);
    state = nextState;

    expect(event).toBe('hesitation');
    expect(state.facts[4].status).toBe('hesitant');
    expect(state.retestQueue).toHaveLength(1);
    expect(state.retestQueue[0].multiplier).toBe(4);
    expect(state.retestQueue[0].reason).toBe('hesitation');
    expect(state.retestQueue[0].askAtQuestionIndex).toBeGreaterThanOrEqual(state.totalQuestionsInMastery + 2);
  });

  it('reduces the mastery progress bar and queues immediate re-test when an answer is wrong', () => {
    let state = createInitialTableMasteryState(13);

    // Answer first 3 questions instantly
    state = evaluateTableMasteryAttempt(state, 1, true, 1100).nextState;
    state = evaluateTableMasteryAttempt(state, 2, true, 1200).nextState;
    state = evaluateTableMasteryAttempt(state, 3, true, 1000).nextState;

    const previousScore = state.masteryScore;
    expect(previousScore).toBeGreaterThan(0);

    // Now user makes an error on 13 x 4
    const { nextState, event } = evaluateTableMasteryAttempt(state, 4, false, 1500);
    state = nextState;

    expect(event).toBe('progress_down');
    expect(state.facts[4].status).toBe('error');
    expect(state.masteryScore).toBeLessThan(previousScore); // Progress bar decreased!
    expect(state.hasErrorsInCurrentStage).toBe(true);
    expect(state.retestQueue.some((q) => q.multiplier === 4 && q.reason === 'error')).toBe(true);
  });

  it('prioritizes re-test queue facts over new facts when the re-test becomes due', () => {
    let state = createInitialTableMasteryState(13);

    // Question 1: Error on 6
    state = evaluateTableMasteryAttempt(state, 6, false, 2000).nextState;
    expect(state.retestQueue).toHaveLength(1);
    const dueAt = state.retestQueue[0].askAtQuestionIndex; // 1 + 2 = 3

    // Question 2: Instant correct on 2
    state = evaluateTableMasteryAttempt(state, 2, true, 1000).nextState;
    expect(state.totalQuestionsInMastery).toBe(2);

    // Question 3: Should now serve 6 because askAtQuestionIndex (3) <= totalQuestionsInMastery (2+1)
    state.totalQuestionsInMastery = 3;
    const nextChoice = getNextTableMasteryMultiplier(state);
    expect(nextChoice.multiplier).toBe(6);
    expect(nextChoice.reason).toContain('Targeted error repair');
  });

  it('unlocks Stage 2 (11 to 20) ONLY when all 1 to 10 facts are answered correctly without error', () => {
    let state = createInitialTableMasteryState(13);

    // Answer facts 1 to 9 instantly
    for (let m = 1; m <= 9; m++) {
      state = evaluateTableMasteryAttempt(state, m, true, 1200).nextState;
      expect(state.stage).toBe('stage_1_to_10');
    }

    // Attempt 10 has an error!
    state = evaluateTableMasteryAttempt(state, 10, false, 1500).nextState;
    expect(state.stage).toBe('stage_1_to_10'); // Must NOT unlock Stage 2 while error exists!

    // Fix error on 10 with instant recall
    state = evaluateTableMasteryAttempt(state, 10, true, 1100).nextState;

    // All 1 to 10 are now mastered with zero pending retests
    expect(state.stage).toBe('stage_11_to_20');
    expect(state.masteryScore).toBeGreaterThanOrEqual(50);

    // Stage 2 now asks 11 through 20
    const choice = getNextTableMasteryMultiplier(state);
    expect(choice.multiplier).toBeGreaterThanOrEqual(1); // can interleave 1-10 or ask 11-20
  });

  it('completes the workout with 100% mastery score only after verifying all 20 facts at speed', () => {
    let state = createInitialTableMasteryState(13);

    // Master 1..10
    for (let m = 1; m <= 10; m++) {
      state = evaluateTableMasteryAttempt(state, m, true, 1100).nextState;
    }
    expect(state.stage).toBe('stage_11_to_20');

    // Master 11..20
    for (let m = 11; m <= 20; m++) {
      state = evaluateTableMasteryAttempt(state, m, true, 1200).nextState;
    }
    expect(state.stage).toBe('stage_mixed_sprint');
    expect(state.masteryScore).toBeGreaterThanOrEqual(85);

    // Clean sprint answers
    for (let i = 0; i < 6; i++) {
      const { nextState, event } = evaluateTableMasteryAttempt(state, (i % 20) + 1, true, 1000);
      state = nextState;
      if (event === 'table_mastered') break;
    }

    expect(state.stage).toBe('completed');
    expect(state.masteryScore).toBe(100);
  });

  it('ensures useQuizStore startSingleTableMastery initiates an open-ended session without fixed question count', () => {
    const store = useQuizStore.getState();
    store.startSingleTableMastery(13);

    const updated = useQuizStore.getState();
    expect(updated.targetMasteryTable).toBe(13);
    expect(updated.tableMasterySession).toBeDefined();
    expect(updated.tableMasterySession?.targetTable).toBe(13);
    expect(updated.sessionConfig.isEndless).toBe(true);
    expect(updated.sessionConfig.goalCount).toBeUndefined();
    expect(updated.sessionConfig.timeLimitSeconds).toBeUndefined();
  });

  it('safeguards masteryScore against physical keypad slips (score not reduced)', () => {
    let state = createInitialTableMasteryState(13);

    // Build some score
    state = evaluateTableMasteryAttempt(state, 1, true, 1000).nextState;
    state = evaluateTableMasteryAttempt(state, 2, true, 1000).nextState;
    state = evaluateTableMasteryAttempt(state, 3, true, 1000).nextState;
    const scoreBefore = state.masteryScore;
    expect(scoreBefore).toBeGreaterThan(0);

    // 13 x 4 = 52. User types 51 (1 is physically adjacent to 2 on numpad)
    const { nextState, event } = evaluateTableMasteryAttempt(state, 4, false, 1200, 51);

    expect(event).toBe('typing_slip');
    expect(nextState.facts[4].status).toBe('slip');
    // CRITICAL REQUIREMENT: Score MUST NOT decrease on typing slips!
    expect(nextState.masteryScore).toBe(scoreBefore);
    expect(nextState.aiTelemetry?.isSlip).toBe(true);
    expect(nextState.aiTelemetry?.slipType).toBe('keypad_adjacency');
    expect(nextState.aiTelemetry?.retrievalPathway).toBe('motor_slip');
    expect(nextState.aiTelemetry?.aiBotDiagnosis).toContain('Keypad Slip');
  });

  it('penalizes masteryScore when an error is a genuine arithmetic mistake', () => {
    let state = createInitialTableMasteryState(13);

    // Build some score
    state = evaluateTableMasteryAttempt(state, 1, true, 1000).nextState;
    state = evaluateTableMasteryAttempt(state, 2, true, 1000).nextState;
    state = evaluateTableMasteryAttempt(state, 3, true, 1000).nextState;
    const scoreBefore = state.masteryScore;

    // 13 x 4 = 52. User answers 65 (genuine table confusion: 13 x 5)
    const { nextState, event } = evaluateTableMasteryAttempt(state, 4, false, 1500, 65);

    expect(event).toBe('progress_down');
    expect(nextState.facts[4].status).toBe('error');
    // Genuine error drops the progress score
    expect(nextState.masteryScore).toBeLessThan(scoreBefore);
    expect(nextState.aiTelemetry?.isSlip).toBe(false);
    expect(nextState.aiTelemetry?.retrievalPathway).toBe('interference_error');
  });

  it('awards 1/20th XP in Table Mastery mode during deliberate practice', () => {
    const store = useQuizStore.getState();
    store.startSingleTableMastery(13);

    // Set a predictable question in store: 13 x 2 = 26
    useQuizStore.setState({
      currentQuestion: {
        id: 'test-q-13-2',
        operandA: 13,
        operandB: 2,
        operator: '×',
        prompt: '13 × 2',
        correctAnswer: 26,
        strategyTitle: 'Double 13',
        strategyDetail: '13 × 2 = 26',
        difficulty: 1,
      },
      xp: 0,
      recentPointsEarned: null,
    });

    // Answer correctly with fast latency (e.g. 1000ms)
    // In full exam mode, base XP is around ~20-30 XP. In 1/20th mode, it should be scaled down to ~1-2 XP
    store.submitAnswer(26, 1000);

    const afterState = useQuizStore.getState();
    expect(afterState.recentPointsEarned).toBeGreaterThanOrEqual(1);
    expect(afterState.recentPointsEarned).toBeLessThanOrEqual(5); // 1/20th of full exam XP
  });

  it('accurately scales motor latency offset and instant threshold by digit count', () => {
    // 1-digit
    expect(calculateTableMasteryMotorOffset(1)).toBe(500);
    expect(calculateTableMasteryInstantThreshold(1).instantThresholdMs).toBe(1600);

    // 2-digit (maintains backwards compatibility with 1800ms)
    expect(calculateTableMasteryMotorOffset(2)).toBe(700);
    expect(calculateTableMasteryInstantThreshold(2).instantThresholdMs).toBe(1800);

    // 3-digit (e.g. 13 x 11 = 143): allows 2500ms gross
    expect(calculateTableMasteryMotorOffset(3)).toBe(1150);
    expect(calculateTableMasteryInstantThreshold(3).instantThresholdMs).toBe(2500);

    // 4-digit (e.g. 78 x 14 = 1092): allows 3000ms gross
    expect(calculateTableMasteryMotorOffset(4)).toBe(1550);
    expect(calculateTableMasteryInstantThreshold(4).instantThresholdMs).toBe(3000);
  });

  it('allows 3-digit answers to achieve instant recall and increase progress at natural typing speeds (~2.2s)', () => {
    let state = createInitialTableMasteryState(13);

    // Simulate reaching Stage 2 (multipliers 11 to 20)
    for (let m = 1; m <= 10; m++) {
      state = evaluateTableMasteryAttempt(state, m, true, 1100).nextState;
    }
    expect(state.stage).toBe('stage_11_to_20');
    const scoreBefore = state.masteryScore; // 50%

    // 13 x 11 = 143 (3 digits). User answers correctly in 2200ms (previously rejected by static 1800ms!)
    const { nextState, event } = evaluateTableMasteryAttempt(state, 11, true, 2200);

    // Under new algorithm, 2200ms <= 2500ms threshold -> isInstant = true!
    expect(event).not.toBe('hesitation');
    expect(nextState.facts[11].status).toBe('mastered');
    expect(nextState.masteryScore).toBeGreaterThan(scoreBefore); // Progress increases!
    expect(nextState.aiTelemetry?.retrievalPathway).toBe('direct_associative');
    expect(nextState.aiTelemetry?.motorLatencyEstimateMs).toBe(1150);
    expect(nextState.aiTelemetry?.netCognitiveLatencyMs).toBe(2200 - 1150); // 1050ms pure recall
  });

  it('still detects genuine hesitation on 3-digit answers if response time exceeds 2500ms', () => {
    let state = createInitialTableMasteryState(13);
    for (let m = 1; m <= 10; m++) {
      state = evaluateTableMasteryAttempt(state, m, true, 1100).nextState;
    }

    // 13 x 11 = 143 (3 digits). User takes 3400ms (slow arithmetic decomposition)
    const { nextState, event } = evaluateTableMasteryAttempt(state, 11, true, 3400);

    expect(event).toBe('hesitation');
    expect(nextState.facts[11].status).toBe('hesitant');
    expect(nextState.retestQueue.some((q) => q.multiplier === 11)).toBe(true);
    expect(nextState.lastFeedback?.message).toContain('for 3 digits');
  });

  it('correctly scales for 4-digit answers in high-tier tables (e.g. 78 x 14 = 1092)', () => {
    let state = createInitialTableMasteryState(78);

    // 78 x 14 = 1092 (4 digits). User takes 2700ms
    const { nextState, event } = evaluateTableMasteryAttempt(state, 14, true, 2700);

    expect(event).not.toBe('hesitation');
    expect(nextState.facts[14].status).toBe('mastered');
    expect(nextState.aiTelemetry?.motorLatencyEstimateMs).toBe(1550);
    expect(nextState.aiTelemetry?.netCognitiveLatencyMs).toBe(2700 - 1550); // 1150ms net
  });
});
