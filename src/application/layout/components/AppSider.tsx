import React, { useState, useCallback } from 'react';
import { Layout } from 'antd';

import MainMenu from './MainMenu';

const { Sider } = Layout;

export default function AppSider(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapseHandler = useCallback((nextCollapsed: boolean) => {
    setCollapsed(nextCollapsed);
  }, [setCollapsed]);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapseHandler} width={240}>
      <MainMenu />
    </ Sider>
  );
}
