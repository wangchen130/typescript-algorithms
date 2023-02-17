const INF = Infinity;
// 表示边的类
class Edge {
  // 边的第一个顶点
  v1: string;

  // 边的第二个顶点
  v2: string;

  // 边的权值
  weight: number;

  constructor(v1: string, v2: string, weight: number) {
    this.v1 = v1;
    this.v2 = v2;
    this.weight = weight;
  }
}
class Graph {
  // 顶点数组
  vertexes: string[];

  // 邻接矩阵
  matrix: number[][];

  // 结果边构成的数组
  resEdgeList: Edge[];

  constructor(vertexes: string[], matrix: number[][]) {
    this.vertexes = vertexes;
    this.matrix = matrix;
    this.resEdgeList = [];
  }

  /**
   * @description 克鲁斯卡尔算法实现
   */
  kruskal() {
    // 用于保存在每次在将边加入到结果数组 this.resEdgeList 中后，每个顶点对应的终点
    const ends = new Array(this.vertexes.length).fill(-1);
    // 获取所有连通的边
    const edges = this.getEdges();
    // 边的数量
    const edgeNum = edges.length;
    this.ascSortEdges(edges);
    // 遍历排序后的所有连通的边，判断依次取出的 边 的 两个顶点 是否有相同的终点，如果没有就将其加入到结果数组中 this.resEdgeList 中
    for (let i = 0; i < edgeNum; i++) {
      let edge = edges[i];
      const { v1, v2, weight } = edge;
      // 获取第 i 条边的第一个顶点的顶点下标
      const p1 = this.getPosition(v1);
      // 获取第 i 条边的第二个顶点的顶点下标
      const p2 = this.getPosition(v2);
      // 获取第一个顶点的此次循环中构成的最小生成数中的终点
      const end1 = this.getEnd(ends, p1);
      // 获取第二个顶点在此次循中环构成的最小生成树中的终点
      const end2 = this.getEnd(ends, p2);
      if (end1 !== end2) { // 两个顶点的终点不相等
        // 将结果加入到结果数组中
        this.resEdgeList.push(new Edge(v1, v2, weight));
        // 更新终点
        ends[end1] = end2;
      }
      // console.log('ends:', ends.join(' '));
    }
  }

  /**
   * @description 获取图中所有【连通】的边构成的数组
   * @return {Edge[]}：所有连通的边构成的数组
   */
  getEdges(): Edge[] {
    const edges: Edge[] = [];
    const vertexNum = this.vertexes.length;
    for (let i = 0; i < vertexNum; i++) {
      // 因为邻接数组是按 [0,0] 到 [this.vertexes.length - 1, this.vertexes.length - 1] 的对角线对称的，
      // 所以只需要遍历半边即可，即 j = i + 1
      for (let j = i + 1; j < vertexNum; j++) {
        const weight = this.matrix[i][j];
        if (weight < INF) {
          edges.push(new Edge(this.vertexes[i], this.vertexes[j], weight));
        }
      }
    }
    return edges;
  }

  /**
   * @description 根据顶点名称获取该顶点在顶点数组中的下标
   * @param v：顶点名称
   * @return {Number}：顶点在顶点数组中的下标，存在就返回找到的下标，没有就返回 -1
   */
  getPosition(v: string): number {
    for (let i = 0, len = this.vertexes.length; i < len; i++) {
      let vertex = this.vertexes[i];
      if (vertex === v) {
        return i;
      }
    }
    return -1;
  }

  /**
   * @description 获取一的顶点的终点
   * @param ends：记录每个顶点终点的的数组，会动态变化
   * @param index：需要获取终点的顶点的下标
   * @return {number}：终点的下标
   */
  getEnd(ends: number[], index: number): number {
    /*
      ends 数组保存的是终点的下标。例如当前的 ends = [6, 5, 3, 5, 5, 6, -1]，如何得到 顶点 A（index 为 0） 的终点
      1）ends[index] = ends[0] = 6，不等于 -1，此时 index = ends[index] = 6
      2）index = 6，ends[index] = ends[6] = -1，不符合条件，退出循环，返回 index，即返回6，则证明此时顶点 A 的终点为 G
     */
    while (ends[index] !== -1) {
      index = ends[index];
    }
    return index;
  }

  /**
   * @description 升序排列边构成的数组
   * @param edges：边构成的数组
   */
  ascSortEdges(edges: Edge[]) {
    edges.sort((a, b) => a.weight - b.weight);
  }

}
export class KruskalAlgorithm {
  /**
   * 克鲁斯卡尔算法实现
   * @param vertex：顶点数组
   * @param matrix：邻接矩阵
   * @return {Edge[]}：结果数组，即选择的边构成的数组
   */
  public static kruskal(vertex: string[], matrix: number[][]): Edge[] {
    const graph = new Graph(vertex, matrix);
    graph.kruskal();
    return graph.resEdgeList;
  }
}
