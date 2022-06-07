import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testBinarySearch } from 'src/code/algorithms/search/binarySearch';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testBinarySearch}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="二分查找">
          <Typography>
            <Title level={3}>二分查找的思路分析</Title>
            <Paragraph>
              <ol>
                <li>
                  首先确定该数组的中间的下标，即 mid = (left + right) / 2
                </li>
                <li>
                  然后让需要查找的数 findVal 和 arr[mid] 比较
                </li>
                <li>
                  {'findVal > arr[mid]，说明要查找的数在mid 的右边, 因此需要递归的向右查找'}
                </li>
                <li>
                  {'findVal < arr[mid], 说明要查找的数在mid 的左边, 因此需要递归的向左查找'}
                </li>
                <li>
                  findVal == arr[mid] 说明找到，就返回
                </li>
              </ol>
              <Title level={3}>注意：什么时候结束递归？</Title>
              <ol>
                <li>找到值就结束递归</li>
                <li>{'递归完整个数组，仍然没有找到findVal ，也需要结束递归  当 left > right 就需要退出'}</li>
              </ol>
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
