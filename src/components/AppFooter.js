import React from "react";
import { CFooter } from '@coreui/react-pro';

const AppFooter = () => {
  return (
    <CFooter fixed={false}>
      <div></div>
      <div className="mfs-auto"></div>
    </CFooter>
  );
};

export default React.memo(AppFooter)
