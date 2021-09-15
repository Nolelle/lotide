const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should Fail
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => should Fail
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); // => should Fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should Fail
assertEqual(eqArrays([1, 2, 3, 6], [1, 2, 3]), true); // => should Fail
assertEqual(eqArrays([1, 3, 3], [1, 2, 3, 6]), true); // => should Fail
assertEqual(eqArrays([1, 3, 3, 4], [1, 2, 3, 6]), true); // => should Fail
assertEqual(eqArrays([[1, 2, 3], 3, 3], [[1, 2, 3], 3, 3]), true); // => should PASS
