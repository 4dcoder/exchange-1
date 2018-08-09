import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './exchange.less';


@connect(() => ({}))
class Exchange extends PureComponent {
  render() {
    return (
      <div className="content">
        这是币币交易
      </div>
    );
  }
}

export default Exchange;
