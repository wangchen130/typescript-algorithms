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
   * 获取一个数的各位上的数字
   * @param num 需要获取位数数字的数
   * @param digitType 个位传0，十位传1，百位传2，千位传3，依次类推
   */
  public static getNumDigit(num: number, digitType: number): number {
    return Math.floor(num / 10 ** digitType) % 10;
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
    // 所有比 array[l] 小的都在l的左边，则l就找到了自己正确的位置，就不需要再动，这时只要分别向l的左边和l的右边进行递归，就能完成排序
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

  /**
   * 递归拆分数组并合并
   * @param array 需要排序的数组
   * @param left 左边下标
   * @param right 右边下标
   * @param tempArr 临时数组
   * @param sortType 排序方式
   * @private
   */
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

  /**
   * 合并数组，即将拆分后的序列合并为一个有序序列
   * @param array 需要排序的数组
   * @param left 左边序列的左下标
   * @param mid 左边序列的右下标，则 mid + 1 就为右边序列的左下标
   * @param right 右边序列的右下标，同时也是本次合并的右下标，即合并到 right 时就合并完毕
   * @param tempArr 临时数组
   * @param sortType 排序方式
   * @private
   */
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

  /**
   * 基数排序
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static radixSort(array: number[], sortType: TSortType = ASC) {
    // 桶的长度
    const bucketLength = 10;
    // 找到数组中的最大值,首先假定数组的第一个就是最大值
    let maxNum = array[0];
    const len = array.length;
    for (let i = 1; i < len; i++) {
      if (array[i] > maxNum) { // 如果找到一个值比假定的最大值好要大的值，那么就将最大值设置为该值
        maxNum = array[i];
      }
    }
    // 数组中最大数有多少位，因为是按个位、十位、百位、千位来排的，所以最大数的位数就是外层循环的次数。
    const maxLength = Number(maxNum).toString().length;
    // 定义10个桶，即为一个长度为10的二维数组
    const bucket = new Array<number[]>(bucketLength);
    for (let i = 0; i < bucketLength; i++) {
      bucket[i] = [];
    }
    // 分别根据个位、十位、百位、千位。。。来排序，调用 this.getNumDigit 方法传入 i 即可获得数位的值
    for (let i = 0; i < maxLength; i++) {
      for (let j = 0; j < len; j++) {
        const arrayItem = array[j];
        // 得到每一数位的值
        const digitOfItem = this.getNumDigit(arrayItem, i);
        // 将值装入对应的桶中，例如：当前的值 arrayItem 为 53，个位为3，则 digitOfItem 等于3，bucket[digitOfItem] 为 bucket[3]，
        // 就将 53 push 到 bucket[3] 这个桶中
        bucket[digitOfItem].push(arrayItem);
      }
      // 这时所有的数到装入来对应的桶中，这时就需要根据排序方式取出桶中的数据再放入到 array 中。
      // 升序排序需要按照队列的规则取出，即先进先出，且是遍历 bucket 是从前向后遍历
      // 降序排序需要按照栈的规则取出，即先进后出，且是遍历 bucket 是从后向前遍历，只需要在最后一次取出数据时从 bucket 的后面往前遍历就行，
      // 因为这时桶中的数据经过前面的排序，从前向后遍历取出就是升序，则反向就为降序
      let index = 0;
      if (i < maxLength - 1 || sortType === ASC) { // 升序
        for (let k = 0; k < bucketLength; k++) {
          // 每一个对应的桶
          let bucketItem = bucket[k];
          const bucketItemLen = bucketItem.length;
          if (bucketItemLen > 0) {
            for (let z = 0; z < bucketItemLen; z++) {
              // 升序排列，使用 shift() 从头部删除元素
              array[index++] = bucketItem.shift();
            }
          }
        }
      } else { // 降序
        for (let k = bucketLength - 1; k >= 0; k--) {
          // 每一个对应的桶
          let bucketItem = bucket[k];
          const bucketItemLen = bucketItem.length;
          if (bucketItemLen > 0) {
            for (let z = 0; z < bucketItemLen; z++) {
              // 降序排列，使用 pop() 从尾部删除元素
              array[index++] = bucketItem.pop();
            }
          }
        }
      }
    }
  }

  // ===================================================堆排序================================================
  /**
   * 堆排序，堆排序为顺序存储二叉树的应用，顺序存储二叉树：使用数组存储数据，但是可以使用二叉树的前序、中序和后序等遍历方式进行遍历
   * 并且，如果一个节点有子节点，那么一定必有左子节点，因为在顺序存储二叉树中，
   * i 节点的左子节点在数组中的下标为 i * 2 + 1，右子节点在数组中的下标为 i * 2 + 2，即右子节点的下标等于左子节点的下标 +1，
   * 因为数组是顺序存储的，所以必定先有左子节点
   * @param array 需要排序的数组
   * @param sortType 排序类型，asc： 升序。desc： 降序。
   */
  public static heapSort(array: number[], sortType: TSortType = ASC) {
    if (sortType === ASC) {
      this.heapSortAsc(array);
    } else {
      this.heapSortDesc(array);
    }
  }

  /**
   * 升序堆排序
   * @param array 需要排序的数组
   * @private
   */
  private static heapSortAsc(array: number[]) {
    // 1. 传入的数据 array 为无序数组，所以需要将其调整为一个大顶堆
    this.createBigHeap(array); // 调整完成后，array就为一个标准的大顶堆了
    // 调整为一个大顶堆以后，根结点（即array[0]）的值就为整个array数组中最大的值，此时只需要将根结点与最后一个节点的值进行交换（即将array[array.length - 1]与array[0]交换）
    // 进行交换之后，数组的最后一个元素，即array[array.length -1]就为整个数组中的最大值。然后将对最后一个元素前面的所有元素调整为大顶堆，
    // 这时根结点（array[0]）又为前 array.length - 1 个元素的最大值，然后将 array[0] 与 array[array.length -2]进行交换，
    // 如此循环，直到调整到第一个元素，完成排序
    for (let i = array.length - 1; i > 0; i--) {
      this.swap(array, 0, i);
      // 因为 array 已经是一个调整好的大顶堆了，将 array[0] 与 array[i]交换以后，array[array.length - 1]为最大值，
      // 然后 array[0] 到 array[array.length -2]之中，array[0]的位置不正确，这时需要将array[0]调整到正确的位置，
      // 且待调整的数组的长度为 i
      this.adjustBigHeap(array, 0, i);
    }
  }

  /**
   * 从下至上，从左至右将一个无序数组调整为一个大顶堆
   * 对于一个顺序存储二叉树 array 来说，根结点在array中的下标为为 0 。一共有(array.length / 2 )个非叶子节点，即最后一个非叶子节点在数组array中下标为 array.length / 2 -1
   * 从下至上，从左至右进行调整就是从最后一个非叶子节点调整到根结点。 即从下标array.length / 2 -1 开始，一直调整到下标为 0
   * @param array 需要排序的数组
   * @private
   */
  private static createBigHeap(array: number[]) {
    const len = array.length;
    // 注意：js中除法可能会得到小数，所以需要向下取整
    for (let i = Math.floor(len / 2 - 1); i >= 0; i--) { // 从 array.length / 2 -1 循环到 0 （即从下标array.length / 2 -1 开始，一直调整到下标为 0）
      this.adjustBigHeap(array, i, len);
    }
  }

  /**
   * 功能： 将以 i 为根结点的异常大顶堆【该大顶堆除了根结点 i 以为，其他节点都正常】调整为正常的大顶堆，即把根结点调整到正确的位置。
   * 举例  array = [4, 6, 8, 5, 9]; => i = 1 => adjustBigHeap => 得到 [4, 9, 8, 5, 6]
   * 如果我们再次调用  adjustBigHeap 传入的是 i = 0 时 [4, 9, 8, 5, 6] => [9,6,8,5, 4]
   * @param array 待调整的数组
   * @param i 表示非叶子结点在数组中索引
   * @param len 表示对多少个元素继续调整， len 是在逐渐的减少
   * @private
   */
  private static adjustBigHeap(array: number[], i: number, len: number) {
    // 先取出当前元素的值，保存为一个临时变量
    const temp = array[i];
    // 开始将以 temp 为根结点的非叶子节点的树调整为大顶堆
    // k = i * 2 + 1，即 k 为 i 的左子节点，那么 k + 1 就为 i 的右子节点。为何需要找 i 的左子节点？？？？因为顺序存储二叉树如果有子节点，
    // 必定有左子节点，不一定有右子节点，所以需要找当前节点的左子节点，找到左子节点后，左子节点的下标加 1 ，如果未超出数组长度，则就得到了右子节点
    for (let k = i * 2 + 1; k < len; k = k * 2 + 1) { // k >= len 时退出循环，此时表明 i 没有子节点
      // k + 1 < len：表示 i 有右子节点。
      // array[k] < array[k + 1]：表示右子节点大于左子节点。因为是要构建大顶堆，需要保证父节点大于左右子节点
      // 则就需要比较左右子节点的大小，将 k 指向较大的一个子节点。目前 k 指向左子节点，k + 1 指向右子节点，如果右子节点大于了左子节点，
      // 就需要让 k 指向右子节点，即 k = k + 1
      if (k + 1 < len && array[k] < array[k + 1]) {
        k += 1;
      }
      // 此时，k 指向了左右子节点中较大的那个子节点，这时只需要将 k 节点与位置错误的 temp 节点进行比较，如果 k节点 大于了 temp 节点，
      // 则证明temp节点应该是 k 节点的子节点或者子树中的节点，则需要将 k 节点往上提。因为 i 节点始终是 k 节点的父节点，要想将 k 节点往上提，
      // 只需要将 k 节点赋值给 i 节点就行。第一进行循环是，i 为根结点，又用temp保存了 i 节点，所以可以直接赋值，不用担心 i 节点的值会丢
      if (array[k] > temp) {
        array[i] = array[k]; // 将 k 节点赋值给 i 节点，即将 k 节点往上提。因为 i 节点在最开始已经取出来用temp进行了保存，所以可以直接赋值
        // 因为 k 节点的值已经赋值给了 i 节点，所以此时 k 节点已经找到正确的位置了。因为整棵树只有 temp 节点不在正确的位置，此时只判断了 k 节点大于 temp 节点，
        // 还没有判断 k 节点的子树中的节点是否大于 temp 节点，所以需要将 k 节点赋值给 i 节点，然后继续循环比较，
        // 直到找到 array[k] < temp【即temp为 k 的父节点】或者超出数组长度退出循环
        i = k;
      } else {
        // 因为整个大顶堆只有 temp 节点不在正确的位置，此时 array[k] < temp ，i 又为 k 的父节点，则 i 就为 temp 正确的位置，此时可以直接退出循环
        break;
      }
    }
    // 退出循环时有两种情况：
    // 1. array[k] < temp ，即temp的正确位置为 k 的父节点，且 i 始终为 k 的父节点，所以将temp赋值给 k 节点就行。
    // 2. 超出数组长度退出循环，即 i 没有子节点，则 i 就为temp的正确位置
    array[i] = temp;
  }

  /**
   * 降序堆排序
   * @param array 需要排序的数组
   * @private
   */
  private static heapSortDesc(array: number[]) {
    // 1. 将传入的无序数组array调整为一个小顶堆
    this.createSmallHeap(array);
    // 2. 构建为一个小顶堆之后，将第一个元素和最后一个元素交换，然后对前面的 n - 1个元素继续调整交换
    for (let i = array.length - 1; i > 0; i--) {
      this.swap(array, 0, i);
      this.adjustSmallHeap(array, 0, i);
    }
  }

  /**
   * 从下至上，从左至右将无序数组array调整为一个小顶堆
   * @param array 需要排序的数组
   * @private
   */
  private static createSmallHeap(array: number[]) {
    const len = array.length;
    // 最后一个非叶子节点的下标为 array.length / 2 - 1,则需要从下标 array.length / 2 - 1 调整到下标 0
    for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
      this.adjustSmallHeap(array, i, len);
    }
  }

  /**
   * 功能：以下标为i的元素作为根结点，且在该大顶堆中，只有 i 节点的位置不正确。将这棵树调整为小顶堆
   * @param array 待调整的数组
   * @param i 根结点在数组中的索引
   * @param len 表示对多少个元素进行调整
   * @private
   */
  private static adjustSmallHeap(array: number[], i: number, len: number) {
    // 取出位置不正确的的根结点i，等到调整结束后，将其放到正确的位置
    const temp = array[i];
    // 从 i 节点的左子节点(即下标为 i * 2 + 1)开始
    for (let k = i * 2 + 1; k < len; k = k * 2 + 1) { // k = k * 2 + 1: 始终从左子节点开始找
      if (k + 1 < len && array[k] > array[k + 1]) {
        // array[k] > array[k + 1] 表明 i 的左子节点大于右子节点，这时右子节点比较小，构建小顶堆需要找较小的节点，所以需要将 k 指向右子节点
        k += 1;
      }
      // 此时 k 指向较小的子节点，如果 array[k] < temp, 因为此时temp为array[k]的父节点或祖先节点，
      // 即temp在array[k]的上面，小顶堆是上面的元素小于下面的元素，下面的array[k]都比temp小了，则需要将array[k]往上提
      if (array[k] < temp) {
        array[i] = array[k];
        // k 已经往上提了，此时需要将 i 指向 k ，再次进入循环继续向下寻找temp的正确位置
        i = k;
      } else {
        break;
      }
    }
    // 退出循环之后，i 指向的位置就是 temp的正确位置
    array[i] = temp;
  }
}
