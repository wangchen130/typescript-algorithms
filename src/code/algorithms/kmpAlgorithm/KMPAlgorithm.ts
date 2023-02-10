/*
  需求：
    1）有一个字符串 str1= '我爱你 你爱我你爱我 你爱我你爱我我爱你你好'，和一个子串 str2='你爱我你爱我我'
    2）现在要判断 str1 是否含有 str2, 如果存在，就返回第一次出现的位置, 如果没有，则返回-1
*/
export class KMPAlgorithm {

  /**
   * @description kmp搜索算法
   * @param str1 源字符串
   * @param str2 子串
   * @return {number} 如果是-1就是没有匹配到，否则返回第一个匹配的位置
   */
  public static kmpSearch(str1: string, str2: string): number {
    // 得到子串的KMP部分匹配表
    const next = this.getKMPNext(str2);
    // j 为KMP部分匹配表的值
    for (let i = 0, j = 0, len = str1.length; i < len; i++) {
      // 需要处理 str1[i] !== str2[j], 去调整j的大小
      // KMP算法核心点
      while (j > 0 && str1[i] !== str2[j]) {
        j = next[j - 1];
      }

      // 源串和子串匹配成功，子串 str2 的下标向后移动
      if (str1[i] === str2[j]) {
        j++;
      }

      // 此时证明匹配完毕
      if (j === str2.length) {
        // 注意 str2 在 str1 中出现的初始位置为 i - j + 1，因为j在前面匹配到时进行了 ++操作，
        // 但是由于for循环未结束，所以i还没有进行++操作，所以 i - j 并不是初始位置， i - j + 1才是初始位置
        return i - j + 1;
      }
    }

    return -1;
  }

  /**
   * @description 获取KMP部分匹配表
   * @param str：需要获取部分匹配表的字符串
   * @return {number[]} 得到的部分匹配表
   */
  public static getKMPNext(str: string): number[] {
    // 如果字符串为空，则没有部分匹配表，返回空数组
    if (!str) {
      return [];
    }
    const len = str.length;
    // 初始化部分匹配表，默认素有值初始化为0
    const nextArr = new Array(len).fill(0);
    // 遍历str，获取部分匹配表，i 默认从1开始，因为单个字符的部分匹配表为 [0]
    // j为部分匹配值，默认为0
    for (let i = 1, j = 0; i < len; i++) { // 注意 i 是一直在增加的
      // 当str[i] !== str[j] ，我们需要从next[j-1]获取新的 j
      // 直到我们发现 有 str[i] === str[j]时，这时证明j减小到了与 i 位置字符相等的位置，满足了部分匹配值 +1 的条件，所以需要退出循环
      // 这时kmp算法的核心点
      while (j > 0 && str[i] !== str[j]) {
        j = nextArr[j - 1];
      }
      // str[i] === str[j] 满足时，部分匹配值就是+1
      if (str[i] === str[j]) {
        j++;
      }
      nextArr[i] = j;
    }
    return nextArr;
  }

  /**
   * 暴力匹配算法
   * @param str1
   * @param str2
   * @return {number}：str2在str1中第一次出现的位置
   */
  public static violenceMatch1 (str1: string, str2: string): number {
    const s1Len = str1.length;
    const s2Len = str2.length;
    for (let i = 0; i < s1Len; i++) { // 遍历str1
      // 每次进入内层循环时，j都是从 0 开始爹
      for (let j = 0; j < s2Len; j++) { // 遍历str2
        const s2Item = str2[j];
        /*
          j每次都是从0开始，则 i + j 就为str1和str2的对应位置。
          比如：i = 4 时，进入内层时，j = 0，这时：str1[i + j] = str1[4 + 0] = str1[4],
            1)如果 str1[4] !== s2Item，此时第一字符就不匹配，则可以【结束内循环】，继续看str1的下一位字符是否与str2的第一个字符匹配，
              如果 str1[4] === s2Item，则继续进行内循环。此时 j = 1,则 str1[i + j] = str1[4 + 1] = str1[5],继续判断 str1[5]是否等于 str2[1]
            2）当 j === s2Len - 1时，表明已经str2已经匹配完，则可以直接将 i 返回，i就为str2在str1中第一次出现的位置
        */
        if (str1[i + j] !== s2Item) {
          break;
        }
        if (j === s2Len - 1) {
          return i;
        }
      }
    }
    return -1;
  }

  /**
   * 暴力匹配算法
   * @param str1
   * @param str2
   * @return {number}：str2在str1中第一次出现的位置
   */
  public static violenceMatch2(str1: string, str2: string): number {
    const s1Len = str1.length;
    const s2Len = str2.length;
    // i 为指向 str1 的下标
    let i = 0;
    // j 为指向 str2 的下标
    let j = 0;
    while (i < s1Len && j < s2Len) { // 越界后退出循环
      if (str1[i] === str2[j]) { // 如果两个字符串当前的字符相等的话，就继续比较下一个字符
        i++;
        j++;
      } else { // 出现不匹配，则需要回溯
        // 因为str1是父串，str2是子串，每次回溯都需要从str2的第一个字符，从str1之前比较的下一个字符开始比较，
        // 由于str1走过的距离和str2走过的距离相等，每次从str2的第一个字符开始比较，即需要将 j 置为0，
        // i - j 就为str1回溯前的初始位置，则 i - j + 1 就为str1初始位置的下一个位置
        i = i - j + 1;
        j = 0;
      }
    }

    if (j === s2Len) {
      // 因为 i 是终点位置，即走过了 str2 字符串长度的距离，所以初始位置为 i - j
      return i - j;
    }
    return -1;
  }
}
