import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Join from '../';
import styles from './signup.less';

@connect(({ global }) => ({ global }))
class SignUp extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('注册')(localization)}>
        <Join>这是注册页面</Join>
      </DocumentTitle>
    );
  }
}

export default SignUp;
