import { Queue } from '@datastructures-js/queue';

const averageOfLevels = (root) => {
  const result = [];
  if (root === null) return result;

  const queue = new Queue();
  console.log(queue);
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    let levelSum = 0;
    let levelSize = queue.size();

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.dequeue();
      levelSum += currentNode.val;
      if (currentNode.left !== null) queue.enqueue(currentNode.left);
      if (currentNode.right !== null) queue.enqueue(currentNode.right);
    }

    result.push(levelSum / levelSize);
  }
  return result;
};
