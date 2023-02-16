// 构建弗洛伊德算法需要的图
class Graph {
  // 顶点数组
  public vertex: string[];

  // 最短距离的表，保存从各个顶点出发到其它顶点的距离，最后的结果，也是保留在该数组，初始化时就为图的邻接矩阵
  public dis: number[][];

  // 各个顶点的前驱节点表
  public preVertex: number[][];

  constructor(vertex: string[], matrix: number[][]) {
    this.vertex = vertex;
    this.dis = matrix;
    const vertexNum = vertex.length;
    const pre = [];
    for (let i = 0; i < vertexNum; i++) {
      pre.push(new Array(vertexNum).fill(i));
    }
    this.preVertex = pre;
  }

  public floydAlgorithm() {
    let distance = 0;
    const vertexNum = this.vertex.length;

    // 对中间顶点进行遍历，k 为中间顶点的下标 顶点数组为： ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    for (let k = 0; k < vertexNum; k++) {
      // 遍历出发顶点，i 为出发顶点的下标，顶点数组为： ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      for (let i = 0; i < vertexNum; i++) {
        // 遍历到达顶点， j 为到达顶点的下标，顶点数组为： ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        for (let j = 0; j < vertexNum; j++) {
          /*
          * this.dis[i][k]：为 出发顶点 i 到 中间顶点 K 的距离
          * this.dis[k][j]：为 中间顶点 k 到 到达顶点 j 的距离
          * this.dis[i][k] + this.dis[k][j]：表示从 i 顶点出发，经过中间顶点 k 到 到达顶点 j 的距离
          * */
          distance = this.dis[i][k] + this.dis[k][j];
          // this.dis[i][j]: 表示从出发顶点 i 到 到达顶点 j 之间的距离，
          // distance < this.dis[i][j]：表示如果从出发顶点 i 经过中间顶点 k 最后到 到达顶点 j 的距离 小于 顶点i 和 顶点j之间的距离
          // 此时说明经过中间顶点 k 达到 顶点j的距离更短，则就需要更新 dis 和 preVertex
          if (distance < this.dis[i][j]) {
            this.dis[i][j] = distance;
            this.preVertex[i][j] = this.preVertex[k][j];
          }
        }

      }
    }

  }
}
export class FloydAlgorithm {

  /**
   * @description 实现弗洛伊德算法
   * @param vertex：顶点数组
   * @param matrix：邻接矩阵
   * @return {Graph}：返回图，结果在图的 dis 二维数组中
   */
  public static floyd(vertex: string[], matrix: number[][]): Graph {
    const graph = new Graph(vertex, matrix);
    graph.floydAlgorithm();
    return graph;
  }
}
