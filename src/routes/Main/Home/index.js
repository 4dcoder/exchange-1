import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Main from '../';
import styles from './home.less';

@connect(() => ({}))
class Home extends PureComponent {
  render() {
    return (
      <Main>
        <div className="wrapper">这是首页</div>
      </Main>
    );
  }
}

export default Home;
