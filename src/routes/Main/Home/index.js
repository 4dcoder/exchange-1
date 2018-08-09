import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './home.less';

@connect(() => ({}))
class Home extends PureComponent {
  render() {
    return (
      <div className="content">
        这是首页
      </div>
    );
  }
}

export default Home;
