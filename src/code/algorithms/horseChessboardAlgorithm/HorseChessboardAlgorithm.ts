class Point {
  // 横坐标，在二维数组中为列
  public x: number;

  // 纵坐标，在二维数组中为行
  public y: number

  constructor(x: number = null, y: number = null) {
    this.x = x;
    this.y = y;
  }
}
export class HorseChessboardAlgorithm {
  // 标记是否棋盘的所有位置都被访问，即表示是否完成马踏棋盘任务，true 表示已完成，false 表示未完成
  private static finished: boolean = false

  /**
   * @description 结局马踏棋盘问题
   * @param startX：起始位置的横坐标，在棋盘中表示列
   * @param startY：起始位置的纵坐标，在棋盘中表示行
   * @param row：棋盘一共有多上行
   * @param colum：棋盘一共有多少列
   * @return {Number[][]}：表示棋盘的而为数组
   */
  public static solveHorseChessboard (startX: number, startY: number, row: number = 8, colum: number = 8): number[][] {
    // 初始化棋盘
    const chessboard = this.createTwoDimensionalArray(row, colum);
    console.log('初始化棋盘:');
    console.log(this.twoDimensionalArrayToString(chessboard));
    // 定义一个一位数组，标志棋盘上的每个位置是否被访问过，未被访问为 0 ，被访问过 1
    const visitedList = new Array(row * colum).fill(0);
    console.log('visitedList:', visitedList.join(' '));
    // 每次都需要重置 finished 的值为false，表示未完成马踏棋盘任务
    this.finished = false;
    this.solveHorseChessboardRecursion(chessboard, startX, startY, visitedList, 1);
    console.log('visitedList:', visitedList.join(' '));
    return chessboard;
  }

  /**
   * @description 解决马踏棋盘算法的递归调用函数
   * @param chessboard：棋盘
   * @param x：当前位置的横坐标，在棋盘中表示列
   * @param y：当前位置的纵坐标，在棋盘中表示行
   * @param visitedList：标志所有位置是否被访问过的一位数组
   * @param step：走过的步数
   * @private
   */
  private static solveHorseChessboardRecursion(chessboard: number[][], x: number, y: number, visitedList: number[], step: number) {
    // 在棋盘上标识当前位置是走过的第几步，y 表示在棋盘的行，x 表示在棋盘的列
    chessboard[y][x] = step;
    // 将当前位置在 visitedList 数组中标记为已访问，横坐标为 x ，纵坐标为 y 的元素在一位数组的下标为 y * row + x,即为 y * chessboard.length + x
    // 因为 y 代表在多少行，x 代表在多少列
    visitedList[y * chessboard.length + x] = 1;
    // 获取当前位置可以到的所有位置组成的位置数组
    const nextList = this.getNextList(new Point(x, y), chessboard.length, chessboard[0].length);
    // 使用贪心算法进行优化，对 nextList 进行排序
    this.ascendingSort(nextList, chessboard.length, chessboard[0].length);
    // console.log('nextList:', nextList);
    // nextList 还有值，就一直循环回溯
    while (nextList.length > 0) {
      // 取出第一位置
      const p = nextList.shift();
      // 判断该位置是否被访问过, visitedList[p.y * chessboard.length + p.x] === 0 表示还未被访问过
      if (visitedList[p.y * chessboard.length + p.x] === 0) {
        // 递归调用函数，每次进入 solveHorseChessboardRecursion 函数，代表走了一步，所以 step 需要 +1
        this.solveHorseChessboardRecursion(chessboard, p.x, p.y, visitedList, step + 1);
      }
    }
    /*
      判断是否走完全部棋盘，使用 step 和应该走的步数比较，该走的步数等于棋盘的格子数减 1，即 step = chessboard.length * chessboard[0].length - 1
      如果没有达到数量，则表示没有完成任务，需要将整个棋盘chessboard和visitedList都置0
      说明: step < chessboard.length * chessboard[0].length  成立的情况有两种：
        1. 棋盘到目前位置,仍然没有走完
        2. 棋盘处于一个回溯过程
      所以需要一个变量标识是否真正地完成
    */
    // step < chessboard.length * chessboard[0].length: 表明在 step === chessboard.length * chessboard[0].length - 1 就不满足条件了，就会退出循环
    if (step < chessboard.length * chessboard[0].length && !this.finished) {
      chessboard[y][x] = 0;
      visitedList[y * chessboard.length + x] = 0;
    } else {
      this.finished = true;
    }
  }

