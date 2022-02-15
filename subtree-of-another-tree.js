// https://leetcode.com/problems/subtree-of-another-tree/

const isSubtree = (root, subRoot) => {
  const isEqual = (root, subRoot) => {
    if (!root || !subRoot) return root === subRoot;
    return (
      root.val === subRoot.val &&
      isEqual(root.left, subRoot.left) &&
      isEqual(root.right, subRoot.right)
    );
  };

  const dfs = (root, subRoot) => {
    if (!root) return false;
    return (
      isEqual(root, subRoot) ||
      dfs(root.left, subRoot) ||
      dfs(root.right, subRoot)
    );
  };
  return dfs(root, subRoot);
};
