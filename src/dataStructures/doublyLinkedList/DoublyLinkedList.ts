import { LinkedList, Node } from '../linkedList/LinkedList';

class DoublyNode<T> extends Node<T> {
  public prev: DoublyNode<T>

  public next: DoublyNode<T>

  constructor(data: T) {
    super(data);
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> extends LinkedList<T> {
  public head: DoublyNode<T>

  public tail: DoublyNode<T>

  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  // append (data: T): Node<T> 往链表尾部追加数据
  // appendList (...res: T[]): boolean 批量向链表尾部追加数据
  // insert(position: number, data: T): boolean 在指定位置（position）插入节点
  // getData(position) 获取指定位置的 data
  // indexOf(data) 返回指定 data 的 index，如果没有，返回 -1。
  // update(position, data) 修改指定位置节点的 data
  // removeAt(position) 删除指定位置的节点，并返回删除的那个节点
  // remove(data) 删除指定 data 的节点，并返回删除的那个节点
  // isEmpty() 判断链表是否为空
  // size() 获取链表的长度
  // toString() 链表数据以字符串形式返回

  // 重写append方法
  public append(data: T): Node<T> {
    const newNode = new DoublyNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  // 重写insert方法
  public insert(position: number, data: T): boolean {
    if (position < 0 || position > this.length) return false;
    const newNode = new DoublyNode(data);
    if (position === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position === this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let index = 0;
      while (index < position) {
        index++;
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }
    this.length++;
    return true;
  }

  // 重写removeAt方法
  public removeAt(position: number): boolean | Node<T> {
    if (position < 0 || position >= this.length) return false;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        // this.head.prev.next = null;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      this.tail = this.tail.prev;
      // this.tail.next.prev = null;
      this.tail.next = null;
    } else {
      let current = this.head;
      let index = 0;
      while (index < position) {
        index++;
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
    return true;
  }

}

export default DoublyLinkedList;
