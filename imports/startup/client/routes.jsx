import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import components
import App from '../../ui/layouts/App';
import Help from '../../ui/pages/Help';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='help' component={Help}></Route>
    </Route>
  </Router>
);
