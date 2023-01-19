// 物品信息
export interface IGoodsInfo {
  weight: number; // 物品的重量
  price: number; // 物品的价值
  name: string; // 物品的名称
}
export class DynamicProgramming {

  /**
   * 使用动态规划算法解决背包问题
   * 算法的主要思想，利用动态规划来解决。每次遍历到的第i个物品，根据w[i]和v[i]来确定是否需要将该物品放入背包中。
   * 即对于给定的n个物品，设v[i]、w[i]分别为第i个物品的价值和重量，C为背包的容量。
   * 再令v[i][j]表示在前i个物品中能够装入容量为j的背包中的最大价值。则我们有下面的结果：
   * (1)  v[i][0]=v[0][j]=0; //表示 填入表 第一行和第一列是0
   * (2) 当w[i]> j 时：v[i][j]=v[i-1][j] // 当准备加入新增的商品的容量大于 当前背包的容量时，就直接使用上一个单元格的装入策略
   * (3) 当j>=w[i]时： v[i][j]=Math.max(v[i-1][j], v[i]+v[i-1][j-w[i]])
   *    当 准备加入的新增的商品的容量小于等于当前背包的容量,装入的方式:
   *    v[i-1][j]： 就是上一个单元格的装入的最大值
   *    v[i] : 表示当前商品的价值
   *    v[i-1][j-w[i]] ： 装入i-1商品，到剩余空间j-w[i]的最大值
   *    当j>=w[i]时： v[i][j]= Math.max(v[i-1][j], v[i]+v[i-1][j-w[i]])
   * @param goodsList： 物品信息数组
   * @param knapsackCapacity： 背包容量
   */
  public static knapsackProblem (goodsList: IGoodsInfo[], knapsackCapacity: number): IGoodsInfo[] {
    // 物品的数量
    const goodsSum = goodsList.length;
    // 创建一个物品的价格分派表，用于存放装入物品的【价格总和】，该分配表为 goodsSum + 1 行，knapsackCapacity + 1 列 的数字二维数组，
    // 因为数组的第一行和第一列都为 0 ，所以需要二位数组的行数和列数都需要 +1
    const assignPriceTable = this.getTwoDimensionalArray(goodsSum + 1, knapsackCapacity + 1);
    // 用于存放放入的物品，每个单元格为放入的所有物品组成的数组，与 assignPriceTable 对应
    const goodsAssignTable = this.getTwoDimensionalArray(goodsSum + 1, knapsackCapacity + 1, null);
    console.log('======价格分配表======');
    this.twoDimensionalArrayPrint(assignPriceTable);
    console.log('======物品分配表======');
    console.log(goodsAssignTable);
    for (let i = 1, row = assignPriceTable.length; i < row; i++) { // 第一行第一列为0，所以不处理第一行 i是从1开始的
      for (let j = 1, col = assignPriceTable[0].length; j < col; j++) { // 第一行第一列为0，所以不处理第一列 j是从1开始的
        // 当前取出的物品
        const currentGoods = goodsList[i - 1];
        // 前一个单元格的分配策略
        const preCellAssignPloy = assignPriceTable[i - 1][j];
        // 前一个单元格的物品
        const preCellGoods = goodsAssignTable[i - 1][j];
        // 此时背包的容量为 j ，如果从物品中取出的物品的重量大于了背包的重量，此时无论当前取出的物品价值几何，都无法往背包里放
        // 只能取上一个单元格的装入策略，前一个单元格为： assignPriceTable[i - 1][j]
        if (currentGoods.weight > j) { // 因为 i 是从 1 开始的，要取出物品表对应的物品的话，此处 i 需要 减 1
          assignPriceTable[i][j] = preCellAssignPloy;
          goodsAssignTable[i][j] = preCellGoods;
        } else { // 此时取出的物品的重量小于或等于当前背包的容量 j
          /*
          当取出物品的重量小于或等于背包的容量时，有以下两种装入装入策略：
          1）取前一个单元格的装入策略，即 assignPriceTable[i - 1][j]
          2）将取出的当前物品放入背包，再看剩余多少容量，然后把分配表中对应容量的最大装入策略装入
          因为需要价值最大化，所以如果 （1）大于（2），就取（1），如果（2）大于 （1），就取（2）
          */
          // 背包剩余容量的最佳装入策略
          const lastCapacityPoly = assignPriceTable[i - 1][j - currentGoods.weight];
          // 背包剩余容量最佳装入策略对应的物品，可能为null
          const lastCapacityGoods = goodsAssignTable[i - 1][j - currentGoods.weight];
          // j 为当前背包的容量，当前取出的物品为 currentGoods，当前背包的容量减去当前物品的重量就为背包的剩余空间，
          // 因为每次装入时都是取的价值最大，所以每个单元格必定是对应物品数和对应容量的最优解，所以直接取上一单元格对应容量的装入策略即可
          if (preCellAssignPloy > currentGoods.price + lastCapacityPoly) {
            // 前一个单元格的装入策略 大于 （当前物品 + 背包剩余容量可装入的物品最大价值），所以当前单元格取上一单元格的策略
            assignPriceTable[i][j] = preCellAssignPloy;
            goodsAssignTable[i][j] = preCellGoods;
          } else {
            // （当前物品 + 背包剩余容量可装入的物品最大价值） 大于 前一个单元格的装入策略，所以当前单元格取（当前物品 + 背包剩余容量可装入的物品最大价值）
            assignPriceTable[i][j] = currentGoods.price + lastCapacityPoly;
            // 因为价格表的第一行和第一列为 0 ，则在取物品数组的第一个物品时，只要当前背包的容量可以装入该物品，
            // 则价值一定是大于 0 ，因为前一个单元格是第一行，即前一个单元格为 0 ，
            // 即 当前物品 + 背包剩余容量可装入的物品最大价值） 一定大于 前一个单元格的装入策略，所以是在此处进行物品装入
            const goodsAssignTableCurrentCell = [{ ...currentGoods }];
            if (lastCapacityGoods && Array.isArray(lastCapacityGoods)) {
              goodsAssignTableCurrentCell.push(...lastCapacityGoods);
            }
            goodsAssignTable[i][j] = goodsAssignTableCurrentCell;
          }
        }
      }

    }
    this.twoDimensionalArrayPrint(assignPriceTable);
    console.log(goodsAssignTable);
    return goodsAssignTable[goodsSum][knapsackCapacity];
  }

  /**
   * 生成一个二维数组，并默认初始化花为 0
   * @param row 行数
   * @param column 列数
   * @param initVal 初始化的默认值
   */
  public static getTwoDimensionalArray(row: number, column: number, initVal: any = 0) {
    const array = [];
    for (let i = 0; i < row; i++) {
      const rowArr = [];
      for (let j = 0; j < column; j++) {
        rowArr.push(initVal);
      }
      array.push(rowArr);
    }
    return array;
  }

  /**
   * 打印二位数组
   * @param twoDimensionalArray 需要打印的二维数组
   */
  public static twoDimensionalArrayPrint(twoDimensionalArray: any[][]) {
    let printStr = '';
    for (let i = 0, len = twoDimensionalArray.length; i < len; i++) {
      let item = twoDimensionalArray[i];
      printStr = `${printStr}${item.join(' ')}\n`;
    }
    console.log(printStr);
  }
}
