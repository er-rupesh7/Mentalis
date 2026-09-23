import { describe, it, expect, beforeEach } from 'vitest';
import { useQuizStore } from '../store/useQuizStore';

describe('Table Studio & Initial Onboarding State Machine', () => {
  beforeEach(() => {
    useQuizStore.setState({
      hasCompletedInitialOnboarding: false,
      declaredKnownTablesLimit: 10,
      unlockedFeatures: ['tables', 'learn_table'],
      lastActiveSection: 'learn_table',
      selectedLearnTable: 14,
      viewMode: 'dashboard',
    });
  });

  it('completes initial onboarding and unlocks progressive features based on declared limit', () => {
    const store = useQuizStore.getState();
    expect(store.hasCompletedInitialOnboarding).toBe(false);

    // Complete onboarding with limit 20
    store.completeInitialOnboarding(20, 100);

    const updated = useQuizStore.getState();
    expect(updated.hasCompletedInitialOnboarding).toBe(true);
    expect(updated.declaredKnownTablesLimit).toBe(20);
    expect(updated.unlockedFeatures).toContain('tables');
    expect(updated.unlockedFeatures).toContain('learn_table');
    expect(updated.unlockedFeatures).toContain('techniques');
    expect(updated.unlockedFeatures).toContain('squares_cubes');
    expect(updated.xp).toBeGreaterThan(0);
    expect(updated.viewMode).toBe('learn_table');
  });

  it('launches targeted table practice drill updating store session config and activeTable', () => {
    const store = useQuizStore.getState();
    store.startLearnTablePractice(17, 25);

    const updated = useQuizStore.getState();
    expect(updated.activeTable).toBe(17);
    expect(updated.activeModule).toBe('multiplication');
    expect(updated.viewMode).toBe('practice');
    expect(updated.sessionConfig.goalCount).toBe(25);
    expect(updated.lastActiveSection).toBe('learn_table');
  });

  it('force masters a technique and awards +100 XP', () => {
    const store = useQuizStore.getState();
    const prevXP = store.xp;

    store.forceMasterTechnique('mult_repunit_11');

    const updated = useQuizStore.getState();
    expect(updated.techniqueMasteryMap['mult_repunit_11']).toBeDefined();
    expect(updated.techniqueMasteryMap['mult_repunit_11'].isMastered).toBe(true);
    expect(updated.xp).toBe(prevXP + 100);
  });
});
