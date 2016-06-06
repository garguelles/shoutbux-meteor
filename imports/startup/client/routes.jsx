import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Meteor } from 'meteor/meteor';

// import components
import AppLayout from '../../ui/layouts/App';
import Help from '../../ui/pages/Help';
import Login from '../../ui/pages/auth/Login';
import Signup from '../../ui/pages/auth/Signup';
import AuthLayout from '../../ui/layouts/Auth';
import Profile from '../../ui/pages/Profile';

// check if user is logged-in
function requireAuthentication(nextState, replace) {
  let user = Meteor.user();
  if (!user) {
    replace({
      pathName: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={AuthLayout}>
      <IndexRoute component={Login} />
      <Route path='signup' component={Signup}></Route>
    </Route>
    <Route path='/app' component={AppLayout}>
      <Route path='profile' component={Profile} onEnter={requireAuthentication}></Route>
    </Route>
  </Router>
);
