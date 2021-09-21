const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }

  //return all indicies (zero based positions) in the string where each character is found. For each letter, instead of returning just one number to represent its number of occurrences,
  // multiple numbers may be needed to represent all the places in the string that it shows up.(Prob an array of the indicies)
  return results;
};

module.exports = letterPositions;
//Test Cases
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
// assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
