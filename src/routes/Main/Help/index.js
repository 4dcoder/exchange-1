import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import styles from './help.less';

@connect(({ global }) => ({ ...global }))
class Help extends PureComponent {
  render() {
    const { localization } = this.props;
    return (
      <DocumentTitle title={setTitle('帮助中心')(localization)}>
        <div className="wrapper">这是帮助中心</div>
      </DocumentTitle>
    );
  }
}

export default Help;
