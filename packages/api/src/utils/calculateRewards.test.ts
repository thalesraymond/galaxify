import { describe, it, expect } from 'vitest';
import { calculateRewards } from "./calculateRewards.js";

describe('calculateRewards', () => {
  it('should return the base reward for a low streak', () => {
    expect(calculateRewards(5)).toBe(5);
  });

  it('should return double the base reward for a high streak', () => {
    expect(calculateRewards(11)).toBe(10);
  });
});
