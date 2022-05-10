import { Typography } from 'antd';
import React from 'react';
import 'src/code/dataStructures/sparseArray';
import queueImg from 'src/public/queue.png';
import { testQueue } from 'src/code/dataStructures/queue';
import { customEffect } from 'src/utils/customEffect';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  customEffect(testQueue);
  return (
    <Typography>
      <Title level={3}>队列：queue</Title>
      <Paragraph>
        <ul>
          <li>
            队列是一个有序列表，可以用数组或是链表来实现。
          </li>
          <li>
            遵循先入先出的原则。即：先存入队列的数据，要先取出。后存入的要后取出
          </li>
          <li>
            示意图：(使用数组模拟队列示意图)
          </li>
          <img src={queueImg} alt="" />
        </ul>
      </Paragraph>
    </Typography>
  );
};

export default Comp;
