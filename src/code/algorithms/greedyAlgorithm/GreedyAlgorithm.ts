export interface ICollectionObj {
  key: string;
  value: string[];
}
export class GreedyAlgorithm {

  /**
   * @description 贪心算法解决集合覆盖问题
   * @param collectionArr：待挑选的集合
   * @return {ICollectionObj[]}: 挑选后的集合数组
   */
  public static collectionCover(collectionArr: ICollectionObj[]): ICollectionObj[] {
    // 所有的集合的值构成的数组，需要进行去重
    let allValue = [];
    // 最后选出的集合数组
    const selectedCollection = [];
    for (let i = 0, len = collectionArr.length; i < len; i++) {
      allValue.push(...collectionArr[i].value);
    }
    // 去重
    allValue = [...new Set(allValue)];
    // 定义 maxIndex 用于保存在一次遍历过程中，能够覆盖最大未覆盖集合的元素在 collectionArr 中下标，
    // 如果 maxIndex >= 0，则将maxIndex在collectionArr中对应的集合对象加入到selectedCollection中，每次循环开始时将其置为 -1
    let maxIndex = -1;
    // 定义存放遍历过程中的当前的遍历对象和当前还没有覆盖的对象的交集
    let intersection = [];
    // allValue.length > 0 表明还存在未覆盖的集合，所以需要继续循环
    while (allValue.length > 0) {
      // 每次循环开始将 maxIndex 重置为 -1
      maxIndex = -1;
      // 每次 for 循环都是找出 collectionArr 中能够覆盖 allValue 中最多值的那个集合对象
      for (let i = 0, len = collectionArr.length; i < len; i++) {
        const currentCollection = collectionArr[i];
        const currentValue = currentCollection.value;
        //  求出currentValue和allValue的交集，交集的值就为当前集合对象能够覆盖的最大未覆盖集合
        intersection = this.getIntersection(allValue, currentValue);
        /*
        * intersection.length > 0：表明当前遍历的集合对象还能覆盖 allValue 中的对象
        * maxIndex < 0：表明是for循环的第一次或者 maxIndex 还未找到对应的位置
        * intersection.length > collectionArr[maxIndex].value.length：
        *   intersection.length 为交集的长度，即当前遍历的集合对象能够覆盖当前为覆盖的集合的数目
        *   collectionArr[maxIndex].value.length：因为 maxIndex 表示能够覆盖的最大未覆盖集合的集合对象在 collectionArr 中的下标，
        *   当交集的长度大于 collectionArr[maxIndex].value 的长度时，则表明 maxIndex 指向的不再是能覆盖最大集合的下标了，
        *   这时就需要将 maxIndex 指向当前下标 i ，即 maxIndex = i
        * 举例说明：
        * 当  const collectionArr = [
                                      {
                                        key: 'K1',
                                        value: ['北京', '上海', '天津']
                                      },
                                      {
                                        key: 'K2',
                                        value: ['广州', '北京', '深圳', '贵阳', '长沙']
                                      },
                                      {
                                        key: 'K3',
                                        value: ['成都', '上海', '杭州']
                                      },
                                      {
                                        key: 'K4',
                                        value: ['上海', '天津']
                                      },
                                      {
                                        key: 'K5',
                                        value: ['杭州', '大连']
                                      },
                                   ];
        * maxIndex = 0
        * 当遍历到 i = 1时，交集 intersection = ['广州', '北京', '深圳', '贵阳', '长沙']，intersection.length = 5,
        * collectionArr[maxIndex].value.length = collectionArr[0].value.length = 3
        * 可以看出，交集数组的长度大于了 maxIndex 指向的集合对象值的长度，这时 maxIndex 指向的就不是最大值所在的下标，所以需要改变 maxIndex 的指向
        * */
        if (intersection.length > 0 && (maxIndex < 0 || intersection.length > collectionArr[maxIndex].value.length)) {
          maxIndex = i;
        }
      }
      // 每次 for 循环结束后，判断maxIndex是否大于0，如果大于等于0，如果大于等于0的话，就表明找到了一个集合对象
      if (maxIndex >= 0) {
        // 当前最优解选出的集合对象
        const selectedObj = collectionArr[maxIndex];
        // 将找到的集合对象加入了selectedCollection中
        selectedCollection.push(selectedObj);
        // 将找到的集合对象加入到 selectedCollection 后，表明该集合对象已被选择，该集合对象的值以覆盖allValue中中的值，
        // 这时需要将找到的集合对象中的值在allValue进行删除。
        allValue = allValue.filter(item => !selectedObj.value.includes(item));
      }
    }
    return selectedCollection;
  }

  /**
   * @description 求两个数组的交集
   * @param arr1：数组1
   * @param arr2：数组2
   * @return {any[]}：得到的交集
   */
  public static getIntersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
  }

}
