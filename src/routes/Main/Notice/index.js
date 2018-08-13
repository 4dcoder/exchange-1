import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Main from '../';
import styles from './notice.less';

@connect(() => ({}))
class Notice extends PureComponent {
  render() {
    return (
      <Main>
        <div className="wrapper">这是公告中心</div>
      </Main>
    );
  }
}

export default Notice;
