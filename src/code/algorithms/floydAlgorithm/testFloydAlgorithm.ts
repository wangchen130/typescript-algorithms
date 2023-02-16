import { FloydAlgorithm } from './FloydAlgorithm';

export const testFloydAlgorithm = () => {
  console.log('=======================弗洛伊德算法测试=====================');
  const vertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const N = Infinity;
  const matrix = [
    [0, 5, 7, N, N, N, 2],
    [5, 0, N, 9, N, N, 3],
    [7, N, 0, N, 8, N, N],
    [N, 9, N, 0, N, 4, N],
    [N, N, 8, N, 0, 5, 4],
    [N, N, N, 4, 5, 0, 6],
    [2, 3, N, N, 4, 6, 0]
  ];
  const graph = FloydAlgorithm.floyd(vertex, matrix);
  console.log('结果为：', graph);
};
