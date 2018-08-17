import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

import styles from './signup.less';

@connect(({ signup }) => ({ ...signup }))
class SignUp extends PureComponent {
  render() {
    const { localization } = this.props;
    return <Fragment>{localization['注册']}</Fragment>;
  }
}

export default SignUp;
