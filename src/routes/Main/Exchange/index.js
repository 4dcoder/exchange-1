import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Main from '../';
import styles from './exchange.less';

@connect(() => ({}))
class Exchange extends PureComponent {
  render() {
    return <Main>这是币币交易</Main>;
  }
}

export default Exchange;
