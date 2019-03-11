import React from 'react';
import FreeScrollBar from 'react-free-scrollbar';
import style from './IEcompatible.less';
import Util from '../../utils/util2';

 
class page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount (){
    Util.html2image(0,'box','LIWEI.png');
  }
  render() {
  
    return (
      <div id={'box'} className={style.box}>
      <ul>
          <li>object.assign方法兼容性问题:安装插件babel-polyfill将es6转为es5</li>
          <li>采用hack方法定义IE版本css样式：\0-\8-\9...</li>
          <li>采用多媒体查询定义IE版本css样式：@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)</li>
      </ul>
          <div style={{width: '300px', height: '100px',color:'#fff',background:'#000'}}>
              <FreeScrollBar>
                  <h1>The title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicin orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicing elit
                  orem ipsum dolor sit amet, consectetur adipisicinisicing elit
                  
                  </p>
              </FreeScrollBar>
          </div>
      </div>
    );
  }
}

export default page;
