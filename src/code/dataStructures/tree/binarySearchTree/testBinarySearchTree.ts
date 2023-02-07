import { BinarySearchTree } from './BinarySearchTree';

export const testBinarySearchTree = () => {
  console.log('=======================测试二叉搜索树=====================');
  const bst = new BinarySearchTree();
  bst.insert(11);
  bst.insert(7);
  bst.insert(15);
  bst.insert(5);
  bst.insert(3);
  bst.insert(9);
  bst.insert(8);
  bst.insert(10);
  bst.insert(13);
  bst.insert(12);
  bst.insert(14);
  bst.insert(20);
  bst.insert(18);
  bst.insert(25);
  bst.insert(19);
  bst.insert(6);
  console.log('=======================前序遍历=====================');
  bst.preOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================中序遍历=====================');
  bst.inOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================后序遍历=====================');
  bst.postOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================查找测试=====================');
  console.log('=======================查找key为11=====================');
  console.log(bst.search(11));
  console.log('=======================查找key为7=====================');
  console.log(bst.search(7));
  console.log('=======================查找key为25=====================');
  console.log(bst.search(25));
  console.log('=======================查找key为6=====================');
  console.log(bst.search(6));
  console.log('=======================查找key为100=====================');
  console.log(bst.search(100));
  console.log('=======================最小的节点为=====================');
  console.log(bst.min());
  console.log('=======================最大的节点为=====================');
  console.log(bst.max());
  console.log('=======================删除测试=====================');
  console.log('=======================删除key为6的节点=====================');
  console.log(bst.remove(6));
  console.log('=======================前序遍历=====================');
  bst.preOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================删除key为11的节点,即根结点=====================');
  console.log(bst.remove(11));
  console.log('=======================前序遍历=====================');
  bst.preOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================删除key为7的节点点=====================');
  console.log(bst.remove(7));
  console.log('=======================前序遍历=====================');
  bst.preOrderTraverse(node => {
    console.log(node.key);
  });
  console.log('=======================删除key为15的节点=====================');
  console.log(bst.remove(15));
  console.log('=======================前序遍历=====================');
  bst.preOrderTraverse(node => {
    console.log(node.key);
  });
};
