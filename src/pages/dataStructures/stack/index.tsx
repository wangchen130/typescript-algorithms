import { Typography } from 'antd';
import React from 'react';
import stackPush from 'src/public/stack-push.png';
import stackPop from 'src/public/stack-pop.png';
import { testStack } from 'src/code/dataStructures/stack';
import { customEffect } from 'src/utils/customEffect';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  customEffect(testStack);
  return (
    <Typography>
      <Title level={3}>栈：Stack</Title>
      <Paragraph>
        <ol>
          <li>
            栈是一个先入后出(FILO-First In Last Out)的有序列表。
          </li>
          <li>
            栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Bottom)。
          </li>
          <li>
            根据栈的定义可知，最先放入栈中元素在栈底，最后放入的元素在栈顶，而删除元素刚好相反，最后放入的元素最先删除，最先放入的元素最后删除
          </li>
          <li>
            出栈(pop)和入栈(push)的概念(如图所示)
          </li>
          <img src={stackPush} alt="" />
          <img src={stackPop} alt="" />
        </ol>
      </Paragraph>
      <Title level={3}>栈的应用场景:</Title>
      <Paragraph>
        <ol>
          <li>
            子程序的调用：在跳往子程序前，会先将下个指令的地址存到堆栈中，直到子程序执行完后再将地址取出，以回到原来的程序中。
          </li>
          <li>
            处理递归调用：和子程序的调用类似，只是除了储存下一个指令的地址外，也将参数、区域变量等数据存入堆栈中。
          </li>
          <li>
            表达式的转换[中缀表达式转后缀表达式]与求值(实际解决)。
          </li>
          <li>
            二叉树的遍历。
          </li>
          <li>
            图形的深度优先(depth一first)搜索法。
          </li>
        </ol>
      </Paragraph>
    </Typography>
  );
};

export default Comp;