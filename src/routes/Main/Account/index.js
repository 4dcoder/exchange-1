import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from './account.less';

@connect(({ account }) => ({ ...account }))
class Account extends PureComponent {
  render() {
    const { localization } = this.props;
    return <div className="wrapper">{localization['个人中心']}</div>;
  }
}

export default Account;
