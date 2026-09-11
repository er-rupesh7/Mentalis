import { describe, it, expect } from 'vitest';
import {
  detectErrorPattern,
  generateRepairCard,
  calculateFactPriority,
  selectNextFact,
} from '../memoryScheduler';
import { createInitialFactMemoryState, formatFactKey, FactKey } from '../factModel';

describe('Memory Scheduler & Remediation Engine', () => {
  describe('detectErrorPattern', () => {
    it('detects adjacent multiplier confusion (e.g. 7×8 = 56 answered as 7×9 = 63)', () => {
      const pattern = detectErrorPattern('mul:7:8', 63, 56, 1800);
      expect(pattern).toBe('adjacent_multiplier_confusion');
    });

    it('detects adjacent multiplier confusion downwards (e.g. 7×8 = 56 answered as 7×7 = 49)', () => {
      const pattern = detectErrorPattern('mul:7:8', 49, 56, 1900);
      expect(pattern).toBe('adjacent_multiplier_confusion');
    });

    it('detects digit transposition (e.g. 54 answered as 45, 63 as 36)', () => {
      const pattern = detectErrorPattern('mul:9:6', 45, 54, 1600);
      expect(pattern).toBe('digit_transposition');
    });

    it('detects decade zero omission (e.g. 30×7 = 210 answered as 21)', () => {
      const pattern = detectErrorPattern('mul:30:7', 21, 210, 2000);
      expect(pattern).toBe('decade_zero_omission');
    });

    it('detects rapid careless guessing (< 500ms)', () => {
      const pattern = detectErrorPattern('mul:17:8', 120, 136, 320);
      expect(pattern).toBe('rapid_guess');
    });

    it('detects square padding mistakes (e.g. 48² = 2304 answered as 234)', () => {
      const pattern = detectErrorPattern('square:48', 234, 2304, 2500);
      expect(pattern).toBe('square_padding_mistake');
    });
  });

  describe('generateRepairCard', () => {
    it('creates an actionable repair card with anchor fact and contrast fact', () => {
      const card = generateRepairCard('mul:7:8', 63, 2100);

      expect(card.factKey).toBe('mul:7:8');
      expect(card.correctAnswer).toBe(56);
      expect(card.userAnswer).toBe(63);
      expect(card.detectedPattern).toBe('adjacent_multiplier_confusion');
      expect(card.patternExplanation).toContain('7 × 9');

      // Anchor fact should be a landmark
      expect(card.anchorFact.correctAnswer).toBeGreaterThan(0);
      expect(card.anchorFact.relationship.length).toBeGreaterThan(5);

      // Contrast fact should address the confusion
      expect(card.contrastFact.prompt).toBeDefined();
      expect(card.contrastFact.correctAnswer).toBeGreaterThan(0);
      expect(card.contrastFact.preventConfusionTip.length).toBeGreaterThan(5);

      // Scheduled delayed review should be set (e.g. 4 questions later)
      expect(card.scheduledDelayedReviewIndex).toBe(4);
    });

    it('creates a repair card for squares with decade anchor', () => {
      const card = generateRepairCard('square:48', 234, 2000);
      expect(card.factKey).toBe('square:48');
      expect(card.correctAnswer).toBe(2304);
      expect(card.anchorFact.prompt).toContain('50²');
      expect(card.anchorFact.correctAnswer).toBe(2500);
    });
  });

  describe('calculateFactPriority', () => {
    it('assigns higher score to overdue facts and repeated errors', () => {
      const fact = createInitialFactMemoryState('mul:7:8');
      const now = Date.now();

      // Overdue fact with 2 consecutive errors
      fact.totalAttempts = 5;
      fact.consecutiveErrors = 2;
      fact.lastSeen = now - 24 * 60 * 60 * 1000;
      fact.nextReviewTimestamp = now - 3600000; // 1 hr overdue

      const score = calculateFactPriority(fact, now);
      expect(score.score).toBeGreaterThan(150);
      expect(score.category).toBe('weak_or_due');
    });

    it('downweights facts seen very recently to prevent immediate repetition', () => {
      const fact = createInitialFactMemoryState('mul:7:8');
      const now = Date.now();
      fact.totalAttempts = 3;
      fact.lastSeen = now - 20000; // seen 20 seconds ago

      const score = calculateFactPriority(fact, now);
      // Recency penalty reduces score
      expect(score.score).toBeLessThan(70);
    });

    it('assigns highest priority to skipped facts to schedule them for instruction', () => {
      const fact = createInitialFactMemoryState('mul:17:8');
      const now = Date.now();
      fact.totalAttempts = 1;
      fact.skipCount = 1;
      fact.lastSkipped = now;
      fact.correctAttempts = 0;

      const score = calculateFactPriority(fact, now);
      expect(score.score).toBeGreaterThanOrEqual(180);
      expect(score.category).toBe('weak_or_due');
      expect(score.reason).toContain('Skipped fact');
    });
  });

  describe('selectNextFact queue mixing', () => {
    it('prioritizes delayed review items when due count is reached', () => {
      const candidates: FactKey[] = ['mul:7:8', 'mul:7:9', 'mul:7:10'];
      const factMap = {};
      const delayedQueue = [{ factKey: 'mul:17:6' as FactKey, dueAtCount: 3 }];

      // At question count 3, delayed repair item is due
      const selection = selectNextFact(candidates, factMap, [], undefined, delayedQueue, 3);
      expect(selection.factKey).toBe('mul:17:6');
      expect(selection.selectionReason).toContain('Delayed retrieval test');
    });

    it('selects valid candidate facts from the pool without crashing', () => {
      const candidates: FactKey[] = ['mul:6:6', 'mul:6:7', 'mul:6:8', 'mul:6:9'];
      const factMap = {};

      const selection = selectNextFact(candidates, factMap, ['mul:6:6']);
      expect(candidates).toContain(selection.factKey);
      expect(selection.factKey).not.toBe('mul:6:6'); // avoids immediate repetition
    });
  });
});
