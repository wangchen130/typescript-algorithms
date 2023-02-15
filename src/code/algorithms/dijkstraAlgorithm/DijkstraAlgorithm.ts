export const INF = Infinity;

interface IShortestPathResObj {
  // 路径顶点组成的数组，数组第一个为 出发顶点，最后一个为 终点顶点。
  // 例如： pathArr = ['G', 'B', 'C', 'K']，就表示从顶点 G 到顶点 K 的路径为： G -> B -> C K
  pathVertexArr: string[];
  // 路径顶点下标组成的数组
  pathVertexIndexArr: number[];
  // 距离
  distance: number;
}

// 已访顶点的集合类
class VisitedVertex {
  // 记录各个顶点是否被访问过。0：表示未访问。1：表示已访问。会动态更新，直至访问完所有顶点，即数组全部为 1
  public alreadyVertex: number[];

  // 记录出发顶点到其他顶点的距离，比如G为出发顶点，就会记录G到其它顶点的距离，会动态更新，求的最短距离就会存放到dis，
  // 到自身的距离为 0 ，初始化为 Infinity
  public dis: number[];

  // 存放各个顶点的前一个顶点的下标值，初始化为 -1。会动态更新。下标表示顶点，与顶点数组对应，存放的值表示前一个顶点在顶点数组中的下标
  // 比如：preVertex 的 0 位置：表示顶点 A，preVertex[0] 为 6，则表示顶点 A 的前一个顶点在顶点数组中的下标为 6
  public preVertex: number[];

  /**
   * 初始化已访顶点的集合类
   * @param vertexNum：顶点的数量
   * @param departureIndex：出发顶点的下标
   */
  constructor(vertexNum: number, departureIndex: number) {
    this.alreadyVertex = new Array(vertexNum).fill(0);
    this.dis = new Array(vertexNum).fill(INF);
    this.preVertex = new Array(vertexNum).fill(-1);
    // 设置出发顶点为 已访问，即设置为 1
    this.alreadyVertex[departureIndex] = 1;
    // 设置出发顶点到自身的访问距离为 0
    this.dis[departureIndex] = 0;
  }

  /**
   * @description 根据顶点在顶点数组中的下标判断该顶点是否已经被访问过
   * @param index：顶点下标
   * @return {boolean}：返回 true 时：表示已经被访问，返回 false 表示未被访问
   */
  public isVisited(index: number): boolean {
    return this.alreadyVertex[index] === 1;
  }

  /**
   * @description 获取出发顶点到 index 顶点的最短距离
   * @param index：需要获取距离的顶点的下标
   * @return {number}：距离值
   */
  public getDis(index: number): number {
    return this.dis[index];
  }

  /**
   * @description 更新出发顶点到 index 顶点的距离
   * @param index：顶点下标
   * @param distance：距离值
   */
  public updateDis(index: number, distance: number) {
    this.dis[index] = distance;
  }

  /**
   * @description 更新顶点的前驱顶点
   * @param index：需要更新的顶点的下标
   * @param preIndex：前驱顶点的下标
   */
  public updatePre(index: number, preIndex: number) {
    this.preVertex[index] = preIndex;
  }

  /**
   * @description 更新顶点是否被访问，并继续选择且返回新的访问顶点，
   * 注意:
   *  1)新的访问顶点是未访问过的顶点，且距离是最小的
   *  2)新的访问顶点的含义：顶点 G 访问之后，顶点 A 就作为了新的访问顶点（注意不是出发顶点）
   * @return {number}：新的访问顶点的下标
   */
  public updateAlreadyVertex(): number {
    let min = INF;
    let index = 0;
    for (let i = 0, len = this.alreadyVertex.length; i < len; i++) {
      const dis = this.getDis(i);
      if (this.alreadyVertex[i] === 0 && dis < min) {
        min = dis;
        index = i;
      }
    }
    // 找到新的访问顶点 index 后，需要将找到的顶点 index 标记为已访问
    this.alreadyVertex[index] = 1;
    return index;
  }

}

class Graph {
  // 顶点数组
  public vertex: string[];

  // 邻接矩阵
  public matrix: number[][];

  // 已访顶点的集合
  public vv: VisitedVertex;

  // 结果数组
  public resArr: IShortestPathResObj[];

  constructor(vertex: string[], matrix: number[][], departureIndex: number) {
    this.vertex = vertex;
    this.matrix = matrix;
    this.vv = new VisitedVertex(vertex.length, departureIndex);
    this.resArr = vertex.map(() => ({
      pathVertexArr: [],
      pathVertexIndexArr: [departureIndex],
      distance: 0
    }));
  }

