import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Incident = React.lazy(() => import('./views/Incident'));
const Closure = React.lazy(() => import('./views/Closure/Closure'));
const UserManagement = React.lazy(() => import('./views/UserManagement/UserManagement'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/incident', name: 'Incident', component: Incident },
  { path: '/closure', name: 'Closure', component: Closure },
  { path: '/usermanagement', name: 'User Management', component: UserManagement },
];

export default routes;
