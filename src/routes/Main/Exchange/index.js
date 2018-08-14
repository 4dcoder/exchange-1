import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './exchange.less';

@connect(({ global, exchange }) => ({ ...global, ...exchange }))
class Exchange extends PureComponent {
  render() {
    const { localization } = this.props;
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
