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

export const testShellSort = () => {
  console.log('====================希尔排序测试开始=============');
  let arr = getNumArr(20, 300);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.shellSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.shellSort<number>(arr, 'desc');
  console.log(arr.join(' '));
};
export const testQuickSort = () => {
  console.log('====================快速排序测试开始=============');

  // 20个400以内的数
  console.log('20个400以内的数：');
  let arr = getNumArr(20, 400);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.shellSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.shellSort<number>(arr, 'desc');
  console.log(arr.join(' '));

  // 1个100以内的数
  console.log('1个100以内的数：');
  let arr1 = getNumArr(1, 100);
  console.log(arr1.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.shellSort<number>(arr1);
  console.log(arr1.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.shellSort<number>(arr1, 'desc');
  console.log(arr1.join(' '));

  // 2个1000以内的数
  console.log('2个1000以内的数：');
  let arr2 = getNumArr(2, 1000);
  console.log(arr2.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.shellSort<number>(arr2);
  console.log(arr2.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.shellSort<number>(arr2, 'desc');
  console.log(arr2.join(' '));
};

testQuickSort();
