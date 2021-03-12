import React from 'react';
import { Layout } from 'antd';

import AppSider from './components/AppSider';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';

export default function AppLayout(): React.ReactElement {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout className="site-layout">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
}
