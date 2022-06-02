import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testMergeSort } from 'src/code/algorithms/sort';
import mergeSort1Img from 'src/public/mergeSort1.png';
import mergeSort2Img from 'src/public/mergeSort2.png';
import mergeSortGif from 'src/public/mergeSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testMergeSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="归并排序">
          <Typography>
            <Title level={3}>归并排序介绍</Title>
            <Paragraph>
              归并排序（MERGE-SORT）是利用归并的思想实现的排序方法。
              该算法采用经典的分治（divide-and-conquer）策略（分治法将问题分(divide)成一些小的问题然后递归求解。
              而治 (conquer) 的阶段则将分的阶段得到的各答案 （修补） 在一起，即分而治之。
            </Paragraph>
            <Title level={3}>归并排序图解</Title>
            <Paragraph>
              <img src={mergeSort1Img} alt="" />
              <img src={mergeSort2Img} alt="" />
            </Paragraph>
            <Title level={3}>归并排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={mergeSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
