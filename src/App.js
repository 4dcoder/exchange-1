import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Route } from 'dva/router';
import Loadable from 'react-loadable';
import { ScaleLoader } from 'react-spinners';
import DocumentTitle from 'react-document-title';
import pathToRegexp from 'path-to-regexp';

import Main from 'routes/Main';
import User from 'routes/User';

@connect(({ global }) => ({ global }))
class App extends React.Component {
  asyncComponent = (loader, models) => {
    const { app } = this.props;
    return Loadable({
      delay: 200,
      loader,
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

  routerConf = {
    '/': {
      title: '首页',
      containers: [Main],
      component: this.asyncComponent(() => import('routes/Main/Home'), ['exchange'])
    },
    '/exchange': {
      title: '币币交易',
      containers: [Main],
      component: this.asyncComponent(() => import('routes/Main/Exchange'), ['exchange'])
    },
    '/c2c': {
      title: 'C2C交易',
      containers: [Main],
      component: this.asyncComponent(() => import('routes/Main/C2C'), ['c2c'])
    },
    '/help': {
      title: '帮助中心',
      containers: [Main],
      component: this.asyncComponent(() => import('routes/Main/Help'), ['help'])
    },
    '/notice': {
      title: '公告中心',
      containers: [Main],
      component: this.asyncComponent(() => import('routes/Main/Notice'), ['notice'])
    },
    '/account': {
      title: '个人中心',
      containers: [Main],
      component: this.asyncComponent(() => import('routes/Main/Account'), ['account'])
    },
    '/signin': {
      title: '登录',
      containers: [User],
      component: this.asyncComponent(() => import('routes/User/SignIn'))
    },
    '/signup': {
      title: '注册',
      containers: [User],
      component: this.asyncComponent(() => import('routes/User/SignUp'), ['signup'])
    },
    '/reset': {
      title: '找回密码',
      containers: [User],
      component: this.asyncComponent(() => import('routes/User/Reset'))
    },
    '/404': {
      title: '未找到页面',
      component: this.asyncComponent(() => import('routes/Exception/404'))
    }
  };

  matchRoute = () => {
    const { location, global } = this.props;
    const { pathname } = location;
    const { localization } = global;

    let route = this.routerConf['/404'];
    if (this.routerConf[pathname]) {
      route = this.routerConf[pathname];
    } else {
      Object.keys(this.routerConf).forEach(path => {
        if (pathToRegexp(path).test(pathname)) {
          route = this.routerConf[path];
        }
      });
    }

    return {
      Component: route.component,
      title: `${localization[route.title]}-${localization['区块链资产交易平台']}`,
      Container: route.containers
        ? route.containers.reduce((A, B) => {
            return React.createElement(A, null, B);
          })
        : Fragment
    };
  };

  render() {
    const { global, location } = this.props;
    const { pathname } = location;
    const { title, Container, Component } = this.matchRoute();

    return (
      <DocumentTitle title={title}>
        <Container {...global}>
          <Route path={pathname} render={props => <Component {...props} {...global} />} />
        </Container>
      </DocumentTitle>
    );
  }
}

export default App;
