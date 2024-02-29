const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('both a and b whole numbers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('rounding up a, b whole number', () => {
      expect(calculateNumber('SUM', 1.5, 3.0)).to.equal(5);
    });

    it('a whole number, rounding up b', () => {
      expect(calculateNumber('SUM', 1.0, 3.7)).to.equal(5);
    });

    it('rounding down a, b whole number', () => {
      expect(calculateNumber('SUM', 1.4, 3.0)).to.equal(4);
    });

    it('a whole number, rounding down b', () => {
      expect(calculateNumber('SUM', 1.0, 3.3)).to.equal(4);
    });

    it('rounding down both a and b', () => {
      expect(calculateNumber('SUM', 1.3, 3.4)).to.equal(4);
    });

    it('rounding down a and rounding up b', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('rounding up both a and b', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('rounding down a and b with trailing numbers > 5', () => {
      expect(calculateNumber('SUM', 1.28, 3.49)).to.equal(4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('both a and b whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('mixed numbers(whole and floating number)', () => {
      expect(calculateNumber('SUBTRACT', 5, 3.7)).to.equal(1);
    });

    it('one number having remainder >= 0.5 and the other having < 0.5', () => {
      expect(calculateNumber('SUBTRACT', 5.2, 3.7)).to.equal(1);
    });

    it('both a and b floating point numbers with remainder >= 0.5', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
    });
  });

  describe('DIVIDE operation', () => {
    it('both a and b whole numbers same signs, exact division', () => {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });

    it('both a and b whole numbers different signs, exact division', () => {
      expect(calculateNumber('DIVIDE', -10, 5)).to.equal(-2);
    });

    it('both a and b whole numbers same signs, integer division', () => {
      expect(calculateNumber('DIVIDE', -10, -4)).to.equal(2.5);
    });

    it('both a and b whole numbers different signs, integer division', () => {
      expect(calculateNumber('DIVIDE', 10, -4)).to.equal(-2.5);
    });

    it('mixed numbers whole and float number same signs, exact division', () => {
      expect(calculateNumber('DIVIDE', 10, 5.3)).to.equal(2);
    });

    it('mixed numbers whole and float number diff signs, exact division', () => {
      expect(calculateNumber('DIVIDE', -10, 4.5)).to.equal(-2);
    });

    it('mixed numbers whole and float number same signs, integer division', () => {
      expect(calculateNumber('DIVIDE', 10, 3.5)).to.equal(2.5);
    });

    it('mixed numbers whole and float number diff signs, integer division', () => {
      expect(calculateNumber('DIVIDE', -10, 3.5)).to.equal(-2.5);
    });

    it('both float numbers same signs, exact division', () => {
      expect(calculateNumber('DIVIDE', 9.5, 4.5)).to.equal(2);
    });

    it('both float numbers same signs, integer division', () => {
      expect(calculateNumber('DIVIDE', 9.5, 4.3)).to.equal(2.5);
    });

    it('both float numbers diff signs, exact division', () => {
      expect(calculateNumber('DIVIDE', -9.6, 4.5)).to.equal(-2);
    });

    it('both float numbers diff signs, integer division', () => {
      expect(calculateNumber('DIVIDE', 9.5, -4.3)).to.equal(-2.5);
    });

    it('positive number and dividend rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('negative number and dividend 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
