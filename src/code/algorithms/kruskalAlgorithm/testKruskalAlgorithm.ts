import { KruskalAlgorithm } from './KruskalAlgorithm';

export const testKruskalAlgorithm = () => {
  console.log('=======================克鲁斯卡尔算法测试=====================');
  const vertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const INF = Infinity;
  // 克鲁斯卡尔算法的邻接矩阵
  const matrix = [
    /* A */ [0, 12, INF, INF, INF, 16, 14],
    /* B */ [12, 0, 10, INF, INF, 7, INF],
    /* C */ [INF, 10, 0, 3, 5, 6, INF],
    /* D */ [INF, INF, 3, 0, 4, INF, INF],
    /* E */ [INF, INF, 5, 4, 0, 2, 8],
    /* F */ [16, 7, 6, INF, 2, 0, 9],
    /* G */ [14, INF, INF, INF, 8, 9, 0]
  ];
  console.log('顶点为：', vertexes);
  console.log('邻接矩阵为：', matrix);
  const res = KruskalAlgorithm.kruskal(vertexes, matrix);
  console.log('结果为：', res);
};
