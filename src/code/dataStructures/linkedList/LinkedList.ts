class Node<T> {
  public data: T;

  public next: Node<T>

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList<T> {
  public head: Node<T>

  public length: number

  constructor() {
    this.head = null;
    this.length = 0;
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

  public append (data: T): Node<T> {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return newNode;
  }

  public appendList (...res: T[]): boolean {
    res.forEach(data => this.append(data));
    return true;
  }

  public insert(position: number, data: T): boolean {
    if (position < 0 || position > this.length) return false;
    const newNode = new Node(data);
    // 在第一个位置插入
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let prev = null;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true;
  }

  public getData (position: number): T {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.data;
  }

  public indexOf (data: T): number {
    let index = 0;
    let current = this.head;
    while (current) {
      if (data === current.data) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  public update (position: number, data: T): boolean | Node<T> {
    if (position < 0 || position >= this.length) return false;
    let index = 0;
    let current = this.head;
    while (index < position) {
      index++;
      current = current.next;
    }
    current.data = data;
    return current;
  }

  public removeAt (position: number): boolean | Node<T> {
    if (position < 0 || position >= this.length) return false;
    let index = 0;
    let current = this.head;
    let prev = null;
    // 删除第一个节点
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index < position) {
        index++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.length--;
    return current;
  }

  public remove (data: T): boolean | Node<T> {
    const index = this.indexOf(data);
    return this.removeAt(index);
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public size(): number {
    return this.length;
  }

  public toString (): string {
    let resultStr = `链表长度length为： ${this.length}， 数据为：`;
    let current = this.head;
    while (current) {
      if (current.next === null) {
        resultStr += current.data;
      } else {
        resultStr += `${current.data} -> `;
      }
      current = current.next;
    }
    return resultStr;
  }
}
