import React from 'react';
import { Link } from 'dva/router';
import style from './IndexPage.less';

 
class DynamicFieldSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number:  0,
    };
  }
  render() {
  
    return (
      <div className={style.box}>
          <div className={style.header}>
            <h1>
              <span>v</span>
              <span>R</span>
              <span>o</span>
              <span>s</span>
              <span>e</span>  
            </h1>
            <h1 className={style.overlay}>
              <span>v</span>
              <span>R</span>
              <span>o</span>
              <span>s</span>
              <span>e</span>  
            </h1>
          </div>
          <div className={style.list}>
            <ul>
              <li><Link to={'formdamo'}>表单组件（动态增删文件）</Link></li>
              <li><Link to={'drawcanvas'}>Canvas组件库Fabric的使用</Link></li>
              <li><Link to={'mapline'}>使用react-amap画一条线</Link></li>
              <li><Link to={'speech'}>语音识别</Link></li>
              <li><Link to={'chinabeauty'}>排行榜</Link></li>
            </ul>
          </div>
          
      </div>
    );
  }
}

export default DynamicFieldSet;
