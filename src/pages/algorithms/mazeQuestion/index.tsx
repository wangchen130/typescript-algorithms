import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import solveMazeQuestionByRecursionImg from 'src/public/solveMazeQuestionByRecursion.png';
import { solveMazeQuestion } from 'src/code/algorithms/mazeQuestion';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  const test1 = () => {
    solveMazeQuestion(8, 7, [[3, 1], [3, 2]], 1, 1, 6, 5);
  };
  const test2 = () => {
    solveMazeQuestion(15, 15, [[5, 1], [5, 2], [5, 3], [5, 4], [4, 4], [3, 4], [2, 4], [5, 5], [5, 6], [5, 7]], 1, 1, 13, 13);
  };
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={test1}>8行7列迷宫</Button>
          <Button style={{ marginRight: 10 }} onClick={test2}>15行15列迷宫</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="迷宫问题">
          <Typography>
            <Title level={3}>迷宫问题介绍</Title>
            <Paragraph>
              <ol>
                <li>
                  从迷宫的左上角出发，绕开障碍，达到右下角，入下图所示。
                </li>
                <img src={solveMazeQuestionByRecursionImg} alt="" />
              </ol>
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
