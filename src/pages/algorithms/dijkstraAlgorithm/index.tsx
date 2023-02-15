import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testKruskalAlgorithm } from 'src/code/algorithms/kruskalAlgorithm/testKruskalAlgorithm';
import dijkstraAlgorithm1Img from 'src/public/dijkstra/dijkstraAlgorithm1.png';
import dijkstraAlgorithm2Img from 'src/public/dijkstra/dijkstraAlgorithm2.png';
import dijkstraAlgorithm3Img from 'src/public/dijkstra/dijkstraAlgorithm3.png';
import dijkstraAlgorithm4Img from 'src/public/dijkstra/dijkstraAlgorithm4.png';
import dijkstraAlgorithm5Img from 'src/public/dijkstra/dijkstraAlgorithm5.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testKruskalAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="狄杰斯特拉算法介绍">
          <Typography>
            <Title level={3}>狄杰斯特拉算法：DijkstraAlgorithm</Title>
            <Paragraph>
              <img src={dijkstraAlgorithm1Img} alt="" />
              <img src={dijkstraAlgorithm2Img} alt="" />
              <img src={dijkstraAlgorithm3Img} alt="" />
              <img src={dijkstraAlgorithm4Img} alt="" />
              <img src={dijkstraAlgorithm5Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
