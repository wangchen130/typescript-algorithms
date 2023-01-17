import { DAC } from './DAC';

export const testHanoiTower = () => {
  console.log('===========1个盘子============');
  DAC.hanoiTower(1);
  console.log('===========2个盘子============');
  DAC.hanoiTower(2);
  console.log('===========3个盘子============');
  DAC.hanoiTower(3);
  console.log('===========4个盘子============');
  DAC.hanoiTower(4);
  console.log('===========5个盘子============');
  DAC.hanoiTower(5);
  console.log('===========6个盘子============');
  DAC.hanoiTower(6);
  console.log('===========7个盘子============');
  DAC.hanoiTower(7);
  console.log('===========8个盘子============');
  DAC.hanoiTower(8);
};
