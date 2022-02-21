import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react-pro';

import { AppSidebarNav } from './AppSidebarNav';

import Logo from 'src/assets/brand/logo.png';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-md-down-none" to="/" style={{ padding: 0, width: "auto",}}>
        <img src={Logo} width="50%" height="50%" alt="logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
