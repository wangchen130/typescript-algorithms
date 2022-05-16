import LinkedList from './LinkedList';

export const testLinkedList = () => {
  const linkedList = new LinkedList<number>();
  console.log('====================LinkedList测试开始=============');
  console.log('linkedList.isEmpty():', linkedList.isEmpty());
  console.log('向链表中依次添加10，20，30，40，50，60, 70, 80, 90, 100');
  // 添加操作测试
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  linkedList.append(40);
  linkedList.append(50);
  linkedList.append(60);
  linkedList.appendList(70, 80, 90, 100);

  // isEmpty()测试
  console.log('==============isEmpty()测试=================');
  console.log('linkedList.isEmpty():', linkedList.isEmpty());

  // size()测试
  console.log('==============size()测试=================');
  console.log('linkedList.size():', linkedList.size());
  console.log(linkedList.toString());

  // insert测试
  console.log('==============insert测试=================');
  console.log('进行linkedList.insert(5, 250)操作');
  linkedList.insert(5, 250);
  console.log(linkedList.toString());
  console.log('进行linkedList.insert(0, 555)操作');
  linkedList.insert(0, 555);
  console.log(linkedList.toString());

  // getData测试
  console.log('==============getData测试=================');
  console.log('linkedList.getData(0):', linkedList.getData(0));
  console.log('linkedList.getData(11):', linkedList.getData(11));
  console.log('linkedList.getData(12):', linkedList.getData(12));

  // indexOf测试
  console.log('==============indexOf测试=================');
  console.log('linkedList.indexOf(100):', linkedList.indexOf(100));
  console.log('linkedList.indexOf(555):', linkedList.indexOf(555));
  console.log('linkedList.indexOf(1000):', linkedList.indexOf(1000));

  // update测试
  console.log('==============update测试=================');
  console.log('linkedList.update(0, 233):', linkedList.update(0, 233));
  console.log(linkedList.toString());
  console.log('linkedList.update(11, 333):', linkedList.update(11, 333));
  console.log(linkedList.toString());
  console.log('linkedList.update(15, 250):', linkedList.update(15, 250));
  console.log(linkedList.toString());

  // removeAt测试
  console.log('==============removeAt测试=================');
  console.log('linkedList.removeAt(0):', linkedList.removeAt(0));
  console.log(linkedList.toString());
  console.log('linkedList.removeAt(10):', linkedList.removeAt(10));
  console.log(linkedList.toString());
  console.log('linkedList.removeAt(15):', linkedList.removeAt(15));
  console.log(linkedList.toString());

  // remove测试
  console.log('==============remove测试=================');
  console.log('linkedList.remove(250):', linkedList.remove(250));
  console.log(linkedList.toString());
  console.log('linkedList.remove(10):', linkedList.remove(10));
  console.log(linkedList.toString());
  console.log('linkedList.remove(555):', linkedList.remove(555));
  console.log(linkedList.toString());

  console.log('====================LinkedList测试结束=============');
};
