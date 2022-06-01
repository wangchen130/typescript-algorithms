export default class Sort {

  /**
   * 交换数组中两个位置的值
   * @param array 需要交换值的数组
   * @param m 交换的下标1
   * @param n 交换的下标2
   */
  public static swap(array: any[], m: number, n: number) {
    const len = array.length;
    if (m < 0 || m > len - 1 || n < 0 || n > len - 1) return;
    const temp = array[m];
    array[m] = array[n];
    array[n] = temp;
  }

  /**
   * 冒泡排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static bubbleSort<T>(array: T[], sortType: 'asc' | 'desc' = 'asc') {
    const len = array.length;
    if (len < 2) return;
    for (let i = len; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (sortType === 'asc') { // 升序
          if (array[j] > array[j + 1]) {
            this.swap(array, j, j + 1);
          }
        } else if (sortType === 'desc') { // 降序
          if (array[j] < array[j + 1]) {
            this.swap(array, j, j + 1);
          }
        }
      }
    }
  }

  /**
   * 选择排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static selectSort<T>(array: T[], sortType: 'asc' | 'desc' = 'asc') {
    const len = array.length;
    if (len < 2) return;
    for (let i = 0; i < len; i++) {
      let index = i;
      for (let j = index + 1; j < len; j++) {
        if (sortType === 'asc') { // 升序
          if (array[j] < array[index]) {
            index = j;
          }
        } else if (sortType === 'desc') { // 降序
          if (array[j] > array[index]) {
            index = j;
          }
        }
      }
      this.swap(array, i, index);
    }
  }

  /**
   * 插入排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static insertSort<T>(array: T[], sortType: 'asc' | 'desc' = 'asc') {
    const len = array.length;
    if (len < 2) return;
    for (let i = 1; i < len; i++) {
      const insertVal = array[i];
      let insertIndex = i;
      if (sortType === 'asc') { // 升序
        while (insertVal < array[insertIndex - 1] && insertIndex > 0) {
          array[insertIndex] = array[insertIndex - 1];
          insertIndex--;
        }
      } else if (sortType === 'desc') { // 降序
        while (insertVal > array[insertIndex - 1] && insertIndex > 0) {
          array[insertIndex] = array[insertIndex - 1];
          insertIndex--;
        }
      }
      array[insertIndex] = insertVal;
    }
  }

  /**
   * 希尔排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static shellSort<T>(array: T[], sortType: 'asc' | 'desc' = 'asc') {
    const len = array.length;
    // 如果数组长度小于2，即只有一个元素或者为空数组，则无需进行排序
    if (len < 2) return;
    // 注意：需要用 Math.floor 对 len / 2 进行取整，因为ts的出发得到的是浮点，gap = Math.floor(gap / 2) 这段代码同理
    for (let gap = Math.floor(len / 2); gap >= 1; gap = Math.floor(gap / 2)) {
      // 从gap开始，向前进行插入排序。例如：若数组长度为10，第一次分组gap为5，第二次分组gap为2，当 gap=2 时；
      // 则从数组的第3个元素开始，和第1个元素进行插入排序。然后到第4个元素，和第2个元素进行插入排序。
      // 接下来到第5个元素，此时需要和第3个和第1个进行插入排序,依次类推
      for (let i = gap; i < len; i++) {
        // 定义一个变量，用来保存需要与前面的元素进行插入排序的元素
        const temp = array[i];
        let j = i;
        if (sortType === 'asc') { // 升序
          while (j - gap >= 0 && array[j - gap] > temp) {
            array[j] = array[j - gap];
            j -= gap;
          }
        } else if (sortType === 'desc') { // 降序
          while (j - gap >= 0 && array[j - gap] < temp) {
            array[j] = array[j - gap];
            j -= gap;
          }
        }
        // 此时 j 位置的元素就为temp的正确位置
        array[j] = temp;
      }
    }
  }

  public static quickSort<T>(array: T[], sortType: 'asc' | 'desc' = 'asc') {
    const len = array.length;
    // 如果数组长度小于2，即只有一个元素或者为空数组，则无需进行排序
    if (len < 2) return;
    this.quick<T>(array, 0, len - 1, sortType);
  }

  private static quick<T>(array: T[], left: number, right: number, sortType: 'asc' | 'desc' = 'asc') {
    if (left >= right) return;
    let l = left;
    let r = right - 1;
    // 找到数组中间的位置
    let middle = Math.floor((left + right) / 2);
    // 将中间位置的元素与最后一个进行交换
    this.swap(array, middle, right);
    while (l < r) {
      if (sortType === 'asc') { // 升序
        // 从数组的左边开始，如果值小于最右边的值，即继续向后找，直到找到一个比最右边的值大的值，退出循环
        while (array[l] < array[right]) {
          l++;
        }
        while (array[r] > array[right]) {
          r--;
        }
      } else { // 降序
        while (array[l] > array[right]) {
          l++;
        }
        while (array[r] < array[right]) {
          r--;
        }
      }
      // 此时，找到了正确的位置，然后将l和r交换
      if (l < r) {
        this.swap(array, l, r);
      } else {
        break;
      }
    }
    // 以升序举个栗子：退出循环时，array[l]是大于 array[right] 的，同时所有比 array[right] 小的值都在l的左边，
    // 所有比 array[right] 大的值都在l的右边，这时只需要交换l和right，就将数组分成两部分，所有比array[l]大的都在l的右边。
    // 所有比 array[l] 小的都在l的左边，则l就找到了自己正确的位置，就不需要再动，这时只要分别想l的左边和l的右边进行递归，就能完成排序
    this.swap(array, l, right);
    // 向l的左边进行递归
    // 注意，此时l已经是正确的位置了，所以这时传递的right值是 l -1 ，因为我们需要将中间的数与传递的right进行交换
    this.quick(array, left, l - 1, sortType);
    // 向l的右边边进行递归
    this.quick(array, l + 1, right, sortType);
  }

}
