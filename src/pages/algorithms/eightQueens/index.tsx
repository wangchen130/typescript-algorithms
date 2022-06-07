import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { solveEightQueensQuestion } from 'src/code/algorithms/eightQueens';
import eightQueensQuestionIntroduceImg from 'src/public/eightQueensQuestionIntroduce.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={() => solveEightQueensQuestion(8)}>八皇后</Button>
          <Button style={{ marginRight: 10 }} onClick={() => solveEightQueensQuestion(10)}>十皇后</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="八皇后问题">
          <Typography>
            <Title level={3}>八皇后问题介绍</Title>
            <Paragraph>
              <img width="100%" src={eightQueensQuestionIntroduceImg} alt="" />
            </Paragraph>
            <Title level={3}>八皇后问题算法思路分析</Title>
            <Paragraph>
              <ol>
                <li>
                  第一个皇后先放第一行第一列
                </li>
                <li>
                  第二个皇后放在第二行第一列、然后判断是否OK， 如果不OK，继续放在第二列、第三列、依次把所有列都放完，找到一个合适
                </li>
                <li>
                  继续第三个皇后，还是第一列、第二列……直到第8个皇后也能放在一个不冲突的位置，算是找到了一个正确解
                </li>
                <li>
                  当得到一个正确解时，在栈回退到上一个栈时，就会开始回溯，即将第一个皇后，放到第一列的所有正确解，全部得到.
                </li>
                <li>
                  然后回头继续第一个皇后放第二列，后面继续循环执行 1,2,3,4的步骤
                </li>
                <span>
                  说明：理论上应该创建一个二维数组来表示棋盘，但实际上可以通过算法，用一个一维数组即可解决问题。 arr = [0, 4, 7, 5, 2, 6, 1, 3]
                  则对应 arr 下标 表示第几行，即第几个皇后。例如：arr[i] = val , val 表示第i+1个皇后，放在第 i+1 行的第 val+1 列
                </span>
              </ol>
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
