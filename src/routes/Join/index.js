import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import styles from './join.less';

@connect(() => ({}))
class Join extends PureComponent {
  render() {
    const {match} = this.props;
    return (
      <Fragment>
        <Link to={`${match.path}/signin`}>登陆</Link>
        <Link to={`${match.path}/signup`}>注册</Link>
      </Fragment>
    );
  }
}

export default Join;
