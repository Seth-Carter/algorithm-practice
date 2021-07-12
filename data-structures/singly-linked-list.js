class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let current = this.head;
    let pre = current;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    // break the link between the next to last node and the last node
    pre.next = null;
    // reassign the new last node as the tail
    this.tail = pre;
    // decrement the length property
    this.length--;
    // return the new last node
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  shift() {
    if (!this.length) return undefined;
    const temp = this.head;
    this.head = temp.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, valueToSet) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.value = valueToSet;
    return true;
  }
  insert(index, valueToInsert) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return Boolean(this.unshift(valueToInsert));
    if (index === this.length) return Boolean(this.push(valueToInsert));

    const preNode = this.get(index - 1);
    const postNode = preNode.next;
    const nodeToInsert = new Node(valueToInsert);
    nodeToInsert.next = postNode;
    preNode.next = nodeToInsert;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return Boolean(this.shift(index));
    if (index === this.length - 1) return Boolean(this.pop(index));

    const preNode = this.get(index - 1);
    const nodeToRemove = preNode.next;
    const postNode = nodeToRemove.next;
    preNode.next = postNode;
    this.length--;
    return nodeToRemove;
  }
  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let node = this.tail;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    const printArray = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      printArray.push(current.value);
      current = current.next;
    }
    return printArray;
  }
}

const testList = new SinglyLinkedList();
testList.push(0);
testList.push(1);
testList.push(2);
testList.push(3);

console.log(testList.print());
console.log(testList.reverse());
console.log(testList.print());
