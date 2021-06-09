// A recursive algorithm which, when given an array of
// strings, returns a new array with each string
// capitalized.

function capitalizeArray(array) {
  const result = [];
  for (let item of array) {
    if (item.length > 1) {
      result.push(capitalizeArray(item).join(''))
    } else {
      result.push(item.toUpperCase());
    }
  }
  return result;
}
const words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeArray(words));