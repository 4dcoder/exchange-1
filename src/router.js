import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';
import { ScaleLoader } from 'react-spinners';

const asyncComponent = loader =>
  Loadable({
    loader,
    loading: () => (
      <div className="page-loading">
        <ScaleLoader color={'#d4a668'} height={100} width={5} margin="5px" radius={5} loading />
      </div>
    ),
    delay: 200
  });

const Home = asyncComponent(() => import('./routes/Main/Home'));
const Exchange = asyncComponent(() => import('./routes/Main/Exchange'));
const SignIn = asyncComponent(() => import('./routes/Join/SignIn'));
const SignUp = asyncComponent(() => import('./routes/Join/SignUp'));
const NotFound = asyncComponent(() => import('./routes/Exception/404'));

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exchange" exact component={Exchange} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
