import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testKMPAlgorithm } from 'src/code/algorithms/kmpAlgorithm/testKMPAlgorithm';
import kmpAlgorithm1Img from 'src/public/kmp/kmpAlgorithm1.png';
import kmpAlgorithm2Img from 'src/public/kmp/kmpAlgorithm2.png';
import kmpAlgorithm3Img from 'src/public/kmp/kmpAlgorithm3.png';
import kmpAlgorithm4Img from 'src/public/kmp/kmpAlgorithm4.png';
import kmpAlgorithm5Img from 'src/public/kmp/kmpAlgorithm5.png';
import kmpAlgorithm6Img from 'src/public/kmp/kmpAlgorithm6.png';
import kmpAlgorithm7Img from 'src/public/kmp/kmpAlgorithm7.png';
import kmpAlgorithm8Img from 'src/public/kmp/kmpAlgorithm8.png';
import kmpAlgorithm9Img from 'src/public/kmp/kmpAlgorithm9.png';
import kmpAlgorithm10Img from 'src/public/kmp/kmpAlgorithm10.png';
import kmpAlgorithm11Img from 'src/public/kmp/kmpAlgorithm11.png';
import kmpAlgorithm12Img from 'src/public/kmp/kmpAlgorithm12.png';
import kmpAlgorithm13Img from 'src/public/kmp/kmpAlgorithm13.png';
import kmpAlgorithm14Img from 'src/public/kmp/kmpAlgorithm14.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testKMPAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="KMP算法介绍">
          <Typography>
            <Title level={3}>KMP算法：KMPAlgorithm</Title>
            <Paragraph>
              <img src={kmpAlgorithm1Img} alt="" />
              <img src={kmpAlgorithm2Img} alt="" />
              <img src={kmpAlgorithm3Img} alt="" />
              <img src={kmpAlgorithm4Img} alt="" />
              <img src={kmpAlgorithm5Img} alt="" />
              <img src={kmpAlgorithm6Img} alt="" />
              <img src={kmpAlgorithm7Img} alt="" />
              <img src={kmpAlgorithm8Img} alt="" />
              <img src={kmpAlgorithm9Img} alt="" />
              <img src={kmpAlgorithm10Img} alt="" />
              <img src={kmpAlgorithm11Img} alt="" />
              <img src={kmpAlgorithm12Img} alt="" />
              <img src={kmpAlgorithm13Img} alt="" />
              <img src={kmpAlgorithm14Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
