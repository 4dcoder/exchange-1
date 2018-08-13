import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Main from '../';
import styles from './offline.less';

@connect(() => ({}))
class Offline extends PureComponent {
  render() {
    return (
      <Main>
        <div className="wrapper">这是C2C交易</div>
      </Main>
    );
  }
}

export default Offline;
