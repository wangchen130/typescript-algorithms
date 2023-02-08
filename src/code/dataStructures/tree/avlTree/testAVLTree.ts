import { AVLTree } from './AVLTree';

export const testAVLTree = () => {
  console.log('=======================测试AVL树=====================');
  console.log('=======================添加key为4, 3, 6, 5, 7, 8的数据=====================');
  const avlTree = new AVLTree();
  const keyArr = [4, 3, 6, 5, 7, 8];
  keyArr.forEach(key => avlTree.insert(key));
  console.log(avlTree);
};
