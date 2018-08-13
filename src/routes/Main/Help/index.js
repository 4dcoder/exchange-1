import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Main from '../';
import styles from './help.less';

@connect(() => ({}))
class Help extends PureComponent {
  render() {
    return (
      <Main>
        <div className="wrapper">这是帮助中心</div>
      </Main>
    );
  }
}

export default Help;
