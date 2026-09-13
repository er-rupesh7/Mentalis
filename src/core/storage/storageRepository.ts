/**
 * Storage Repository & Service Architecture for Mentalis
 * Abstract Data Access Object (DAO) pattern decoupling UI and logic from persistence.
 * Currently uses persistent browser localStorage with automatic memory fallback (SSR/Jest/Node).
 * Future-proofed for 1-line swap to Supabase / Firebase / PostgreSQL cloud backends.
 */

import {
  BrainMatrix,
  CalculationTechniqueId,
  TechniqueMasteryState,
  Badge,
} from '../types';

export interface IStorageRepository {
  /**
   * Loads the complete BrainMatrix snapshot
   */
  loadBrainMatrix(): Promise<BrainMatrix | null>;

  /**
   * Persists the complete BrainMatrix snapshot
   */
  saveBrainMatrix(matrix: BrainMatrix): Promise<void>;

  /**
   * Records a single attempt for a calculation technique
   */
  recordTechniqueAttempt(
    techniqueId: CalculationTechniqueId,
    title: string,
    isCorrect: boolean,
    latencyMs: number
  ): Promise<TechniqueMasteryState>;

  /**
   * Retrieves mastery state for a specific technique
   */
  getTechniqueMastery(
    techniqueId: CalculationTechniqueId
  ): Promise<TechniqueMasteryState | null>;

  /**
   * Retrieves all technique mastery records
   */
  getAllTechniqueMasteries(): Promise<Record<string, TechniqueMasteryState>>;

  /**
   * Retrieves list of all conquered modules/techniques
   */
  getConqueredModules(): Promise<string[]>;

  /**
   * Marks a module or technique as mastered/conquered
   */
  markModuleConquered(moduleId: string): Promise<void>;

  /**
   * Retrieves unlocked badges
   */
  getBadges(): Promise<Badge[]>;

  /**
   * Unlocks a badge by id
   */
  unlockBadge(badgeId: string): Promise<void>;

  /**
   * Retrieves daily active streak and last active date
   */
  getDailyStreak(): Promise<{ streak: number; lastActiveDate: string }>;

  /**
   * Serializes current matrix state to a transportable JSON string
   */
  exportJSON(): Promise<string>;

  /**
   * Imports and validates external BrainMatrix JSON
   */
  importJSON(rawJson: string): Promise<boolean>;

  /**
   * Cloud sync contract (ready for Supabase/Firebase/Postgres)
   */
  syncWithCloud(
    endpoint?: string,
    authToken?: string
  ): Promise<{ success: boolean; syncedAt: number; error?: string }>;
}

export const LOCAL_STORAGE_BRAIN_KEY = 'mentalis_brain_matrix_v1';
export const LOCAL_STORAGE_TECHNIQUES_KEY = 'mentalis_technique_mastery_v1';
export const LOCAL_STORAGE_CONQUERED_KEY = 'mentalis_conquered_modules_v1';
export const LOCAL_STORAGE_BADGES_KEY = 'mentalis_unlocked_badges_v1';

/**
 * LocalStorage Implementation of IStorageRepository
 */
export class LocalStorageRepository implements IStorageRepository {
  private inMemoryFallback: Map<string, string> = new Map();

