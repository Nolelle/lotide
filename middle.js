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

module.exports = middle;
