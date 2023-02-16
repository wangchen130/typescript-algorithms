import { DijkstraAlgorithm } from './DijkstraAlgorithm';

export const testDijkstraAlgorithm = () => {
  console.log('=======================迪杰斯特拉算法测试=====================');
  const INF = Infinity;
  const vertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const matrix = [
    [INF, 5, 7, INF, INF, INF, 2],
    [5, INF, INF, 9, INF, INF, 3],
    [7, INF, INF, INF, 8, INF, INF],
    [INF, 9, INF, INF, INF, 4, INF],
    [INF, INF, 8, INF, INF, 5, 4],
    [INF, INF, INF, 4, 5, INF, 6],
    [2, 3, INF, INF, 4, 6, INF]
  ];
  const departureIndex = 1;
  console.log('顶点为：');
  console.log(vertex.join(' '));
  console.log('邻接矩阵为：');
  console.log(matrix);
  console.log('出发顶点为：', departureIndex);
  const resArr = DijkstraAlgorithm.solveShortestPath(vertex, matrix, departureIndex);
  console.log('结果为：', resArr);
};
