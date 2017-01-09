'use strict';

// Warmup - Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests instead of console.logs :slightly_smiling_face:

function plusOneSum(arr) {
  const invalidArr = !Array.isArray(arr) || arr.some(int => !Number.isInteger(int));
  if (invalidArr) {
    return null;
  } else {
    return arr.reduce((sum, ele) => sum + (ele + 1), 0);
  }
}

module.exports = plusOneSum;
