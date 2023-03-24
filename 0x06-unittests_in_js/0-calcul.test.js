const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe("Calculate Sum", function() {
  it("Should be able to add and return rounded sum.", function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    assert.strictEqual(calculateNumber(-3, -5), -8);
  });
  it('should throw error if NaN passed', function () {
    assert.throws(() => calculateNumber(NaN, 3), '[Function: TypeError]');
  });
});
