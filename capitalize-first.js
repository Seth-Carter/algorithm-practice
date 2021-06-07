// An algorithm that, given an array of strings, capitalizes
// the first letter of each string

function capitalizeFirst(array) {
  if (array.length === 0) return [];
  const [head, ...tail] = array[0];
  const capitalizedString = [head.toUpperCase(), ...tail].join('')
  return [capitalizedString, ...capitalizeFirst(array.slice(1))];
}

console.log(capitalizeFirst(['car','taco','banana']))