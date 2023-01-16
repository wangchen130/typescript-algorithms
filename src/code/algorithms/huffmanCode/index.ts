import { HuffmanTree, HuffmanTreeNode, IHuffmanTreeNodeDataObj } from './HuffmanTree';

export class HuffmanCode {
  // 生成的赫夫曼编码表，将其放在一个map中，key：为字符对应的  UTF-16 编码，value：为对应的赫夫曼编码，形式为： {101 => "000"}  {118 => "0010"}
  public static huffmanCodeTable = new Map<number, string>()

  // 赫夫曼解码表，用一个map进行表示，key：为对应的赫夫曼编码， value：为字符对应的 UTF-16 编码，形式为：{"000" => 101}  {"0010" =>118 }
  public static huffmanDecodeTable = new Map<string, number>()

  /**
   * @description 赫夫曼实现数据压缩，将字符串压缩为一个十进制的数组
   * @param data 需要压缩的数据
   * @return number[] 压缩后的数据，为一个数组
   */
  public static huffmanDataZip(data: string): number[] {
    const charCodeArr = this.strTOCharCodeArr(data);
    // console.log('charCodeArr:', charCodeArr);
    const nodeDataObjArr = this.charCodeArrToNodeDataArr(charCodeArr);
    // console.log('nodeDataObjArr:', nodeDataObjArr);
    const huffmanTree = new HuffmanTree(nodeDataObjArr);
    // console.log('huffmanTree:', huffmanTree);
    this.getHuffmanCodeTable(huffmanTree.root);
    console.log('赫夫曼编码表为：', this.huffmanCodeTable);
    console.log('赫夫曼解码表为：', this.huffmanDecodeTable);
    // console.log('huffmanCodeTable:', this.huffmanCodeTable);
    const UTF16Arr = this.dataZip(charCodeArr);
    return UTF16Arr;
  }

  /**
   * @description 赫夫曼编码实现数据解压（解码）
   * @param zipData 压缩后的数组
   * @return string 解压后的数据
   */
  public static huffmanDataUnzip(zipData: number[]): string {
    // 用于保存将压缩后的转换成赫夫曼编码的二进制字符串
    let codeBitStr = '';
    // 用于保存解压后的字符串
    let originStr = '';
    // 解码表中的key，在遍历转换后的二进制字符串时，需要一位一位的进行拼接，每次循环都要在解码表中查找是否有对应的key，没有继续循环，
    // 有的话将其对应的 value 转换成对应的原始字符串后，将 decodeKey清空，然后继续遍历
    let decodeKey = '';
    // 遍历压缩后的数组，将其转换成赫夫曼编码的二进制数组
    for (let i = 0, len = zipData.length; i < len; i++) {
      let zipDataItem = Number(zipData[i]);
      // 将十进制转换成二进制时，可能位出现不够16位的情况，所以需要转换成固定16位长的二进制，但是数组的最后一个不需要转化成定长的二进制，
      // 因为编码时，可能会粗线续后一位不满16位的情况，所以在解码时，数组最后一个元素也不需要转换成16位
      if (i < len - 1) {
        codeBitStr += this.dec2bin(zipDataItem);
      } else {
        codeBitStr += zipDataItem.toString(2);
      }
    }
    console.log('解码后得到的赫夫曼编码的二进制字符串为：', codeBitStr);

    // 遍历转换后的二进制字符串，将其在解码表中找到，然后转换成对应的原始字符
    for (let j = 0, len = codeBitStr.length; j < len; j++) {
      decodeKey += codeBitStr[j];
      const value = this.huffmanDecodeTable.get(decodeKey);
      if (value) {
        originStr += String.fromCharCode(value);
        decodeKey = '';
      }
    }
    return originStr;
  }

  /**
   * @description 将十进制转换为定长的二进制，默认转换为 16 位的二进制
   * @param num 需要转换的十进制的数
   * @param digits 需要转换成多少位
   */
  public static dec2bin(num: number, digits = 16): string {
    let bitStr = num.toString(2);
    const bitStrLen = bitStr.length;
    if (bitStrLen < digits) {
      for (let i = bitStrLen; i < digits; i++) {
        bitStr = `0${bitStr}`;
      }
    }
    return bitStr;
  }

