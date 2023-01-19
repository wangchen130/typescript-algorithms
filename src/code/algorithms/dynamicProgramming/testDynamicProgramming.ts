import { DynamicProgramming } from './DynamicProgramming';

export const testKnapsackProblem = () => {
  console.log('=================背包问题求解================');
  const goodsList = [
    {
      weight: 1,
      price: 1500,
      name: '吉他'
    },
    {
      weight: 4,
      price: 3000,
      name: '音响'
    },
    {
      weight: 3,
      price: 2000,
      name: '电脑'
    },
  ];
  const assignGoodsList = DynamicProgramming.knapsackProblem(goodsList, 4);
  console.log('物品分配明细assignGoodsList:', assignGoodsList);
};
