import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testZipDataByHuffmanDataZip } from 'src/code/algorithms/huffmanCode/testHuffmanCode';
import huffmanCode1Img from 'src/public/huffmanCode/huffmanCode1.png';
import huffmanCode2Img from 'src/public/huffmanCode/huffmanCode2.png';
import huffmanCode3Img from 'src/public/huffmanCode/huffmanCode3.png';
import huffmanCode4Img from 'src/public/huffmanCode/huffmanCode4.png';
import huffmanCode5Img from 'src/public/huffmanCode/huffmanCode5.png';
import huffmanCode6Img from 'src/public/huffmanCode/huffmanCode6.png';
import huffmanCode7Img from 'src/public/huffmanCode/huffmanCode7.png';
import huffmanCode8Img from 'src/public/huffmanCode/huffmanCode8.png';
import huffmanCode9Img from 'src/public/huffmanCode/huffmanCode9.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testZipDataByHuffmanDataZip}>数据压缩</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="赫夫曼编码介绍">
          <Typography>
            <Title level={3}>赫夫曼编码</Title>
            <Paragraph>
              <img src={huffmanCode1Img} alt="" />
              <img src={huffmanCode2Img} alt="" />
              <img src={huffmanCode3Img} alt="" />
              <img src={huffmanCode4Img} alt="" />
              <img src={huffmanCode5Img} alt="" />
              <img src={huffmanCode6Img} alt="" />
              <img src={huffmanCode7Img} alt="" />
              <img src={huffmanCode8Img} alt="" />
              <img src={huffmanCode9Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
