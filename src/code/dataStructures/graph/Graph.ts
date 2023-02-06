interface IEdge {
  [key: string]: string[];
}
interface IState {
  [key: string]: number;
}
export interface IHandler {
  (v: string): void;
}

export class Graph {
  // 图的顶点(数组)
  public vertexes: string[] = [];

  // 图的边（邻接表）：使用对象表示，对象的 key 为顶点名称，对象的 value 为与该顶点相邻的顶点组成的数组
  // 例如：{ A: [], B: [], C: []}
  public edges: IEdge = {};

  /**
   * 添加单个顶点
   * @param v：顶点名称
   */
  public addVertex = (v: string) => {
    // 将顶点添加到顶点数组中
    this.vertexes.push(v);
    // 在邻接表中增加对应顶点边的初始化
    this.edges[v] = [];
  }

  /**
   * 批量增加顶点
   * @param vList：顶点数组
   */
  public addVertexes = (vList: string[]) => {
    // 遍历顶点数组，每个顶点调用添加单个顶点的方法即可
    for (let i = 0; i < vList.length; i++) {
      let v = vList[i];
      this.addVertex(v);
    }
  }

  /**
   * 添加边
   * @param v1：第一个顶点
   * @param v2：第二个顶点
   */
  public addEdge = (v1: string, v2: string) => {
    // 因为是无向图，所以既要将v1加入到v2的边中，也需要将v2加入到v1中
    this.edges[v1].push(v2);
    this.edges[v2].push(v1);
  }

  /**
   * @description 初始化顶点的状态。用对象表示，用于标识每个顶点的探索状态，对象的 key 为顶点名称，对象的 value 为该顶点的状态。
   * 1.表示未被访问也未被探索。2.表示被访问但未被探索。3.表示被探索
   * @returns {{}}: 状态映射表，表示为:
   * {
   *   A: 1,
   *   B: 1,
   *   C: 1
   * }
   */
  public initState = (): IState => {
    const state: IState = {};
    for (let i = 0, len = this.vertexes.length; i < len; i++) {
      let v = this.vertexes[i];
      state[v] = 1;
    }
    return state;
  }

  /**
   * @description 图的广度优先搜索
   * @param firstV：第一个访问的顶点
   * @param handler：处理顶点的回调函数
   * 图的广度优先搜索基于队列实现，
   *  1。 先创建一个队列和一个状态映射表，然后将第一个需要访问的顶点放入到队列中，进入循环，循环结束的条件为队列的长度小于 1。
   *  2。 从队列中取出队头的顶点 v，将其在状态映射表中的状态标识为 2 （表示被访问但未被探索），然后取出与顶点 v 相邻的顶点，如果该顶点的状态为 1，则将其加入队列
   *  3。 将 v 的所有相邻的顶点加入队列后，将其交给处理顶点的回调函数，然后将其在状态映射表中的状态改为3，重复步骤 1，直至退出循环
   */
  public bfs = (firstV: string, handler: IHandler) => {
    if (!this.vertexes.includes(firstV)) {
      console.log(`顶点 ${firstV} 不在该图中`);
      return;
    }
    // 1、创建存放顶点的队列
    const queue: string[] = [];
    // 2、创建一个状态映射表
    const state = this.initState();
    // 3、将第一个访问的顶点加入到队列中
    queue.push(firstV);
    // 4、循环取出队列中的元素，只要队列中还有顶点，就需要进行处理
    while (queue.length > 0) {
      // 4.1 取出队列头部的顶点
      const v = queue.shift();
      // 4.2 得到与顶点 v 相邻的顶点数组
      const vList = this.edges[v];
      // 4.3 当从队列中取出一个顶点时，表明该顶点就已经被访问，但是未被探索，所以需要将该顶点的状态设置为 2
      state[v] = 2;
      for (let i = 0; i < vList.length; i++) {
        let vListElement = vList[i];
        if (state[vListElement] === 1) { // 如果该顶点未被访问也未被探索，则将其加入到队列中
          // 将未被访问也未被探索的顶点加入到队列中
          queue.push(vListElement);
          // 此处需要将该顶点的状态改为 2，因为已经取出该顶点，表明该顶点已经时被访问了
          state[vListElement] = 2;
        }
      }
      // 当 for 循环结束后，就将与顶点 v 相邻的所有顶点都加入到队列中了，这时表明顶点 v 已经被探索完毕了，则就可以将顶点 v 的状态改为 3
      state[v] = 3;
      // 当前顶点已被探索完毕，那么就可以交给处理顶点的回调函数进行处理了
      handler(v);
    }
  }

  /**
   * @description 深度优先搜索
   * @param firstV：第一个访问的顶点
   * @param handler：处理顶点的回调函数
   */
  public dfs = (firstV: string, handler: IHandler) => {
    // 1. 初始化状态映射表
    const state = this.initState();
    // 2. 调用dfs的递归调用函数
    this.dfsRecursion(state, firstV, handler);
  }

  /**
   * @description 深度优先搜索的递归调用函数
   * @param state：状态映射表
   * @param v：当前访问的顶点
   * @param handler：处理顶点的回调函数
   */
  private dfsRecursion = (state: IState, v: string, handler: IHandler) => {
    // 1. 将当前顶点的状态设置为 2，标识该顶点已经被访问，但是未被探索
    state[v] = 2;
    // 2. 深度优先遍历是先处理当前顶点，然后在探索当前顶点
    handler(v);
    // 3. 取出当前顶点所有相邻的顶点的数组
    const vList = this.edges[v];
    // 4. 遍历取出的相邻顶点的数组，并判断数组中的每个顶点是否被访问，如果没有被访问则递归调用dfsRecursion函数并将当前遍历的顶点传入
    for (let i = 0; i < vList.length; i++) {
      let vListElement = vList[i];
      if (state[vListElement] === 1) { // 判断当前遍历的顶点是否被访问，没有被访问则递归调用该顶点
        this.dfsRecursion(state, vListElement, handler);
      }
    }
    // 5. 当循环结束后，表明该顶点被探索完毕，则需要将其状态改为3
    state[v] = 3;
  }

  /**
   * @description: 重写toString方法，以邻接表的形式打印出来，输出的格式为：
   * A -> B C D
   * B -> A E F
   * C -> A D G
   * D -> A C G H
   * E -> B I
   * F -> B
   * G -> C D
   * H -> D
   * I -> E
   */
  public toString = () => {
    let resultStr = '';
    for (let i = 0, len = this.vertexes.length; i < len; i++) {
      const v = this.vertexes[i];
      const vList = this.edges[v];
      resultStr += `${v} -> `;
      for (let j = 0; j < vList.length; j++) {
        const e = vList[j];
        resultStr += `${e} `;
      }
      resultStr += '\n';
    }
    return resultStr;
  }

}
