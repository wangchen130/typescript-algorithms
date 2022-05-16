import Queue from '../../dataStructures/queue/Queue';

export const useQueue = () => {
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
};
