// const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("original array is not modified", () => {
    let originalArr = [1, 2, 3];
    let newArr = tail[(1, 2, 3)];
    assert.deepEqual(originalArr, [1, 2, 3]);
  });
});
