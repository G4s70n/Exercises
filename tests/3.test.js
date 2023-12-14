const summation = require('../exercises/3.js');

describe('summation Test', () => {
  test('Returns the sum from 1 to num', () => {
    expect(summation(2)).toBe(3);
    expect(summation(8)).toBe(36);
  });

  test('Returns 0 when num is 0', () => {
    expect(summation(0)).toBe(0);
  });

  test('Handles only positive numbers, returns 0 for negative inputs', () => {
    expect(summation(-3)).toBe(0);
  });
});
