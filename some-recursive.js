// A recursive algorithm that accepts an array and a callback.
// The function returns true if a single value in the array
// returns true when passed to the callback.

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([2, 4, 6, 8], (val) => val % 2 === 0));
