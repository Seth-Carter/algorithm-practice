import { Queue } from '@datastructures-js/queue';

const minDepth = (root) => {
  let depth = 0;
  if (root === null) return depth;

  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    depth++;
    const size = queue.size();

    for (let i = 0; i < size; i++) {
      const currentNode = queue.dequeue();
      if (currentNode.left === null && currentNode.right === null) return depth;
      if (currentNode.left !== null) queue.enqueue(currentNode.left);
      if (currentNode.right !== null) queue.enqueue(currentNode.right);
    }
  }
};
