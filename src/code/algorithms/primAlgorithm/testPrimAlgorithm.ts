import { PrimAlgorithm } from './PrimAlgorithm';

export const testPrimAlgorithm = () => {
  console.log('=======================普里姆算法测试=====================');
  const vertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const edges = [
    [Infinity, 5, 7, Infinity, Infinity, Infinity, 2],
    [5, Infinity, Infinity, 9, Infinity, Infinity, 3],
    [7, Infinity, Infinity, Infinity, 8, Infinity, Infinity],
    [Infinity, 9, Infinity, Infinity, Infinity, 4, Infinity],
    [Infinity, Infinity, 8, Infinity, Infinity, 5, 4],
    [Infinity, Infinity, Infinity, 4, 5, Infinity, 6],
    [2, 3, Infinity, Infinity, 4, 6, Infinity]
  ];
  console.log('顶点为：', vertexes);
  console.log('边为：', edges);
  const res = PrimAlgorithm.prim(vertexes, edges);
  console.log('普里姆算法的结果为：', res);
};
