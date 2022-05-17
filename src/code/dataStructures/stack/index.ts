import { Stack } from './Stack';
import { Calculator } from './Calculator';

export const testStack = () => {
  const stack = new Stack<number>();
  console.log('====================Stack测试开始=============');
  console.log('stack.isEmpty():', stack.isEmpty());
  console.log('stack.peek():', stack.peek());
  console.log('stack.size():', stack.size());
  // push测试
  console.log('向栈中依次添加11，22，33，44，55，66，77，88，99，111');
  stack.push(11);
  stack.push(22);
  stack.push(33);
  stack.push(44);
  stack.push(55);
  stack.push(66);
  stack.push(77);
  stack.push(88);
  stack.push(99);
  stack.push(111);
  console.log('stack.toString():', stack.toString());
  console.log('stack.isEmpty():', stack.isEmpty());
  console.log('stack.peek():', stack.peek());
  console.log('stack.size():', stack.size());

  // pop测试
  console.log('stack.pop():', stack.pop());
  console.log('stack.toString():', stack.toString());
  console.log('stack.pop():', stack.pop());
  console.log('stack.toString():', stack.toString());
  console.log('stack.pop():', stack.pop());
  console.log('stack.toString():', stack.toString());
  console.log('stack.pop():', stack.pop());
  console.log('stack.toString():', stack.toString());
  console.log('stack.isEmpty():', stack.isEmpty());
  console.log('stack.peek():', stack.peek());
  console.log('stack.size():', stack.size());
  console.log('====================Stack测试结束=============');
};

export const testCalculator = () => {
  console.log('====================Calculator测试开始=============');
  console.log('计算表达式 7*2*2-5+1-5+3-4 的结果为：', 7 * 2 * 2 - 5 + 1 - 5 + 3 - 4);
  console.log('计算结果为：', Calculator.cal('7*2*2-5+1-5+3-4'));
  console.log('计算表达式 3+2*6-2 的结果为：', 3 + 2 * 6 - 2);
  console.log('计算结果为：', Calculator.cal('3+2*6-2'));
  console.log('====================Calculator测试结束=============');
};
