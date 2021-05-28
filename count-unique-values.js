// This is an algorithm that counts the number of unique values in a sorted array
// Somewhat of a pure function variation on remove-duplicates-from-sorted-array.js
// but it only counts the unique values

function countUniqueValues(array) {
  if (array.length === 0) return 0;
  let i = 0;
  let counter = 1;
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      counter++; 
      i = j;
    }
  }
  return counter;

}

console.log(countUniqueValues([1,1,1,2,2,3,4,4,4,4,4,4,5,5,5,5,6,7]));