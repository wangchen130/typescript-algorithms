import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testBinarySearchTree } from 'src/code/dataStructures/tree/binarySearchTree/testBinarySearchTree';
import bst1Img from 'src/public/tree/bst1.png';
import bst2Img from 'src/public/tree/bst2.png';
import bst3Img from 'src/public/tree/bst3.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testBinarySearchTree}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="二叉搜索树介绍">
          <Typography>
            <Title level={3}>二叉搜索树：BinarySearchTree</Title>
            <Paragraph>
              <img src={bst1Img} alt="" />
              <img src={bst2Img} alt="" />
              <img src={bst3Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
