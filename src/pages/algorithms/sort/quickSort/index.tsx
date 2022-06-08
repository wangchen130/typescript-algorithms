import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testQuickSort } from 'src/code/algorithms/sort';
import quickSortImg from 'src/public/quickSort.jpg';
import quickSortGif from 'src/public/quickSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testQuickSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="快速排序">
          <Typography>
            <Title level={3}>快速排序介绍</Title>
            <Paragraph>
              快速排序（Quicksort）是对冒泡排序的一种改进。
              基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，
              然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列
            </Paragraph>
            <Title level={3}>快速排序图解</Title>
            <Paragraph>
              <img src={quickSortImg} alt="" />
            </Paragraph>
            <Title level={3}>快速排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={quickSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
