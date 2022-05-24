import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testInsertSort } from 'src/code/algorithms/sort';
import insertSortImg from 'src/public/insertSort.png';
import insertSortGif from 'src/public/insertSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testInsertSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="插入排序">
          <Typography>
            <Title level={3}>插入排序介绍</Title>
            <Paragraph>
              插入排序（Insertion Sorting）的基本思想是：把n个待排序的元素看成为一个有序表和一个无序表，
              开始时有序表中只包含一个元素，无序表中包含有n-1个元素，排序过程中每次从无序表中取出第一个元素，
              把它的排序码依次与有序表元素的排序码进行比较，将它插入到有序表中的适当位置，使之成为新的有序表。
            </Paragraph>
            <Title level={3}>插入排序图解</Title>
            <Paragraph>
              <img src={insertSortImg} alt="" />
            </Paragraph>
            <Title level={3}>选择排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={insertSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
