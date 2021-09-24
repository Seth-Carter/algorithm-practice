class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!Object.prototype.hasOwnProperty.call(this.adjacencyList, vertex1)) {
      this.adjacencyList[vertex1] = [];
    }
    this.adjacencyList[vertex1].push(vertex2);
    if (!Object.prototype.hasOwnProperty.call(this.adjacencyList, vertex2)) {
      this.adjacencyList[vertex2] = [];
    }
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if (Object.prototype.hasOwnProperty.call(this.adjacencyList, vertex1)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
    }
    if (Object.prototype.hasOwnProperty.call(this.adjacencyList, vertex2)) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }
}

const g = new Graph();
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Tokyo', 'London');
console.log(g);
g.removeEdge('Dallas', 'Tokyo');
console.log(g);
