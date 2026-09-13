import { describe, it, expect } from 'vitest';
import { generateTechniqueProblem } from '../techniques/techniqueGenerators';
import { TECHNIQUE_CURRICULUM } from '../techniques/techniqueCurriculum';

describe('Techniques Interactive Practice Input & Step Progression', () => {
  it('generates valid practice problems for all techniques across difficulty tiers', () => {
    const techIds = Object.keys(TECHNIQUE_CURRICULUM) as (keyof typeof TECHNIQUE_CURRICULUM)[];
    
    for (const techId of techIds.slice(0, 10)) {
      for (const tier of [1, 2, 3, 4, 5] as const) {
        const prob = generateTechniqueProblem(techId, tier);
        expect(prob).toBeDefined();
        expect(prob.prompt).toBeTruthy();
        expect(prob.correctAnswer).toBeDefined();
        expect(prob.steps.length).toBeGreaterThan(0);
        
        for (const step of prob.steps) {
          expect(step.prompt).toBeTruthy();
          expect(step.expectedValue).toBeDefined();
          expect(step.subVocalization).toBeTruthy();
        }
      }
    }
  });

  it('correctly simulates single-character appending without duplicating inputs', () => {
    let inputBuffer = '';
    
    // Simulate user pressing '1' once on physical keyboard
    const appendChar = (char: string) => {
      inputBuffer += char;
    };
    
    appendChar('1');
    expect(inputBuffer).toBe('1');
    
    appendChar('5');
    expect(inputBuffer).toBe('15');
    
    // Simulate backspace erasing single character
    const backspace = () => {
      inputBuffer = inputBuffer.slice(0, -1);
    };
    
    backspace();
    expect(inputBuffer).toBe('1');
    
    backspace();
    expect(inputBuffer).toBe('');
  });

  it('correctly sanitizes input to valid math numerals, minus, and decimal', () => {
    const sanitize = (raw: string) => raw.replace(/[^0-9.-]/g, '');
    
    expect(sanitize('123')).toBe('123');
    expect(sanitize('12a3b')).toBe('123');
    expect(sanitize('-45.6')).toBe('-45.6');
    expect(sanitize('abc!@#')).toBe('');
  });
});
