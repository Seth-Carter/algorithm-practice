class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstras(start, end) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let currentVertex;
    for (let vertex in this.adjacencyList) {
      vertex === start
        ? (distances[vertex] = 0)
        : (distances[vertex] = Infinity);
      previous[vertex] = null;
    }
    nodes.enqueue(start, distances[start]);
    while (nodes.values.length) {
      currentVertex = nodes.dequeue().val;
      if (currentVertex === end) {
        path.push(currentVertex);
        while (previous[currentVertex]) {
          path.push(previous[currentVertex]);
          currentVertex = previous[currentVertex];
        }
        return path.reverse();
      }
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        let potential = distances[currentVertex] + neighbor.weight;
        if (potential < distances[neighbor.node]) {
          distances[neighbor.node] = potential;
          previous[neighbor.node] = currentVertex;
          nodes.enqueue(neighbor.node, potential);
        }
      });
    }
  }
}
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
const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstras('A', 'E'));
