// An algorithm that accepts an object and returns an array
// of all the values in the object that are strings.

function collectStrings(obj) {
  const result = [];
  for (let value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result.push(...collectStrings(value));
    } else if (typeof value === 'string') {
      result.push(value);
    }
  }
  return result;
}

const testObj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(testObj));
