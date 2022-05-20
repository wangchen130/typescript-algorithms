import { consoleTwoDimensionalArray } from '../../../utils/array';

/**
 * 递归寻找路线
 * 1. 如果小球能到 map[endAbscissa][endOrdinate] 位置，则说明通路找到.
 * 2. 当map[startAbscissa][startAbscissa] 为 0 表示该点没有走过 当为 1 表示墙  ； 2 表示通路可以走 ； 3 表示该点已经走过，但是走不通
 * 3. 确定一个策略: 下->右->上->左 , 如果该点走不通，再回溯
 * @param map： 地图
 * @param startAbscissa： 开始位置的横坐标
 * @param startOrdinate： 开始位置的纵坐标
 * @param endAbscissa： 结束位置的横坐标
 * @param endOrdinate： 结束位置的纵坐标
 */
const getWay = (map: number[][], startAbscissa: number, startOrdinate: number, endAbscissa: number, endOrdinate: number): boolean => {
  if (map[endAbscissa][endOrdinate] === 2) {
    return true;
  }
  if (map[startAbscissa][startOrdinate] === 0) {
    map[startAbscissa][startOrdinate] = 2;
    if (getWay(map, startAbscissa + 1, startOrdinate, endAbscissa, endOrdinate)) {
      return true;
    } if (getWay(map, startAbscissa, startOrdinate + 1, endAbscissa, endOrdinate)) {
      return true;
    } if (getWay(map, startAbscissa - 1, startOrdinate, endAbscissa, endOrdinate)) {
      return true;
    } if (getWay(map, startAbscissa, startOrdinate - 1, endAbscissa, endOrdinate)) {
      return true;
    }
    map[startAbscissa][startOrdinate] = 3;
    return false;
  }
  // 如果map[startAbscissa][startAbscissa] !== 0 , 可能是 1， 2， 3
  return false;
};

/**
 * 使用递归解决迷宫问题
 * @param mazeRows： 初始化迷宫的行数
 * @param mazeColumns： 初始化迷宫的列数
 * @param barrierArr： 障碍的二维数组
 * @param startAbscissa：起点的横坐标
 * @param startOrdinate： 起点的纵坐标
 * @param endAbscissa： 终点的横坐标
 * @param endOrdinate： 终点的纵坐标
 */
export const solveMazeQuestion = (mazeRows: number, mazeColumns: number, barrierArr: number[][], startAbscissa: number, startOrdinate: number, endAbscissa: number, endOrdinate: number) => {
  console.log('=============使用递归方式解决迷宫问题=============');
  // 先创建一个二维数组，模拟迷宫。0：表示可以通过。1：表示障碍。2：表示已经走过。
  const mazeMap: number[][] = new Array<number[]>(mazeRows);
  for (let i = 0; i < mazeMap.length; i++) {
    mazeMap[i] = new Array<number>(mazeColumns).fill(0);
  }
  // 上下全部置为1
  for (let i = 0; i < mazeColumns; i++) {
    mazeMap[0][i] = 1;
    mazeMap[mazeRows - 1][i] = 1;
  }
  // 左右全部设置为1
  for (let j = 0; j < mazeRows; j++) {
    mazeMap[j][0] = 1;
    mazeMap[j][mazeColumns - 1] = 1;
  }
  // 设置障碍
  // mazeMap[3][1] = 1;
  // mazeMap[3][2] = 1;
  for (let i = 0; i < barrierArr.length; i++) {
    const barrierArrItem = barrierArr[i];
    const barrierAbscissa = barrierArrItem[0];
    const barrierOrdinate = barrierArrItem[1];
    mazeMap[barrierAbscissa][barrierOrdinate] = 1;
  }

  console.log(mazeMap);
  console.log('初始化迷宫地图为：');
  consoleTwoDimensionalArray(mazeMap);
  const isGetWay = getWay(mazeMap, startAbscissa, startOrdinate, endAbscissa, endOrdinate);
  console.log('是否找到路线：', isGetWay);
  console.log('路线为：');
  consoleTwoDimensionalArray(mazeMap);
};
