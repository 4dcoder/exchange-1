import React, { PureComponent } from 'react';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { setTitle } from 'utils';
import { Button } from 'antd';
import styles from './404.less';

@connect(({ global }) => ({ global }))
class NotFound extends PureComponent {
  render() {
    const { global } = this.props;
    const { localization } = global;
    return (
      <DocumentTitle title={setTitle('未找到页面')(localization)}>
        <div className={styles.wrap}>
          <h2>404</h2>
          <h3>抱歉，你访问的页面不存在</h3>
          <Button type="primary" onClick={() => this.props.history.push('/')}>
            返回首页
          </Button>
        </div>
      </DocumentTitle>
    );
  }
}

export default NotFound;
