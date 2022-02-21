import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSpinner } from '@coreui/react-pro';
import './scss/style.scss';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const Login = React.lazy(() => import('./views/AuthPage/login/Login'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
