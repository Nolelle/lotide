//Map function Inputs: Array, and Callback function
//Return a new array based on the results of the callback function.
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

//Words array
const words = ["ground", "control", "to", "major", "tom"];

//Function Implementation
const map = function (array, cb) {
  const results = [];
  for (let element of array) {
    results.push(cb(element));
  }
  return results;
};
module.exports = map;

//Test Cases

// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// assertArraysEqual(
//   map(words, (word) => word[1]),
//   ["r", "o", "o", "a", "o"]
// );
// assertArraysEqual(
//   map(words, (word) => word.length),
//   [6, 7, 2, 5, 3]
// );
// assertArraysEqual(
//   map(words, (word) => (word += "l")),
//   ["groundl", "controll", "tol", "majorl", "toml"]
// );
