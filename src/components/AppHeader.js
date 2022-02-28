import React, { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react-pro';
import CIcon from '@coreui/icons-react';
import { cilApplicationsSettings, cilMenu } from '@coreui/icons';

import { AppBreadcrumb } from './index';

import { logo } from 'src/assets/brand/logo';
import { Link } from 'react-router-dom';
import eventBus from 'src/utils/common/EventBus';
import { Logout } from 'src/services/auth.service';

const logoutStyles = {
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
};

const AppHeader = () => {
  const dispatch = useDispatch();
  const { sidebarShow } = useSelector((state) => state.changeState);
  const { asideShow } = useSelector((state) => state.changeState);

  const logOut = useCallback(() => {
    Logout();
    window.location.reload();
  }, [dispatch]);

  useEffect(() => {
    eventBus.on('logout', () => {
      logOut();
    });

    return () => {
      eventBus.remove('logout');
    };
  }, [logOut]);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderToggler className="px-md-0 me-md-3" onClick={() => dispatch({ type: 'set', asideShow: !asideShow })}>
          <CIcon icon={cilApplicationsSettings} size="lg" />
        </CHeaderToggler>
        <div className="mfe-2 c-subheader-nav">
          <Link style={logoutStyles} to="#" onClick={logOut}>
            Log out
          </Link>
        </div>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
