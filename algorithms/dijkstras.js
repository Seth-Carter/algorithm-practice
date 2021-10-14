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
    const nodes = new PriorityQueue();
    const distances = Object.keys(this.adjacencyList).reduce(
      (distanceObject, node) => {
        node === start
          ? (distanceObject[node] = 0)
          : (distanceObject[node] = Infinity);
        return distanceObject;
      },
      {}
    );
    const previous = Object.keys(this.adjacencyList).reduce(
      (previousObject, node) => {
        previousObject[node] = null;
        return previousObject;
      },
      {}
    );
    Object.entries(distances).forEach((entry) =>
      nodes.enqueue(entry[0], entry[1])
    );
    while (nodes.values.length > 0) {
      const nextNode = nodes.dequeue();
      if (nextNode.val === end) break;
    }
    console.log(previous);
    console.log(nodes);
    return distances;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift();
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

console.log(graph.adjacencyList);
console.log(graph.dijkstras('A'));
