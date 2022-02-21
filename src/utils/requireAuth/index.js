import React from 'react';
import { useSelector } from 'react-redux';

const { useLocation, Navigate } = require('react-router-dom');

function RequireAuth({ children }) {
  const { user: currentUser } = useSelector(state => state.auth);

  let location = useLocation();
  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
