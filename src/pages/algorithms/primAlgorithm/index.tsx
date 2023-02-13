import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testPrimAlgorithm } from 'src/code/algorithms/primAlgorithm/testPrimAlgorithm';
import primAlgorithm1Img from 'src/public/prim/primAlgorithm1.png';
import primAlgorithm2Img from 'src/public/prim/primAlgorithm2.png';
import primAlgorithm3Img from 'src/public/prim/primAlgorithm3.png';
import primAlgorithm4Img from 'src/public/prim/primAlgorithm4.png';
import primAlgorithm5Img from 'src/public/prim/primAlgorithm5.png';
import primAlgorithm6Img from 'src/public/prim/primAlgorithm6.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testPrimAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="普里姆算法介绍">
          <Typography>
            <Title level={3}>普里姆算法：PrimAlgorithm</Title>
            <Paragraph>
              <img src={primAlgorithm1Img} alt="" />
              <img src={primAlgorithm2Img} alt="" />
              <img src={primAlgorithm3Img} alt="" />
              <img src={primAlgorithm4Img} alt="" />
              <img src={primAlgorithm5Img} alt="" />
              <img src={primAlgorithm6Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
