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
  dfsRecursive(vertex) {
    const result = [];
    const visited = {};
    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);
      for (const adjacentVertex of this.adjacencyList[vertex]) {
        if (!visited[adjacentVertex]) dfs(adjacentVertex);
      }
    };
    dfs(vertex);
    return result;
  }
}

const g = new Graph();
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g);
console.log(g.dfsRecursive('A'));
