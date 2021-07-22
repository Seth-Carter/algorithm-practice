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
      const search = (searchNode, nodeToInsert) => {
        if (searchNode.value === nodeToInsert.value) return ++searchNode.count;
        if (nodeToInsert.value > searchNode.value) {
          if (!searchNode.right) return (searchNode.right = nodeToInsert);
          return search(searchNode.right, nodeToInsert);
        } else {
          if (!searchNode.left) return (searchNode.left = nodeToInsert);
          return search(searchNode.left, nodeToInsert);
        }
      };
      search(this.root, newNode);
    }
    return this;
  }
}

const testBst = new BinarySearchTree();
console.log(testBst.insert(35));
console.log(testBst.insert(35));
console.log(testBst.insert(25));
console.log(testBst.insert(45));
console.log(testBst.insert(5));
console.log(testBst.insert(12));
console.log(testBst.insert(99));
