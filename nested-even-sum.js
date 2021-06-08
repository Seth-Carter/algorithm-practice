// A recursive algorithm that returns the sum all even numbers
// in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === 'number' && value % 2 === 0) {
      sum += value;
    } else if (typeof value === 'object' && value !== null) {
      sum += nestedEvenSum(value);
    }
  }
  return sum
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

const obj3 = {
  a: 2,
  b: 2,
  c: { aa: 2 },
  d: { aa: 3, bb: null, cc: 'test', dd: 2},
  e: 2
}

console.log(nestedEvenSum(obj2));