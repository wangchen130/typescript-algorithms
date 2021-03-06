import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import { testLinkedList } from 'src/code/dataStructures/linkedList';
import linkedListImg from 'src/public/linkedList.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={1}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10 }} onClick={testLinkedList}>链表功能测试</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="链表介绍">
        <Typography>
          <Title level={3}>链表: Linked List</Title>
          <Paragraph>
            链表是有序的列表，但是它在内存中是存储如下
          </Paragraph>
          <img src={linkedListImg} alt="" />
          <Title level={3}>链表的特点:</Title>
          <Paragraph>
            <ol>
              <li>
                链表是以节点的方式来存储,是链式存储
              </li>
              <li>
                每个节点包含 data 域， next 域：指向下一个节点.
              </li>
              <li>
                如图：发现链表的各个节点不一定是连续存储.
              </li>
              <li>
                链表分带头节点的链表和没有头节点的链表，根据实际的需求来确定
              </li>
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
