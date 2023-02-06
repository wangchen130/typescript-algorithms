import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testGraph } from 'src/code/dataStructures/graph/testGraph';
import graph1Img from 'src/public/graph/graph1.png';
import graph2Img from 'src/public/graph/graph2.png';
import graph3Img from 'src/public/graph/graph3.png';
import graph4Img from 'src/public/graph/graph4.png';
import graph5Img from 'src/public/graph/graph5.png';
import graph6Img from 'src/public/graph/graph6.png';
import graph7Img from 'src/public/graph/graph7.png';
import graph8Img from 'src/public/graph/graph8.png';
import graph9Img from 'src/public/graph/graph9.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testGraph}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="图介绍">
          <Typography>
            <Title level={3}>图：Graph</Title>
            <Paragraph>
              <img src={graph1Img} alt="" />
              <img src={graph2Img} alt="" />
              <img src={graph3Img} alt="" />
              <img src={graph4Img} alt="" />
              <img src={graph5Img} alt="" />
              <img src={graph6Img} alt="" />
              <img src={graph7Img} alt="" />
              <img src={graph8Img} alt="" />
              <img src={graph9Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
