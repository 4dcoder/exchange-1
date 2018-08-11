import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown, Icon } from 'antd';
import { getFlag } from 'utils';
import { connect } from 'dva';
import styles from './join.less';

@connect(({ global }) => ({ global }))
class Join extends PureComponent {
  dispatch = this.props.dispatch;

  handleSwitchLanguage = ({ key }) => {
    this.dispatch({
      type: 'global/switchLanguage',
      payload: { language: key }
    });
  };

  render() {
    const { global } = this.props;
    const { language, localization } = global;

    return (
      <div className={styles.joinWrap}>
        <Link to="/signin">{localization['登录']}</Link>
        <Link to="/signup">{localization['注册']}</Link>
        <Dropdown
          overlay={
            <Menu onClick={this.handleSwitchLanguage}>
              <Menu.Item key="en_US">{getFlag('en_US')}</Menu.Item>
              <Menu.Item key="zh_CN">{getFlag('zh_CN')}</Menu.Item>
            </Menu>
          }
        >
          <a className={('ant-dropdown-link', styles.language)} href="javascript:;">
            {getFlag(language)}
            <Icon type="down" />
          </a>
        </Dropdown>
        <Button onClick={() => this.props.history.push('/')}>{localization['返回首页']}</Button>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default withRouter(Join);
