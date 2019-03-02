
import { hashHistory } from "dva/router";
import React from 'react'

class UIMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };

  }
    componentDidMount() {
    window.pathSimplifierIns=[];
    this.props.lines&&this.props.lines.length>0&&this.loadUI();
    }
    shouldComponentUpdate(nextProps){
        if(!(nextProps.lines===this.props.lines)){
            return true
        }else{
            return false
        }
    }
    componentDidUpdate(){
        if (window.pathSimplifierIns) {
            //通过该方法清空上次传入的轨迹
            window.pathSimplifierIns.forEach((pathSimplifierIns)=>{
                pathSimplifierIns.setData([]);
            })
        }
        window.pathSimplifierIns=[];
        this.props.lines&&this.props.lines.length>0&&this.loadUI();
    }

    pathClick = (lineId,lineName) => {
        sessionStorage.setItem("DividLineId", JSON.stringify(lineId));
        sessionStorage.setItem("DividLineName", JSON.stringify(lineName));
        hashHistory.push({
            pathname: '/tandem',
            
        })
    }

    loadUI() {
        const lines = this.props.lines;
        window.AMapUI.loadUI(['misc/PathSimplifier'], (PathSimplifier) => {
            const map = this.props.__map__;
            lines.map((item,index)=>{
                let color = this.RGBToHex(item.color);
                let pathSimplifierIns = new PathSimplifier({
                    zIndex: 100,
                    autoSetFitView:false,//不影响center，zoom
                    map: map, //所属的地图实例
                    getPath: function(pathData, pathIndex) {
                        return pathData.path;
                    },
                    //路线hover显示内容
                    getHoverTitle: function(pathData, pathIndex, pointIndex) {
                        return null;
                    },
                    renderOptions: {
                        pathLineStyle: {
                            lineWidth: 6,
                            //strokeStyle: item.color,
                            strokeStyle: color,
                            borderWidth: 1,
                            // borderStyle: item.color,
                            borderStyle: color,
                            dirArrowStyle: true
                        },
                        pathLineHoverStyle: {
                            lineWidth: 6,
                            // strokeStyle: item.color,
                            strokeStyle: color,
                            borderWidth: 1,
                            // borderStyle: item.color,
                            borderStyle: color,
                            dirArrowStyle: true
                        },
                        pathLineSelectedStyle: {
                            lineWidth: 6,
                            // strokeStyle: item.color,
                            strokeStyle: color,
                            borderWidth: 1,
                            // borderStyle: item.color,
                            borderStyle: color,
                            dirArrowStyle: true
                        },
                        dirArrowStyle: {
                            stepSpace: 35,
                            strokeStyle: '#ffffff',
                            lineWidth: 2
                        },
                        pathNavigatorStyle: {
                            initRotateDegree: 0,
                            width: 16,
                            height: 16,
                            autoRotate: true,
                            lineJoin: 'round',
                            content: 'defaultPathNavigator',
                            fillStyle: 'rgb(62,246,255)',
                            strokeStyle: 'rgb(62,246,255)', //'#eeeeee',
                            lineWidth: 1,
                            pathLinePassedStyle: {
                                lineWidth: 6,
                                // strokeStyle: item.color,
                                strokeStyle: color,
                                borderWidth: 1,
                                // borderStyle: item.color,
                                borderStyle: color,
                                dirArrowStyle: true
                            }
                        },
                        renderAllPointsIfNumberBelow: -1 //绘制路线节点，如不需要可设置为-1
                    }
                });
                window.pathSimplifierIns.push(pathSimplifierIns);

                //设置数据
                pathSimplifierIns.setData([
                {
                    name: '路线0',
                    path: item.path
                },
                ]);
                //对第一条线路（即索引 0）创建一个巡航器
                var navg = pathSimplifierIns.createPathNavigator(0, {
                    loop: true, //循环播放
                    speed: 3000 //巡航速度，单位千米/小时
                });
                navg.start();
                pathSimplifierIns.on('pathClick', this.pathClick.bind(this,item.monitorTypeId,item.monitorTypeName));
                return false;
            })
    });
    // window.AMapUI.loadUI(['misc/PathSimplifier'], (PathSimplifier) => {
    // const map = this.props.__map__;

    // })
  }
  //颜色rgb转换成十进制
  RGBToHex=(rgb)=>{
    let regexp = /[0-9]{0,3}/g;
    let re = rgb.match(regexp);//利用正则表达式去掉多余的部分，将rgb中的数字提取
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let data = "#";
    for (let i = 0; i < re.length; i++) {
      let c = re[i];
      let a = null;
      let b = null;
      let list = [];
      if(c){
        let t = parseInt(c,10);
        if(t>10){
          a = t % 16;
          b = parseInt(t / 16,10);
          list.push(hex[b]);
          list.push(hex[a])
        }else {
          list.push(0);
          list.push(hex[t]);
        }
      }
      else {
      }
      // while (c > 16){
      //   r = c % 16;
      //   c = (c / 16) >> 0;
      //   hexAr.push(hex[r]);
      // } hexAr.push(hex[c]);
      // if(c < 16&&c != ""){
      //   hexAr.push(0)
      // }

      //hexColor += hexAr.reverse().join('');
      data += list.join('');
    }
    //alert(hexColor)
     return data;
    //return hexColor
  }
  render() {
    return <div></div>;
  }
}

export default UIMarker;
