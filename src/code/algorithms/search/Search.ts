export default class Search {
  /**
   * 二分查找
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return number[] 需要查找的值在数组中的所有下标构成的数组
   */
  public static binarySearch<T>(array: T[], findVal: T): number[] {
    const left = 0;
    const right = array.length - 1;
    // 因为array为升序排列的数组，所以如果我们查找的值小于数组的最小值或者大于数组的最大值，则查找的值肯定不在数组中，即可直接返回
    if (findVal < array[left] || findVal > array[right]) {
      return [];
    }
    return this.binarySearchRecursion<T>(array, left, right, findVal);
  }

  /**
   * 递归进行二分查找
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param left 左边的下标
   * @param right 右边的下标
   * @param findVal 需要查找的值
   * @private
   * @return number[] 需要查找的值在数组中的所有下标构成的数组
   */
  private static binarySearchRecursion<T>(array: T[], left: number, right: number, findVal: T): number[] {
    const resIndexList: number[] = [];
    if (left > right) {
      return resIndexList;
    }
    const mid = Math.floor((left + right) / 2);
    const midVal = array[mid];
    if (findVal < midVal) { // 需要查找的值小于 midVal，向左递归
      return this.binarySearchRecursion<T>(array, left, mid - 1, findVal);
    }
    if (findVal > midVal) { // 需要查找的值大于 midVal ，向右递归
      return this.binarySearchRecursion<T>(array, mid + 1, right, findVal);
    }
    let tempIndex = mid - 1;
    while (tempIndex >= 0 && findVal === array[tempIndex]) {
      resIndexList.unshift(tempIndex);
      tempIndex--;
    }
    resIndexList.push(mid);
    tempIndex = mid + 1;
    while (tempIndex < array.length && findVal === array[tempIndex]) {
      resIndexList.push(tempIndex);
      tempIndex++;
    }
    return resIndexList;
  }

  /**
   * 插值查找，供外部调用的
   * 插值查找为二分查找的改进版，对于中位数的取值有了一定的优化，对于连续分布的有序序列查找效率有所提高
   * 插值查找求中位数的公式为：
   * const mid = left + Math.floor(((findVal - array[left]) / (array[right] - array[left])) * (right - left));
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return 需要查找的值在数组中的所有下标构成的数组
   */
  public static insertValueSearch(array: number[], findVal: number): number[] {
    const left = 0;
    const right = array.length - 1;
    // 因为array为升序排列的数组，所以如果我们查找的值小于数组的最小值或者大于数组的最大值，则查找的值肯定不在数组中，即可直接返回
    if (findVal < array[left] || findVal > array[right]) {
      return [];
    }
    return this.insertValueSearchRecursion(array, left, right, findVal);
  }

  /**
   * 递归进行插值查找，供内部调用
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param left 左边的下标
   * @param right 右边的下标
   * @param findVal 需要查找的值
   * @private
   * @return number[] 需要查找的值在数组中的所有下标构成的数组
   */
  private static insertValueSearchRecursion(array: number[], left: number, right: number, findVal: number): number[] {
    const resIndexList: number[] = [];
    if (left > right) {
      return resIndexList;
    }
    const mid = left + Math.floor(((findVal - array[left]) / (array[right] - array[left])) * (right - left));
    const midVal = array[mid];
    // 向左递归
    if (findVal < midVal) {
      return this.insertValueSearchRecursion(array, left, mid - 1, findVal);
    }
    // 向右递归
    if (findVal > midVal) {
      return this.insertValueSearchRecursion(array, mid + 1, right, findVal);
    }

    // 需要在探索 midVal 的前后是否还有等于 findVal 的值
    let tempIndex = mid - 1;
    while (tempIndex >= 0 && array[tempIndex] === findVal) {
      resIndexList.unshift(tempIndex);
      tempIndex--;
    }
    resIndexList.push(mid);
    tempIndex = mid + 1;
    while (tempIndex < array.length && array[tempIndex] === findVal) {
      resIndexList.push(tempIndex);
      tempIndex++;
    }
    return resIndexList;
  }

  /**
   * 斐波那契(黄金分割法)查找，供外部调用的
   * 斐波那契查找的求中位数的公司为：mid = low + F(k-1) - 1
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return 需要查找的值在数组中的所有下标构成的数组
   */
  public static fibSearch(array: number[], findVal: number): number[] {
    const low = 0;
    const high = array.length - 1;
    const resIndexList: number[] = [];
    // 因为array为升序排列的数组，所以如果我们查找的值小于数组的最小值或者大于数组的最大值，则查找的值肯定不在数组中，即可直接返回
    if (findVal < array[low] || findVal > array[high]) {
      return resIndexList;
    }
    return resIndexList;
  }

  /**
   * 生成一个斐波那契数列
   * @param maxSize 斐波那契数列的长度
   * @return number[] 生成的斐波那契数列
   */
  public static getFibList(maxSize: number): number[] {
    const f: number[] = [];
    if (maxSize <= 0) {
      return f;
    }
    f[0] = 1;
    if (maxSize === 1) {
      return f;
    }
    f[1] = 1;
    if (maxSize === 2) {
      return f;
    }
    // 在前面已经将 f[0] 和 f[1] 进行赋值了，所以此处直接从 f[2] 开始赋值
    for (let i = 2; i < maxSize; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }
    return f;
  }

}
