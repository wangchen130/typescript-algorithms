export interface IHandler<T>{
  (node: HuffmanTreeNode<T>): void;
}
export interface IHuffmanTreeNodeDataObj<T> {
  weight: number;
  data?: T
}
export class HuffmanTreeNode<T> {
  public weight: number

  public data: T

  public left: HuffmanTreeNode<T>

  public right: HuffmanTreeNode<T>

  constructor(weight: number, data: T = null) {
    this.weight = weight;
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /**
   * @Description:  preOrder：通过先序遍历方式遍历所有节点。
   * @param handler 回调函数，会将树节点传递给回调函数
   */
  preOrder(handler: IHandler<T>) {
    handler(this);
    if (this.left) {
      this.left.preOrder(handler);
    }
    if (this.right) {
      this.right.preOrder(handler);
    }
  }

  /**
   * @description: inOrder：通过中序遍历方式遍历所有节点。
   * @param handler 回调函数，会将树节点传递给回调函数
   */
  inOrder(handler: IHandler<T>) {
    if (this.left) {
      this.left.inOrder(handler);
    }
    handler(this);
    if (this.right) {
      this.right.inOrder(handler);
    }
  }

  /**
   * @description: postOrder：通过后序遍历方式遍历所有节点。
   * @param handler 回调函数，会将树节点传递给回调函数
   */
  postOrder(handler: IHandler<T>) {
    if (this.left) {
      this.left.postOrder(handler);
    }
    if (this.right) {
      this.right.postOrder(handler);
    }
    handler(this);
  }
}

export class HuffmanTree<T> {
  public root: HuffmanTreeNode<T>

  constructor(array: IHuffmanTreeNodeDataObj<T>[]) {
    this.root = this.createHuffmanTree(array);
  }

  /**
   * @description 生成赫夫曼树
   * 构成赫夫曼树的步骤：
   * 1）将需要生成赫夫曼树的数组依次取出每个数据，将其构成一棵最简单的二叉树（即单个节点），然后将生成的所有节点放入一个新的节点数组中
   * 2）将节点数组按照权值从小到大进行排序，排序完成后，取出根节点权值最小的两颗二叉树（即节点数组的前两个元素）
   * 3）将取出的两棵二叉树构成一颗新的二叉树, 该新的二叉树的根节点的权值是取出的两颗二叉树根节点权值的和
   * 4）将这颗新的二叉树放入节点数组，然后以根节点的权值大小 再次进行从小到大的排序， 不断重复  2-3-4 的步骤，直到节点数组中所有的数据都被处理，就得到一颗赫夫曼树
   * @param arr 生成赫夫曼树的数组，包含权重： weight 和 数据： data
   */
  createHuffmanTree(arr: IHuffmanTreeNodeDataObj<T>[]): HuffmanTreeNode<T> {
    if (arr.length === 0) {
      return null;
    }
    const nodeList: HuffmanTreeNode<T>[] = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      const weight = arr[i]?.weight;
      const data = arr[i]?.data;
      const node = new HuffmanTreeNode<T>(weight, data);
      nodeList.push(node);
    }
    while (nodeList.length > 1) {
      nodeList.sort((a, b) => a?.weight - b?.weight);
      const leftNode = nodeList.shift();
      const rightNode = nodeList.shift();
      const parentNode = new HuffmanTreeNode<T>(leftNode.weight + rightNode.weight);
      parentNode.left = leftNode;
      parentNode.right = rightNode;
      nodeList.push(parentNode);
    }
    // console.log('nodeList:', nodeList);
    return nodeList.shift();
  }

  /**
   * @description 通过先序遍历方式遍历所有节点。
   * @param handler: 回调函数，将遍历的节点传给handler进行处理。
   */
  preOrder(handler: IHandler<T>) {
    if (this.root) {
      this.root.preOrder(handler);
    } else {
      console.log('二叉树为空，无法遍历');
    }
  }

  /**
   * @description 通过中序遍历方式遍历所有节点。
   * @param handler: 回调函数，将遍历的节点传给handler进行处理。
   */
  inOrder(handler: IHandler<T>) {
    if (this.root) {
      this.root.inOrder(handler);
    } else {
      console.log('二叉树为空，无法遍历');
    }
  }

  /**
   * @description 通过后序遍历方式遍历所有节点。
   * @param handler: 回调函数，将遍历的节点传给handler进行处理。
   */
  postOrder(handler: IHandler<T>) {
    if (this.root) {
      this.root.postOrder(handler);
    } else {
      console.log('二叉树为空，无法遍历');
    }
  }
}
