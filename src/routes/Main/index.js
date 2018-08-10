import React, { PureComponent, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'dva';
import { Menu, Dropdown, Icon } from 'antd';
import { getFlag } from 'utils';

import styles from './main.less';
import logo from '../../../logo.svg';

@connect(({ global }) => ({ global }))
class Main extends PureComponent {
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
        <header className={styles.header}>
          <div className="wrapper">
            <div className={styles.headerLeft}>
              <Link to="/" className={styles.headerLogo}>
                <img src={logo} alt="digital currency exchange" />
              </Link>
              <nav className={styles.headerNav}>
                <NavLink activeClassName={styles.active} to="/exchange">
                  {language['币币交易']}
                </NavLink>
                <NavLink activeClassName={styles.active} to="/offline">
                  {language['C2C交易']}
                </NavLink>
                <NavLink activeClassName={styles.active} to="/help">
                  {language['帮助中心']}
                </NavLink>
                <NavLink activeClassName={styles.active} to="/notice">
                  {language['公告中心']}
                </NavLink>
              </nav>
            </div>
            <div className={styles.headerRight}>
              <Link className={styles.signin} to="/signin">
                {language['登录']}
              </Link>
              <Link className={styles.signup} to="/signup">
                {language['注册']}
              </Link>
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
            </div>
          </div>
        </header>

        <main className={styles.main}>{this.props.children}</main>

        <footer className={styles.footer}>这是底部</footer>
      </Fragment>
    );
  }
}

export default Main;
