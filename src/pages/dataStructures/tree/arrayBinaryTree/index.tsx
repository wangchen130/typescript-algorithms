import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testArrayBinaryTree } from 'src/code/dataStructures/tree/arrayBinaryTree/arrayBinaryTreeTest';
import ArrayBinaryTree1Img from 'src/public/tree/ArrayBinaryTree1.png';
import ArrayBinaryTree2Img from 'src/public/tree/ArrayBinaryTree2.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testArrayBinaryTree}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="顺序存储二叉树介绍">
          <Typography>
            <Title level={3}>需求: 给定一个数组 [1,2,3,4,5,6,7]，要求以二叉树前序遍历的方式进行遍历。 前序遍历的结果应当为：1,2,4,5,3,6,7  中序遍历的结果应当为：4，2，5，1，6，3，7   后序遍历的结果应当为：4，5，2，6，7，3，1 </Title>
            <Paragraph>
              <img src={ArrayBinaryTree1Img} alt="" />
              <img src={ArrayBinaryTree2Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
