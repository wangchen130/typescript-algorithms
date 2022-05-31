import NQueens from './NQueens';

/**
 * 测试N 皇后
 * @param queenNum：皇后的个数
 */
export const solveEightQueensQuestion = (queenNum: number) => {
  console.log('=============八皇后问题测试开始=============');
  const nQueens = new NQueens();
  console.log('共有多少个皇后：', queenNum);
  nQueens.getResult(queenNum);
  console.log('得到的结果为：');
  console.log(nQueens.resultArray);
  console.log('总共有多少种方式：', nQueens.resultCount);
};
