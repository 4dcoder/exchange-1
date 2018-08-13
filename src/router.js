import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';
import { ScaleLoader } from 'react-spinners';

function RouterConfig({ history, app }) {
  // 异步加载组件
  const asyncComponent = (loader, models) => {
    return Loadable({
      loader,
      delay: 200,
      loading: () => {
        if (models && models.length > 0) {
          models.forEach(model => {
            const isModelExist = app._models.some(({ namespace }) => namespace === model);
            if (!isModelExist) {
              app.model(require(`models/${model}`).default);
            }
          });
        }
        return (
          <div className="page-loading">
            <ScaleLoader color={'#d4a668'} height={100} width={5} margin="5px" radius={5} loading />
          </div>
        );
      }
    });
  };

  const Home = asyncComponent(() => import('./routes/Main/Home'), ['exchange']);
  const Exchange = asyncComponent(() => import('./routes/Main/Exchange'), ['exchange']);
  const C2C = asyncComponent(() => import('./routes/Main/C2C'), ['c2c']);
  const Help = asyncComponent(() => import('./routes/Main/Help'), ['help']);
  const Notice = asyncComponent(() => import('./routes/Main/Notice'), ['notice']);
  const User = asyncComponent(() => import('./routes/Main/User'), ['user']);
  const SignIn = asyncComponent(() => import('./routes/Join/SignIn'));
  const SignUp = asyncComponent(() => import('./routes/Join/SignUp'), ['signup']);
  const Reset = asyncComponent(() => import('./routes/Join/Reset'));
  const NotFound = asyncComponent(() => import('./routes/Exception/404'));

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exchange" exact component={Exchange} />
        <Route path="/c2c" exact component={C2C} />
        <Route path="/help" exact component={Help} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/user" exact component={User} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/reset" exact component={Reset} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
