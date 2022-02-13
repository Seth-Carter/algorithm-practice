// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

const lowestCommonAncestor = (root, p, q) => {
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  return root;
};
