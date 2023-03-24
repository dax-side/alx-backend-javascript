const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe("ADDITION", () => {
  it('Should be able to add and return rounded sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should throw error if NaN passed', () => {
    assert.throws(() => calculateNumber('SUM', NaN, 3), '[() =>: TypeError]');
  });
});

describe("SUBTRACT", () => {
  it('Should be able to subtract and return rounded sum.', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.75), -4);
  });
});

describe("DIVIDE", () => {
  it('Should be able to divide and return rounded sum.', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('Should be able to throw an error if DivisionError', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
