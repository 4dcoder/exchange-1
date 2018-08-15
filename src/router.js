import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';
import { ScaleLoader } from 'react-spinners';

function RouterConfig({ history, app }) {
  // 异步加载component以及model
  const asyncComponent = (path, models) => {
    return Loadable({
      delay: 200,
      loader: () => import(`./routes${path}`),
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

  const Home = asyncComponent('/Main/Home', ['exchange']);
  const Exchange = asyncComponent('/Main/Exchange', ['exchange']);
  const C2C = asyncComponent('/Main/C2C', ['c2c']);
  const Help = asyncComponent('/Main/Help', ['help']);
  const Notice = asyncComponent('/Main/Notice', ['notice']);
  const Account = asyncComponent('/Main/Account', ['account']);
  const SignIn = asyncComponent('/User/SignIn');
  const SignUp = asyncComponent('/User/SignUp', ['signup']);
  const Reset = asyncComponent('/User/Reset');
  const NotFound = asyncComponent('/Exception/404');

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exchange" exact component={Exchange} />
        <Route path="/c2c" exact component={C2C} />
        <Route path="/help" exact component={Help} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/account" exact component={Account} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/reset" exact component={Reset} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
