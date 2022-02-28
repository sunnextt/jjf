import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSidebar, CSidebarBrand } from '@coreui/react';
import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';
import { uiActions } from 'src/store/UI';
import { NavLink } from 'react-router-dom';
import Logo from 'src/assets/icons/TokenPicks/TokenpicksLogo.png';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.UI.sidebarShow);

  return (
    <CSidebar show={show} unfoldable onShowChange={() => dispatch(uiActions.toggleSidebarMobile())}>
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src={Logo} width="30%" alt="logo" />
      </CSidebarBrand>

      <nav
        style={{
          width: '100%',
        }}
      >
        <NavLink className="sidebarLink" to="/dashboard" activeClassName="activeSidebarLink">
          <CIcon className="linkIcon" name="cil-speedometer" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="sidebarLink" to="/allUsers" activeClassName="activeSidebarLink">
          <CIcon className="linkIcon" name="cil-user" />
          <span>Users</span>
        </NavLink>
        <NavLink className="sidebarLink" to="/learn" activeClassName="activeSidebarLink">
          <CIcon className="linkIcon" name="cil-user" />
          <span>Learn</span>
        </NavLink>

        <NavLink className="sidebarLink" to="/post" activeClassName="activeSidebarLink">
          <CIcon className="linkIcon" name="cil-user" />
          <span>Post</span>
        </NavLink>
        <NavLink className="sidebarLink" to="/coin" activeClassName="activeSidebarLink">
          <CIcon className="linkIcon" name="cil-user" />
          <span>Coin</span>
        </NavLink>
      </nav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
