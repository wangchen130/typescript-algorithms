import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testFibSearch } from 'src/code/algorithms/search';
import fibonacciSearchDiagramImg from 'src/public/fibonacciSearchDiagram.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testFibSearch}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="斐波那契(黄金分割法)查找算法">
          <Typography>
            <Title level={3}>斐波那契(黄金分割法)查找基本介绍</Title>
            <Paragraph>
              <ol>
                <li>
                  黄金分割点是指把一条线段分割为两部分，使其中一部分与全长之比等于另一部分与这部分之比。
                  取其前三位数字的近似值是0.618。由于按此比例设计的造型十分美丽，因此称为黄金分割，也称为中外比。
                </li>
                <li>
                  {'斐波那契数列 {1, 1, 2, 3, 5, 8, 13, 21, 34, 55 } 发现斐波那契数列的两个相邻数 的比例，无限接近 黄金分割值0.618'}
                </li>
              </ol>
            </Paragraph>
            <Title level={3}>斐波那契(黄金分割法)原理</Title>
            <Paragraph>
              <img src={fibonacciSearchDiagramImg} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
