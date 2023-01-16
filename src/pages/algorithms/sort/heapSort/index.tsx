import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testHeapSort } from 'src/code/algorithms/sort';
import heapSortImg1 from 'src/public/heapSort1.png';
import heapSortImg2 from 'src/public/heapSort2.png';
import heapSortImg3 from 'src/public/heapSort3.png';
import heapSortDiagram1Img from 'src/public/heapSortDiagram1.png';
import heapSortDiagram2Img from 'src/public/heapSortDiagram2.png';
import heapSortDiagram3Img from 'src/public/heapSortDiagram3.png';
import heapSortDiagram4Img from 'src/public/heapSortDiagram4.png';
import heapSortDiagram5Img from 'src/public/heapSortDiagram5.png';
import heapSortDiagram6Img from 'src/public/heapSortDiagram6.png';
import heapSortDiagram7Img from 'src/public/heapSortDiagram7.png';
import heapSortDiagram8Img from 'src/public/heapSortDiagram8.png';
import heapSortDiagram9Img from 'src/public/heapSortDiagram9.png';
import heapSortGif from 'src/public/heapSort.gif';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testHeapSort}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="堆排序">
          <Typography>
            <Title level={3}>堆排序介绍</Title>
            <Paragraph>
              <img src={heapSortImg1} alt="" />
              <img src={heapSortImg2} alt="" />
              <img src={heapSortImg3} alt="" />
            </Paragraph>
            <Title level={3}>堆排序图解</Title>
            <Paragraph>
              <img src={heapSortDiagram1Img} alt="" />
              <img src={heapSortDiagram2Img} alt="" />
              <img src={heapSortDiagram3Img} alt="" />
              <img src={heapSortDiagram4Img} alt="" />
              <img src={heapSortDiagram5Img} alt="" />
              <img src={heapSortDiagram6Img} alt="" />
              <img src={heapSortDiagram7Img} alt="" />
              <img src={heapSortDiagram8Img} alt="" />
              <img src={heapSortDiagram9Img} alt="" />
            </Paragraph>
            <Title level={3}>堆排序动图解析</Title>
            <Paragraph>
              <img width="100%" src={heapSortGif} alt="" />
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
