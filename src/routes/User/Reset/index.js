import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

// import styles from './reset.less';

@connect(({ reset }) => ({ ...reset }))
class Reset extends PureComponent {
  render() {
    const { localization } = this.props;
    return <Fragment>{localization['找回密码']}</Fragment>;
  }
}

export default Reset;
