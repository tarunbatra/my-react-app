import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import RootComponent from './modules/Root';
import NotFoundComponent from './modules/NotFound';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={RootComponent} />
    </Route>

    { /* 404 Route */ }
    <Route path="/404" component={NotFoundComponent} />
    <Redirect from="*" to="/404" />
  </Router>;

export default Routes;