  private isStorageAvailable(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const testKey = '__mentalis_storage_test__';
      window.localStorage.setItem(testKey, 'ok');
      window.localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  private getItem(key: string): string | null {
    if (this.isStorageAvailable()) {
      return window.localStorage.getItem(key);
    }
    return this.inMemoryFallback.get(key) || null;
  }

  private setItem(key: string, value: string): void {
    if (this.isStorageAvailable()) {
      window.localStorage.setItem(key, value);
    } else {
      this.inMemoryFallback.set(key, value);
    }
  }

  public async loadBrainMatrix(): Promise<BrainMatrix | null> {
    const raw = this.getItem(LOCAL_STORAGE_BRAIN_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as BrainMatrix;
    } catch (e) {
      console.error('Failed to parse BrainMatrix from LocalStorage', e);
      return null;
    }
  }

  public async saveBrainMatrix(matrix: BrainMatrix): Promise<void> {
    const payload = JSON.stringify({
      ...matrix,
      exportedAt: Date.now(),
    });
    this.setItem(LOCAL_STORAGE_BRAIN_KEY, payload);
  }

  public async recordTechniqueAttempt(
    techniqueId: CalculationTechniqueId,
    title: string,
    isCorrect: boolean,
    latencyMs: number
  ): Promise<TechniqueMasteryState> {
    const all = await this.getAllTechniqueMasteries();
    const existing = all[techniqueId] || {
      techniqueId,
      title,
      consecutiveCorrect: 0,
      averageLatencyMs: 0,
      totalExposures: 0,
      isMastered: false,
    };

    const newExposures = existing.totalExposures + 1;
    const newConsecutive = isCorrect ? existing.consecutiveCorrect + 1 : 0;
    const newAvgLatency =
      existing.averageLatencyMs === 0
        ? latencyMs
        : Math.round(
            (existing.averageLatencyMs * existing.totalExposures + latencyMs) /
              newExposures
          );

    // Automaticity rule: 5 consecutive correct answers with average latency <= 3500ms
    const isNowMastered =
      existing.isMastered || (newConsecutive >= 5 && newAvgLatency <= 3500);

    const updated: TechniqueMasteryState = {
      ...existing,
      consecutiveCorrect: newConsecutive,
      totalExposures: newExposures,
      averageLatencyMs: newAvgLatency,
      isMastered: isNowMastered,
      masteredAt: isNowMastered ? existing.masteredAt || Date.now() : undefined,
    };

    all[techniqueId] = updated;
    this.setItem(LOCAL_STORAGE_TECHNIQUES_KEY, JSON.stringify(all));

    if (isNowMastered && !existing.isMastered) {
      await this.markModuleConquered(`technique_${techniqueId}`);
    }

    return updated;
  }

  public async getTechniqueMastery(
    techniqueId: CalculationTechniqueId
  ): Promise<TechniqueMasteryState | null> {
    const all = await this.getAllTechniqueMasteries();
    return all[techniqueId] || null;
  }

  public async getAllTechniqueMasteries(): Promise<
    Record<string, TechniqueMasteryState>
  > {
    const raw = this.getItem(LOCAL_STORAGE_TECHNIQUES_KEY);
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  public async getConqueredModules(): Promise<string[]> {
    const raw = this.getItem(LOCAL_STORAGE_CONQUERED_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  public async markModuleConquered(moduleId: string): Promise<void> {
    const list = await this.getConqueredModules();
    if (!list.includes(moduleId)) {
      list.push(moduleId);
      this.setItem(LOCAL_STORAGE_CONQUERED_KEY, JSON.stringify(list));
    }
  }

  public async getBadges(): Promise<Badge[]> {
    const raw = this.getItem(LOCAL_STORAGE_BADGES_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  public async unlockBadge(badgeId: string): Promise<void> {
    const badges = await this.getBadges();
    const existing = badges.find((b) => b.id === badgeId);
    if (!existing) {
      badges.push({
        id: badgeId,
        name: badgeId,
        description: `Unlocked milestone ${badgeId}`,
        category: 'mastery',
        unlocked: true,
        unlockedAt: Date.now(),
      });
      this.setItem(LOCAL_STORAGE_BADGES_KEY, JSON.stringify(badges));
    }
  }

  public async getDailyStreak(): Promise<{ streak: number; lastActiveDate: string }> {
    const brain = await this.loadBrainMatrix();
    if (brain && brain.overallStats) {
      return {
        streak: brain.overallStats.dailyActiveStreak || 0,
        lastActiveDate: brain.overallStats.lastActiveDate || '',
      };
    }
    return { streak: 0, lastActiveDate: '' };
  }

  public async exportJSON(): Promise<string> {
    const brain = await this.loadBrainMatrix();
    const techniques = await this.getAllTechniqueMasteries();
    const conquered = await this.getConqueredModules();
    const badges = await this.getBadges();

    const snapshot = {
      brainMatrix: brain,
      techniques,
      conqueredModules: conquered,
      badges,
      exportedAt: Date.now(),
      version: 1,
    };
    return JSON.stringify(snapshot, null, 2);
  }

  public async importJSON(rawJson: string): Promise<boolean> {
    try {
      const parsed = JSON.parse(rawJson);
      if (parsed.brainMatrix) {
        await this.saveBrainMatrix(parsed.brainMatrix);
      }
      if (parsed.techniques) {
        this.setItem(
          LOCAL_STORAGE_TECHNIQUES_KEY,
          JSON.stringify(parsed.techniques)
        );
      }
      if (parsed.conqueredModules && Array.isArray(parsed.conqueredModules)) {
        this.setItem(
          LOCAL_STORAGE_CONQUERED_KEY,
          JSON.stringify(parsed.conqueredModules)
        );
      }
      if (parsed.badges && Array.isArray(parsed.badges)) {
        this.setItem(
          LOCAL_STORAGE_BADGES_KEY,
          JSON.stringify(parsed.badges)
        );
      }
      return true;
    } catch (e) {
      console.error('Failed to import JSON data', e);
      return false;
    }
  }

  public async syncWithCloud(
    endpoint?: string,
    authToken?: string
  ): Promise<{ success: boolean; syncedAt: number; error?: string }> {
    if (!endpoint || !authToken) {
      return {
        success: true,
        syncedAt: Date.now(),
      };
    }

    try {
      const json = await this.exportJSON();
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: json,
      });

      if (!res.ok) {
        return {
          success: false,
          syncedAt: Date.now(),
          error: `HTTP ${res.status}: ${res.statusText}`,
        };
      }

      return {
        success: true,
        syncedAt: Date.now(),
      };
    } catch (err: any) {
      return {
        success: false,
        syncedAt: Date.now(),
        error: err?.message || 'Network sync error',
      };
    }
  }
}

/**
 * Storage Service Singleton Facade
 */
export class StorageService {
  private repository: IStorageRepository;

  constructor(repository?: IStorageRepository) {
    this.repository = repository || new LocalStorageRepository();
  }

  public setRepository(repo: IStorageRepository) {
    this.repository = repo;
  }

  public getRepository(): IStorageRepository {
    return this.repository;
  }

  public async saveBrainMatrix(matrix: BrainMatrix): Promise<void> {
    return this.repository.saveBrainMatrix(matrix);
  }

  public async loadBrainMatrix(): Promise<BrainMatrix | null> {
    return this.repository.loadBrainMatrix();
  }

  public async recordTechniqueAttempt(
    techniqueId: CalculationTechniqueId,
    title: string,
    isCorrect: boolean,
    latencyMs: number
  ): Promise<TechniqueMasteryState> {
    return this.repository.recordTechniqueAttempt(
      techniqueId,
      title,
      isCorrect,
      latencyMs
    );
  }

  public async getTechniqueMastery(
    techniqueId: CalculationTechniqueId
  ): Promise<TechniqueMasteryState | null> {
    return this.repository.getTechniqueMastery(techniqueId);
  }

  public async getAllTechniqueMasteries(): Promise<
    Record<string, TechniqueMasteryState>
  > {
    return this.repository.getAllTechniqueMasteries();
  }

  public async getConqueredModules(): Promise<string[]> {
    return this.repository.getConqueredModules();
  }

  public async markModuleConquered(moduleId: string): Promise<void> {
    return this.repository.markModuleConquered(moduleId);
  }

  public async getBadges(): Promise<Badge[]> {
    return this.repository.getBadges();
  }

  public async unlockBadge(badgeId: string): Promise<void> {
    return this.repository.unlockBadge(badgeId);
  }

  public async getDailyStreak(): Promise<{ streak: number; lastActiveDate: string }> {
    return this.repository.getDailyStreak();
  }

  public async exportJSON(): Promise<string> {
    return this.repository.exportJSON();
  }

  public async importJSON(rawJson: string): Promise<boolean> {
    return this.repository.importJSON(rawJson);
  }

  public async syncWithCloud(
    endpoint?: string,
    authToken?: string
  ): Promise<{ success: boolean; syncedAt: number; error?: string }> {
    return this.repository.syncWithCloud(endpoint, authToken);
  }
}

export const storageService = new StorageService();
