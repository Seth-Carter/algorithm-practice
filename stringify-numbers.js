// An algorithm that takes in an object, finds all values which
// are numbers, and converts them to strings.

function stringifyNumbers(obj) {
  const result = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[key] = stringifyNumbers(value);
    } else if (typeof value === 'number') {
      result[key] = value.toString();
    } else result[key] = value;
  }
  return result;
}

let obj1 = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66,
          test: {
            aNumber: 45,
            notANumber: null
          }
      }
  }
}

console.log(stringifyNumbers(obj1));