import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testAVLTree } from 'src/code/dataStructures/tree/avlTree/testAVLTree';
import AVLTree1Img from 'src/public/tree/AVLTree1.png';
import AVLTree2Img from 'src/public/tree/AVLTree2.png';
import AVLTree3Img from 'src/public/tree/AVLTree3.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testAVLTree}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="AVL树介绍">
          <Typography>
            <Title level={3}>AVL树：AVLTree</Title>
            <Paragraph>
              <img src={AVLTree1Img} alt="" />
              <img src={AVLTree2Img} alt="" />
            </Paragraph>
            <Title level={3}>左旋转</Title>
            <Paragraph>
              <img src={AVLTree3Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
