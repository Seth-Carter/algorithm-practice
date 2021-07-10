class Node {
  constructor(val) {
    this.val = val;
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
      console.log(current.val);
      current = current.next;
    }
  }
  push(val) {
    const newNode = new Node(val);
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
  unshift(val) {
    const newNode = new Node(val);
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
    return current.val;
  }
}

const testList = new SinglyLinkedList();
testList.push(0);
console.log(testList.push(1));
