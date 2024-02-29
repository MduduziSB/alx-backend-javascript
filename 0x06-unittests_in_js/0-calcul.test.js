const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('both a and b whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('rounding up a, b whole number', () => {
    assert.strictEqual(calculateNumber(1.5, 3.0), 5);
  });

  it('a whole number, rounding up b', () => {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5);
  });

  it('rounding down a, b whole number', () => {
    assert.strictEqual(calculateNumber(1.4, 3.0), 4);
  });

  it('a whole number, rounding down b', () => {
        assert.strictEqual(calculateNumber(1.0, 3.3), 4);
  });

  it('rounding down both a and b', () => {
    assert.strictEqual(calculateNumber(1.3, 3.4), 4);
  });

  it('rounding down a and rounding up b', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounding up both a and b', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('rounding down a and b with trailing numbers > 5', () => {
    assert.strictEqual(calculateNumber(1.28, 3.49), 4);
  });
});
