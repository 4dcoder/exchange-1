import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Join from '../';
import styles from './signin.less';

@connect(() => ({}))
class SignIn extends PureComponent {
  render() {
    return <Join>这是登录页面</Join>;
  }
}

export default SignIn;
