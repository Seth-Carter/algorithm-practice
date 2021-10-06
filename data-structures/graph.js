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
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const linkedVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, linkedVertex);
    }
    if (Object.prototype.hasOwnProperty.call(this.adjacencyList, vertex)) {
      delete this.adjacencyList[vertex];
    }
  }
}

const g = new Graph();
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Tokyo', 'London');
console.log(g);
g.removeVertex('Tokyo');
console.log(g);
