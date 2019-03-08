import React from 'react';
import {fabric} from 'fabric'

class page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number:  0,
    };
  }
  componentDidMount (){
    let canvas =new fabric.Canvas('main', {
      selection: false,
          });

    let rect =new fabric.Rect({
      left:100,//距离画布左侧的距离，单位是像素
      top:100,//距离画布上边的距离 
      fill:'red',//填充的颜色
      width:100,//方形的宽度
      height:100//方形的高度
   });
   canvas.add(rect);

  // var c=document.getElementById("main");
  // var ctx=c.getContext("2d");
  // ctx.fillStyle="#0000ff"; 
  // ctx.fillRect(20,20,150,100);
  }
  render() {
    
    return (
      <div style={{background:'#a9a99f',display:'inline-block'}}>
        <canvas id="main" width="1000" height="600"></canvas>
      </div>
    );
  }
}

export default page;
