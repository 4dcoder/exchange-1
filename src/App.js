import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Route } from 'dva/router';
import Loadable from 'react-loadable';
import { ScaleLoader } from 'react-spinners';
import Main from 'routes/Main';
import User from 'routes/User';
import DocumentTitle from 'react-document-title';

@connect(({ global }) => ({ ...global }))
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
      Component: this.asyncComponent(() => import('routes/Main/Home'), ['exchange'])
    },
    '/exchange': {
      title: '币币交易',
      Component: this.asyncComponent(() => import('routes/Main/Exchange'), ['exchange'])
    },
    '/c2c': {
      title: 'C2C交易',
      Component: this.asyncComponent(() => import('routes/Main/C2C'), ['c2c'])
    },
    '/help': {
      title: '帮助中心',
      Component: this.asyncComponent(() => import('routes/Main/Help'), ['help'])
    },
    '/notice': {
      title: '公告中心',
      Component: this.asyncComponent(() => import('routes/Main/Notice'), ['notice'])
    },
    '/account': {
      title: '个人中心',
      Component: this.asyncComponent(() => import('routes/Main/Account'), ['account'])
    },
    '/signin': {
      title: '登录',
      Component: this.asyncComponent(() => import('routes/User/SignIn'))
    },
    '/signup': {
      title: '注册',
      Component: this.asyncComponent(() => import('routes/User/SignUp'), ['signup'])
    },
    '/reset': {
      title: '找回密码',
      Component: this.asyncComponent(() => import('routes/User/Reset'))
    },
    '/404': {
      title: '未找到页面',
      Component: this.asyncComponent(() => import('routes/Exception/404'))
    }
  };

  getTitle = () => {
    const siteTitle = '区块链资产交易平台';
    const { location, localization } = this.props;
    const { pathname } = location;
    const { title } = this.routerConf[pathname] || this.routerConf['/404'];

    return `${localization[title]}-${localization[siteTitle]}`;
  };

  render() {
    const { pathname } = this.props.location;
    const UserPaths = ['/signin', '/signup', '/reset'];
    const Container = this.routerConf[pathname]
      ? UserPaths.indexOf(pathname) > -1
        ? User
        : Main
      : Fragment;
    const { Component } = this.routerConf[pathname] || this.routerConf['/404'];

    return (
      <DocumentTitle title={this.getTitle()}>
        <Container>
          <Route path={pathname} render={props => <Component {...this.props} {...props} />} />
        </Container>
      </DocumentTitle>
    );
  }
}

export default App;
