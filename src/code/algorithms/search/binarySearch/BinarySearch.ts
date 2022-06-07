export default class BinarySearch {

  /**
   * 二分查找
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return number[] 需要查找的值在数组中的所有下标构成的数组
   */
  public static binarySearch<T>(array: T[], findVal: T): number[] {
    const left = 0;
    const right = array.length - 1;
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
}
