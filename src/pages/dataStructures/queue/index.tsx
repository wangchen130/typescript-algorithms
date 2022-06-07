import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import queueImg from 'src/public/queue.png';
import { testQueue } from 'src/code/dataStructures/queue';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={1}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10 }} onClick={testQueue}>队列功能测试</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="队列介绍">
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
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
