import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testHashTable } from 'src/code/dataStructures/hashTable';
import hashTableBasicIntroductionImg from 'src/public/hashTableBasicIntroduction.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testHashTable}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="hash table介绍">
          <Typography>
            <Title level={3}>哈希表：Hash table</Title>
            <Paragraph>
              <img src={hashTableBasicIntroductionImg} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
