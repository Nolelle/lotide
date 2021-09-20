const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should Fail
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => should Fail
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); // => should Fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should Fail
assertEqual(eqArrays([1, 2, 3, 6], [1, 2, 3]), true); // => should Fail
assertEqual(eqArrays([1, 3, 3], [1, 2, 3, 6]), true); // => should Fail
assertEqual(eqArrays([1, 3, 3, 4], [1, 2, 3, 6]), true); // => should Fail
assertEqual(eqArrays([[1, 2, 3], 3, 3], [[1, 2, 3], 3, 3]), true); // => should PASS
