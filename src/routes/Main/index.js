import React, { PureComponent, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'dva';
import { Menu, Dropdown, Icon, Button } from 'antd';
import { getFlag } from 'utils';

import styles from './main.less';
import logo from '../../../logo.svg';
import mobile from 'assets/images/footer-mobile.png';
import qrcode from 'assets/images/wechat-code.jpg';

@connect(({ global }) => ({ ...global }))
class Main extends PureComponent {
  dispatch = this.props.dispatch;

  handleSwitchLanguage = ({ key }) => {
    this.dispatch({
      type: 'global/switchLanguage',
      payload: { language: key }
    });
  };

  render() {
    const { language, localization } = this.props;

    return (
      <Fragment>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <Link to="/" className={styles.headerLogo}>
              <img src={logo} alt="digital currency exchange" />
            </Link>
            <nav className={styles.headerNav}>
              <NavLink activeClassName={styles.active} to="/exchange">
                {localization['币币交易']}
              </NavLink>
              <NavLink activeClassName={styles.active} to="/c2c">
                {localization['C2C交易']}
              </NavLink>
              <NavLink activeClassName={styles.active} to="/help">
                {localization['帮助中心']}
              </NavLink>
              <NavLink activeClassName={styles.active} to="/notice">
                {localization['公告中心']}
              </NavLink>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <Link className={styles.signin} to="/signin">
              {localization['登录']}
            </Link>
            <Link className={styles.signup} to="/signup">
              {localization['注册']}
            </Link>
            <Dropdown
              overlay={
                <Menu onClick={this.handleSwitchLanguage}>
                  <Menu.Item key="zh_CN">{getFlag('zh_CN')}</Menu.Item>
                  <Menu.Item key="en_US">{getFlag('en_US')}</Menu.Item>
                </Menu>
              }
            >
              <span className={('ant-dropdown-link', styles.language)}>
                {getFlag(language)}
                <Icon type="down" />
              </span>
            </Dropdown>
          </div>
        </header>

        <main className={styles.main}>{this.props.children}</main>

        <footer className={styles.footer}>
          <div className={styles.floorOne}>
            <div className="wrapper">
              <div className={styles.downApp}>
                <img className={styles.mobile} src={mobile} alt="app" />
                <div className={styles.qrcode}>
                  <img src={qrcode} alt="qrcode" />
                </div>
                <div className={styles.link}>
                  <Button href="#" size="large" icon="apple">
                    &nbsp;&nbsp;IPhone APP
                  </Button>
                  <Button href="#" size="large" icon="android">
                    Android APP
                  </Button>
                </div>
              </div>
              <div className={styles.footerLogo}>
                <img src={logo} alt="digital currency exchange" />
                <div className={styles.slogan}>{localization['全球专业数字资产交易所']}</div>
              </div>
            </div>
          </div>
          <div className={styles.floorTwo}>
            <nav className="wrapper">
              <Link to="/about">{localization['关于我们']}</Link>
              <Link to="/apply">{localization['上币申请']}</Link>
              <Link to="/terms">{localization['用户协议']}</Link>
              <Link to="/privacy">{localization['隐私声明']}</Link>
              <Link to="/legal">{localization['法律声明']}</Link>
              <Link to="/help">{localization['帮助中心']}</Link>
              <Link to="/faq">{localization['常见问题']}</Link>
            </nav>
          </div>
          <div className={styles.floorThree}>
            <div className="wrapper">
              <div className={styles.copyright}>Copyright 2018 UES. All Right Reserved.</div>
              <div className={styles.socialMedia}>
                <Link to="/exchange">
                  <Icon type="wechat" />
                </Link>
                <Link to="/exchange">
                  <Icon type="facebook" />
                </Link>
                <Link to="/exchange">
                  <Icon type="weibo" />
                </Link>
                <Link to="/exchange">
                  <Icon type="qq" />
                </Link>
                <Link to="/exchange">
                  <Icon type="twitter" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Main;
