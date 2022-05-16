export default class Queue<T> {
  public items: Array<T>

  constructor() {
    this.items = new Array<T>();
  }
  // enqueue(item) 入队，将元素加入到队列中
  // dequeue() 出队，从队列中删除队头元素，返回删除的那个元素
  // front() 查看队列的队头元素
  // isEmpty() 查看队列是否为空
  // size() 查看队列中元素的个数
  // toString() 将队列中的元素以字符串形式返回

  public enqueue(item: T) {
    this.items.push(item);
  }

  public dequeue(): T {
    return this.items.shift();
  }

  public front(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public size (): number {
    return this.items.length;
  }

  public toString (): string {
    return `队头->：${this.items.join(' ')} <-队尾`;
  }
}
