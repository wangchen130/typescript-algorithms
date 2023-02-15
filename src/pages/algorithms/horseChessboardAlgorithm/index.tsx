import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testHorseChessboardAlgorithm } from 'src/code/algorithms/horseChessboardAlgorithm/testHorseChessboardAlgorithm';
import horseChessboard1Img from 'src/public/horse/horseChessboard1.png';
import horseChessboard2Img from 'src/public/horse/horseChessboard2.png';
import horseChessboard3Img from 'src/public/horse/horseChessboard3.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={[1, 2]}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testHorseChessboardAlgorithm}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="马踏棋盘算法介绍">
          <Typography>
            <Title level={3}>马踏棋盘</Title>
            <Paragraph>
              <img src={horseChessboard1Img} alt="" />
              <img src={horseChessboard2Img} alt="" />
              <img src={horseChessboard3Img} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
