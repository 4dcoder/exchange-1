import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './exchange.less';

@connect(({ global }) => ({ global }))
class Exchange extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('币币交易')(localization)}>
        <Main>
          <div className="wrapper">这是币币交易</div>
        </Main>
      </DocumentTitle>
    );
  }
}

export default Exchange;
