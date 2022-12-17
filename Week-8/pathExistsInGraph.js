// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -
// 1 (inclusive). The edges in the graph are represented as a 2D integer array edges,
// where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertexvi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge toitself.
//You want to determine if there is a valid path that exists from vertex source to vertexdestination.
// Given edges and the integers n, source, and destination, return true if there is a validpath from source to destination, or false otherwise.
// Example 1:
//Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: trueExplanation: There are two paths from vertex 0 to vertex 2:- 0 → 1 → 2- 0 → 2
// Example 2:
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
//Output: false
//Explanation: There is no path from vertex 0 to vertex 5.Constraints:●1 <= n <= 2 * 105
// time complexity o(mn) space complexityo(mn)
function pathExistsInGraph(vertices, edges, source, destination) {
  //it reserves spaces
  const graph = Array(vertices)
    .fill(0)
    .map(() => Array());
  //build graph
  edges.forEach((edge) => {
    let parent = edge[0],
      child = edge[1];
    graph[parent].push(child);
    graph[child].push(parent);
  });

  //bfs traversal
  let queue = [],
    v = source;
  let discovered = Array(vertices).fill(false);
  discovered[v] = true;
  queue.push(v);
  while (queue.length != 0) {
    v = queue.shift();
    if (v === destination) {
      console.log("path exists");
      return true;
    }
    for (let u of graph[v]) {
      if (discovered[u] === false) {
        discovered[u] = true;
        queue.push(u);
      }
    }
  }
  console.log("path does not exists in graph");
  return false;
}

console.log(
  pathExistsInGraph(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

console.log(
  pathExistsInGraph(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
