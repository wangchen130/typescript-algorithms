export default class ArrayQueue<T> {
  public items: Array<T>

  constructor() {
    this.items = new Array<T>();
  }
  // enQueue(item) 入队，将元素加入到队列中
  // deQueue() 出队，从队列中删除队头元素，返回删除的那个元素
  // front() 查看队列的队头元素
  // isEmpty() 查看队列是否为空
  // size() 查看队列中元素的个数
  // toString() 将队列中的元素以字符串形式返回

  public enQueue(item: T) {
    this.items.push(item);
  }

  public deQueue(): T {
    return this.items.shift();
  }

  public front(): T {
    return this.items[0];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public size (): number {
    return this.items.length;
  }

  public toString (): string {
    return this.items.join('-');
  }
}
