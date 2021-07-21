class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) return null;
    const removedNode = this.last;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }
}

const testStack = new Stack();

testStack.push(1);
testStack.push(2);
testStack.push(3);
console.log(testStack);
testStack.pop();
console.log(testStack);
