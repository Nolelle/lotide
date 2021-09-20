const tail = function (array) {
  let newArray = array.slice(1);
  console.log(newArray);
  return newArray;
};

module.exports = tail;
