import {
  SettingOutlined,
} from '@ant-design/icons';

import reactRoutes from './sections/react-routes';

export interface RouteInfo {
  path: string;
  label: string;
  main: React.FC;
  exact?: boolean;
}

export interface AppRouteItem {
  routes: RouteInfo[];
  icon: any;
}

export interface AppRoutesMap {
  [title: string]: AppRouteItem;
}

const appRoutes: AppRoutesMap = {
  'React tasks': { routes: reactRoutes, icon: <SettingOutlined /> },
};

export default appRoutes;
