import Queue from '../../dataStructures/queue/Queue';

/**
 * 使用队列解决约瑟夫问题
 * @param startNo： 从第几个元素开始
 * @param countNum： 间隔多少个数出圈，即数到多少数时出圈
 */
export const josepfuQuestionUseQueue = (startNo: number, countNum: number) => {
  console.log('=============使用队列完成约瑟夫问题=============');
  const queue = new Queue<string>();
  console.log('向队列中依次加入 tom，jerry，lilei，hanmeimei，xiaoming，wangchen');
  queue.enqueue('tom');
  queue.enqueue('jerry');
  queue.enqueue('lilei');
  queue.enqueue('hanmeimei');
  queue.enqueue('xiaoming');
  queue.enqueue('wangchen');
  console.log(queue.toString());
  console.log(`从第 ${startNo} 个开始，数到 ${countNum} 时出圈`);
  // 将 startNo 数字之前的元素重新放入到队尾，这样第 startNo 个的元素就成为了队头
  for (let i = 0; i < startNo - 1; i++) {
    queue.enqueue(queue.dequeue());
  }
  while (queue.size() > 1) {
    // countNum 数字之前的元素重新放入到队尾，即把队头删除的元素，重新加入到队列中。
    for (let j = 0; j < countNum - 1; j++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(queue.dequeue(), '出圈');
  }
  console.log(queue.dequeue(), '出圈');
};
