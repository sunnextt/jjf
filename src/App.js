import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSpinner } from '@coreui/react-pro';
import './scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouter from './routers/privateRouter';
import { useDispatch } from 'react-redux';
import { fetchAllApplications, fetchAllPaymentLogs, fetchAllUser } from './store/Data/data-actions';
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const Login = React.lazy(() => import('./views/AuthPage/login/Login'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUser());
    dispatch(fetchAllApplications());
    dispatch(fetchAllPaymentLogs());
  }, [dispatch]);

  return (
    <HashRouter>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <PrivateRouter path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default App;
