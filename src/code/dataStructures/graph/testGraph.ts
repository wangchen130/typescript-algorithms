import { Graph } from './Graph';

export const testGraph = () => {
  console.log('=======================测试图开始=====================');
  const graph = new Graph();
  var vertexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  graph.addVertexes(vertexList);
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'G');
  graph.addEdge('D', 'H');
  graph.addEdge('B', 'E');
  graph.addEdge('B', 'F');
  graph.addEdge('E', 'I');
  console.log(graph.toString());
  console.log('=======================广度优先遍历，从顶点 A 开始=====================');
  graph.bfs('A', v => {
    console.log(v);
  });
  console.log('=======================广度优先遍历，从顶点 I 开始=====================');
  graph.bfs('I', v => {
    console.log(v);
  });
  console.log('=======================深度优先遍历，从顶点 A 开始=====================');
  graph.dfs('A', v => {
    console.log(v);
  });
  console.log('=======================深度优先遍历，从顶点 I 开始=====================');
  graph.dfs('I', v => {
    console.log(v);
  });
};
