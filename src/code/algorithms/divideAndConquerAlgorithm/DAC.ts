export class DAC {
  // 记录汉诺塔盘子移动的步数，同时用于显示第多少步做了什么操作
  private static hanoiTowerPlateMoveSteps: number;

  /**
   * 使用分治算法解决汉诺塔问题
   * 汉诺塔思路分析: 整体思想就是，借助 B 塔，将 A 塔上的所有盘子移动到 C 塔上
   *   1、如果是有一个盘， A->C
   *   2、如果我们有 n >= 2 情况，我们总是可以看做是两个盘 （1）.最下边的盘 （2）. 上面所有的盘
   *     1）先把 最上面的盘 A->B
   *     2）把最下边的盘 A->C
   *     3）把B塔的所有盘 从 B->C
   * @param num 需要移动的盘子数量
   */
  public static hanoiTower(num: number) {
    // 每一次调用都需要重置步数，否则多次调用时会连前面调用的次数也带上
    this.hanoiTowerPlateMoveSteps = 0;
    this.hanoiTowerRecursion(num, 'A', 'B', 'C');
  }

  /**
   * 汉诺塔的递归方法
   * @param num 需要移动的盘子数量
   * @param start 移动盘子的起点
   * @param helper 作为辅助的塔
   * @param end 移动盘子的终点
   * @private
   */
  private static hanoiTowerRecursion(num: number, start: string, helper: string, end: string) {
    if (num < 1) {
      return;
    }
    // 1、如果是有一个盘， A->C
    if (num === 1) {
      // console.log(`第${num}个盘子从 ${start} -> ${end}`);
      this.handlePlateMove(num, start, end);
    } else { // 2、如果我们有 n >= 2 情况，我们总是可以看做是两个盘 （1）.最下边的盘 （2）. 上面所有的盘
      // 1）先把 最上面的盘 A->B，这时 B 塔上的盘子数量为 num - 1
      this.hanoiTowerRecursion(num - 1, start, end, helper);
      // 2）把最下边的盘 A->C
      // console.log(`第${num}个盘子从 ${start} -> ${end}`);
      this.handlePlateMove(num, start, end);
      // 3）把B塔的所有盘 从 B->C
      this.hanoiTowerRecursion(num - 1, helper, start, end);
    }
  }

  /**
   * @description 处理盘子的移动
   * @param currentPlate： 当前移动的是第几个盘子
   * @param start： 起点
   * @param end： 终点
   * @private
   */
  private static handlePlateMove(currentPlate: number, start: string, end: string) {
    console.log(`第${++this.hanoiTowerPlateMoveSteps}步：第${currentPlate}个盘子从 ${start} -> ${end}`);
  }
}
