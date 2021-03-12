import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PageNotFound from './PageNotFound';
import { flattenRoutes } from './MainMenu';

const { Content } = Layout;

const routes = flattenRoutes();

export default function AppContent(): React.ReactElement {
  return (
    <Content style={{ margin: '0 16px' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Switch>
          {routes}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Content>
  );
}
