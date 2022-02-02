// https://leetcode.com/problems/same-tree/
import { Queue } from '@datastructures-js/queue';

const isSameTree = (p, q) => {
  // BFS
  // const enqueue = (queue, node) => {
  //   if (!node?.left && !node?.right) return;
  //   queue.enqueue(node?.left ? node.left : null);
  //   queue.enqueue(node?.right ? node.right : null);
  // };

  // const queue1 = new Queue();
  // const queue2 = new Queue();

  // queue1.enqueue(p);
  // queue2.enqueue(q);

  // while (!queue1.isEmpty() || !queue2.isEmpty()) {
  //   let queue1Node = queue1.dequeue();
  //   let queue2Node = queue2.dequeue();
  //   if (queue1Node?.val !== queue2Node?.val) return false;

  //   enqueue(queue1, queue1Node);
  //   enqueue(queue2, queue2Node);
  // }
  // return true;

  // Recursive
  if (p && q) {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  } else return p?.val === q?.val;
};
