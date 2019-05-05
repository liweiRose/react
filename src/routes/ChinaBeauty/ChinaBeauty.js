import React,{ Component } from 'react';
import style from './ChinaBeauty.less';
import Util from '../../utils/Util';
import { Table, Modal, Tooltip } from 'antd';

class page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns : [
        {
          title: '序号',
          width: 80,
          dataIndex: 'num',
          key: 'num',
          align: 'center',
        },
        {
          title: '设备名称',
          dataIndex: 'deviceName',
          key: 'deviceName',
          align: 'center',
        },
        {
          title: '设备类型',
          dataIndex: 'deviceTypeName',
          key: 'deviceTypeName',
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'caozuo',
          key: 'caozuo',
          align: 'center',
          render: (text, record) => (
                  <span key={record.useId}>
                      <Tooltip placement="top" title={'编辑'}>
                          <i className='iconfont icon-bianji' style={{color:'#FF9A49', paddingRight:'6px',cursor:'pointer'}} onClick={() => { this.editUser(record); }}></i>
                      </Tooltip>
                      <span style={{borderLeft:'1px solid #1D2A2F',display:'inline-block',height:'11px',}}></span>
                      <Tooltip placement="top" title={'删除'}>
                          <i className='iconfont icon-del' style={{color:'#F58989',paddingLeft:'8px',cursor:'pointer',position: 'relative',bottom:'2px'}} onClick={() => { this.delect(record); }}></i>
                      </Tooltip>
                  </span>
          ),
        }],
      ProjectDeviceList: [],//表格数据
    };
  }

  componentDidMount () {
    this.getProjectDeviceList();
  }

  // 获取表格数据
  getProjectDeviceList = (params) => {
    const data = {
      "rowCount": 3,
      "items": [{
        "projectId": null,
        "deviceId": 125,
        "deviceName": "监测1",
        "deviceTypeId": 1,
        "deviceTypeName": "监测仪",
        "deviceCode": null
      }, {
        "projectId": null,
        "deviceId": 126,
        "deviceName": "工控1",
        "deviceTypeId": 2,
        "deviceTypeName": "工控机",
        "deviceCode": null
      }, {
        "projectId": null,
        "deviceId": 148,
        "deviceName": "qwe",
        "deviceTypeId": 1,
        "deviceTypeName": "监测仪",
        "deviceCode": null
      }]
    };
    this.setState({ ProjectDeviceList: Util.transformArrayData(data.items, true, false, 1, 10), total: data.rowCount });
  }

  // 表格行编辑功能
  editUser = (record) => {
    const t = this;
    console.log('1111')
    // request.get(`/rd/device/getDeviceDetail?deviceId=${record.deviceId}&deviceType=${record.deviceTypeId}`).then((res) => {
    //     if (!res.data.err) {
    //         if(record.deviceTypeId==1){
    //             const obj = Object.assign({},res.data.ret);
    //             obj.deviceTypeId=''+record.deviceTypeId;
    //             this.setState({isEdit:true});
    //             t.chooseInput(String(record.deviceTypeId),obj);
    //         }else{
    //             const arr= res.data.ret;
    //             this.setState({isEdit:true});
    //             t.chooseInput(String(record.deviceTypeId),arr);
    //         }
    //     }else{
    //         message.error(res.data.err);
    //     }
    // });
  }

  // 表格行删除
  delect = (record) => {
    console.log('222')
    // const delectId = parseInt(record.deviceId, 10);
    // const { current } = this.state;
    // const arr = [delectId];
    // request.post('/rd/device/deleteDevice', arr).then((res) => {
    //     if (!res.data.err) {
    //         message.error('删除成功！');
    //         this.getProjectDeviceList(current);
    //     }
    // });
  }

  render() {
    const { columns, ProjectDeviceList } = this.state;
    return (
      <div>
        <Table
            columns={columns}
            rowKey="deviceId"
            dataSource={ProjectDeviceList}
            pagination={false}
        />
      </div>
    );
  }
}

export default page;
