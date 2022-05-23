export default class Sort {

  public static swap(array: any[], i: number, j: number) {
    const len = array.length;
    if (i < 0 || i > len - 1 || j < 0 || j > len - 1) return;
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
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
}
