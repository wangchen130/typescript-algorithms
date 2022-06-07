import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testRadixSort } from 'src/code/algorithms/sort';
import radixSort1Img from 'src/public/radixSort1.png';
import radixSort2Img from 'src/public/radixSort2.png';
import radixSort3Img from 'src/public/radixSort3.png';
import radixSortGif from 'src/public/radixSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testRadixSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="基数排序">
          <Typography>
            <Title level={3}>基数排序介绍</Title>
            <Paragraph>
              <ol>
                <li>
                  基数排序（radix sort）属于“分配式排序”（distribution sort），又称“桶子法”（bucket sort）或bin sort，
                  顾名思义，它是通过键值的各个位的值，将要排序的元素分配至某些“桶”中，达到排序的作用
                </li>
                <li>
                  基数排序法是属于稳定性的排序，基数排序法的是效率高的稳定性排序法
                </li>
                <li>
                  基数排序(Radix Sort)是桶排序的扩展
                </li>
                <li>
                  基数排序是1887年赫尔曼·何乐礼发明的。它是这样实现的：将整数按位数切割成不同的数字，然后按每个位数分别比较。
                </li>
              </ol>
            </Paragraph>
            <Title level={3}>基数排序基本思想</Title>
            <Paragraph>
              将所有待比较数值统一为同样的数位长度，数位较短的数前面补零。
              然后，从最低位开始，依次进行一次排序。
              这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。
            </Paragraph>
            <Title level={3}>基数排序图解</Title>
            <Paragraph>
              <img src={radixSort1Img} alt="" />
              <img src={radixSort2Img} alt="" />
              <img src={radixSort3Img} alt="" />
            </Paragraph>
            <Title level={3}>基数排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={radixSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
