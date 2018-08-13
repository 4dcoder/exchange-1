import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Join from '../';
import styles from './reset.less';

@connect(({ global }) => ({ ...global }))
class Reset extends PureComponent {
  render() {
    const { localization } = this.props;
    return (
      <DocumentTitle title={setTitle('找回密码')(localization)}>
        <Join>这是找回密码页面</Join>
      </DocumentTitle>
    );
  }
}

export default Reset;