  /**
   * @description 迪杰斯特拉算法实现
   * @param departureIndex：初始顶点的下标
   */
  public djs(departureIndex: number) {
    this.update(departureIndex);
    // 因为出发顶点已经处理并访问过了，所以 i 从 1 开始
    for (let i = 1, len = this.vertex.length; i < len; i++) {
      /*
        每调用一次 updateAlreadyVertex 方法，就会返回一个新的访问顶点的下标，并且返回的新的访问在 alreadyVertex 数组中已经标记为已访问，
        并且除了出发顶点以为，其他的所有顶点只有调用 updateAlreadyVertex 方法才会被标记为已访问，
        因为出发顶点在 VisitedVertex 类的构造函数中就已经被标记为已访问了，即在获取 vv 对象时就已经被标记为已访问
      */
      const index = this.vv.updateAlreadyVertex();
      // 调用 update 方法，处理找到的新的访问顶点 index，更新与 index 顶点相连通的顶点的距离he这些连通顶点的前驱顶点
      this.update(index);
    }
  }

  /**
   * @description 更新 index 顶点到它连通的顶点的距离以及更新与它连通的顶点的前驱顶点
   * 例如：当前访问顶点为顶点 G，即 index 为 6，因为顶点与其他顶点的距离是记录在邻接矩阵 matrix 中的，
   * matrix[index] 记录的就是index顶点与其他顶点的距离， 所以需要遍历 matrix[index] ,更新 dis 和 preVertex
   * @param index：需要更新的顶点的下标
   */
  public update(index: number) {
    let dis = 0;
    // 遍历 matrix[index]
    for (let i = 0, len = this.matrix[index].length; i < len; i++) {
      debugger;
      /*
        dis 为 出发顶点到 index 顶点的距离 + index 顶点到 i 顶点的距离
        出发顶点到 index 顶点的距离一直记录在 vv 的 dis中，即为： this.vv.getDis(index)
        index 顶点到 i 顶点的距离为：this.matrix[index][i]
        例如：当 i = 9 时，对饮顶点 K ，K 的前驱顶点为顶点 A，出发顶点为顶点 G，
             则此时顶点 K 到出发顶点 G 的距离就为：出发顶点 G 到顶点 A 的距离 + 顶点 A 到顶点 K 的距离
      */
      dis = this.vv.getDis(index) + this.matrix[index][i];
      /*
      * 1）!this.vv.isVisited(i)：i 顶点没有被访问，因为 i 是从 0 开始的，所以每次都会把所有顶点都访问一遍，这时 i 顶点就可能是已经访问过的顶点，
      *   例如：index = 6，即为顶点 G，这时 i 从 0 开始，到 i = 6 时，i 顶点就为已访问的顶点 G 了，所以需要判断 i 顶点是否被访问
      * 2）this.vv.getDis(i)：出发顶点到 i 顶点的距离
      * 3）dis < this.vv.getDis(i)：例如：
      *   出发顶点为 G ，i 顶点为 K，从出发顶点到 i 顶点的距离为 10，即 this.vv.getDis(i) 值为 10
      *   但是同时 index（比如顶点 B） 顶点为顶点 K 的前驱顶点
      *   且 K 顶点到 B 顶点的距离为 2，即 this.matrix[index][i] 值为 2，
      *   且 B 顶点到出发顶点 G 的距离为 6，即：this.vv.getDis(index) 值为 6
      *   则如果走 G -> B -> K 这个路线的话，出发顶点 G 到顶点 K 的距离为 2 + 6 = 8，
      *   这时从出发顶点到 i 顶底的最短距离就为 8，这时就需要更新 this.vv.dis 和 this.vv.preVertex,
      *   将最短距离设置为 dis ，将 i 顶点的前驱节点设置为 index顶点
      * */
      if (!this.vv.isVisited(i) && dis < this.vv.getDis(i)) {
        // 更新 i 顶点到出发顶点的距离
        this.vv.updateDis(i, dis);
        // 将顶点 i 的前驱顶点更新为顶点 index
        // 因为 使用的是图的广度优先遍历，每次都是处理当前顶点的所有相连通的顶点，这样每次只要更新了顶点的前驱顶点，
        // 那么 this.vv.dis 保存的就是 出发顶点到处理的这些相连通顶点的距离，这样如果这些相连通顶点还有后继顶点时，
        // 从 this.vv.dis 取出距离 在 加上这些顶点到他们后继顶点的距离，就得到了出发顶点到后继顶点的距离了
        this.vv.updatePre(i, index);
      }
    }
  }
}

export class DijkstraAlgorithm {
  /**
   * @description 使用迪杰斯特拉算法解决最短路径问题
   * @param vertex：顶点数组
   * @param matrix：领结矩阵
   * @param departureIndex：初始顶点的下标，即从那个顶点开始求到其他顶点的最短距离
   */
  public static solveShortestPath(vertex: string[], matrix: number[][], departureIndex: number) {
    const graph = new Graph(vertex, matrix, departureIndex);
    graph.djs(departureIndex);
    console.log('graph:', graph);
  }

  /**
   * @description 将二维数组转换成为字符串
   * @param arr：二维数组
   * @param separator：分隔符
   * @return {string}：转换成的字符串
   */
  public static twoDimensionalArrayToString(arr: any[][], separator: string = '     '): string {
    let resStr = '';
    for (let i = 0, len = arr.length; i < len; i++) {
      let itemArr = arr[i];
      resStr += `${itemArr.join(separator)}\n`;
    }
    return resStr;
  }
}
