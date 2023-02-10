import { AVLTree } from './AVLTree';

export const testAVLTree = () => {
  console.log('=======================测试AVL树=====================');
  console.log('=======================添加key为4, 3, 6, 5, 7, 8的数据=====================');
  const avlTree = new AVLTree();
  const keyArr = [4, 3, 6, 5, 7, 8];
  keyArr.forEach(key => avlTree.insert(key));
  console.log(avlTree);
  console.log('=======================前序遍历=====================');
  avlTree.preOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================中序遍历=====================');
  avlTree.inOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================后序遍历=====================');
  avlTree.postOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================树未平衡之前：=====================');
  console.log('=======================树的高度为=====================');
  console.log(avlTree.root.height());
  console.log('=======================树的左子树高度为=====================');
  console.log(avlTree.root.left.height());
  console.log('=======================树的右子树高度为=====================');
  console.log(avlTree.root.right.height());
};
