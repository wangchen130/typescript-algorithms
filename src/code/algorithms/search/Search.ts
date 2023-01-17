import _ from 'lodash';

export default class Search {
  /**
   * 二分查找
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return number[] 需要查找的值在数组中的所有下标构成的数组
   */
  public static binarySearch<T>(array: T[], findVal: T): number[] {
    const left = 0;
    const arrayLen = array.length;
    const right = arrayLen - 1;
    // 因为array为升序排列的数组，所以如果我们查找的值小于数组的最小值或者大于数组的最大值，则查找的值肯定不在数组中，即可直接返回
    if (arrayLen === 0 || findVal < array[left] || findVal > array[right]) {
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
    // 定义存储查找结果下标的数据
    const resIndexList: number[] = [];
    // 当 left > right时，说明查找的值不在当前数据中，则返回 resIndexList ，此时 resIndexList 为空，也可以返回空数组
    if (left > right) {
      return resIndexList;
    }
    const mid = Math.floor((left + right) / 2);
    const midVal = array[mid];
    // 需要查找的值小于 midVal，向左递归
    if (findVal < midVal) {
      return this.binarySearchRecursion<T>(array, left, mid - 1, findVal);
    }
    // 需要查找的值大于 midVal ，向右递归
    if (findVal > midVal) {
      return this.binarySearchRecursion<T>(array, mid + 1, right, findVal);
    }
    // 此时证明找到了值，且下标为 mid，则此时需要分别向mid的前面和后面进行查找，看是否还有值等于 findVal
    // 向 array[mid] 的前面查找
    let tempIndex = mid - 1;
    while (tempIndex >= 0 && findVal === array[tempIndex]) {
      resIndexList.unshift(tempIndex);
      tempIndex--;
    }
    // 将找到的下标mid添加到 resIndexList 中
    resIndexList.push(mid);
    // 向 array[mid] 的后面查找
    tempIndex = mid + 1;
    while (tempIndex < array.length && findVal === array[tempIndex]) {
      resIndexList.push(tempIndex);
      tempIndex++;
    }
    return resIndexList;
  }

  /**
   * @description 非递归的方式实现二分查找
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return number[] 需要查找的值在数组中的所有下标构成的数组
   */
  public static binarySearchNoRecursion<T>(array: T[], findVal: T): number[] {
    // 定义存储查找结果下标的数据
    const resIndexList: number[] = [];
    // 左下标
    let left = 0;
    // 右下标
    let right = array.length - 1;
    // 因为使用非递归的方式，所以需要不停地改变left 和 right 的值，只要left还小于或等于right，则就可以继续查找
    while (left <= right) {
      // 得到中点位置的坐标
      const mid = Math.floor((left + right) / 2);
      // 找到了查找的值在数组中位置
      if (findVal === array[mid]) {
        resIndexList.push(mid);
        // 定义一个临时的下标，用于向 mid 的左右两边继续查找是否还有与需要查找的findVal相等的值,先向 mid 的左边查找，再向 mid 的右边查找
        // 向左查找
        let tempIndex = mid - 1;
        while (array[tempIndex] === findVal && tempIndex >= 0) { // tempIndex为数组下标，所以不能小于0
          resIndexList.unshift(tempIndex);
          // 将 tempIndex 减 1，继续向左查找
          tempIndex--; // ！！！！一定要改变 tempIndex 的值，否则会陷入死循环
        }
        // 向右查找
        tempIndex = mid + 1;
        while (array[tempIndex] === findVal && tempIndex <= array.length - 1) { // tempIndex为数组下标，所以不能大于数组长度
          resIndexList.push(tempIndex);
          // 将 tempIndex 加 1，继续向右查找
          tempIndex++; // ！！！！一定要改变 tempIndex 的值，否则会陷入死循环
        }
        // 得到所有的位置坐标后，结束循环
        break;
      } else if (findVal < array[mid]) { // 如果查找的值小于中点的值，则证明查找的值在中点的左边，所以需要继续向左查找，这时需要让right = mid - 1
        right = mid - 1;
      } else { // 这时查找的值大于中点的值，则证明查找的值在中点的右边，所以需要继续向左查找，这时需要让left = mid + 1
        left = mid + 1;
      }
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
    const arrayLen = array.length;
    const right = arrayLen - 1;
    // 因为array为升序排列的数组，所以如果我们查找的值小于数组的最小值或者大于数组的最大值，则查找的值肯定不在数组中，即可直接返回
    if (arrayLen === 0 || findVal < array[left] || findVal > array[right]) {
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
   * 斐波那契查找的求中位数的公式为：mid = low + F(k-1) - 1
   * @param array 需要进行查找的数组，必须为升序排列的有序数组
   * @param findVal 需要查找的值
   * @return 需要查找的值在数组中的所有下标构成的数组
   */
  public static fibSearch(array: number[], findVal: number): number[] {
    let low = 0;
    const arrayLen = array.length;
    let high = arrayLen - 1;
    const resIndexList: number[] = [];
    // 因为array为升序排列的数组，所以如果我们查找的值小于数组的最小值或者大于数组的最大值，则查找的值肯定不在数组中，即可直接返回
    if (arrayLen === 0 || findVal < array[low] || findVal > array[high]) {
      return resIndexList;
    }
    let k = 0;
    let mid = 0;
    let f = this.getFibList(k + 1);
    while (high > f[k] - 1) {
      k++;
      f = this.getFibList(k + 1);
    }
    const tempArray = _.cloneDeep(array);
    for (let i = 0; i < f[k] - arrayLen; i++) {
      tempArray.push(array[high]);
    }
    while (low <= high) {
      // 求出黄金分隔点
      mid = low + f[k - 1] - 1;
      if (findVal < tempArray[mid]) { // 查找的值小于 tempArray[mid]，向左进行查找
        high = mid - 1;
        k--;
      } else if (findVal > tempArray[mid]) { // 查找的值大于 tempArray[mid]，向右进行查找
        low = mid + 1;
        k -= 2;
      } else { // 找到，即 findVal === tempArray[mid]
        // 因为 tempArray 可能对原数组进行了扩容，并且用 array 数组的最后一个值进行填充，所以可能会存在找到的mid大于 array 的最大下标
        if (mid > arrayLen - 1) {
          mid = arrayLen - 1;
        }
        // 向 tempArray[mid] 的前面查找
        let tempIndex = mid - 1;
        while (tempIndex >= 0 && findVal === tempArray[tempIndex]) {
          resIndexList.unshift(tempIndex);
          tempIndex--;
        }
        resIndexList.push(mid);
        // 向 array[mid] 的后面查找
        tempIndex = mid + 1;
        while (tempIndex < arrayLen && findVal === tempArray[tempIndex]) {
          resIndexList.push(tempIndex);
          tempIndex++;
        }
        return resIndexList;
      }
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
