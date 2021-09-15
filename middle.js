const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Middle function
const middle = function (array) {
  let newArr = [];
  // console.log("Array length: ", array.length);
  if (array.length <= 2) {
    return newArr;
  } else if (array.length % 2 !== 0 && array.length > 2) {
    let oddMiddle = Math.floor(array.length / 2);
    newArr.push(array[oddMiddle]);
    return newArr;
  } else if (array.length % 2 === 0 && array.length > 2) {
    let evenMiddle1 = array.length / 2 - 1;
    let evenMiddle2 = evenMiddle1 + 1;
    newArr.push(array[evenMiddle1]);
    newArr.push(array[evenMiddle2]);
    return newArr;
  }
};

//Test Cases
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
