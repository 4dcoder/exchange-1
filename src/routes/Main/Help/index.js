import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import Main from '../';
import styles from './help.less';

@connect(({ global }) => ({ global }))
class Help extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('帮助中心')(localization)}>
        <Main>
          <div className="wrapper">这是帮助中心</div>
        </Main>
      </DocumentTitle>
    );
  }
}

export default Help;
