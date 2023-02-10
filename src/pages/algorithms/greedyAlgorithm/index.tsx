import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testGreedyAlgorithm } from 'src/code/algorithms/greedyAlgorithm/testGreedyAlgorithm';
import greedyAlgorithm1Img from 'src/public/greedyAlgorithm/greedyAlgorithm1.png';
import greedyAlgorithm2Img from 'src/public/greedyAlgorithm/greedyAlgorithm2.png';
import greedyAlgorithm3Img from 'src/public/greedyAlgorithm/greedyAlgorithm3.png';
import greedyAlgorithm4Img from 'src/public/greedyAlgorithm/greedyAlgorithm4.png';
import greedyAlgorithm5Img from 'src/public/greedyAlgorithm/greedyAlgorithm5.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testGreedyAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="贪心算法介绍">
          <Typography>
            <Title level={3}>贪心算法：GreedyAlgorithm</Title>
            <Paragraph>
              <img src={greedyAlgorithm1Img} alt="" />
              <img src={greedyAlgorithm2Img} alt="" />
              <img src={greedyAlgorithm3Img} alt="" />
              <img src={greedyAlgorithm4Img} alt="" />
              <img src={greedyAlgorithm5Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
