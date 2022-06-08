/**
 * 插值查找为二分查找的改进版，对于中位数的取值有了一定的优化，对于连续分布的有序序列查找效率有所提高
 */
export default class InsertValueSearch {
  // 插值查找求中位数的公式为：
  // const mid = left + Math.floor((right - left) * (findVal - array[left]) / (array[right] - array[left]));

  /**
   * 插值查找，供外部调用的
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

}
