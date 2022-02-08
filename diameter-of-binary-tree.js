// https://leetcode.com/problems/diameter-of-binary-tree/

const diameterOfBinaryTree = (root, result = 0) => {
  const traverse = (root) => {
    if (!root) return 0;
    const left = traverse(root.left);
    const right = traverse(root.right);

    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  };

  traverse(root);
  return result;
};
