import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Join from '../';
import styles from './signup.less';

@connect(() => ({}))
class SignUp extends PureComponent {
  render() {
    return <Join>这是注册页面</Join>;
  }
}

export default SignUp;
