import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { uiActions } from 'src/store/UI';

// routes config
import routes from '../routes';
import { Link } from 'react-router-dom';
import { Logout } from 'src/services/auth.service';
import Logo from 'src/assets/images/Logo';

const TheHeader = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    // const val = [true, "responsive"].includes(sidebarShow)
    //   ? false
    //   : "responsive";
    // dispatch({ type: "set", sidebarShow: val });
    dispatch(uiActions.toggleSidebar());
  };

  const toggleSidebarMobile = () => {
    // const val = [false, "responsive"].includes(sidebarShow)
    //   ? true
    //   : "responsive";
    // dispatch({ type: "set", sidebarShow: val });
    dispatch(uiActions.toggleSidebarMobile());
  };

  const logoutHandler = () => {
    Logout();
  };

  return (
    <CHeader withSubheader>
      <CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} />
      <CToggler inHeader className="ml-3 d-md-down-none" onClick={toggleSidebar} />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* <img src={Logo} alt="fix234 logo" style={{ height: "35px" }} /> */}
        <Logo />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="">
        <CToggler
          inHeader
          className=" c-d-legacy-none"
          onClick={() => dispatch(uiActions.toggleMode())}
          title="Toggle Light/Dark Mode"
        >
          <CIcon name="cil-moon" className="c-d-dark-none" alt="CoreUI Icons Moon" />
          <CIcon name="cil-sun" className="c-d-default-none" alt="CoreUI Icons Sun" />
        </CToggler>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter className="border-0 c-subheader-nav m-0 px-0 px-md-3" routes={routes} />
        <div className="mfe-2 c-subheader-nav">
          <Link className="c-subheader-nav-link" to="#" onClick={logoutHandler}>
            <CIcon name="cil-account-logout" alt="log out" />
            &nbsp;Log out
          </Link>
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
