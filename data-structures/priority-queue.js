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
  dequeue() {
    const trickleDown = (index = 0, leftChildIndex = 1) => {
      const rightChildIndex = leftChildIndex + 1;
      let swap = null;
      if (leftChildIndex < this.values.length) {
        if (
          this.values[index].priority > this.values[leftChildIndex].priority
        ) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.values.length) {
        if (
          (!swap &&
            this.values[index].priority >
              this.values[rightChildIndex].priority) ||
          (swap &&
            this.values[rightChildIndex].priority <
              this.values[leftChildIndex].priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap) {
        [this.values[index], this.values[swap]] = [
          this.values[swap],
          this.values[index],
        ];
        trickleDown(swap, swap * 2 + 1);
      }
    };
    const removed = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values[this.values.length - 1];
      this.values.pop();
      trickleDown();
    }
    return removed;
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
queue.dequeue();
console.log(queue.values);
queue.dequeue();
console.log(queue.values);
