export default class SparseArray {
  public initArray: number[][];

  public sparseArray: number[][];

  public outArrayLength: number;

  public inderArrayLength: number;

  constructor(outArrayLength: number, inderArrayLength: number) {
    this.initArray = new Array([]);
    this.sparseArray = new Array([]);
    this.outArrayLength = outArrayLength;
    this.inderArrayLength = inderArrayLength;
    this.sparseArray[0][0] = outArrayLength;
    this.sparseArray[0][1] = inderArrayLength;
    for (let i = 0; i < outArrayLength; i++) {
      for (let j = 0; j < inderArrayLength; j++) {
        if (!this.initArray[i]) {
          this.initArray[i] = [];
        }
        this.initArray[i][j] = 0;
      }
    }
    this.initArray[1][2] = 1;
    this.initArray[2][3] = 2;
    this.initArray[4][5] = 2;
  }

  public getSparseArray (): number[][] {
    // 将二维数组 转 稀疏数组的思
    // 1. 先遍历二维数组 得到非0数据的个数
    let sum = 0;
    for (let i = 0; i < this.outArrayLength; i++) {
      for (let j = 0; j < this.inderArrayLength; j++) {
        if (this.initArray[i][j] !== 0) {
          sum += 1;
          if (!this.sparseArray[sum]) {
            this.sparseArray[sum] = [];
          }
          this.sparseArray[sum][0] = i;
          this.sparseArray[sum][1] = j;
          this.sparseArray[sum][2] = this.initArray[i][j];
        }
      }
    }
    this.sparseArray[0][2] = sum;

    return this.sparseArray;
  }
}
