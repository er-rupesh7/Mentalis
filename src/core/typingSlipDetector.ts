/**
 * Intelligent Typing Slip & Motor Error Detector
 * Distinguishes accidental physical keypad/keyboard slips from genuine arithmetic misconceptions.
 * Protects deliberate practice progress scores from motor and typing noise.
 */

import { TypingSlipType } from './types';
export type { TypingSlipType };

export interface TypingSlipAnalysis {
  isSlip: boolean;
  slipType?: TypingSlipType;
  explanation: string;
}

// 3x3 NumPad Coordinate Map
const NUMPAD_COORDINATES: Record<string, [number, number]> = {
  '7': [0, 0], '8': [0, 1], '9': [0, 2],
  '4': [1, 0], '5': [1, 1], '6': [1, 2],
  '1': [2, 0], '2': [2, 1], '3': [2, 2],
  '0': [3, 1],
};

// Keyboard 1-0 Top Row Order
const KEYBOARD_ROW = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

/**
 * Checks whether two digit characters are physically adjacent on a standard
 * numpad (including diagonals) or horizontal keyboard row.
 */
export function areDigitsPhysicallyAdjacent(d1: string, d2: string): boolean {
  if (d1 === d2) return true;

  // 1. Check NumPad Grid (Euclidean distance <= sqrt(2) ~ 1.42)
  const pos1 = NUMPAD_COORDINATES[d1];
  const pos2 = NUMPAD_COORDINATES[d2];
  if (pos1 && pos2) {
    const dr = Math.abs(pos1[0] - pos2[0]);
    const dc = Math.abs(pos1[1] - pos2[1]);
    // Allow standard adjacency, diagonals, and wide 0 touching 1 or 3
    if (dr <= 1 && dc <= 1) return true;
    if (d1 === '0' && (d2 === '1' || d2 === '2' || d2 === '3')) return true;
    if (d2 === '0' && (d1 === '1' || d1 === '2' || d1 === '3')) return true;
  }

  // 2. Check Horizontal Keyboard Row
  const idx1 = KEYBOARD_ROW.indexOf(d1);
  const idx2 = KEYBOARD_ROW.indexOf(d2);
  if (idx1 !== -1 && idx2 !== -1) {
    if (Math.abs(idx1 - idx2) === 1) return true;
  }

  return false;
}

/**
 * Evaluates whether a user's incorrect answer is a physical motor slip / typo
 * rather than a genuine mathematical misunderstanding.
 */
export function detectTypingSlip(
  userAnswer: number,
  correctAnswer: number,
  table?: number,
  multiplier?: number
): TypingSlipAnalysis {
  if (userAnswer === correctAnswer) {
    return { isSlip: false, explanation: 'Answer is correct.' };
  }

  // 1. Multiple Interference Rejection:
  // If the user's answer is an actual multiple of the table (e.g. 13x5 = 65 when asked 13x4 = 52),
  // this is an adjacent multiple calculation error, NOT a typing slip!
  if (table && table > 1) {
    if (userAnswer % table === 0 && userAnswer !== 0) {
      const computedMult = userAnswer / table;
      if (multiplier && Math.abs(computedMult - multiplier) === 1) {
        return {
          isSlip: false,
          explanation: `Calculated adjacent multiple (${table} × ${computedMult} = ${userAnswer}) instead of × ${multiplier}.`,
        };
      }
      return {
        isSlip: false,
        explanation: `Calculated a different multiple of Table ×${table}.`,
      };
    }
  }

  const userStr = Math.abs(userAnswer).toString();
  const correctStr = Math.abs(correctAnswer).toString();

  // 2. Digit Transposition Slip (e.g. 52 -> 25, 104 -> 140, 91 -> 19)
  if (
    userStr.length === correctStr.length &&
    userStr.length >= 2 &&
    userStr !== correctStr
  ) {
    // Check if exactly two adjacent digits are swapped
    for (let i = 0; i < correctStr.length - 1; i++) {
      const swapped =
        correctStr.slice(0, i) +
        correctStr[i + 1] +
        correctStr[i] +
        correctStr.slice(i + 2);
      if (swapped === userStr) {
        return {
          isSlip: true,
          slipType: 'digit_transposition',
          explanation: `Transposed digits (${userStr} instead of ${correctStr}).`,
        };
      }
    }
  }

  // 3. Premature Enter / Truncation Slip (e.g. typed 5 for 52, or 10 for 104)
  if (
    correctStr.length >= 2 &&
    userStr.length === correctStr.length - 1 &&
    correctStr.startsWith(userStr)
  ) {
    return {
      isSlip: true,
      slipType: 'premature_enter',
      explanation: `Premature submit before completing all digits (${userStr}_).`,
    };
  }

  // 4. Double-Stroke / Key Bounce Slip (e.g. typed 522 or 552 for 52)
  if (userStr.length === correctStr.length + 1) {
    for (let i = 0; i < userStr.length - 1; i++) {
      if (userStr[i] === userStr[i + 1]) {
        const withoutDuplicate = userStr.slice(0, i) + userStr.slice(i + 1);
        if (withoutDuplicate === correctStr) {
          return {
            isSlip: true,
            slipType: 'double_stroke',
            explanation: `Key bounce / repeated stroke (${userStr[i]}${userStr[i]}).`,
          };
        }
      }
    }
  }

  // 5. Physical Keypad / Keyboard Adjacency Slip (Single differing digit adjacent to target)
  if (userStr.length === correctStr.length) {
    let diffIndex = -1;
    let diffCount = 0;

    for (let i = 0; i < correctStr.length; i++) {
      if (userStr[i] !== correctStr[i]) {
        diffCount++;
        diffIndex = i;
      }
    }

    if (diffCount === 1 && diffIndex !== -1) {
      const userChar = userStr[diffIndex];
      const correctChar = correctStr[diffIndex];

      if (areDigitsPhysicallyAdjacent(userChar, correctChar)) {
        return {
          isSlip: true,
          slipType: 'keypad_adjacency',
          explanation: `Fat-finger adjacent key slip on '${userChar}' (next to '${correctChar}').`,
        };
      }
    }
  }

  return {
    isSlip: false,
    explanation: 'Calculation error or arithmetic deviation.',
  };
}
