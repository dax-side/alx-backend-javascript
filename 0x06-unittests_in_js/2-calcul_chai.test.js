const calculateNumber = require('./2-calcul_chai.js');
const expect = require('chai').expect;

describe("ADDITION", () => {
  it('1. Should be able to add and return rounded sum', () => {
    const sum = calculateNumber('SUM', 1, 3);
    expect(sum).to.eql(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.eql(5);
  });
  it('2. should throw error if NaN passed', function () {
    expect(() => calculateNumber('SUM', NaN, 3)).to.throw();
  });
});

describe("SUBTRACT", () => {
  it('1. Should be able to subtract and return rounded sum.', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.eql(-2);
    expect(calculateNumber('SUBTRACT', 1.4, 4.75)).to.eql(-4);
  });
  it('2. should throw error if invalid type', function () {
    expect(() => calculateNumber('blah', 2, 3)).to.throw();
  });
});

describe("DIVIDE", () => {
  it('1. Should be able to divide and return rounded sum.', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.eql(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.eql('Error');
  });
  it('2. Should be able to throw an error if DivisionError', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.eql('Error');
  });
});
