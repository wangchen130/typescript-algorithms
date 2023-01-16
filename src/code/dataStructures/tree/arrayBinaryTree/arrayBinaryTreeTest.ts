import { ArrayBinaryTree } from './ArrayBinaryTree';

export const testArrayBinaryTree = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const abt = new ArrayBinaryTree(arr);
  console.log('====================ArrayBinaryTree测试开始================');
  console.log('ArrayBinaryTree存储的数组为:', arr);
  console.log('====================ArrayBinaryTree前序遍历================');
  console.log('前序遍历结果应该为：1,2,4,5,3,6,7 ');
  abt.preOrderTraverse((val) => {
    console.log(val);
  });
  console.log('====================ArrayBinaryTree中序遍历================');
  console.log('中序遍历结果应该为：4，2，5，1，6，3，7');
  abt.inOrderTraverse((val) => {
    console.log(val);
  });
  console.log('====================ArrayBinaryTree后续遍历================');
  console.log('结果应该为：4，5，2，6，7，3，1');
  abt.postOrderTraverse((val) => {
    console.log(val);
  });
};
