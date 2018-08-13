import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './offline.less';

@connect(({ global }) => ({ global }))
class Offline extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('C2C交易')(localization)}>
        <Main>
          <div className="wrapper">这是C2C交易</div>
        </Main>
      </DocumentTitle>
    );
  }
}

export default Offline;
