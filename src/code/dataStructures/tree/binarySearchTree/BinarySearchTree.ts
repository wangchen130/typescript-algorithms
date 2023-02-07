export interface IHandler<T> {
  (node: BstNode<T>): void;
}
export class BstNode<T> {
  // 节点的key值，用于排序
  public key: number;

  // 节点的数据
  public data: T;

  // 左子节点
  public left: BstNode<T>;

  // 右子节点
  public right: BstNode<T>

  constructor(key: number, data: T = null) {
    this.key = key;
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /**
   * @description 通过先序遍历方式遍历所有节点。
   * @param handler:回调函数，会将树节点传递给回调函数
   */
  public preOrderTraverse = (handler: IHandler<T>) => {
    // 前序遍历，先遍历当前节点
    handler(this);
    // 如果当前节点有左子节点，则递归遍历左子节点
    if (this.left) {
      this.left.preOrderTraverse(handler);
    }
    // 递归遍历右子节点
    if (this.right) {
      this.right.preOrderTraverse(handler);
    }
  }

  /**
   * @description 通过中序遍历方式遍历所有节点
   * @param handler:回调函数，会将树节点传递给回调函数
   */
  public inOrderTraverse = (handler: IHandler<T>) => {
    // 递归遍历左子节点
    if (this.left) {
      this.left.inOrderTraverse(handler);
    }
    // 处理当前节点
    handler(this);
    // 递归遍历右子节点
    if (this.right) {
      this.right.inOrderTraverse(handler);
    }
  }

  /**
   * @description 通过后序遍历方式遍历所有节点
   * @param handler:回调函数，会将树节点传递给回调函数
   */
  public postOrderTraverse = (handler: IHandler<T>) => {
    // 递归遍历左子节点
    if (this.left) {
      this.left.postOrderTraverse(handler);
    }
    // 递归遍历右子节点
    if (this.right) {
      this.right.postOrderTraverse(handler);
    }
    // 处理当前节点
    handler(this);
  }

}

// insert(key: number, data: T = null)：向树中插入一个新的键。
// search(key)：根据key值查找节点，如果存在就查到的节点，不存在就返回null
// preOrderTraverse：通过先序遍历方式遍历所有节点。
// inOrderTraverse：通过中序遍历方式遍历所有节点。
// postOrderTraverse：通过后序遍历方式遍历所有节点。
// min：返回树中最小的值/键。
// max：返回树中最大的值/键。
// remove(key)：根据 key 值删除对应的节点
export class BinarySearchTree<T> {
  // 二叉搜索树的根结点
  public root: BstNode<T>;

  constructor() {
    this.root = null;
  }

  /**
   * @description 前序遍历
   * @param handler:回调函数，会将树节点传递给回调函数
   */
  public preOrderTraverse = (handler: IHandler<T>) => {
    if (this.root) {
      this.root.preOrderTraverse(handler);
    } else {
      console.log('二叉树为空，无法遍历！');
    }
  }

  /**
   * @description 中序遍历
   * @param handler:回调函数，会将树节点传递给回调函数
   */
  public inOrderTraverse = (handler: IHandler<T>) => {
    if (this.root) {
      this.root.inOrderTraverse(handler);
    } else {
      console.log('二叉树为空，无法遍历！');
    }
  }

  /**
   * @description 后序遍历
   * @param handler:回调函数，会将树节点传递给回调函数
   */
  public postOrderTraverse = (handler: IHandler<T>) => {
    if (this.root) {
      this.root.postOrderTraverse(handler);
    } else {
      console.log('二叉树为空，无法遍历！');
    }
  }

