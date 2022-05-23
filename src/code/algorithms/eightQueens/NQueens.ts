export default class NQueens {
  static readonly resultArray: number[][] = new Array()

  static readonly resultCount: number = 0

  private static positionArray: number[]

  public static getResult(queenNum: number) {
    this.positionArray = new Array<number>(queenNum).fill(0);
    this.recursionCheck(0, queenNum);
  }

  private static recursionCheck(n: number, queenNum: number) {
    if (n === queenNum) {
      this.resultArray.push([...this.positionArray]);
      return;
    }
    for (let i = 0; i < queenNum; i++) {
      return;
    }
  }

  /**
   * 第n个皇后是否与前面的所有元素冲突是否冲突
   * @param n： 第n个元素
   * @return：是否冲突： true：冲突。false：不冲突
   */
  private static isConflict(n: number): boolean {
    // for (let i = 0; i < n; i++) {
    //   if () {
    //
    //   }
    // }
    console.log(n);
    return false;
  }

}
