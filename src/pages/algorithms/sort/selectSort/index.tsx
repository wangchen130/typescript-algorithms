import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testSelectSort } from 'src/code/algorithms/sort';
import selectSortImg from 'src/public/selectSort.png';
import selectSortGif from 'src/public/selectSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testSelectSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="选择排序">
          <Typography>
            <Title level={3}>选择排序介绍</Title>
            <Paragraph>
              选择排序（select sorting）是一种简单的排序方法。
              它的基本思想是：第一次从arr[0]~arr[n-1]中选取最小值，与arr[0]交换，
              第二次从arr[1]~arr[n-1]中选取最小值，与arr[1]交换，
              第三次从arr[2]~arr[n-1]中选取最小值，与arr[2]交换，
              …，
              第i次从arr[i-1]~arr[n-1]中选取最小值，与arr[i-1]交换，
              …,
              第n-1次从arr[n-2]~arr[n-1]中选取最小值， 与arr[n-2]交换，
              总共通过n-1次，得到一个按排序码从小到大排列的有序序列。
            </Paragraph>
            <Title level={3}>选择排序图解</Title>
            <Paragraph>
              <img src={selectSortImg} alt="" />
            </Paragraph>
            <Title level={3}>选择排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={selectSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
