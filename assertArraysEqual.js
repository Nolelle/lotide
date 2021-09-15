/* const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
 };*/

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([4, 5, 6, 7], [4, 5, 6, 7]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should Fail
assertArraysEqual([1, 2, "3"], [1, 2, 3]); // => should Fail
assertArraysEqual([1, 3, 3], [1, 2, 3]); // => should Fail
assertArraysEqual([1, 2, 3], [1, 2, 5]); // => should Fail
assertArraysEqual([1, 2, 3, 6], [1, 2, 3]); // => should Fail
assertArraysEqual([1, 3, 3], [1, 2, 3, 6]); // => should Fail
assertArraysEqual([1, 3, 3, 4], [1, 2, 3, 6]); // => should Fail
assertArraysEqual([[1, 2, 3], 3, 3], [[1, 2, 3], 3, 3]); // => should PASS
