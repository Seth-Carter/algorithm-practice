class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    return this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const getParentIndex = (index) => Math.floor(Math.abs((index - 1) / 2));
    let parentIndex = getParentIndex(index);
    while (true) {
      if (this.values[index] <= this.values[parentIndex]) break;
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = getParentIndex(index);
    }
    return index;
  }
  extractMax() {
    const extracted = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = extracted;
      this.trickleDown();
    }
    return extracted;
  }
  trickleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    const getChildIndex = (index) => 2 * index + 1;
    while (true) {
      let leftChildIndex = getChildIndex(index);
      let rightChildIndex = getChildIndex(index) + 1;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((!swap && rightChild > element) || (swap && rightChild > leftChild))
          swap = rightChildIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const heap = new BinaryHeap();
heap.insert(80);
heap.insert(4);
heap.insert(20);
heap.insert(17);
heap.insert(57);
heap.insert(34);
console.log(heap.insert(3));
console.log(heap.insert(200));
console.log(heap.extractMax());
console.log(heap.values);
