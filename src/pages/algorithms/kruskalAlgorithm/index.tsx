import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testKruskalAlgorithm } from 'src/code/algorithms/kruskalAlgorithm/testKruskalAlgorithm';
import kruskalAlgorithm1Img from 'src/public/kruskal/kruskalAlgorithm1.png';
import kruskalAlgorithm2Img from 'src/public/kruskal/kruskalAlgorithm2.png';
import kruskalAlgorithm3Img from 'src/public/kruskal/kruskalAlgorithm3.png';
import kruskalAlgorithm4Img from 'src/public/kruskal/kruskalAlgorithm4.png';
import kruskalAlgorithm5Img from 'src/public/kruskal/kruskalAlgorithm5.png';
import kruskalAlgorithm6Img from 'src/public/kruskal/kruskalAlgorithm6.png';
import kruskalAlgorithm7Img from 'src/public/kruskal/kruskalAlgorithm7.png';
import kruskalAlgorithm8Img from 'src/public/kruskal/kruskalAlgorithm8.png';
import kruskalAlgorithm9Img from 'src/public/kruskal/kruskalAlgorithm9.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testKruskalAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="克鲁斯卡尔算法介绍">
          <Typography>
            <Title level={3}>克鲁斯卡尔算法：KruskalAlgorithm</Title>
            <Paragraph>
              <img src={kruskalAlgorithm1Img} alt="" />
              <img src={kruskalAlgorithm2Img} alt="" />
              <img src={kruskalAlgorithm3Img} alt="" />
              <img src={kruskalAlgorithm4Img} alt="" />
              <img src={kruskalAlgorithm5Img} alt="" />
              <img src={kruskalAlgorithm6Img} alt="" />
              <img src={kruskalAlgorithm7Img} alt="" />
              <img src={kruskalAlgorithm8Img} alt="" />
              <img src={kruskalAlgorithm9Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
