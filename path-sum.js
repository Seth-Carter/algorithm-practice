// https://leetcode.com/problems/path-sum/

const hasPathSum = (root, targetSum) => {
  // Recursive
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
