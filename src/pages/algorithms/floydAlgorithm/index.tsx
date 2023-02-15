import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testKruskalAlgorithm } from 'src/code/algorithms/kruskalAlgorithm/testKruskalAlgorithm';
import floydAlgorithm1Img from 'src/public/floyd/floydAlgorithm1.png';
import floydAlgorithm2Img from 'src/public/floyd/floydAlgorithm2.png';
import floydAlgorithm3Img from 'src/public/floyd/floydAlgorithm3.png';
import floydAlgorithm4Img from 'src/public/floyd/floydAlgorithm4.png';
import floydAlgorithm5Img from 'src/public/floyd/floydAlgorithm5.png';
import floydAlgorithm6Img from 'src/public/floyd/floydAlgorithm6.png';
import floydAlgorithm7Img from 'src/public/floyd/floydAlgorithm7.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testKruskalAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="弗洛伊德算法介绍">
          <Typography>
            <Title level={3}>弗洛伊德算法：FloydAlgorithm</Title>
            <Paragraph>
              <img src={floydAlgorithm1Img} alt="" />
              <img src={floydAlgorithm2Img} alt="" />
              <img src={floydAlgorithm3Img} alt="" />
              <img src={floydAlgorithm4Img} alt="" />
              <img src={floydAlgorithm5Img} alt="" />
              <img src={floydAlgorithm6Img} alt="" />
              <img src={floydAlgorithm7Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
