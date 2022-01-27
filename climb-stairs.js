// https://leetcode.com/problems/climbing-stairs/

const climbStairs = (n, memo = { 1: 1, 2: 2 }) => {
  // With recursion and memoization
  // if (n in memo) return memo[n]
  // if (n <= 0) return 0
  // memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
  // return memo[n]

  // with fibonacci-style array addition
  const output = [1,2]
  for (let i = 2; i < n; i++) {
    output.push(output[i-1] + output[i-2])
  }

  return output[n - 1]
}
 