  /**
   * @description 通过赫夫曼编码表，将字符串对应的UTF-16 数组转换成一个赫夫曼编码的字符串，然后将赫夫曼编码的字符串再压缩成一个UTF-16 数组
   * @param charCodeArr 对应的UTF-16 数组
   * @return 生成的byte数组
   * @private
   */
  private static dataZip(charCodeArr: number[]): number[] {
    const byteToUTF16Arr = [];
    let huffmanCodeStr = '';
    for (let i = 0, len = charCodeArr.length; i < len; i++) {
      const charCode = charCodeArr[i];
      huffmanCodeStr += this.huffmanCodeTable.get(charCode);
    }
    console.log('赫夫曼编码后的二进制字符串为:', huffmanCodeStr);

    // 将生成的赫夫曼编码的字符串转化成一个UTF-16 数组，即转化成一个 2 byte的数组
    for (let j = 0, len = huffmanCodeStr.length; j < len; j += 16) {
      let UTF16CodeStr = '';
      if (j + 16 > len) { // 长度不够16位
        UTF16CodeStr = huffmanCodeStr.slice(j);
      } else {
        UTF16CodeStr = huffmanCodeStr.slice(j, j + 16);
      }
      // 赫夫曼编码为二进制，将其转换为10进制，从而达到压缩的目的
      byteToUTF16Arr.push(parseInt(UTF16CodeStr, 2));
    }
    // console.log('byteToUTF16Arr:', byteToUTF16Arr);

    return byteToUTF16Arr;
  }

  /**
   * @description 将一个字符串转换为一个 UTF-16 数组
   * @param str 需要转化的字符中
   * @return 返回的 UTF-16 数组
   * @private
   */
  private static strTOCharCodeArr(str: string): number[] {
    const charCodeArr = [];
    for (let i = 0; i < str.length; i++) {
      let strElementCharCode = str.charCodeAt(i);
      charCodeArr.push(strElementCharCode);
    }
    return charCodeArr;
  }

  /**
   * @description 将 UTF-16 数组转化成生成赫夫曼树所需要的对象数组，形式为：[{  weight: 5; data: 105 }, {  weight: 4; data: 108}]
   * @param charCodeArr 生成赫夫曼节点数据数组所需要的 UTF-16 数组
   * @private
   */
  private static charCodeArrToNodeDataArr(charCodeArr: number[]): IHuffmanTreeNodeDataObj<number>[] {
    const arr: IHuffmanTreeNodeDataObj<number>[] = [];
    // 使用map来保存字符串中字符出现的次数， key:为字符，value:为出现的次数。形式为：  {105 => 5}  ， {32 => 9}
    const map = new Map();
    for (let i = 0, len = charCodeArr.length; i < len; i++) {
      let charCode = charCodeArr[i];
      // 尝试从map中取出当前charCode，如果取到，则证明是相同的字符，需要将出现的次数 + 1，如果
      const count = map.get(charCode);
      if (count) {
        map.set(charCode, count + 1);
      } else {
        map.set(charCode, 1);
      }
    }
    // console.log('map:', map);
    // 遍历map，将map生成形式如 [{  weight: 5; data: 'i' }, {  weight: 4; data: 'l'}] 的数组，用来生成赫夫曼树
    for (const [key, value] of map) {
      // console.log(key, value);
      arr.push({
        weight: value,
        data: key
      });
    }
    return arr;
  }

  /**
   * @description 将赫夫曼树生成赫夫曼编码表
   * @param root 赫夫曼树的根结点
   * @private
   */
  private static getHuffmanCodeTable(root: HuffmanTreeNode<number>): Map<number, string> {
    if (!root) {
      return null;
    }
    this.getHuffmanCodeTableRecursion(root.left, '0', '');
    this.getHuffmanCodeTableRecursion(root.right, '1', '');
    return this.huffmanCodeTable;
  }

  /**
   * @description 从一个节点开始递归生成赫夫曼编码表
   * @param node 赫夫曼树的节点
   * @param code 编码路径： 左子结点是 0, 右子结点 1
   * @param codeStr 拼接的路径
   * @private
   */
  private static getHuffmanCodeTableRecursion(node: HuffmanTreeNode<number>, code: string, codeStr: string) {
    if (node) {
      // 拼接路径
      codeStr += code;
      // data为null为非叶子节点（也可用 !node.left && !node.right 进行判断），则需要继续递归
      if (node.data === null) {
        // 向左递归
        this.getHuffmanCodeTableRecursion(node.left, '0', codeStr);
        // 向右递归
        this.getHuffmanCodeTableRecursion(node.right, '1', codeStr);
      } else { // 叶子节点
        // 将所得的编码加入到编码表和解码表中，结束本次递归
        this.huffmanCodeTable.set(node.data, codeStr);
        this.huffmanDecodeTable.set(codeStr, node.data);
      }
    }
  }
}
