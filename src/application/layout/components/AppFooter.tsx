import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function AppFooter(): React.ReactElement {
  return (
    <Footer style={{ textAlign: 'center' }}>©Copyright Piotr Woloszun</Footer>
  );
}
