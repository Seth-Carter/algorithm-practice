class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const recursiveHelper = (searchNode, nodeToInsert) => {
        if (searchNode.value === nodeToInsert.value) return ++searchNode.count;
        if (nodeToInsert.value > searchNode.value) {
          if (!searchNode.right) return (searchNode.right = nodeToInsert);
          return recursiveHelper(searchNode.right, nodeToInsert);
        } else {
          if (!searchNode.left) return (searchNode.left = nodeToInsert);
          return recursiveHelper(searchNode.left, nodeToInsert);
        }
      };
      recursiveHelper(this.root, newNode);
    }
    return this;
  }
  find(value, node = this.root) {
    if (!node) return false;
    if (node.value === value) return node;
    if (value > node.value) return this.find(value, node.right);
    return this.find(value, node.left);
  }
  iterativeFind(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return current;
      if (value > current.value) {
        current = current.right;
      } else current = current.left;
    }
    return false;
  }
}

const testBst = new BinarySearchTree();
testBst.insert(35);
testBst.insert(35);
testBst.insert(25);
testBst.insert(45);
testBst.insert(5);
testBst.insert(12);
testBst.insert(99);
testBst.insert(99);
console.log(testBst.recursiveFind(12));
console.log(testBst.iterativeFind(12));
