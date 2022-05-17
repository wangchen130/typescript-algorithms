export class Stack<T> {
  private readonly stack: T[];

  constructor() {
    this.stack = new Array<T>();
  }

  // push(element):添加一个新元素到栈顶位置
  // pop():移除栈顶的元素，同时返回被移除的元素。
  // peek():返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)。
  // isEmpty():如果栈里没有任何元素就返回true，否则返回false。
  // size():返回栈里的元素个数。这个方法和数组的length属性很类似。
  // toString():将栈结构的内容以字符形式返回。

  public push(element: T) {
    this.stack.push(element);
  }

  public pop(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  public peek(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }

  public size(): number {
    return this.stack.length;
  }

  public toString(): string {
    return this.stack.join(' ');
  }
}
