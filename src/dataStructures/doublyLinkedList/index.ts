import DoublyLinkedList from './DoublyLinkedList';

export const testDoublyLinkedList = () => {
  const doublyLinkedList = new DoublyLinkedList<Number>();
  console.log('====================DoublyLinkedList测试开始=============');
  console.log('doublyLinkedList.isEmpty():', doublyLinkedList.isEmpty());
  // append()测试
  console.log('==============append()测试=================');
  console.log('向双向链表中依次添加100，200，300，400, 500, 600, 700, 800, 900');
  doublyLinkedList.append(100);
  doublyLinkedList.append(200);
  doublyLinkedList.append(300);
  doublyLinkedList.appendList(400, 500, 600, 700, 800, 900);
  console.log(doublyLinkedList.toString());

  // isEmpty()测试
  console.log('==============isEmpty()测试=================');
  console.log('doublyLinkedList.isEmpty():', doublyLinkedList.isEmpty());

  // size()测试
  console.log('==============size()测试=================');
  console.log('doublyLinkedList.size():', doublyLinkedList.size());
  console.log(doublyLinkedList.toString());

  // insert测试
  console.log('==============insert测试=================');
  console.log('进行linkedList.insert(0, 11)操作');
  doublyLinkedList.insert(0, 11);
  console.log(doublyLinkedList.toString());
  console.log('进行linkedList.insert(10, 33)操作');
  doublyLinkedList.insert(10, 33);
  console.log(doublyLinkedList.toString());
  console.log('进行linkedList.insert(5, 55)操作');
  doublyLinkedList.insert(5, 55);
  console.log(doublyLinkedList.toString());
  console.log('进行linkedList.insert(100, 111)操作');
  doublyLinkedList.insert(100, 111);
  console.log(doublyLinkedList.toString());

  // getData测试
  console.log('==============getData测试=================');
  console.log('doublyLinkedList.getData(0):', doublyLinkedList.getData(0));
  console.log('doublyLinkedList.getData(11):', doublyLinkedList.getData(11));
  console.log('doublyLinkedList.getData(5):', doublyLinkedList.getData(5));
  console.log('doublyLinkedList.getData(33):', doublyLinkedList.getData(33));

  // indexOf测试
  console.log('==============indexOf测试=================');
  console.log('doublyLinkedList.indexOf(11):', doublyLinkedList.indexOf(11));
  console.log('doublyLinkedList.indexOf(33):', doublyLinkedList.indexOf(33));
  console.log('doublyLinkedList.indexOf(500):', doublyLinkedList.indexOf(500));
  console.log('doublyLinkedList.indexOf(321):', doublyLinkedList.indexOf(321));

  // update测试
  console.log('==============update测试=================');
  console.log('doublyLinkedList.update(0, 22):', doublyLinkedList.update(0, 22));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.update(11, 233):', doublyLinkedList.update(11, 233));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.update(5, 555):', doublyLinkedList.update(5, 555));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.update(100, 250):', doublyLinkedList.update(100, 250));
  console.log(doublyLinkedList.toString());

  // removeAt测试
  console.log('==============removeAt测试=================');
  console.log('doublyLinkedList.removeAt(0):', doublyLinkedList.removeAt(0));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.removeAt(10):', doublyLinkedList.removeAt(10));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.removeAt(5):', doublyLinkedList.removeAt(5));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.removeAt(15):', doublyLinkedList.removeAt(15));
  console.log(doublyLinkedList.toString());

  // remove测试
  console.log('==============remove测试=================');
  console.log('doublyLinkedList.remove(100):', doublyLinkedList.remove(100));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.remove(900):', doublyLinkedList.remove(900));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.remove(555):', doublyLinkedList.remove(555));
  console.log(doublyLinkedList.toString());
  console.log('doublyLinkedList.remove(4321):', doublyLinkedList.remove(4321));
  console.log(doublyLinkedList.toString());

  console.log('doublyLinkedList:', doublyLinkedList);
  console.log('====================DoublyLinkedList测试结束=============');
};
