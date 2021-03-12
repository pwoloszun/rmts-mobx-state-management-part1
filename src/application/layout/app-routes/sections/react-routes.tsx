import React from 'react';

import Dashboard from 'src/application/dashboard/DashboardPage';
import SharedCounterPage from 'src/application/03-react-context/SharedCounterPage';
import SharedTodosPage from 'src/application/03-react-context/SharedTodosPage';
import SharedRealEstatesPage from 'src/application/03-react-context/SharedRealEstatesPage';

const reactRoutes = [
  {
    path: "/",
    exact: true,
    label: 'Dashboard',
    main: () => <Dashboard />
  },
  {
    path: "/shared-counter",
    label: 'Shared Counter',
    main: () => <SharedCounterPage />
  },
  {
    path: "/shared-todos",
    label: 'Shared Todos',
    main: () => <SharedTodosPage />
  },
  {
    path: "/shared-real-estates",
    label: 'Shared Real Estates',
    main: () => <SharedRealEstatesPage />
  },
];

export default reactRoutes;
