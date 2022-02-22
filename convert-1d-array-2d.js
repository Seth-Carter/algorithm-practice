// https://leetcode.com/problems/convert-1d-array-into-2d-array/

const construct2DArray = (original, m, n) => {
  const result = [];
  if (m * n !== original.length) return result;

  let i = 0;
  for (let row = 0; row < m; row++) {
    result.push(original.slice(i, i + n));
    i += n;
  }

  return result;
};
