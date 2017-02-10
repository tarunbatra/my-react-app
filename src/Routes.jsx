import React from 'react';
import { Router, Route, IndexRoute, Link, Redirect, browserHistory } from 'react-router';

import NotFoundComponent from 'modules/NotFound/index.jsx';

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1 className = "RootTitle">
          Welcome to my-react-app
        </h1>
      </div>
    );
  }
};

class Routes extends React.Component {
  render() {
    return (
      <Router history = { browserHistory }>
        <Route path = '/'>
          <IndexRoute component={ Root } />
        </Route>

        { /* 404 Route */ }
        <Route path = '/404' component = { NotFoundComponent } />
        <Redirect from='*' to='/404' />
      </Router>
    )
  }
}

export default Routes;
