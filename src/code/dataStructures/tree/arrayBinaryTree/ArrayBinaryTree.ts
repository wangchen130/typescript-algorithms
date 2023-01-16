export interface IHandler<T> {
  (val: T): void;
}

/**
 * 顺序二叉树通常只考虑完全二叉树
 * 第n个元素的左子节点为  2 * n + 1
 * 第n个元素的右子节点为  2 * n + 2
 * 第n个元素的父节点为  (n-1) / 2
 */
export class ArrayBinaryTree<T> {
  private readonly arr: T[];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  // preOrderTraverse：通过先序遍历方式遍历所有节点。
  preOrderTraverse(handler: IHandler<T>): void {
    if (!this.arr || this.arr?.length === 0) {
      console.log('二叉树为空!');
      return;
    }
    this.preOrderTraverseRecursion(0, handler);
  }

  private preOrderTraverseRecursion(index: number, handler: IHandler<T>) {
    const len = this.arr.length;
    if (index < len) {
      handler(this.arr[index]);
    }
    const leftIndex = 2 * index + 1;
    if (leftIndex < len) {
      this.preOrderTraverseRecursion(leftIndex, handler);
    }
    const rightIndex = 2 * index + 2;
    if (rightIndex < len) {
      this.preOrderTraverseRecursion(rightIndex, handler);
    }
  }

  // inOrderTraverse：通过中序遍历方式遍历所有节点。
  inOrderTraverse(handler: IHandler<T>): void {
    if (!this.arr || this.arr?.length === 0) {
      console.log('二叉树为空!');
      return;
    }
    this.inOrderTraverseRecursion(0, handler);
  }

  private inOrderTraverseRecursion(index: number, handler: IHandler<T>) {
    const len = this.arr.length;

    const leftIndex = 2 * index + 1;
    if (leftIndex < len) {
      this.inOrderTraverseRecursion(leftIndex, handler);
    }
    if (index < len) {
      handler(this.arr[index]);
    }
    const rightIndex = 2 * index + 2;
    if (rightIndex < len) {
      this.inOrderTraverseRecursion(rightIndex, handler);
    }
  }

  // postOrderTraverse：通过后序遍历方式遍历所有节点。
  postOrderTraverse(handler: IHandler<T>): void {
    if (!this.arr || this.arr?.length === 0) {
      console.log('二叉树为空!');
      return;
    }
    this.postOrderTraverseRecursion(0, handler);
  }

  private postOrderTraverseRecursion(index: number, handler: IHandler<T>) {
    const len = this.arr.length;
    const leftIndex = 2 * index + 1;
    if (leftIndex < len) {
      this.postOrderTraverseRecursion(leftIndex, handler);
    }
    const rightIndex = 2 * index + 2;
    if (rightIndex < len) {
      this.postOrderTraverseRecursion(rightIndex, handler);
    }
    if (index < len) {
      handler(this.arr[index]);
    }
  }
}
