import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import { testDoublyLinkedList } from 'src/code/dataStructures/doublyLinkedList';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={1}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10 }} onClick={testDoublyLinkedList}>测试</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="双向链表介绍">
        <Typography>
          <Title level={3}>双向链表: DoublyLinkedList</Title>
          <Title level={3}>单向链表的缺点:</Title>
          <Paragraph>
            <ol>
              <li>
                单向链表,查找的方向只能是一个方向,而双向链表可以向前或者向后查找。
              </li>
              <li>
                单向链表不能自我删除，需要靠辅助节点 ，而双向链表可以自我删除。单链表删除时节点，总是找到待删除节点的前一个节点prev。
              </li>
            </ol>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
