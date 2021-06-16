// A recursive algorithm that accepts an array which contains
// an arbitrary number of nested arrays and flattens it into
// a single array.

function flatten(array) {
  const result = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  }
  return result;
}

const testArray = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
const testArray2 = [1, 2, 3, [4, 5]];
const testArray3 = [[1, [1, 2]], [2], [3]];
const testArray4 = [1, 2, [3]];

console.log(flatten(testArray));
