const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// The array to work with
// The callback (which Lodash calls "predicate")
//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value
const takeUntil = function (array, cb) {
  const results = [];
  for (let item of array) {
    // console.log("Item:", item);
    // console.log("CB:", cb(item));
    // console.log("--");
    if (cb(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;

//Test Cases

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);

// assertArraysEqual(
//   takeUntil(data1, (x) => x === 4),
//   [1, 2, 5, 7, 2, -1, 2]
// );
// assertArraysEqual(
//   takeUntil(data2, (x) => x === "Redwood"),
//   ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to"]
// );
