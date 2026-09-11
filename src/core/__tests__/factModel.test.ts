import { describe, it, expect } from 'vitest';
import {
  parseFactKey,
  formatFactKey,
  getFactCorrectAnswer,
  createInitialFactMemoryState,
  updateFactMemoryStateWithAttempt,
  calculateForgettingRisk,
  deriveAggregateSkillsFromFacts,
  FactAttempt,
} from '../factModel';

describe('Fact-Level Memory Model', () => {
  it('correctly parses and formats multiplication, square, and cube fact keys', () => {
    const mulKey = formatFactKey('multiplication', 17, 6);
    expect(mulKey).toBe('mul:17:6');
    const parsedMul = parseFactKey(mulKey);
    expect(parsedMul.isValid).toBe(true);
    expect(parsedMul.type).toBe('multiplication');
    expect(parsedMul.operandA).toBe(17);
    expect(parsedMul.operandB).toBe(6);
    expect(getFactCorrectAnswer(mulKey)).toBe(102);

    const sqKey = formatFactKey('square', 47);
    expect(sqKey).toBe('square:47');
    const parsedSq = parseFactKey(sqKey);
    expect(parsedSq.isValid).toBe(true);
    expect(parsedSq.type).toBe('square');
    expect(parsedSq.operandA).toBe(47);
    expect(getFactCorrectAnswer(sqKey)).toBe(2209);

    const cubeKey = formatFactKey('cube', 12);
    expect(cubeKey).toBe('cube:12');
    const parsedCube = parseFactKey(cubeKey);
    expect(parsedCube.isValid).toBe(true);
    expect(parsedCube.type).toBe('cube');
    expect(parsedCube.operandA).toBe(12);
    expect(getFactCorrectAnswer(cubeKey)).toBe(1728);
  });

  it('verifies exact math across multiplication 1-100 x 1-20, squares 1-100, and cubes 1-100', () => {
    // Spot check boundary multiplications
    expect(getFactCorrectAnswer('mul:1:1')).toBe(1);
    expect(getFactCorrectAnswer('mul:7:8')).toBe(56);
    expect(getFactCorrectAnswer('mul:17:19')).toBe(323);
    expect(getFactCorrectAnswer('mul:99:20')).toBe(1980);
    expect(getFactCorrectAnswer('mul:100:20')).toBe(2000);

    // Spot check boundary squares
    expect(getFactCorrectAnswer('square:1')).toBe(1);
    expect(getFactCorrectAnswer('square:25')).toBe(625);
    expect(getFactCorrectAnswer('square:50')).toBe(2500);
    expect(getFactCorrectAnswer('square:99')).toBe(9801);
    expect(getFactCorrectAnswer('square:100')).toBe(10000);

    // Spot check boundary cubes
    expect(getFactCorrectAnswer('cube:1')).toBe(1);
    expect(getFactCorrectAnswer('cube:5')).toBe(125);
    expect(getFactCorrectAnswer('cube:10')).toBe(1000);
    expect(getFactCorrectAnswer('cube:20')).toBe(8000);
    expect(getFactCorrectAnswer('cube:100')).toBe(1000000);
  });

  it('tracks SM-2 stability and spaced retrieval intervals upon correct recall', () => {
    const key = formatFactKey('multiplication', 7, 8);
    let state = createInitialFactMemoryState(key);
    expect(state.totalAttempts).toBe(0);
    expect(state.stabilityScore).toBe(0);
    expect(state.masteryState).toBe('unseen');

    // Attempt 1: Fast correct recall (<2000ms)
    const attempt1: FactAttempt = {
      timestamp: Date.now(),
      userAnswer: 56,
      correctAnswer: 56,
      isCorrect: true,
      latencyMs: 1500,
      usedHint: false,
      wasShownStrategy: false,
    };
    state = updateFactMemoryStateWithAttempt(state, attempt1);
    expect(state.totalAttempts).toBe(1);
    expect(state.correctAttempts).toBe(1);
    expect(state.stabilityScore).toBeGreaterThan(10);
    expect(state.intervalDays).toBeGreaterThanOrEqual(1);
    expect(state.masteryState).toBe('learning');

    // Attempt 2: Another fast correct recall
    const attempt2: FactAttempt = {
      timestamp: Date.now() + 24 * 60 * 60 * 1000,
      userAnswer: 56,
      correctAnswer: 56,
      isCorrect: true,
      latencyMs: 1400,
      usedHint: false,
      wasShownStrategy: false,
    };
    state = updateFactMemoryStateWithAttempt(state, attempt2);
    expect(state.consecutiveCorrect).toBe(2);
    expect(state.stabilityScore).toBeGreaterThan(25);

    // Attempt 3: Third fast correct recall -> should elevate towards mastered
    const attempt3: FactAttempt = {
      timestamp: Date.now() + 48 * 60 * 60 * 1000,
      userAnswer: 56,
      correctAnswer: 56,
      isCorrect: true,
      latencyMs: 1200,
      usedHint: false,
      wasShownStrategy: false,
    };
    state = updateFactMemoryStateWithAttempt(state, attempt3);
    expect(state.consecutiveCorrect).toBe(3);
    expect(state.stabilityScore).toBeGreaterThan(45);
  });

  it('penalizes stability and sets short spaced review interval upon error', () => {
    const key = formatFactKey('multiplication', 17, 6);
    let state = createInitialFactMemoryState(key);
    state.stabilityScore = 60;
    state.consecutiveCorrect = 4;

    const errorAttempt: FactAttempt = {
      timestamp: Date.now(),
      userAnswer: 108, // confusion slip
      correctAnswer: 102,
      isCorrect: false,
      latencyMs: 2400,
      usedHint: false,
      wasShownStrategy: false,
      errorType: 'adjacent_table_confusion',
    };

    state = updateFactMemoryStateWithAttempt(state, errorAttempt);
    expect(state.consecutiveErrors).toBe(1);
    expect(state.consecutiveCorrect).toBe(0);
    expect(state.stabilityScore).toBeLessThan(60);
    expect(state.intervalDays).toBeLessThanOrEqual(0.1); // immediate review interval (~1-2 hours)
  });

  it('derives aggregate high-level skill dimensions from fact map correctly', () => {
    const factMap: Record<string, ReturnType<typeof createInitialFactMemoryState>> = {};

    // Populate some teen table facts
    for (let m = 1; m <= 10; m++) {
      const k = formatFactKey('multiplication', 14, m);
      const st = createInitialFactMemoryState(k);
      st.totalAttempts = 5;
      st.correctAttempts = 4;
      st.recentAccuracy = 80;
      st.medianLatencyMs = 2100;
      st.stabilityScore = 75;
      factMap[k] = st;
    }

    const derivedSkills = deriveAggregateSkillsFromFacts(factMap);
    expect(derivedSkills.mult_teen_tables).toBeDefined();
    expect(derivedSkills.mult_teen_tables.totalAttempts).toBe(50);
    expect(derivedSkills.mult_teen_tables.accuracy).toBe(80);
    expect(derivedSkills.mult_teen_tables.theta).toBeGreaterThan(0.5);
  });
});
