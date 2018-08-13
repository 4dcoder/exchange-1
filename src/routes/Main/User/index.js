import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Main from '../';
import styles from './user.less';

@connect(() => ({}))
class User extends PureComponent {
  render() {
    return (
      <Main>
        <div className="wrapper">这是用户页面</div>
      </Main>
    );
  }
}

export default User;
