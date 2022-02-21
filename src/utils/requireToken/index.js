import React from 'react';
import useQuery from 'utilities/useQuery';
const { useLocation, Navigate } = require('react-router-dom');

function RequireToken({ children }) {
  let query = useQuery();

  let location = useLocation();
  const token = query.get('token');

  console.log(token);

  if (!token) {

    return <Navigate to="/forgotpassword" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireToken;
