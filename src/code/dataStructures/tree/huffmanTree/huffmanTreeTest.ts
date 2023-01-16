import { HuffmanTree } from './HuffmanTree';

export const testHuffmanTree = () => {
  console.log('===================赫夫曼树测试开始==================');
  const array = [
    { weight: 13 },
    { weight: 7 },
    { weight: 8 },
    { weight: 3 },
    { weight: 29 },
    { weight: 6 },
    { weight: 1 }
  ];
  const huffmanTree = new HuffmanTree(array);
  console.log('huffmanTree:', huffmanTree);
  console.log('===================前序遍历==================');
  huffmanTree.preOrder((node) => {
    console.log(node);
  });
  console.log('===================中序遍历==================');
  huffmanTree.inOrder((node) => {
    console.log(node);
  });
  console.log('===================后序遍历==================');
  huffmanTree.postOrder((node) => {
    console.log(node);
  });
};
