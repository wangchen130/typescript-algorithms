import { HorseChessboardAlgorithm } from './HorseChessboardAlgorithm';

export const testHorseChessboardAlgorithm = () => {
  console.log('=======================马踏棋盘算法测试=====================');
  const startX = 3;
  const startY = 4;
  const row = 8;
  const colum = 8;
  console.log('初始位置为:', startX, startY);
  console.log('棋盘的的行数为:', row);
  console.log('棋盘的的列数为:', colum);
  const chessboard = HorseChessboardAlgorithm.solveHorseChessboard(startX, startY, row, colum);
  console.log('马走过后的棋盘为：');
  console.log(HorseChessboardAlgorithm.twoDimensionalArrayToString(chessboard));
};
