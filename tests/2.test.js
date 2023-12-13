const { expect } = require('@jest/globals');
const digitize = require('../exercises/2.js');

describe("Basic tests", () => {
  test("Testing for fixed tests", () => {
    expect(digitize(35231)).toEqual([1,3,2,5,3]);
    expect(digitize(0)).toEqual([0]);
  });
});
