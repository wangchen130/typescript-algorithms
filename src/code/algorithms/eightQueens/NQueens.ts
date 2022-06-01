export default class NQueens {
  // 结果数组，为二维数组，每个内部数组为一个方法
  public readonly resultArray: number[][];

  // 结果的总数
  public resultCount: number;

  // 每次正确的位置数组，下标值表示第几个皇后，即为皇后所在的横坐标，值为皇后所在的列，即为纵坐标，获得正确位置后会拷贝到 resultArray 数组
  private positionArray: number[];

  constructor() {
    this.resultArray = new Array<number[]>();
    this.resultCount = 0;
  }

  /**
   * 获得摆放结果
   * @param queenNum 皇后的数量
   * @return 结果二维数组
   */
  public getResult(queenNum: number): number[][] {
    this.positionArray = new Array<number>(queenNum).fill(0);
    this.recursionCheck(0);
    return this.resultArray;
  }

  /**
   * 递归放置第 n 个皇后。注意：放置皇后，顾名思义，是需要将皇后放入到位置数组 positionArray 的，因为 positionArray 的下标值表示第几个换后
   * 即 this.positionArray[n]需要赋值，值为第几列，从第 0 列开始，依次往后放，每放置一次，需要检查与之前的所有皇后是否冲突
   * 如果不冲突就继续放，冲突就回溯，返回上一次放置的位置，返回这个位置时，一次循环结束，i 的值增加，再次进行 this.positionArray[n] = i 操作
   * 此时表示将皇后往后移动一列，然后再判断是否冲突，不冲突再放置下一个，以此类推。。。。
   * @param n 表示第 n 个换后
   */
  private recursionCheck(n: number) {
    const queenNum = this.positionArray.length;
    if (n === queenNum) {
      this.resultArray.push([...this.positionArray]);
      this.resultCount++;
      return;
    }
    // 依次放入皇后，并判断是否冲突
    for (let i = 0; i < queenNum; i++) { // i表示列，即第n个皇后所在的纵坐标
      // 先把当前这个皇后放到该行的第1列, n表示皇后坐在的行
      this.positionArray[n] = i;
      // 判断当把第n个皇后放置到i列时，是否冲突
      if (!this.isConflict(n)) { // 不冲突
        // 接着放n+1个皇后,即开始递归
        this.recursionCheck(n + 1);
      }
    }
  }

  /**
   * 第n个皇后是否与前面的所有元素冲突是否冲突
   * @param n： 第n个皇后
   * @return：是否冲突： true：冲突。false：不冲突
   */
  private isConflict(n: number): boolean {
    for (let i = 0; i < n; i++) {
      // this.positionArray[i] === this.positionArray[n]: 为同一列
      // Math.abs(n - i) === Math.abs(this.positionArray[n] - this.positionArray[i])： 为同一斜线
      if (
        this.positionArray[i] === this.positionArray[n]
        || Math.abs(n - i) === Math.abs(this.positionArray[n] - this.positionArray[i])
      ) {
        return true;
      }
    }
    return false;
  }

}
