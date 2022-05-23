import Sort from './Sort';

export const testBubbleSort = () => {
  console.log('====================冒泡排序测试开始=============');
  let arr: number[] = [];
  const arrLength = 20;
  const numScope = 100;
  for (let i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random() * numScope));
  }
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.bubbleSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.bubbleSort<number>(arr, 'desc');
  console.log(arr.join(' '));

};
