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
  console.log('25个400以内的数：');
  let arr = getNumArr(25, 400);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.quickSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.quickSort<number>(arr, 'desc');
  console.log(arr.join(' '));

  // 1个100以内的数
  console.log('1个100以内的数：');
  let arr1 = getNumArr(1, 100);
  console.log(arr1.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.quickSort<number>(arr1);
  console.log(arr1.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.quickSort<number>(arr1, 'desc');
  console.log(arr1.join(' '));

  // 2个1000以内的数
  console.log('2个1000以内的数：');
  let arr2 = getNumArr(2, 1000);
  console.log(arr2.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.quickSort<number>(arr2);
  console.log(arr2.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.quickSort<number>(arr2, 'desc');
  console.log(arr2.join(' '));
  const arr3 = [211, 283, 4, 74, 216, 222, 365, 388, 31, 171, 247, 184, 382, 219, 77, 75, 14, 45, 87, 78];
  console.log('排序前：');
  console.log(arr3.join(' '));
  console.log('====================升序排序=============');
  Sort.quickSort(arr3, 'asc');
  console.log(arr3.join(' '));
  console.log('====================降序排序=============');
  Sort.quickSort(arr3, 'desc');
  console.log(arr3.join(' '));
};

export const testMergeSort = () => {
  console.log('====================归并排序测试开始=============');

  // 20个400以内的数
  console.log('20个300以内的数：');
  let arr = getNumArr(6, 300);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.mergeSort<number>(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.mergeSort<number>(arr, 'desc');
  console.log(arr.join(' '));

  // 1个100以内的数
  console.log('1个200以内的数：');
  let arr1 = getNumArr(1, 200);
  console.log(arr1.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.mergeSort<number>(arr1);
  console.log(arr1.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.mergeSort<number>(arr1, 'desc');
  console.log(arr1.join(' '));

  // 2个200以内的数
  console.log('2个200以内的数：');
  let arr2 = getNumArr(2, 200);
  console.log(arr2.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.mergeSort<number>(arr2);
  console.log(arr2.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.mergeSort<number>(arr2, 'desc');
  console.log(arr2.join(' '));
};

export const testRadixSort = () => {
  console.log('====================基数排序测试开始=============');

  // 20个2000以内的数
  console.log('20个2000以内的数：');
  let arr = getNumArr(20, 2000);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.radixSort(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.radixSort(arr, 'desc');
  console.log(arr.join(' '));

  // 1个50以内的数
  console.log('1个50以内的数：');
  let arr1 = getNumArr(1, 50);
  console.log(arr1.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.radixSort(arr1);
  console.log(arr1.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.radixSort(arr1, 'desc');
  console.log(arr1.join(' '));

  // 2个400以内的数
  console.log('2个400以内的数：');
  let arr2 = getNumArr(2, 400);
  console.log(arr2.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.radixSort(arr2);
  console.log(arr2.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.radixSort(arr2, 'desc');
  console.log(arr2.join(' '));
};

export const testHeapSort = () => {
  console.log('====================堆排序测试开始=============');
  // [4, 6, 8, 5, 9]
  let array = [4, 6, 8, 5, 9];
  console.log(array.join(' '));
  console.log('====================升序排序=============');
  Sort.heapSort(array);
  console.log(array.join(' '));
  console.log('====================降序排序=============');
  Sort.heapSort(array, 'desc');
  console.log(array.join(' '));

  // 20个2000以内的数
  console.log('20个2000以内的数：');
  let arr = getNumArr(20, 2000);
  console.log(arr.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.heapSort(arr);
  console.log(arr.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.heapSort(arr, 'desc');
  console.log(arr.join(' '));

  // 1个50以内的数
  console.log('1个50以内的数：');
  let arr1 = getNumArr(1, 50);
  console.log(arr1.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.heapSort(arr1);
  console.log(arr1.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.heapSort(arr1, 'desc');
  console.log(arr1.join(' '));

  // 2个400以内的数
  console.log('2个400以内的数：');
  let arr2 = getNumArr(2, 400);
  console.log(arr2.join(' '));
  // 升序
  console.log('====================升序排序=============');
  Sort.heapSort(arr2);
  console.log(arr2.join(' '));
  // 降序
  console.log('====================降序排序=============');
  Sort.heapSort(arr2, 'desc');
  console.log(arr2.join(' '));

};
