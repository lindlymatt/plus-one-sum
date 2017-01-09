'use strict';

const expect = require('chai').expect;
const plusOneSum = require('../script.js');

describe('plusOneSum', function () {

  it('Should return the sum of the elements, with plus one on each element..', function () {
    expect(plusOneSum([1, 2, 3, 4])).to.equal(14);
    expect(plusOneSum([2, 3, 4, 5])).to.equal(18);
  });

  it('Should return 0 when the array is empty..', function () {
    expect(plusOneSum([])).to.equal(0);
  });

  it('Should return null if the array is not filled with ONLY integers..', function () {
    expect(plusOneSum([1, 'a', 2])).to.equal(null);
  });

  it('Should return null if the data being passed in is not an array..', function () {
    expect(plusOneSum(new Date())).to.equal(null);
    expect(plusOneSum('a')).to.equal(null);
    expect(plusOneSum({})).to.equal(null);
  });
});
