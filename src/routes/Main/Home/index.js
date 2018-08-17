import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from './home.less';

@connect(({ exchange }) => ({ ...exchange }))
class Home extends PureComponent {
  dispatch = this.props.dispatch;

  render() {
    const { localization } = this.props;
    return <div className="wrapper">{localization['首页']}</div>;
  }
}

export default Home;
