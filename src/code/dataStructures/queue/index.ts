import ArrayQueue from './ArrayQueue';
import CircleArrayQueue from './CircleArrayQueue';

export const testArrayQueue = () => {
  const arrayQueue = new ArrayQueue<number>();
  console.log('====================ArrayQueue测试开始=============');
  console.log('向队列中增加1，2，3，4，5');
  arrayQueue.enQueue(1);
  arrayQueue.enQueue(2);
  arrayQueue.enQueue(3);
  arrayQueue.enQueue(4);
  arrayQueue.enQueue(5);
  console.log(arrayQueue.toString());
  console.log('两个元素出队列');
  arrayQueue.deQueue();
  arrayQueue.deQueue();
  console.log(arrayQueue.toString());
  console.log('产看队列头的元素：', arrayQueue.front());
  console.log('队列是否为空：', arrayQueue.isEmpty());
  console.log('队列长度为：', arrayQueue.size());
  console.log('====================ArrayQueue测试结束=============');
};

export const testCircleArrayQueue = () => {
  const circleArrayQueue = new CircleArrayQueue();
  console.log('====================CircleArrayQueue测试开始=============');
  console.log(circleArrayQueue);
  console.log('====================CircleArrayQueue测试结束=============');
};
