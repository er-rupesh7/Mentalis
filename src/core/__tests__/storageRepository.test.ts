import { describe, it, expect, beforeEach } from 'vitest';
import {
  LocalStorageRepository,
  StorageService,
  LOCAL_STORAGE_BRAIN_KEY,
  LOCAL_STORAGE_TECHNIQUES_KEY,
  LOCAL_STORAGE_CONQUERED_KEY,
} from '../storage/storageRepository';
import { BrainMatrix } from '../types';

describe('StorageRepository & StorageService', () => {
  let repo: LocalStorageRepository;
  let service: StorageService;

  beforeEach(() => {
    repo = new LocalStorageRepository();
    service = new StorageService(repo);
  });

  it('records technique attempts and tracks consecutive correct and average latency', async () => {
    const r1 = await service.recordTechniqueAttempt(
      'add_l2r_place_value',
      'Left-to-Right Addition',
      true,
      1200
    );
    expect(r1.consecutiveCorrect).toBe(1);
    expect(r1.averageLatencyMs).toBe(1200);
    expect(r1.isMastered).toBe(false);

    // Record 4 more correct attempts with fast latency to trigger automaticity (5 total)
    await service.recordTechniqueAttempt('add_l2r_place_value', 'Left-to-Right Addition', true, 1100);
    await service.recordTechniqueAttempt('add_l2r_place_value', 'Left-to-Right Addition', true, 1300);
    await service.recordTechniqueAttempt('add_l2r_place_value', 'Left-to-Right Addition', true, 1000);
    const r5 = await service.recordTechniqueAttempt(
      'add_l2r_place_value',
      'Left-to-Right Addition',
      true,
      1200
    );

    expect(r5.consecutiveCorrect).toBe(5);
    expect(r5.isMastered).toBe(true);
    expect(r5.masteredAt).toBeDefined();

    // Check conquered modules includes this technique
    const conquered = await service.getConqueredModules();
    expect(conquered).toContain('technique_add_l2r_place_value');
  });

  it('resets consecutive correct on incorrect answer', async () => {
    await service.recordTechniqueAttempt('sub_nikhilam_all_from_9', 'Nikhilam Subtraction', true, 1500);
    await service.recordTechniqueAttempt('sub_nikhilam_all_from_9', 'Nikhilam Subtraction', true, 1400);
    const fail = await service.recordTechniqueAttempt(
      'sub_nikhilam_all_from_9',
      'Nikhilam Subtraction',
      false,
      3000
    );

    expect(fail.consecutiveCorrect).toBe(0);
    expect(fail.isMastered).toBe(false);
  });

  it('exports and imports JSON snapshot without data loss', async () => {
    const dummyMatrix: BrainMatrix = {
      schemaVersion: 1,
      userId: 'test_user',
      exportedAt: 1000,
      lastSyncedAt: null,
      learnerProfile: { id: 'test' },
      factMemoryMap: {},
      techniqueMasteryMap: {},
      progressMap: {},
      overallStats: {
        totalCalculations: 10,
        totalCorrect: 9,
        currentStreak: 5,
        bestStreak: 7,
        lastActiveDate: '2026-09-13',
        dailyActiveStreak: 4,
        totalTimeSpentSeconds: 120,
      },
      customDrillPresets: [],
      examTransferScores: null,
    };

    await service.saveBrainMatrix(dummyMatrix);
    await service.recordTechniqueAttempt('mult_power10_5', 'Multiply by 5', true, 800);
    await service.unlockBadge('streak_master');

    const json = await service.exportJSON();
    expect(json).toContain('mult_power10_5');
    expect(json).toContain('streak_master');

    // Create a new fresh repo & service and import
    const newRepo = new LocalStorageRepository();
    const newService = new StorageService(newRepo);
    const ok = await newService.importJSON(json);
    expect(ok).toBe(true);

    const loadedTechnique = await newService.getTechniqueMastery('mult_power10_5');
    expect(loadedTechnique?.consecutiveCorrect).toBe(1);

    const badges = await newService.getBadges();
    expect(badges.some((b) => b.id === 'streak_master')).toBe(true);

    const streak = await newService.getDailyStreak();
    expect(streak.streak).toBe(4);
  });
});
