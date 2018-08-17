import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from './notice.less';

@connect(({ notice }) => ({ ...notice }))
class Notice extends PureComponent {
  render() {
    const { localization } = this.props;
    return <div className="wrapper">{localization['公告中心']}</div>;
  }
}

export default Notice;
