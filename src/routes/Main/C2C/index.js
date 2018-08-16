import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import styles from './c2c.less';

@connect(({ global }) => ({ ...global }))
class C2C extends PureComponent {
  render() {
    const { localization } = this.props;
    return (
      <DocumentTitle title={setTitle('C2C交易')(localization)}>
        <div className="wrapper">这是C2C交易</div>
      </DocumentTitle>
    );
  }
}

export default C2C;
