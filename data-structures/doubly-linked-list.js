class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    const removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }
    this.length--;
    return removedTail;
  }
  shift() {
    if (!this.length) return undefined;
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (this.length < 1 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    if (index > this.length / 2) {
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return Boolean(this.unshift(val));
    if (index === this.length) return Boolean(this.push(val));

    const foundNode = this.get(index);
    const newNode = new Node(val);
    const prevNode = foundNode.prev;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = foundNode;
    foundNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const foundNode = this.get(index);
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
  print() {
    const printArray = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      printArray.push(current.val);
      current = current.next;
    }
    return printArray;
  }
}
const testList = new DoublyLinkedList();
testList.push(0);
testList.push(1);
testList.push(2);
testList.push(3);
testList.push(4);
testList.push(5);

console.log(testList.remove(3));
console.log(testList.print());