  /**
   * @description 根据当前位置（Point对象），获取当前位置所有可以走的位置（Point对象），并将所有位置放入到一个数组中，最多 8 个位置
   * 使用 8 个 if 语句进行判断，那个 if 语句满足条件了，就将满足条件的位置加入的数组中，如果 8 个 if 条件都满足，那就加 8 个
   * @param currentPoint：当前位置
   * @param row：棋盘有多少行
   * @param colum：棋盘有多少列
   * @return {Point[]}：所有位置构成的数组
   */
  public static getNextList(currentPoint: Point, row: number, colum: number): Point[] {
    // 所有位置构成的数组
    const pointList = [];
    // 当前位置爹横坐标和纵坐标
    const { x, y } = currentPoint;
    // 是否可以走到 0 位置
    if (x + 2 < colum && y - 1 >= 0) {
      pointList.push(new Point(x + 2, y - 1));
    }
    // 是否可以走到 1 位置
    if (x + 2 < colum && y + 1 < row) {
      pointList.push(new Point(x + 2, y + 1));
    }
    // 是否可以走到 2 位置
    if (x + 1 < colum && y + 2 < row) {
      pointList.push(new Point(x + 1, y + 2));
    }
    // 是否可以走到 3 位置
    if (x - 1 >= 0 && y + 2 < row) {
      pointList.push(new Point(x - 1, y + 2));
    }
    // 是否可以走到 4 位置
    if (x - 2 >= 0 && y + 1 < row) {
      pointList.push(new Point(x - 2, y + 1));
    }
    // 是否可以走到 5 位置
    if (x - 2 >= 0 && y - 1 >= 0) {
      pointList.push(new Point(x - 2, y - 1));
    }
    // 是否可以走到 6 位置
    if (x - 1 >= 0 && y - 2 >= 0) {
      pointList.push(new Point(x - 1, y - 2));
    }
    // 是否可以走到 7 位置
    if (x + 1 < colum && y - 2 >= 0) {
      pointList.push(new Point(x + 1, y - 2));
    }

    return pointList;
  }

  /**
   * @description 根据当前这个一步的所有的下一步的选择位置，进行允许重复的递增排序, 减少回溯的次数
   * @param pointList：所有位置构成的数组
   * @param row：棋盘有多少行
   * @param colum：棋盘有多少列
   * @return {Point[]}：排序后的数组
   */
  public static ascendingSort(pointList: Point[], row: number, colum: number): Point[] {
    pointList.sort((a, b) => this.getNextList(a, row, colum).length - this.getNextList(b, row, colum).length);
    return pointList;
  }

  /**
   * @description 初始化一个二维数组
   * @param row：二维数组的行数
   * @param colum：二维数组的列数
   * @param initVal：初始值
   */
  public static createTwoDimensionalArray(row: number, colum: number, initVal = 0): number[][] {
    const res = [];
    for (let i = 0; i < row; i++) {
      res.push(new Array(colum).fill(initVal));
    }
    return res;
  }

  /**
   * @description 将二维数组转换成为字符串
   * @param arr：二维数组
   * @param separator：分隔符
   * @return {string}：转换成的字符串
   */
  public static twoDimensionalArrayToString(arr: any[][], separator: string = '     '): string {
    let resStr = '';
    for (let i = 0, len = arr.length; i < len; i++) {
      let itemArr = arr[i];
      resStr += `${itemArr.join(separator)}\n`;
    }
    return resStr;
  }

}
