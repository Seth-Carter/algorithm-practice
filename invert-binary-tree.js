// https://leetcode.com/problems/invert-binary-tree/

const invertTree = (root) => {
  if (!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
