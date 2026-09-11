import { describe, it, expect } from 'vitest';
import { getAllowedDrills, isValidDrillId, getDrillById } from '../catalog';
import fs from 'fs';
import path from 'path';

describe('AI Safety, Privacy & Canonical Catalog Validation', () => {
  it('strictly validates canonical drill identifiers', () => {
    // Valid canonical drills
    expect(isValidDrillId('add_sub_l1')).toBe(true);
    expect(isValidDrillId('add_sub_l2')).toBe(true);
    expect(isValidDrillId('table_7')).toBe(true);
    expect(isValidDrillId('table_14')).toBe(true);
    expect(isValidDrillId('sq_ending_5')).toBe(true);
    expect(isValidDrillId('sq_near_50')).toBe(true);
    expect(isValidDrillId('anzan_standard')).toBe(true);

    // Invalid or malicious drills
    expect(isValidDrillId('unauthorized_custom_eval')).toBe(false);
    expect(isValidDrillId('table_999')).toBe(false);
    expect(isValidDrillId('../../../etc/passwd')).toBe(false);
    expect(isValidDrillId('')).toBe(false);
    expect(isValidDrillId('DROP TABLE users;')).toBe(false);
  });

  it('guarantees that every allowed drill has a valid module and parameters', () => {
    const drills = getAllowedDrills();
    expect(drills.length).toBeGreaterThan(20);

    for (const d of drills) {
      expect(['add_sub', 'multiplication', 'squares_cubes', 'working_memory']).toContain(d.module);
      expect(d.difficulty).toBeGreaterThanOrEqual(1);
      expect(d.difficulty).toBeLessThanOrEqual(10);
      expect(d.targetTimeSeconds).toBeGreaterThan(0);
      expect(getDrillById(d.id)).toBeDefined();
    }
  });

  it('verifies that client bundles never import or reference server OPENAI_API_KEY', () => {
    const srcDir = path.resolve(__dirname, '../../');
    const clientFiles = [
      'core/types.ts',
      'core/calcEngine.ts',
      'core/mastery.ts',
      'core/adaptive.ts',
      'core/strategies.ts',
      'core/learnerModel.ts',
      'core/catalog.ts',
      'core/diagnosticEngine.ts',
      'core/planEngine.ts',
      'core/store/useQuizStore.ts',
    ];

    for (const relPath of clientFiles) {
      const fullPath = path.join(srcDir, relPath);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        expect(content).not.toContain('process.env.OPENAI_API_KEY');
      }
    }
  });
});
