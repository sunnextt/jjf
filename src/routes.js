import React from 'react'

// examples
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const User = React.lazy(() => import('./views/user/User'))
const Application = React.lazy(() => import('./views/application/Application'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/application', name: 'Application', component: Application },
  { path: '/user', name: 'User', component: User },
];

export default routes
