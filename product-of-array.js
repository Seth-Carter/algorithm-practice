// An algorithm that takes an array of numbers and returns their product

function productOfArray(array) {
  if (array.length <= 1) return array[0];
  return array[0] * productOfArray(array.slice(1));
}

const testArray = [2,2,2];
console.log(productOfArray(testArray));