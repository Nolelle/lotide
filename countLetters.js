const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  //input sentence is a string
  const result = {};
  for (let letter of sentence) {
    //console.log(letter);
    if (letter === " ") {
      continue;
    }
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  //return a count of each letters appreance in a sentence.
  return result;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").e, 3);
