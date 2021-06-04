// This algorithm takes a base and an exponent. It returns the
// power of the base to the exponent. This mimics the functionality of Math.pow()

function powerOf(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return base * powerOf(base, exponent - 1); 
}

console.log(powerOf(2,4));