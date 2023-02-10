import { GreedyAlgorithm } from './GreedyAlgorithm';

export const testGreedyAlgorithm = () => {
  console.log('=======================贪心算法测试=====================');
  const collectionArr = [
    {
      key: 'K1',
      value: ['北京', '上海', '天津']
    },
    {
      key: 'K2',
      value: ['广州', '北京', '深圳', '长沙', '贵阳', '天津', '上海']
    },
    {
      key: 'K3',
      value: ['成都', '上海', '杭州']
    },
    {
      key: 'K4',
      value: ['上海', '天津']
    },
    {
      key: 'K5',
      value: ['杭州', '大连']
    },
  ];
  console.log('待挑选的集合为：', collectionArr);
  console.log('贪心算法得到的结果为：', GreedyAlgorithm.collectionCover(collectionArr));
};
