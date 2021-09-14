class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    const bubbleUp = (
      index = this.values.length - 1,
      parentIndex = Math.floor(Math.abs((index - 1) / 2))
    ) => {
      if (this.values[index].priority >= this.values[parentIndex].priority) {
        return;
      }
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor(Math.abs((index - 1) / 2));
      return bubbleUp(index, parentIndex);
    };
    return bubbleUp();
  }
}

const queue = new PriorityQueue();
queue.enqueue('Clean kitchen', 20);
queue.enqueue('Clean bedroom', 30);
queue.enqueue('Clean bathroom', 5);
queue.enqueue('Clean living room', 1);
queue.enqueue('Clean garden', 60);
queue.enqueue('Take shower', 0);
console.log(queue.values);
