import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testKnapsackProblem } from 'src/code/algorithms/dynamicProgramming/testDynamicProgramming';
import dynamicProgramming1Img from 'src/public/dynamicProgramming/dynamicProgramming1.png';
import dynamicProgramming2Img from 'src/public/dynamicProgramming/dynamicProgramming2.png';
import dynamicProgramming3Img from 'src/public/dynamicProgramming/dynamicProgramming3.png';
import dynamicProgramming4Img from 'src/public/dynamicProgramming/dynamicProgramming4.png';
import dynamicProgramming5Img from 'src/public/dynamicProgramming/dynamicProgramming5.png';
import dynamicProgramming6Img from 'src/public/dynamicProgramming/dynamicProgramming6.png';
import dynamicProgramming7Img from 'src/public/dynamicProgramming/dynamicProgramming7.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testKnapsackProblem}>背包问题</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="动态规划算法介绍">
          <Typography>
            <Title level={3}>动态规划算法</Title>
            <Paragraph>
              <img src={dynamicProgramming1Img} alt="" />
              <img src={dynamicProgramming2Img} alt="" />
              <img src={dynamicProgramming3Img} alt="" />
              <img src={dynamicProgramming4Img} alt="" />
              <img src={dynamicProgramming5Img} alt="" />
              <img src={dynamicProgramming6Img} alt="" />
              <img src={dynamicProgramming7Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
