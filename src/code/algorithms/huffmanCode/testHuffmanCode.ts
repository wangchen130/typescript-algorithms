import { HuffmanCode } from './index';

export const testZipDataByHuffmanDataZip = () => {
  console.log('===================赫夫曼编码实现数据压缩测试================================');
  // const str = 'i like like like java do you like a java';
  // console.log('需要压缩的数据为：', str);
  // const zipData = HuffmanCode.huffmanDataZip(str);
  // console.log('压缩后的数据为：', zipData);
  // const decodeStr = HuffmanCode.huffmanDataUnzip(zipData);
  // console.log('解压后的数据为：', decodeStr);
  // console.log('解压后的数据是否等于压缩前的数据：', str === decodeStr);

  const str1 = '阿瑟费大沙发上疯狂快来看看方法阿拉山口的那是达拉斯呢拉开的那位i热了温暖  为克罗切洛娃了起来了   前两位且来打死了';
  console.log('需要压缩的数据为：', str1);
  const zipData1 = HuffmanCode.huffmanDataZip(str1);
  console.log('压缩后的数据为：', zipData1);
  const decodeStr1 = HuffmanCode.huffmanDataUnzip(zipData1);
  console.log('解压后的数据为：', decodeStr1);
  console.log('解压后的数据是否等于压缩前的数据：', str1 === decodeStr1);
};
