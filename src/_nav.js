import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilUserPlus, cilApplications } from '@coreui/icons';
import { CNavItem } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/user',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Application',
    to: '/application',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payment Logs',
    to: '/payment-logs',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
  },
];

export default _nav
