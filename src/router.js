import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Main from './routes/Main';
import Join from './routes/Join';
import NotFound from './routes/Exception/404';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/join" component={Join} />
        <Route path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
