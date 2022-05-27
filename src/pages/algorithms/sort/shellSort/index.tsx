import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testShellSort } from 'src/code/algorithms/sort';
import shellSortImg1 from 'src/public/shellSort1.png';
import shellSortImg2 from 'src/public/shellSort2.png';
import shellSortGif from 'src/public/shellSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testShellSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="希尔排序">
          <Typography>
            <Title level={3}>希尔排序介绍</Title>
            <Paragraph>
              希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
              随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止
            </Paragraph>
            <Title level={3}>希尔排序图解</Title>
            <Paragraph>
              <img src={shellSortImg1} alt="" />
              <img src={shellSortImg2} alt="" />
            </Paragraph>
            <Title level={3}>希尔排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={shellSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
