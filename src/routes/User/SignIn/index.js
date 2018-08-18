import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

// import styles from './signin.less';

@connect(({ signin }) => ({ ...signin }))
class SignIn extends PureComponent {
  render() {
    const { localization } = this.props;
    return <Fragment>{localization['登录']}</Fragment>;
  }
}

export default SignIn;
