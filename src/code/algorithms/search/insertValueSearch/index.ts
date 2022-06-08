import InsertValueSearch from './InsertValueSearch';

export const testInsertValueSearch = () => {
  console.log('====================插值查找测试开始=============');
  // 测试1
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  console.log('待查找的数组为：', arr);
  const findVal1 = 10;
  console.log('待查找的值为：', findVal1);
  console.log('查找结果为：', InsertValueSearch.insertValueSearch(arr, findVal1));
  // 测试2
  const findVal2 = 11;
  console.log('待查找的值为：', findVal2);
  console.log('查找结果为：', InsertValueSearch.insertValueSearch(arr, findVal2));
  // 测试3
  const findVal3 = 500;
  console.log('待查找的值为：', findVal3);
  console.log('查找结果为：', InsertValueSearch.insertValueSearch(arr, findVal3));
  // 测试4
  const arr1 = [];
  console.log('待查找的数组为：', arr1);
  const findVal4 = 520;
  console.log('待查找的值为：', findVal4);
  console.log('查找结果为：', InsertValueSearch.insertValueSearch(arr1, findVal4));

  // 测试连续分布的序列
  const arr2: number[] = [];
  for (let i = 1; i <= 200; i++) {
    arr2.push(i);
  }
  console.log('待查找的数组为：', arr2);
  const findVal5 = 1;
  console.log('待查找的值为：', findVal5);
  console.log('查找结果为：', InsertValueSearch.insertValueSearch(arr2, findVal5));

};
