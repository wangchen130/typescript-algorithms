import BinarySearch from './BinarySearch';

export const testBinarySearch = () => {
  console.log('====================二分查找测试开始=============');
  // 测试1
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  console.log('待查找的数组为：', arr);
  const findVal1 = 10;
  console.log('待查找的值为：', findVal1);
  console.log('查找结果为：', BinarySearch.binarySearch<number>(arr, findVal1));
  // 测试2
  const findVal2 = 11;
  console.log('待查找的值为：', findVal2);
  console.log('查找结果为：', BinarySearch.binarySearch<number>(arr, findVal2));
  // 测试3
  const findVal3 = 100;
  console.log('待查找的值为：', findVal3);
  console.log('查找结果为：', BinarySearch.binarySearch<number>(arr, findVal3));
  // 测试4
  const arr1 = [];
  console.log('待查找的数组为：', arr1);
  const findVal4 = 520;
  console.log('待查找的值为：', findVal4);
  console.log('查找结果为：', BinarySearch.binarySearch<number>(arr1, findVal4));
  // 测试5：查找字符串
  const arr2 = ['a', 'ab', 'aba', 'abb', 'abc', 'abd', 'abe', 'abe', 'abe', 'abe', 'abe', 'abd', 'abf', 'abg', 'abh', 'abi', 'abj'];
  console.log('待查找的数组为：', arr2);
  const findVal5 = 'abb';
  console.log('待查找的值为：', findVal5);
  console.log('查找结果为：', BinarySearch.binarySearch<string>(arr2, findVal5));

  const findVal6 = 'abe';
  console.log('待查找的值为：', findVal6);
  console.log('查找结果为：', BinarySearch.binarySearch<string>(arr2, findVal6));

  const findVal7 = 'abcdefghijk';
  console.log('待查找的值为：', findVal7);
  console.log('查找结果为：', BinarySearch.binarySearch<string>(arr2, findVal7));
};
