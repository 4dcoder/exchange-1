import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import styles from './notice.less';

@connect(({ global }) => ({ ...global }))
class Notice extends PureComponent {
  render() {
    const { localization } = this.props;
    return (
      <DocumentTitle title={setTitle('公告中心')(localization)}>
        <div className="wrapper">这是公告中心</div>
      </DocumentTitle>
    );
  }
}

export default Notice;
