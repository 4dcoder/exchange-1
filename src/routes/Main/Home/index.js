import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import styles from './home.less';

@connect(({ global, exchange }) => ({ ...global, ...exchange }))
class Home extends PureComponent {
  dispatch = this.props.dispatch;

  render() {
    const { localization } = this.props;
    return (
      <DocumentTitle title={setTitle('首页')(localization)}>
        <div className="wrapper">这是首页</div>
      </DocumentTitle>
    );
  }
}

export default Home;
