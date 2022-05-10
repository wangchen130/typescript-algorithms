import { Typography } from 'antd';
import React from 'react';
import 'src/code/dataStructures/sparseArray';
import queueImg from 'src/public/queue.png';

import 'src/code/dataStructures/queue';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => (
  <Typography>
    <Title level={3}>队列：queue</Title>
    <Paragraph>
      当一个数组中大部分元素为０，或者为同一个值的数组时，可以使用稀疏数组来保存该数组。
    </Paragraph>
    <Title level={3}>稀疏数组的处理方法是:</Title>
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

export default Comp;
