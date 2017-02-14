import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import NotFoundComponent from './modules/NotFound';

const Root = () =>
  <div>
    <h1 className="RootTitle">
      Welcome to my-react-app
    </h1>
  </div>;

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Root} />
    </Route>

    { /* 404 Route */ }
    <Route path="/404" component={NotFoundComponent} />
    <Redirect from="*" to="/404" />
  </Router>;

export default Routes;
