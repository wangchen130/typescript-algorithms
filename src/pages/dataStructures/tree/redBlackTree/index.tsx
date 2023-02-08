import React from 'react';
import { Typography, /* Button, */ Collapse } from 'antd';
// import { testBinarySearchTree } from 'src/code/dataStructures/tree/binarySearchTree/testBinarySearchTree';
import redBlackTree1Img from 'src/public/tree/redBlackTree1.png';
import redBlackTree2Img from 'src/public/tree/redBlackTree2.png';
import redBlackTree3Img from 'src/public/tree/redBlackTree3.png';
import redBlackTree4Img from 'src/public/tree/redBlackTree4.png';
import redBlackTree5Img from 'src/public/tree/redBlackTree5.png';
import redBlackTree6Img from 'src/public/tree/redBlackTree6.png';
import redBlackTree7Img from 'src/public/tree/redBlackTree7.png';
import redBlackTree8Img from 'src/public/tree/redBlackTree8.png';
import redBlackTree9Img from 'src/public/tree/redBlackTree9.png';
import redBlackTreeCase1Img from 'src/public/tree/redBlackTreeCase1.png';
import redBlackTreeCase2Img from 'src/public/tree/redBlackTreeCase2.png';
import redBlackTreeCase3Img from 'src/public/tree/redBlackTreeCase3.png';
import redBlackTreeCase4Img from 'src/public/tree/redBlackTreeCase4.png';
import redBlackTreeCase5Img from 'src/public/tree/redBlackTreeCase5.png';
import redBlackTreeCase6Img from 'src/public/tree/redBlackTreeCase6.png';
import redBlackTreeCase7Img from 'src/public/tree/redBlackTreeCase7.png';
import redBlackTreeCase8Img from 'src/public/tree/redBlackTreeCase8.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        {/* <Collapse.Panel key={1} header="测试代码"> */}
        {/*  <Button style={{ marginRight: 10 }} onClick={testBinarySearchTree}>运行</Button> */}
        {/* </Collapse.Panel> */}
        <Collapse.Panel key={2} header="红黑树介绍">
          <Typography>
            <Title level={3}>红黑树：RedBlackTree</Title>
            <Paragraph>
              <img src={redBlackTree1Img} alt="" />
              <img src={redBlackTree2Img} alt="" />
            </Paragraph>
            <Title level={3}>变色</Title>
            <Paragraph>
              <img src={redBlackTree3Img} alt="" />
            </Paragraph>
            <Title level={3}>旋转</Title>
            <Paragraph>
              <img src={redBlackTree4Img} alt="" />
            </Paragraph>
            <Title level={3}>插入操作</Title>
            <Paragraph>
              <img src={redBlackTree5Img} alt="" />
              <img src={redBlackTree6Img} alt="" />
              <img src={redBlackTree7Img} alt="" />
              <img src={redBlackTree8Img} alt="" />
              <img src={redBlackTree9Img} alt="" />
            </Paragraph>
            <Title level={3}>案例</Title>
            <Paragraph>
              <img src={redBlackTreeCase1Img} alt="" />
              <img src={redBlackTreeCase2Img} alt="" />
              <img src={redBlackTreeCase3Img} alt="" />
              <img src={redBlackTreeCase4Img} alt="" />
              <img src={redBlackTreeCase5Img} alt="" />
              <img src={redBlackTreeCase6Img} alt="" />
              <img src={redBlackTreeCase7Img} alt="" />
              <img src={redBlackTreeCase8Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
