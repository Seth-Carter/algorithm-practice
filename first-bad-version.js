// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      const pivot = Math.floor((right + left) / 2);
      const badVersion = isBadVersion(pivot);
      if (badVersion && !isBadVersion(pivot - 1)) return pivot;
      if (badVersion) right = pivot - 1;
      if (!badVersion) left = pivot + 1;
    }
  };
};
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//                    -
