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
    nodes.enqueue(start, distances[start]);
    for (let vertex in this.adjacencyList) {
      vertex === start
        ? (distances[vertex] = 0)
        : (distances[vertex] = Infinity);
      previous[vertex] = null;
    }
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

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
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
