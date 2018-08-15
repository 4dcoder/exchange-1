import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './account.less';

@connect(({ global }) => ({ ...global }))
class Account extends PureComponent {
  render() {
    const { localization } = this.props;
    return (
      <DocumentTitle title={setTitle('用户中心')(localization)}>
        <Main>
          <div className="wrapper">这是用户页面</div>
        </Main>
      </DocumentTitle>
    );
  }
}

export default Account;
