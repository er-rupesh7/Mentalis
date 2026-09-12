import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useQuizStore } from '../store/useQuizStore';

describe('AI Coach Cooldown & Store Rate Limiting', () => {
  beforeEach(() => {
    // Reset store state
    useQuizStore.setState({
      isLoadingAiCoach: false,
      aiCoachInsight: null,
      aiCoachState: {
        learnerId: 'test_learner_123',
        cooldownMinutes: 30,
        lastSuccessfulRequestAt: null,
        nextEligibleRequestAt: 0,
        providerStatus: 'ready',
        lastErrorType: null,
        retryAfterSeconds: null,
        pendingSync: false,
        lastAiLesson: null,
        planSource: 'offline',
      },
    });
    vi.restoreAllMocks();
  });

  it('initializes with default 30-minute cooldown and ready status', () => {
    const state = useQuizStore.getState().aiCoachState;
    expect(state.cooldownMinutes).toBe(30);
    expect(state.providerStatus).toBe('ready');
    expect(state.planSource).toBe('offline');
    expect(state.learnerId).toBeDefined();
    expect(state.nextEligibleRequestAt).toBe(0);
    expect(state.pendingSync).toBe(false);
  });

  it('allows configuring cooldown between 15 and 30 minutes with strict clamping', () => {
    const { setAICooldownMinutes } = useQuizStore.getState();

    setAICooldownMinutes(15);
    expect(useQuizStore.getState().aiCoachState.cooldownMinutes).toBe(15);

    setAICooldownMinutes(25);
    expect(useQuizStore.getState().aiCoachState.cooldownMinutes).toBe(25);

    // Below 15 clamped to 15
    setAICooldownMinutes(5);
    expect(useQuizStore.getState().aiCoachState.cooldownMinutes).toBe(15);

    // Above 30 clamped to 30
    setAICooldownMinutes(45);
    expect(useQuizStore.getState().aiCoachState.cooldownMinutes).toBe(30);
  });

  it('enforces double-click guard when an AI request is already inflight', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    useQuizStore.setState({ isLoadingAiCoach: true });

    await useQuizStore.getState().requestAICoachFeedback();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('enforces client cooldown guard when nextEligibleRequestAt is in future', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const futureTime = Date.now() + 15 * 60 * 1000;

    useQuizStore.setState((s) => ({
      aiCoachState: {
        ...s.aiCoachState,
        providerStatus: 'cooldown',
        nextEligibleRequestAt: futureTime,
      },
    }));

    await useQuizStore.getState().requestAICoachFeedback(false);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('marks pending sync when drill activity occurs during active cooldown', () => {
    const futureTime = Date.now() + 20 * 60 * 1000;
    useQuizStore.setState((s) => ({
      aiCoachState: {
        ...s.aiCoachState,
        providerStatus: 'cooldown',
        nextEligibleRequestAt: futureTime,
        pendingSync: false,
      },
    }));

    useQuizStore.getState().markPendingAISync();
    expect(useQuizStore.getState().aiCoachState.pendingSync).toBe(true);
  });
});
