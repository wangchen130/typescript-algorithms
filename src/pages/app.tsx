import { Layout } from 'antd';
import { useLocation } from 'dva';
import React from 'react';
import { Header, Sider } from 'src/components/layout';

interface AppType {
  children?: React.ReactNode;
}

const App: React.FC<AppType & any> = ({
  children
}) => {
  const location = useLocation();
  const { pathname } = location;

  const siderProps = {
    pathname,
  };

  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Header pathname={pathname} />
        <Layout>
          <Sider {...siderProps} />
          <Layout>
            <Layout.Content style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '1' }}>{ children }</div>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
