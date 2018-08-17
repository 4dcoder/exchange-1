import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from './exchange.less';

@connect(({ exchange }) => ({ ...exchange }))
class Exchange extends PureComponent {
  render() {
    const { localization } = this.props;
    return <div className="wrapper">{localization['币币交易']}</div>;
  }
}

export default Exchange;
