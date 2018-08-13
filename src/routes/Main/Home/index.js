import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './home.less';

@connect(({ global }) => ({ global }))
class Home extends PureComponent {
  dispatch = this.props.dispatch;

  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('首页')(localization)}>
        <Main>
          <div className="wrapper">这是首页</div>
        </Main>
      </DocumentTitle>
    );
  }
}

export default Home;
