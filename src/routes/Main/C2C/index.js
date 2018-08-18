import React, { PureComponent } from 'react';
import { connect } from 'dva';

// import styles from './c2c.less';

@connect(({ c2c }) => ({ ...c2c }))
class C2C extends PureComponent {
  render() {
    const { localization } = this.props;
    return <div className="wrapper">{localization['C2C交易']}</div>;
  }
}

export default C2C;
