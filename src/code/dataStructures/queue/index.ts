import Queue from './Queue';

export const testQueue = () => {
  const queue = new Queue<number>();
  console.log('====================ArrayQueue测试开始=============');
  console.log('向队列中增加1，2，3，4，5');
  queue.enQueue(1);
  queue.enQueue(2);
  queue.enQueue(3);
  queue.enQueue(4);
  queue.enQueue(5);
  console.log(queue.toString());
  console.log('两个元素出队列');
  queue.deQueue();
  queue.deQueue();
  console.log(queue.toString());
  console.log('产看队列头的元素：', queue.front());
  console.log('队列是否为空：', queue.isEmpty());
  console.log('队列长度为：', queue.size());
  console.log('====================ArrayQueue测试结束=============');
};
