import {
  detectTypingSlip,
  areDigitsPhysicallyAdjacent,
} from '../typingSlipDetector';

describe('Typing Slip & Motor Error Detector', () => {
  describe('areDigitsPhysicallyAdjacent', () => {
    it('detects adjacent keys on standard numpad', () => {
      // 1 is adjacent to 2, 4, 0
      expect(areDigitsPhysicallyAdjacent('1', '2')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('1', '4')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('1', '0')).toBe(true);
      // 5 is adjacent to 2, 4, 6, 8, and diagonals 1, 3, 7, 9
      expect(areDigitsPhysicallyAdjacent('5', '4')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('5', '6')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('5', '8')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('5', '2')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('5', '1')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('5', '9')).toBe(true);
      // 7 and 3 are far apart
      expect(areDigitsPhysicallyAdjacent('7', '3')).toBe(false);
    });

    it('detects adjacent keys on top row keyboard', () => {
      expect(areDigitsPhysicallyAdjacent('9', '0')).toBe(true);
      expect(areDigitsPhysicallyAdjacent('2', '3')).toBe(true);
    });
  });

  describe('detectTypingSlip', () => {
    it('detects physical numpad adjacency slips (off-by-one key)', () => {
      // Correct answer is 52. User typed 51 (1 is next to 2)
      const slip1 = detectTypingSlip(51, 52, 13, 4);
      expect(slip1.isSlip).toBe(true);
      expect(slip1.slipType).toBe('keypad_adjacency');

      // Correct answer is 104. User typed 105 (5 is next to 4)
      const slip2 = detectTypingSlip(105, 104, 13, 8);
      expect(slip2.isSlip).toBe(true);
      expect(slip2.slipType).toBe('keypad_adjacency');
    });

    it('detects digit transpositions (swapped order)', () => {
      // Correct is 52, user typed 25
      const slip = detectTypingSlip(25, 52, 13, 4);
      expect(slip.isSlip).toBe(true);
      expect(slip.slipType).toBe('digit_transposition');

      // Correct is 104, user typed 140
      const slip2 = detectTypingSlip(140, 104, 13, 8);
      expect(slip2.isSlip).toBe(true);
      expect(slip2.slipType).toBe('digit_transposition');
    });

    it('detects premature submit / truncation', () => {
      // Correct is 52, user typed 5
      const slip = detectTypingSlip(5, 52, 13, 4);
      expect(slip.isSlip).toBe(true);
      expect(slip.slipType).toBe('premature_enter');

      // Correct is 104, user typed 10
      const slip2 = detectTypingSlip(10, 104, 13, 8);
      expect(slip2.isSlip).toBe(true);
      expect(slip2.slipType).toBe('premature_enter');
    });

    it('detects key bounce / double stroke', () => {
      // Correct is 52, user typed 522
      const slip = detectTypingSlip(522, 52, 13, 4);
      expect(slip.isSlip).toBe(true);
      expect(slip.slipType).toBe('double_stroke');
    });

    it('rejects actual multiple confusion as NOT a slip (genuine arithmetic error)', () => {
      // User asked 13 x 4 (= 52), user answers 65 (= 13 x 5)
      const result = detectTypingSlip(65, 52, 13, 4);
      expect(result.isSlip).toBe(false);
      expect(result.explanation).toContain('adjacent multiple');

      // User asked 13 x 7 (= 91), user answers 78 (= 13 x 6)
      const result2 = detectTypingSlip(78, 91, 13, 7);
      expect(result2.isSlip).toBe(false);
    });

    it('rejects non-adjacent random calculation mistakes as NOT slips', () => {
      // Correct is 52, user answers 77
      const result = detectTypingSlip(77, 52, 13, 4);
      expect(result.isSlip).toBe(false);
    });
  });
});
