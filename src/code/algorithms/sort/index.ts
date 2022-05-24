import Sort from './Sort';

const getNumArr = (arrLength: number, numScope: number): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random() * numScope));
  }
  return arr;
};

export const testBubbleSort = () => {
  console.log('====================冒泡排序测试开始=============');
  let arr = getNumArr(20, 100);
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

export const testSelectSort = () => {
  console.log('====================选择排序测试开始=============');
  let arr = getNumArr(20, 1000);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.selectSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.selectSort<number>(arr, 'desc');
  console.log(arr.join(' '));
};

export const testInsertSort = () => {
  console.log('====================插入排序测试开始=============');
  let arr = getNumArr(15, 500);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.insertSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.insertSort<number>(arr, 'desc');
  console.log(arr.join(' '));
};
