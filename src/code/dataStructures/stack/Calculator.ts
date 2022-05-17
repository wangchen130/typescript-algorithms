import { Stack } from './Stack';

export class Calculator {
  // private static readonly numStack = new Stack<number>();
  // private static readonly operStack = new Stack<string>();

  // 返回运算符的优先级，使用数字表示，数字越大，则优先级就越高.
  public static priority(oper: string): number {
    if (oper === '*' || oper === '/') {
      return 10;
    } if (oper === '+' || oper === '-') {
      return 1;
    }
    return -1;
  }

  public static isOper(str: string): boolean {
    return str === '*' || str === '/' || str === '+' || str === '-';
  }

  public static calTwoNum (num1: number, num2: number, oper: string): number {
    switch (oper) {
      case '*':
        return num2 * num1;
      case '/':
        return num2 / num1;
      case '+':
        return num2 + num1;
      case '-':
        return num2 - num1;
      default:
        return 0;
    }
  }

  public static cal(expression: string): number {
    let numStack = new Stack<number>();
    let operStack = new Stack<string>();
    // 处理多位数数时，用于拼接数字
    let numStr: string = '';
    for (let i = 0; i < expression.length; i++) {
      let expressionItem = expression[i];
      if (this.isOper(expressionItem)) {
        if (operStack.isEmpty()) {
          operStack.push(expressionItem);
        } else if (this.priority(expressionItem) <= this.priority(operStack.peek())) {
          const num1 = numStack.pop();
          const num2 = numStack.pop();
          const oper = operStack.pop();
          const res = this.calTwoNum(num1, num2, oper);
          numStack.push(res);
          operStack.push(expressionItem);
        } else {
          operStack.push(expressionItem);
        }
      } else { // 是数字
        numStr += expressionItem;
        // 如果已经是expression的最后一位，就直接入栈
        if (i === expression.length - 1) {
          numStack.push(Number(numStr));
        } else if (this.isOper(expression[i + 1])) { // 如果下一位是操作符，则直接入数栈
          numStack.push(Number(numStr));
          numStr = '';
        }
      }
    }
    while (numStack.size() > 1) {
      const result = this.calTwoNum(numStack.pop(), numStack.pop(), operStack.pop());
      numStack.push(result);
    }
    return numStack.peek();
  }
}
