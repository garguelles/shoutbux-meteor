import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import components
import AppLayout from '../../ui/layouts/App';
import Help from '../../ui/pages/Help';
import Login from '../../ui/pages/auth/Login';
import AuthLayout from '../../ui/layouts/Auth';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={AppLayout}>
      <Route path='help' component={Help}></Route>
    </Route>
    <Route path='/auth' component={AuthLayout}>
      <Route path='login' component={Login}></Route>
    </Route>
  </Router>
);
