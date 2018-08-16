import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import styles from './signup.less';

@connect(({ global }) => ({ ...global }))
class SignUp extends PureComponent {
  render() {
    const { localization } = this.props;
    return <DocumentTitle title={setTitle('注册')(localization)}>这是注册页面</DocumentTitle>;
  }
}

export default SignUp;
