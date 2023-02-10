import { KMPAlgorithm } from './KMPAlgorithm';

export const testKMPAlgorithm = () => {
  console.log('=======================KMP算法测试=====================');
  console.log('=======================str1 = \'我爱你 你爱我你爱我 你爱我你爱我我爱你你好\'=====================');
  console.log('=======================str2 = \'你爱我你爱我我\'=====================');
  const str1 = '我爱你 你爱我你爱我 你爱我你爱我我爱你你好';
  const str2 = '你爱我你爱我我';
  console.log('暴力匹配算法结果为：');
  console.log('str2在str1中第一次出现的位置为：', KMPAlgorithm.violenceMatch1(str1, str2));
  console.log('暴力匹配算法结果为：');
  console.log('str2在str1中第一次出现的位置为：', KMPAlgorithm.violenceMatch2(str1, str2));
  console.log('AAAAA的KMP部分匹配表为：', KMPAlgorithm.getKMPNext('AAAAA'));
  console.log('AAAAB的KMP部分匹配表为：', KMPAlgorithm.getKMPNext('AAAAB'));
  console.log('ABCDABD的KMP部分匹配表为：', KMPAlgorithm.getKMPNext('ABCDABD'));
  const s1 = 'BBC ABCDAB ABCDABCDABDE';
  const s2 = 'ABCDABD';
  console.log('=======================s1 = \'BBC ABCDAB ABCDABCDABDE\'=====================');
  console.log('=======================s2 = \'ABCDABD\'=====================');
  console.log('暴力匹配算法结果为：');
  console.log('s2在s1中第一次出现的位置为：', KMPAlgorithm.violenceMatch1(s1, s2));
  console.log('暴力匹配算法结果为：');
  console.log('s2在s1中第一次出现的位置为：', KMPAlgorithm.violenceMatch2(s1, s2));
  console.log('KMP算法结果为：');
  console.log('s2在s1中第一次出现的位置为：', KMPAlgorithm.kmpSearch(s1, s2));
};
