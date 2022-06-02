const ASC = 'asc';
const DESC = 'desc';

/**
 * asc： 升序。 desc： 降序
 */
type TSortType = 'asc' | 'desc';

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
  public static bubbleSort<T>(array: T[], sortType: TSortType = ASC) {
    const len = array.length;
    if (len < 2) return;
    for (let i = len; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (sortType === ASC) { // 升序
          if (array[j] > array[j + 1]) {
            this.swap(array, j, j + 1);
          }
        } else if (sortType === DESC) { // 降序
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
  public static selectSort<T>(array: T[], sortType: TSortType = ASC) {
    const len = array.length;
    if (len < 2) return;
    for (let i = 0; i < len; i++) {
      let index = i;
      for (let j = index + 1; j < len; j++) {
        if (sortType === ASC) { // 升序
          if (array[j] < array[index]) {
            index = j;
          }
        } else if (sortType === DESC) { // 降序
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
  public static insertSort<T>(array: T[], sortType: TSortType = ASC) {
    const len = array.length;
    if (len < 2) return;
    for (let i = 1; i < len; i++) {
      const insertVal = array[i];
      let insertIndex = i;
      if (sortType === ASC) { // 升序
        while (insertVal < array[insertIndex - 1] && insertIndex > 0) {
          array[insertIndex] = array[insertIndex - 1];
          insertIndex--;
        }
      } else if (sortType === DESC) { // 降序
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
  public static shellSort<T>(array: T[], sortType: TSortType = ASC) {
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
        if (sortType === ASC) { // 升序
          while (j - gap >= 0 && array[j - gap] > temp) {
            array[j] = array[j - gap];
            j -= gap;
          }
        } else if (sortType === DESC) { // 降序
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

  /**
   * 快速排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static quickSort<T>(array: T[], sortType: TSortType = ASC) {
    const len = array.length;
    // 如果数组长度小于2，即只有一个元素或者为空数组，则无需进行排序
    if (len < 2) return;
    this.quick<T>(array, 0, len - 1, sortType);
  }

  /**
   * 快速排序的内部递归调用方法
   * @param array 需要排序的数组
   * @param left 左边的下标
   * @param right 右边的下标
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  private static quick<T>(array: T[], left: number, right: number, sortType: TSortType = ASC) {
    if (left >= right) return;
    let l = left;
    let r = right - 1;
    // 找到数组中间的位置
    let middle = Math.floor((left + right) / 2);
    // 将中间位置的元素与最后一个进行交换
    this.swap(array, middle, right);
    while (l < r) {
      if (sortType === ASC) { // 升序
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

  /**
   * 归并排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static mergeSort<T>(array: T[], sortType: TSortType = ASC) {
    const len = array.length;
    // 如果数组长度小于2，即只有一个元素或者为空数组，则无需进行排序
    if (len < 2) return;
    const tempArr = new Array<T>();
    this.splitAndMerge(array, 0, len - 1, tempArr, sortType);
  }

  private static splitAndMerge<T>(array: T[], left: number, right: number, tempArr: T[], sortType: TSortType) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      // 向左进行分解
      this.splitAndMerge<T>(array, left, mid, tempArr, sortType);
      // 向右进行拆分
      this.splitAndMerge<T>(array, mid + 1, right, tempArr, sortType);
      // 合并
      this.merge<T>(array, left, mid, right, tempArr, sortType);
    }
  }

  private static merge<T>(array: T[], left: number, mid: number, right: number, tempArr: T[], sortType: TSortType) {
    let leftListLeft = left; // 左序列的左下标，即左边序列的开始下标
    let rightListLeft = mid + 1; // 右序列的左下标，即右边序列的开始下标
    // 临时数组 tempArr 的当前索引下标，即为往 tempArr 填充左右序列数据或者从 tempArr 往 array 拷贝数据时的下标。
    let tempArrIndex: number = 0;

    // 1.将左右两边的有序序列拷贝到临时数组 tempArr 中，直到左右两边的有序序列有一边拷贝完毕
    while (leftListLeft <= mid && rightListLeft <= right) {
      // 升序
      if (sortType === ASC) {
        if (array[leftListLeft] < array[rightListLeft]) { // 左有序序列的值小于右有序序列的值
          tempArr[tempArrIndex] = array[leftListLeft];
          leftListLeft++;
          // tempArrIndex++;
        } else { // 左有序序列的值大于右有序序列的值，即右序列的值小
          tempArr[tempArrIndex] = array[rightListLeft];
          rightListLeft++;
          // tempArrIndex++;
        }
        // tempArrIndex++;
      }
      // 降序
      if (sortType === DESC) {
        if (array[leftListLeft] > array[rightListLeft]) { // 左有序序列的值大于右有序序列的值，因为为 "降序"，"大的在前"，所以拷贝左序列
          tempArr[tempArrIndex] = array[leftListLeft];
          leftListLeft++;
          // tempArrIndex++;
        } else { // 左有序序列的值小于右有序序列的值，即右序列大，因为为 "降序"，"大的在前"，所以拷贝右序列
          tempArr[tempArrIndex] = array[rightListLeft];
          rightListLeft++;
          // tempArrIndex++;
        }
        // tempArrIndex++;
      }
      tempArrIndex++;
    }

    //  2.将右剩余数据的那个序列的剩余数据依次拷贝到临时数组 tempArr 中
    while (leftListLeft <= mid) { // 左序列有剩余数据
      tempArr[tempArrIndex] = array[leftListLeft];
      leftListLeft++;
      tempArrIndex++;
    }
    while (rightListLeft <= right) { // 右序列有剩余数据
      tempArr[tempArrIndex] = array[rightListLeft];
      rightListLeft++;
      tempArrIndex++;
    }

    // 3.将临时数组 tempArr 中的数据拷贝到 array 中。
    // 注意1：将 tempArr 的数据拷贝到 array 时，不一定是从 array[0] 开始的。是从传递过来的left开始的。
    // 例如：有四个数，进行拆分时，array[0]和array[1]为一组，array[2]和array[3]为一组，当对array[2]和array[3]进行合并时，
    // 从 tempArr 往 array 拷贝数据时，就是从 array[2]开始的，即为拆分时传递过来的 left。所以需要一个临时变量 tempLeft 来保存 left。
    // 注意2：并不是拷贝 tempArr 中的所有数据，而是左右两个序列拷贝到 tempArr 中的数据，即从 tempArr 的第一个数据开始，
    // 依次从array[left]填充到array[right]
    let tempLeft = left;
    // 方式1：因为要从 tempArr 的第一个数开始拷贝，所以可以将 tempArrIndex 重置为0，使用 tempArrIndex 进行取值填充。
    tempArrIndex = 0;
    while (tempLeft <= right) {
      array[tempLeft] = tempArr[tempArrIndex];
      tempLeft++;
      tempArrIndex++;
    }

    // 方式2：当将左右序列的数据都填充到 tempArr 中时，因为在填充完之后进行了 tempArrIndex++ 的操作，
    // 所以tempArrIndex 指向的是从左右序列中填充到 tempArr 的最后一个数据的后一位。
    // 此时可以不用重置 tempArrIndex ，从 tempArr 中依次拷贝，拷贝到 tempArrIndex - 1 时，就拷贝完了所有的数据。
    // 注意：因为 tempArrIndex 指向的是从左右序列中填充到 tempArr 的最后一个数据的后一位，所以遍历时必须是 i < tempArrIndex
    // 即遍历到 tempArrIndex - 1 的位置，如果条件为 i <= tempArrIndex，则回出错

    // for (let i = 0; i < tempArrIndex; i++, tempLeft++) {
    //   array[tempLeft] = tempArr[i];
    // }
  }

}
