const assertEqual = require("./assertEqual");

//Function Implementation
const findKey = function (obj, cb) {
  let keys = Object.keys(obj);
  // console.log("Key: ", keys);
  for (let key of keys) {
    //console.log("Stars: ", obj[key]["stars"]);
    if (cb(obj[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;

//Test Case
// console.log(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   )
// ); // => "noma"

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 1
//   ),
//   "Blue Hill"
// );

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 3
//   ),
//   "Akaleri"
// );
