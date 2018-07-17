import React from 'react';
import { Router, Route, Switch } from 'react-static';
import StaticRoutes from 'react-static-routes';

import createHistory from 'history/createBrowserHistory';
import Todo from '../todo';
import NotFound from '../containers/404';

let history = {};

if (typeof window !== 'undefined') {
  history = createHistory();

  window.hist = history;
}

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/todo" component={Todo} />
      <StaticRoutes />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
