interface IPrimResultObj {
  // 顶点字符串数组
  vertex: string[];
  // 顶点1的下标
  vertex1Index: number;
  // 顶点2的下标
  vertex2Index: number;
  // 两个顶点间的权值
  weight: number;
}

class Graph {
  // 图的顶点数组
  public vertexes: string[];

  // 表示边的邻接矩阵
  public edges: number[][];

  constructor(vertexes: string[] = [], edges: number[][] = []) {
    this.vertexes = vertexes;
    const vertexNum = vertexes.length;
    if (edges.length === 0 && vertexNum > 0) {
      for (let i = 0; i < vertexNum; i++) {
        const edgeItem = new Array(vertexNum).fill(Infinity);
        edges.push(edgeItem);
      }
    }
    this.edges = edges;
  }

  /**
   * @description 将邻接矩阵转化为字符串
   * @return {string}：邻接矩阵字符串
   */
  public toString() {
    let resStr = '';
    for (let i = 0, len = this.vertexes.length; i < len; i++) {
      const edgeItem = this.edges[i];
      resStr += `${edgeItem.join()}\n`;
    }
    return resStr;
  }
}

export class PrimAlgorithm {

  public static prim (vertexes: string[], edges: number[][] = [], firstVIndex: number = 0): IPrimResultObj[] {
    const vertexNum = vertexes.length;
    // 获取图
    const graph = new Graph(vertexes, edges);
    // 标记顶点是否被访问过， 0 表示未被访问， 1 表示被访问过
    const visitedList = new Array(vertexNum).fill(0);
    // 把当前这个结点标记为已访问
    visitedList[firstVIndex] = 1;
    // 初始化一个最小权值，默认未最大的数，如果在遍历过程中发现有权值小于它，则将其进行替换
    let minWeight = Infinity;
    // 记录第一个顶点的下标
    let index1 = -1;
    // 记录第二个顶点的下标
    let index2 = -1;
    const resList: IPrimResultObj[] = [];

    // 根据普里姆算法，graph.vertexes.length 个顶点，就会有 graph.vertexes.length - 1 条边，所以 i 从 1 开始
    for (let i = 1; i < vertexNum; i++) {
      // 定义结果对象
      const resObj: IPrimResultObj = {
        vertex: [],
        vertex1Index: -1,
        vertex2Index: -1,
        weight: Infinity
      };
      // 因为无法知道那个顶点是已访问，那个顶点是未访问，所以需要两个循环，一个循环找已访问过的顶点，一个循环找未访问过的顶点
      for (let j = 0; j < vertexNum; j++) { // 遍历已经访问过的顶点
        for (let k = 0; k < vertexNum; k++) { // 遍历未访问过的顶点
          /*
          * visitedList[j] === 1：表示找到已访问过的顶点
          * visitedList[k] === 0：表示找到未访问的顶点
          * graph.edges[j][k]：找到已访问的顶点与未访问的顶点将的权值
          * graph.edges[j][k] < minWeight：未连通权值为 Infinity，所以表示已访问的顶点与未访问的顶点之前是连通的
          * 因为 minWeight 的初始值为 Infinity，所以在连通时需要替换 minWeight 的值，比如当前值为 9，在后面的循环中，
          * 如果找到一个权值为 5 ，则用 5 替换当前的 minWeight 的值9，这样在外循环一轮循环后，就找到了一个已访问顶点到它所有连通的未访问顶点的最小权值
          * */
          if (visitedList[j] === 1 && visitedList[k] === 0 && graph.edges[j][k] < minWeight) {
            minWeight = graph.edges[j][k];
            // 记录当前已访问顶点的下标
            index1 = j;
            // 记录当前已访问顶点的【连通的未访问顶点】的下标
            index2 = k;
          }
        }
      }

      // 结束循环之后，就得到了一个已访问顶点到它未访问顶点的最小权值，最小权值为 minWeight
      resObj.vertex.push(graph.vertexes[index1]);
      resObj.vertex.push(graph.vertexes[index2]);
      resObj.vertex1Index = index1;
      resObj.vertex2Index = index2;
      resObj.weight = minWeight;

      // 将未访问的顶点标识为已访问
      visitedList[index2] = 1;
      // 重置 minWeight 的值为 Infinity
      minWeight = Infinity;

      resList.push(resObj);

    }

    return resList;
  }

}
