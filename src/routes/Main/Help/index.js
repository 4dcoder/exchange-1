import React, { PureComponent } from 'react';
import { connect } from 'dva';

// import styles from './help.less';

@connect(({ help }) => ({ ...help }))
class Help extends PureComponent {
  render() {
    const { localization } = this.props;
    return <div className="wrapper">{localization['帮助中心']}</div>;
  }
}

export default Help;
