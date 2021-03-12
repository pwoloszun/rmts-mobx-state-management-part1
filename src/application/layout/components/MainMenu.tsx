import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu } from 'antd';

import appRoutes, { AppRoutesMap, AppRouteItem, RouteInfo } from 'src/application/layout/app-routes';

const { SubMenu } = Menu;

const routesForModule = (moduleRoutes: RouteInfo[]): JSX.Element[] => {
  return moduleRoutes.map(function (route) {
    return (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.main}
      />
    );
  });
};

export const flattenRoutes = () => {
  const moduleTitles = Object.keys(appRoutes);
  return moduleTitles.reduce(function (memo: any, title) {
    const routes = routesForModule(appRoutes[title].routes);
    return memo.concat(routes);
  }, []);
};


const renderDropDown = (title: string, { routes, icon }: AppRouteItem) => {
  const links = routes.map(function (route) {
    return (
      <Menu.Item key={route.path}>
        <Link to={route.path}>
          {route.label}
        </Link>
      </Menu.Item>
    );
  });

  return (
    <SubMenu key={title} title={title} icon={icon}>
      {links}
    </SubMenu>
  );
};

const renderDropDownsFor = (appRoutes: AppRoutesMap) => {
  const moduleTitles = Object.keys(appRoutes);
  return moduleTitles.map((title) => {
    return renderDropDown(title, appRoutes[title]);
  });
};


export default function MainMenu(): React.ReactElement {
  const dropDowns = renderDropDownsFor(appRoutes);
  return (
    <Menu theme="dark" defaultSelectedKeys={['/']} defaultOpenKeys={['React tasks']} mode="inline">
      {dropDowns}
    </Menu>
  );
}
