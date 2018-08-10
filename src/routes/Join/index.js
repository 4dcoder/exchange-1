import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown, Icon } from 'antd';
import { getFlag } from 'utils';
import { connect } from 'dva';
import styles from './join.less';

@connect(({ global }) => ({ global }))
class Join extends PureComponent {
  handleSwitchLanguage = ({ key }) => {
    localStorage.setItem('lang', key);

    const { dispatch } = this.props;
    dispatch({
      type: 'global/switchLanguage',
      payload: {
        lang: key,
        language: require(`languages/${key}`).default
      }
    });
  };
  render() {
    const { global } = this.props;
    const { lang, language } = global;

    return (
      <Fragment>
        <Link to="/signin">{language['登录']}</Link>
        <Link to="/signup">{language['注册']}</Link>
        <Dropdown
          overlay={
            <Menu onClick={this.handleSwitchLanguage}>
              <Menu.Item key="en_US">{getFlag('en_US')}</Menu.Item>
              <Menu.Item key="zh_CN">{getFlag('zh_CN')}</Menu.Item>
            </Menu>
          }
        >
          <a className={('ant-dropdown-link', styles.language)} href="javascript:;">
            {getFlag(lang)}
            <Icon type="down" />
          </a>
        </Dropdown>
        <Button onClick={() => this.props.history.push('/')}>{language['返回首页']}</Button>
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default withRouter(Join);
