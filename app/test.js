// sum.test.js
import assert from "assert";
import { calculateSumHelper } from "./sum.js";
describe("calculateSumHelper function", () => {
  it("should return 8 for calculateSumHelper(3, 5)", () => {
    assert.strictEqual(calculateSumHelper(3, 5), 8);
  });

  it("should return 7 for calculateSumHelper(10, -3)", () => {
    assert.strictEqual(calculateSumHelper(10, -3), 7);
  });

  it("should return -10 for calculateSumHelper(-4, -6)", () => {
    assert.strictEqual(calculateSumHelper(-4, -6), -10);
  });

  it("should return 5 for calculateSumHelper(0, 5)", () => {
    assert.strictEqual(calculateSumHelper(0, 5), 5);
  });

  it("should return 0 for calculateSumHelper(0, 0)", () => {
    assert.strictEqual(calculateSumHelper(0, 0), 0);
  });
});
