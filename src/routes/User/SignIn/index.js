import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import styles from './signin.less';

@connect(({ global }) => ({ ...global }))
class SignIn extends PureComponent {
  render() {
    const { localization } = this.props;
    return <DocumentTitle title={setTitle('登录')(localization)}>这是登录页面</DocumentTitle>;
  }
}

export default SignIn;
