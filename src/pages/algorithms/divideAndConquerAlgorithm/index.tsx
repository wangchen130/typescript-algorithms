import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testHanoiTower } from 'src/code/algorithms/divideAndConquerAlgorithm/testDAC';
import divideAndConquerAlgorithm1Img from 'src/public/divideAndConquerAlgorithm/divideAndConquerAlgorithm1.png';
import divideAndConquerAlgorithm2Img from 'src/public/divideAndConquerAlgorithm/divideAndConquerAlgorithm2.png';
import divideAndConquerAlgorithm3Img from 'src/public/divideAndConquerAlgorithm/divideAndConquerAlgorithm3.png';
import divideAndConquerAlgorithm4Img from 'src/public/divideAndConquerAlgorithm/divideAndConquerAlgorithm4.png';
import divideAndConquerAlgorithm5Img from 'src/public/divideAndConquerAlgorithm/divideAndConquerAlgorithm5.png';
import divideAndConquerAlgorithm6Img from 'src/public/divideAndConquerAlgorithm/divideAndConquerAlgorithm6.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testHanoiTower}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="动态规划算法介绍">
          <Typography>
            <Title level={3}>动态规划算法</Title>
            <Paragraph>
              <img src={divideAndConquerAlgorithm1Img} alt="" />
              <img src={divideAndConquerAlgorithm2Img} alt="" />
              <img src={divideAndConquerAlgorithm3Img} alt="" />
              <img src={divideAndConquerAlgorithm4Img} alt="" />
              <img src={divideAndConquerAlgorithm5Img} alt="" />
              <img src={divideAndConquerAlgorithm6Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
