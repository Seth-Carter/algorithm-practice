// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import { Queue } from '@datastructures-js/queue';

const maxDepth = (root) => {
  if (!root) return 0;

  const queue = new Queue();
  queue.enqueue(root);

  let maxDepth = 0;

  while (!queue.isEmpty()) {
    maxDepth++;
    const size = queue.size();

    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      node.left && queue.enqueue(node.left);
      node.right && queue.enqueue(node.right);
    }
  }

  return maxDepth;
};
