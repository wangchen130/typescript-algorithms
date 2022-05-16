import { Typography, Button, Collapse } from 'antd';
import React from 'react';
import { josepfuQuestionUseQueue } from 'src/code/algorithms/josepfuQuestion';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {

  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={() => josepfuQuestionUseQueue(3, 5)}>使用队列实现</Button>
          <Button style={{ marginRight: 10 }}>使用单向环形链表实现</Button>
        </Collapse.Panel>
      </Collapse>
      <Typography>
        <Title level={3}>Josepfu(约瑟夫、约瑟夫环)  问题</Title>
        <Paragraph>
          {
            'Josephu  问题为：设编号为1，2，… n的n个人围坐一圈，约定编号为k（1< = k< = n）的人从1开始报数，数到m 的那个人出列，它的下一位又从1开始报数，数到m的那个人又出列，依次类推，直到所有人出列为止，由此产生一个出队编号的序列。'
          }
        </Paragraph>
        <Title level={3}>解决方法:</Title>
        <Paragraph>
          <ol>
            <li>
              队列
            </li>
            <li>
              单向环形链表
            </li>
          </ol>
        </Paragraph>
      </Typography>
    </>
  );
};

export default Comp;