  /**
   * @description 向树中插入一个人新节点
   * @param key：节点的 key 值
   * @param data：节点的数据
   */
  public insert = (key: number, data: T = null) => {
    // 创建新节点
    const newNode = new BstNode<T>(key, data);
    if (!this.root) { // 如果没有根结点，则插入时直接作为根结点
      this.root = newNode;
    } else { // 如果有根结点，那么就依次比较key值的大小找到正确的位置进行插入
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * @description 插入单个节点，递归调用
   * @param node：需要将新节点插入的树的根结点
   * @param newNode：待插入的新节点
   */
  private insertNode = (node: BstNode<T>, newNode: BstNode<T>) => {
    // 新节点的值小于node节点，则表明需要将新节点插入到node节点的左边
    if (newNode.key < node.key) {
      if (!node.left) {
        // 如果node没有左子节点，又因为新节点的值小于node节点，新节点就为node的左子节点
        node.left = newNode;
      } else {
        // 如果 node 有左子节点，那么就需要继续向左查找，则将node的左子节点传入
        this.insertNode(node.left, newNode);
      }
    } else {
      // newNode的值大于等于node的值，那么newNode应该在node的右边，如果node没有右子节点，则newNode就为node的右子节点
      if (!node.right) {
        node.right = newNode;
      } else {
        // 如果node有右子节点，则就需要继续比较newNode和node的右子节点，即继续向右查找
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * @description 根据key值查找节点，如果存在就查到的节点，不存在就返回null
   * @param key：待查找的key
   * @return BstNode<T>：查找到节点
   */
  public search = (key: number): BstNode<T> => {
    if (!key) return null;
    return this.searchRecursion(key, this.root);
  }

  /**
   * @description 根据key值递归查找节点，供内部调用
   * @param key：待查找的key
   * @param node：待查找的树的根结点
   * @return BstNode<T>：查找到节点
   */
  private searchRecursion = (key: number, node: BstNode<T>): BstNode<T> => {
    if (!node) return null;
    if (key === node.key) {
      return node;
    }
    if (key < node.key) { // 向左查找
      return this.searchRecursion(key, node.left);
    } // 向右查找
    return this.searchRecursion(key, node.right);
  }

  /**
   * @description 查找二叉搜索树中的最小节点，二叉树为空则返回null
   * @return BstNode：查找到的节点
   */
  public min = (): BstNode<T> => {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  /**
   * @description 查找二叉搜索树中的最大节点，二叉树为空则返回null
   * @return BstNode：查找到的节点
   */
  public max = (): BstNode<T> => {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  /**
   * @description 根据key值删除对应的节点
   * @param key：待删除节点的key值
   * @return BstNode：如果根据key值找到了删除的节点就在把节点删除后返回删除的节点，找不到就返回null
   */
  public remove = (key: number): BstNode<T> => {
    // 待删除节点的父节点，因为树是单向的，所以要记录父节点
    let parent = null;
    // 当前节点，即要删除的节点
    let current = this.root;
    // 当前节点是否为父节点 parent 的左子节点
    let isLeft = true;
    // 根据 key 值查找需要删除的节点，当current存在且current.key不等于 key 时，就一直查找
    while (current && current.key !== key) {
      // parent 向下移动，指向current
      parent = current;
      if (key < current.key) { // 向左查找
        // 向左查找，则current指向左子节点
        current = current.left;
        // current 为parent的左子节点
        isLeft = true;
      } else { // 向右查找
        // 向右查找，则current指向右子节点
        current = current.right;
        // current 为parent的右子节点，即不是左子节点
        isLeft = false;
      }
    }

    // 根据 key 值找到需要删除的节点
    if (current) {
      // 没有左子节点也没有右子节点，即为叶子节点
      if (!current.left && !current.right) {
        if (current === this.root) { // 待删除的节点为根结点
          // 直接删除根结点
          this.root = null;
        } else {
          if (isLeft) { // 删除节点为 parent 的左子节点
            // 则只需要将parent的left置为空即可
            parent.left = null;
          } else { // 删除节点为 parent 的右子节点
            parent.right = null;
          }
        }
      } else if (!current.left) { // 没有左子节点，即只有一个右子节点
        if (current === this.root) { // 待删除的节点为根结点
          // 根结点指向根结点的右子节点，则原来的根结点就被删除了
          this.root = current.right;
        } else {
          if (isLeft) { // 删除节点为 parent 的左子节点
            // 因为current只有一个右子节点，同时current为parent的左子节点，这时只需要将parent的左子节点指向current的右子节点即可
            parent.left = current.right;
          } else { // 删除节点为 parent 的右子节点
            // 因为current只有一个右子节点，同时current为parent的右子节点，这时只需要将parent的右子节点指向current的右子节点即可删除current
            parent.right = current.right;
          }
        }

      } else if (!current.right) { // current没有右子节点，即只有一个左子节点
        if (current === this.root) { // 待删除的节点为根结点
          // 根结点指向根结点的左子节点，则原来的根结点就被删除了
          this.root = current.left;
        } else {
          if (isLeft) { // 删除节点为 parent 的左子节点
            // 因为current为parent的左子节点，同时current只有一个左子节点，这时只需要将parent的左子节点指向current的左子节点即可
            parent.left = current.left;
          } else { // 删除节点为 parent 的右子节点
            // 因为current为parent的右子节点，同时current只有一个左子节点，这时只需要将parent的右子节点指向current的左子节点即可
            parent.right = current.left;
          }
        }
      } else { // current 皆有左子节点，又有右子节点
        /*
          当待删除的节点既有左子节点又有右子节点时，这时删除需要在待删除的子树中找到待删除节点的前驱节点或后继节点，将前驱节点或者后继节点替换待删除的节点，
          然后将前驱节点或后继节点的左子节点指向待删除节点的左子节点，右子节点指向待删除节点的右子节点，即可完成删除操作
          1. 前驱（forerunner）节点：中序遍历时的前一个节点，即一个节点的前驱节点为该节点左子树的最大值节点。前驱节点要么没有子节点，要么只有左子节点。
            如果前驱节点的父节点不是当前节点，那么前驱节点一定为父节点的右子节点。
          后继（successor）节点：中序遍历时的后一个节点，即一个节点的后继节点为该节点的右子树的最小值节点。 后继节点要么没有子节点，要么只有右子节点。
            如果后继节点的父节点不是当前节点，那么后继节点一定为父节点的左子节点。
        */
        // 获取待删除节点的前驱节点，此时前驱节点已在子树中删除
        const forerunner = this.getForerunner(current);
        // 因为删除操作是用前驱节点去替换当前节点。所以前驱节点的左子节点和右子节点需要指向当前节点的左子节点和右子节点
        forerunner.left = current.left;
        forerunner.right = current.right;
        if (current === this.root) { // 待删除的节点为根结点
          this.root = forerunner;
        } else { // 待删除节点不是根结点
          if (isLeft) { // 待删除节点是父节点的左子节点
            parent.left = forerunner;
          } else { // 待删除节点是父节点的右子节点
            parent.right = forerunner;
          }
        }
      }
    }

    return current;
  }

  /**
   * @description 在传入节点的子树中获取传入节点的前驱接节点，同时在子树中删除前驱节点。
   * 删除前驱节点有两种情况：
   *  1、没有子节点：
   *    1）如果前驱节点的父节点是当前节点，则将父节点的左子节点置为空
   *    2）如果前驱节点的父节点不是当前节点，则将父节点的右子节点置为空
   *  2、有左子节点：
   *    1）如果前驱节点的父节点是当前节点，则将父节点的左子节点指向前驱节点的左子节点
   *    2）如果前驱节点的父节点不是当前节点，则将父节点的右子节点指向前驱节点的左子节点
   * @param node：需要获取前驱节点的节点
   * @return BstNode：得到的前驱节点
   */
  private getForerunner = (node: BstNode<T>): BstNode<T> => {
    // 定义前驱节点的父节点，默认为当前节点
    let parent = node;
    // 定义前驱节点，默认为当前节点的左子节点
    let forerunnerNode = node.left;
    // 因为前驱节点是当前节点node的左子树的最大值，所以只需要向左子树的右边一直查找就行
    while (forerunnerNode.right) {
      parent = forerunnerNode;
      forerunnerNode = forerunnerNode.right;
    }

    // 退出循环时，forerunnerNode就会查找到的前驱节点
    if (parent === node) { // 父节点为当前节点
      if (forerunnerNode.left) { // 前驱节点有左子节点
        // 在子树中删除前驱节点
        parent.left = forerunnerNode.left;
      } else { // 前驱节点没有左子节点
        // 在子树中删除前驱节点
        parent.left = null;
      }
    } else { // 父节点不是当前节点
      if (forerunnerNode.left) { // 前驱节点有左子节点
        // 在子树中删除前驱节点
        parent.right = forerunnerNode.left;
      } else { // 前驱节点没有左子节点
        // 在子树中删除前驱节点
        parent.right = null;
      }
    }
    return forerunnerNode;
  }
}
