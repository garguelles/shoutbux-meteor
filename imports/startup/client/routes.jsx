import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// import components
import AppLayout from '../../ui/layouts/App';
import Help from '../../ui/pages/Help';
import Login from '../../ui/pages/auth/Login';
import Signup from '../../ui/pages/auth/Signup';
import AuthLayout from '../../ui/layouts/Auth';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={AuthLayout}>
      <IndexRoute component={Login} />
      <Route path='signup' component={Signup}></Route>
    </Route>
    <Route path='/app' component={AppLayout}>
      <Route path=':username' component={Help}></Route>
    </Route>
  </Router>
);
