import { Stack } from './Stack';

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
