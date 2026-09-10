import { describe, it, expect } from 'vitest';
import {
  getAdditionStrategy,
  getSubtractionStrategy,
  getMultiplicationStrategy,
  getSquareStrategy,
  getCubeStrategy,
} from '../strategies';

describe('strategies: Mental Decomposition & Pedagogical Validity', () => {
  it('provides Left-to-Right addition steps resolving to exact sum', () => {
    const { steps, strategyTitle } = getAdditionStrategy(57, 68);
    expect(strategyTitle).toContain('Accumulator');
    expect(steps.length).toBeGreaterThan(0);
    // Last step intermediate value must equal 57 + 68 = 125
    expect(steps[steps.length - 1].intermediateValue).toBe(125);
  });

  it('provides Level 1 non-bridging addition steps', () => {
    const { steps } = getAdditionStrategy(43, 5);
    expect(steps.length).toBe(1);
    expect(steps[0].intermediateValue).toBe(48);
  });

  it('provides Level 1 bridging addition steps', () => {
    const { steps } = getAdditionStrategy(47, 8);
    expect(steps.length).toBe(2);
    expect(steps[0].intermediateValue).toBe(50); // Decade bridge
    expect(steps[1].intermediateValue).toBe(55); // Final sum
  });

  it('provides Complements Subtraction steps resolving to exact difference', () => {
    const { steps, strategyTitle } = getSubtractionStrategy(84, 38);
    expect(strategyTitle).toContain('Complements');
    expect(steps.length).toBe(3);
    expect(steps[0].intermediateValue).toBe(40); // Rounded subtrahend
    expect(steps[1].intermediateValue).toBe(44); // 84 - 40
    expect(steps[2].intermediateValue).toBe(46); // 44 + 2
  });

  it('provides Direct Unit Subtraction for non-borrowing 2-digit - 1-digit', () => {
    const { steps } = getSubtractionStrategy(58, 4);
    expect(steps.length).toBe(1);
    expect(steps[0].intermediateValue).toBe(54);
  });

  it('provides Half-and-Double multiplication steps', () => {
    const { steps, strategyTitle } = getMultiplicationStrategy(35, 14);
    expect(strategyTitle).toContain('Half-and-Double');
    expect(steps.length).toBe(2);
    expect(steps[1].intermediateValue).toBe(490);
  });

  it('provides Rounding & Compensation for 9-ending multipliers', () => {
    const { steps, strategyTitle } = getMultiplicationStrategy(29, 7);
    expect(strategyTitle).toContain('Rounding');
    expect(steps[steps.length - 1].intermediateValue).toBe(203);
  });

  it('provides Vedic Ekadhikena steps for numbers ending in 5', () => {
    const { steps, strategyTitle } = getSquareStrategy(75);
    expect(strategyTitle).toContain('Ending in 5');
    expect(steps[0].intermediateValue).toBe(56); // 7 * 8
    expect(steps[1].intermediateValue).toBe(5625); // 75^2
  });

  it('provides Base 50 shortcut for squares near 50', () => {
    const { steps, strategyTitle } = getSquareStrategy(53);
    expect(strategyTitle).toContain('Base 50');
    expect(steps[0].intermediateValue).toBe(28); // 25 + 3
    expect(steps[1].intermediateValue).toBe('09'); // 3^2
    expect(steps[2].intermediateValue).toBe(2809); // 53^2
  });

  it('provides Binomial Expansion for cubes up to 100', () => {
    const { steps, strategyTitle } = getCubeStrategy(24);
    expect(strategyTitle).toContain('Binomial');
    expect(steps.length).toBe(3);
    expect(steps[2].intermediateValue).toBe(24 * 24 * 24);
  });

  it('provides Decade Cube Anchor for clean multiples of 10 up to 100', () => {
    const { steps, strategyTitle } = getCubeStrategy(100);
    expect(strategyTitle).toContain('Decade Cube Anchor');
    expect(steps[1].intermediateValue).toBe(1000000);
  });
});
