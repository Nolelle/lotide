const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // console.log("key1: ", key1);
  // console.log("key2: ", key2);

  //check lengths of key array
  // console.log("key1 length: ", key1.length);
  // console.log("key1 length: ", key2.length);
  if (key1.length !== key2.length) {
    return false;
  }
  //loop through key 1 array
  for (let key of key1) {
    //check if keys in one array are included in another, return false if not
    if (!key2.includes(key)) {
      // console.log("Testing if it reaches key check");
      return false;
    }
    //not sure if this is is better then Array.isArray, ask advisor tommorow
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      //check if values mismatch, return false once we do
      // console.log("Testing if it reaches value check ");
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//Test Code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, abc), false); //=> false
// assertEqual(eqObjects(cd, dc), true); // => true
// assertEqual(eqObjects(cd, cd2), false); // => false
