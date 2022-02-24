import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const User = React.lazy(() => import('./views/user/User'));
const SingleUserDetails = React.lazy(() => import('./views/user/SingleUser'));
const Application = React.lazy(() => import('./views/application/Application'));
const PaymentLogs = React.lazy(() => import('./views/paymentLogs/PaymentLogs'));
const SingleApplication = React.lazy(() => import('./views/application/SingleApplication'));
const SinglePaymentLog = React.lazy(() => import('./views/paymentLogs/SinglePaymentLog'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/application', name: 'Application', component: Application, exact: true },
  { path: '/application/:id', name: 'Single Application', component: SingleApplication },

  { path: '/user', name: 'User', component: User, exact: true },
  { path: '/user/:id', name: 'Single User', component: SingleUserDetails },

  { path: '/payment-logs', name: 'Payment Logs', component: PaymentLogs, exact: true },
  { path: '/payment-logs/:id', name: 'Single Payment Log', component: SinglePaymentLog },
];

export default routes;
