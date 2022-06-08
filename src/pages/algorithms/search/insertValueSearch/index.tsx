import React from 'react';
import { Typography, Button, Collapse } from 'antd';
import { testInsertValueSearch } from 'src/code/algorithms/search/insertValueSearch';
import insertValueSearchPrincipleIntroductionImg from 'src/public/insertValueSearchPrincipleIntroduction.png';
import insertValueSearchExampleImg from 'src/public/insertValueSearchExample.png';

const { Title, Paragraph } = Typography;

const Comp: React.FC = () => {
  return (
    <>
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel key={1} header="测试代码">
          <Button style={{ marginRight: 10 }} onClick={testInsertValueSearch}>运行</Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="插值查找">
          <Typography>
            <Title level={3}>插值查找介绍</Title>
            <Paragraph>
              <img src={insertValueSearchPrincipleIntroductionImg} alt="" />
              <img src={insertValueSearchExampleImg} alt="" />
            </Paragraph>
            <Title level={3}>插值查找注意事项</Title>
            <Paragraph>
              <ol>
                <li>对于数据量较大，关键字分布比较均匀的查找表来说，采用插值查找, 速度较快</li>
                <li>关键字分布不均匀的情况下，该方法不一定比二分查找要好</li>
              </ol>
            </Paragraph>
          </Typography>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default Comp;
