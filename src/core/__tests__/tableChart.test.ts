import { describe, it, expect } from 'vitest';
import {
  getMultiplicationTable,
  getSquaresTable,
  getCubesTable,
  getSquareRootTable,
  getCubeRootTable,
} from '../tableChartData';

describe('Table Chart Data Generators', () => {
  describe('getMultiplicationTable', () => {
    it('generates 20 multiples for a given number', () => {
      const table7 = getMultiplicationTable(7, 20);
      expect(table7).toHaveLength(20);
      expect(table7[0]).toEqual({ multiplier: 1, result: 7 });
      expect(table7[6]).toEqual({ multiplier: 7, result: 49 });
      expect(table7[19]).toEqual({ multiplier: 20, result: 140 });
    });

    it('works correctly for table 100 up to multiple 20', () => {
      const table100 = getMultiplicationTable(100, 20);
      expect(table100).toHaveLength(20);
      expect(table100[0]).toEqual({ multiplier: 1, result: 100 });
      expect(table100[19]).toEqual({ multiplier: 20, result: 2000 });
    });
  });

  describe('getSquaresTable', () => {
    it('generates squares up to 100 correctly', () => {
      const squares = getSquaresTable(100);
      expect(squares).toHaveLength(100);
      expect(squares[0].square).toBe(1);
      expect(squares[24].square).toBe(625); // 25^2
      expect(squares[99].square).toBe(10000); // 100^2
      expect(squares[24].isEndingIn5).toBe(true);
      expect(squares[19].isDecade).toBe(true); // 20
    });
  });

  describe('getCubesTable', () => {
    it('generates cubes up to 100 correctly with formatted string', () => {
      const cubes = getCubesTable(100);
      expect(cubes).toHaveLength(100);
      expect(cubes[0].cube).toBe(1);
      expect(cubes[1].cube).toBe(8);
      expect(cubes[9].cube).toBe(1000); // 10^3
      expect(cubes[99].cube).toBe(1000000); // 100^3
      expect(cubes[99].formattedCube).toBe('1,000,000');
    });
  });

  describe('getSquareRootTable', () => {
    it('identifies perfect squares and computes accurate decimals', () => {
      const sqrts = getSquareRootTable(100);
      expect(sqrts).toHaveLength(100);
      
      // Perfect squares
      expect(sqrts[0].isPerfect).toBe(true); // 1
      expect(sqrts[3].isPerfect).toBe(true); // 4
      expect(sqrts[3].formattedRoot).toBe('2');
      expect(sqrts[8].isPerfect).toBe(true); // 9
      expect(sqrts[8].formattedRoot).toBe('3');
      expect(sqrts[99].isPerfect).toBe(true); // 100
      expect(sqrts[99].formattedRoot).toBe('10');

      // Non-perfect square
      expect(sqrts[1].isPerfect).toBe(false); // 2
      expect(sqrts[1].formattedRoot).toBe('1.41421');
    });
  });

  describe('getCubeRootTable', () => {
    it('identifies perfect cubes and computes accurate decimals', () => {
      const cbrts = getCubeRootTable(100);
      expect(cbrts).toHaveLength(100);

      // Perfect cubes up to 100: 1, 8, 27, 64
      expect(cbrts[0].isPerfect).toBe(true); // 1
      expect(cbrts[0].formattedRoot).toBe('1');
      expect(cbrts[7].isPerfect).toBe(true); // 8
      expect(cbrts[7].formattedRoot).toBe('2');
      expect(cbrts[26].isPerfect).toBe(true); // 27
      expect(cbrts[26].formattedRoot).toBe('3');
      expect(cbrts[63].isPerfect).toBe(true); // 64
      expect(cbrts[63].formattedRoot).toBe('4');

      // Non-perfect cube
      expect(cbrts[1].isPerfect).toBe(false); // 2
      expect(cbrts[1].formattedRoot).toBe('1.25992');
    });
  });
});
