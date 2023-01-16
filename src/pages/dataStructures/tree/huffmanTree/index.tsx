import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testHuffmanTree } from 'src/code/dataStructures/tree/huffmanTree/huffmanTreeTest';
import huffmanTree1Img from 'src/public/tree/huffmanTree1.png';
import huffmanTree2Img from 'src/public/tree/huffmanTree2.png';
import huffmanTree3Img from 'src/public/tree/huffmanTree3.png';
import huffmanTree4Img from 'src/public/tree/huffmanTree4.png';
import huffmanTree5Img from 'src/public/tree/huffmanTree5.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testHuffmanTree}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="赫夫曼树介绍">
          <Typography>
            <Title level={3}>赫夫曼树</Title>
            <Paragraph>
              <img src={huffmanTree1Img} alt="" />
              <img src={huffmanTree2Img} alt="" />
              <img src={huffmanTree3Img} alt="" />
              <img src={huffmanTree4Img} alt="" />
              <img src={huffmanTree5Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
