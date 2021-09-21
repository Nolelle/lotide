const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};
const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  //check lengths of key array
  if (key1.length !== key2.length) {
    return false;
  }
  //loop through key 1 array
  for (let key of key1) {
    //check if keys in one array are included in another, return false if not
    if (!key2.includes(key)) {
      return false;
    }
    //not sure if this is is better then Array.isArray, ask advisor tommorow, wasnt aware that there was a is.Array function
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      //check if values mismatch, return false once we do
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      ` ✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;

// const object1 = { a: "1", b: 2 };
// const object2 = { b: 2, a: "1" };
// assertObjectsEqual(object1, object2);
