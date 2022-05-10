import SparseArray from './SparseArray';

export const testSparseArray = () => {
  const sparseArray = new SparseArray(11, 11);
  console.log('====================SparseArray测试开始=============');
  sparseArray.getSparseArray();
  console.log(sparseArray);
};
