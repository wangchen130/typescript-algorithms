import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testBubbleSort } from 'src/code/algorithms/sort';
import bubbleSortImg from 'src/public/bubbleSort.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testBubbleSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="冒泡排序">
          <Typography>
            <Title level={3}>冒泡排序介绍</Title>
            <Paragraph>
              冒泡排序（Bubble Sorting）的基本思想是：从前向后（从下标较小的元素开始）,
              依次比较相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就象水底下的气泡一样逐渐 向上冒。
              若要降序排序，则发现顺序则交换，是较小的值往后移。
            </Paragraph>
            <Title level={3}>冒泡排序图解</Title>
            <Paragraph>
              <img src={bubbleSortImg} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
