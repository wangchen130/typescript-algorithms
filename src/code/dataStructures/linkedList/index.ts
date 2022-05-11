import LinkedList from './LinkedList';

export const testLinkedList = () => {
  const linkedList = new LinkedList<number>();
  console.log('====================LinkedList测试开始=============');
  console.log('向链表中依次添加10，20，30，40，50，60, 70, 80, 90, 100');
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  linkedList.append(40);
  linkedList.append(50);
  linkedList.append(60);
  linkedList.appendList(70, 80, 90, 100);
  console.log(linkedList.toString());
  console.log('进行linkedList.insert(5, 250)操作');
  linkedList.insert(5, 250);
  console.log(linkedList.toString());
  console.log('进行linkedList.insert(0, 555)操作');
  linkedList.insert(0, 555);
  console.log(linkedList.toString());
};
