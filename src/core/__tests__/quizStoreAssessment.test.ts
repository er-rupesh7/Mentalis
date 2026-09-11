import { describe, it, expect, beforeEach } from 'vitest';
import { useQuizStore } from '../store/useQuizStore';

describe('QuizStore Assessment & Learning Workflow', () => {
  beforeEach(() => {
    // Reset store to default state
    useQuizStore.setState({
      activeAssessment: null,
      assessmentInputBuffer: '',
      assessmentQuestionStartTime: 0,
      viewMode: 'dashboard',
      factMemoryMap: {},
    });
  });

  it('starts an assessment session and switches viewMode to assessment', () => {
    const store = useQuizStore.getState();
    store.startAssessment();

    const state = useQuizStore.getState();
    expect(state.activeAssessment).not.toBeNull();
    expect(state.activeAssessment?.status).toBe('in_progress');
    expect(state.activeAssessment?.totalQuestions).toBe(20);
    expect(state.viewMode).toBe('assessment');
    expect(state.assessmentQuestionStartTime).toBeGreaterThan(0);
  });

  it('pauses and resumes an active assessment cleanly without corrupting latency tracking', () => {
    const store = useQuizStore.getState();
    store.startAssessment();

    // Pause assessment
    store.pauseAssessment();
    let state = useQuizStore.getState();
    expect(state.activeAssessment?.isPaused).toBe(true);
    expect(state.activeAssessment?.pausedAt).toBeGreaterThan(0);

    const initialStartTime = state.assessmentQuestionStartTime;

    // Resume assessment
    store.resumeAssessment();
    state = useQuizStore.getState();
    expect(state.activeAssessment?.isPaused).toBe(false);
    expect(state.activeAssessment?.pausedAt).toBeUndefined();
    // Assessment question start time adjusted for pause duration
    expect(state.assessmentQuestionStartTime).toBeGreaterThanOrEqual(initialStartTime);
  });

  it('skips a question in assessment, recording it without shame as a learning priority', () => {
    const store = useQuizStore.getState();
    store.startAssessment();

    const initialQIndex = useQuizStore.getState().activeAssessment!.currentQuestionIndex;
    const initialQuestion = useQuizStore.getState().activeAssessment!.questions[initialQIndex];

    store.skipAssessmentQuestion();

    const state = useQuizStore.getState();
    expect(state.activeAssessment!.currentQuestionIndex).toBe(initialQIndex + 1);
    expect(state.activeAssessment!.responses.length).toBe(1);

    const response = state.activeAssessment!.responses[0];
    expect(response.isSkipped).toBe(true);
    expect(response.isCorrect).toBe(false);

    // Verify fact memory map updated with skipCount
    const factKey = initialQuestion.factKey;
    if (factKey) {
      const factMemory = state.factMemoryMap[factKey];
      expect(factMemory).toBeDefined();
      expect(factMemory.skipCount).toBeGreaterThanOrEqual(1);
      expect(factMemory.masteryState).toBe('weak');
      expect(factMemory.learningPhase).toBe('guided');
    }
  });

  it('handles practiceFact launch into learn mode with worked strategy', () => {
    const store = useQuizStore.getState();
    store.practiceFact('mul:17:8', 'learn');

    const state = useQuizStore.getState();
    expect(state.viewMode).toBe('practice');
    expect(state.learningMode).toBe('learn');
    expect(state.showStrategy).toBe(true);
    expect(state.currentQuestion).not.toBeNull();
    expect(state.currentQuestion?.operandA).toBe(17);
    expect(state.currentQuestion?.operandB).toBe(8);
  });
});
