import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import { testSparseArray } from 'src/code/dataStructures/sparseArray';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <Collapse defaultActiveKey={1}>
      <Collapse.Panel key={1} header="测试代码">
        <Button style={{ marginRight: 10 }} onClick={testSparseArray}>稀疏数组测试</Button>
      </Collapse.Panel>
      <Collapse.Panel key={2} header="稀疏数组介绍">
        <Typography>
          <Title level={3}>稀疏数组：sparseArray</Title>
          <Paragraph>
            当一个数组中大部分元素为０，或者为同一个值的数组时，可以使用稀疏数组来保存该数组。
          </Paragraph>
          <Title level={3}>稀疏数组的处理方法是:</Title>
          <Paragraph>
            <ul>
              <li>
                记录数组一共有几行几列，有多少个不同的值
              </li>
              <li>
                把具有不同值的元素的行列及值记录在一个小规模的数组中，从而缩小程序的规模
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Comp;
