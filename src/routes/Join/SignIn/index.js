import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Join from '../';
import styles from './signin.less';

@connect(({ global }) => ({ global }))
class SignIn extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('登录')(localization)}>
        <Join>这是登录页面</Join>
      </DocumentTitle>
    );
  }
}

export default SignIn;
