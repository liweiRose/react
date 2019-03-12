import React from 'react';
import { Table } from 'antd';

// 荆州市集美热电有限责任公司辅机运行(汽轮机组运行记录2)
class page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        let height = document.body.clientHeight;
        const columns = [{
            title: '名称',
            dataIndex: 'project',
            key: 'project',
            width: 150,
        }, {
            title: '1#给水泵',
            dataIndex: '1#给水泵',
            key: '1#给水泵',
            width: 300,
            children: [{
                title: '出口压力',
                dataIndex: 'PT3301',
                key: 'PT3301',
                width: 150,
            }, {
                title: '电流',
                dataIndex: 'GSBYS1E',
                key: 'GSBYS1E',
                width: 150,
            }]
        },{
            title: '2#给水泵',
            dataIndex: '2#给水泵',
            key: '2#给水泵',
            width: 300,
            children: [{
                title: '出口压力',
                dataIndex: 'PT3401',
                key: 'PT3401',
                width: 150,
            }, {
                title: '电流',
                dataIndex: 'GSBYS2E',
                key: 'GSBYS2E',
                width: 150,
            }]
        },{
            title: '3#给水泵',
            dataIndex: '3#给水泵',
            key: '3#给水泵',
            width: 300,
            children: [{
                title: '出口压力',
                dataIndex: 'PT3501',
                key: 'PT3501',
                width: 150,
            }, {
                title: '电流',
                dataIndex: 'GSBYS3E',
                key: 'GSBYS3E',
                width: 150,
            }]
        }, {
            title: '给水母管压力',
            dataIndex: 'js',
            key: 'js',
            width: 150,
        },{
            title: '1#除氧器',
            dataIndex: '1#除氧器',
            key: '1#除氧器',
            width: 450,
            children: [{
                title: '水位',
                dataIndex: 'LT31011',
                key: 'LT31011',
                width: 150,
            }, {
                title: '压力',
                dataIndex: 'PT3101',
                key: 'PT3101',
                width: 150,
            },{
                title: '温度',
                dataIndex: 'TE3102',
                key: 'TE3102',
                width: 150,
            }]
        },{
            title: '2#除氧器',
            dataIndex: '2#除氧器',
            key: '2#除氧器',
            width: 450,
            children: [{
                title: '水位',
                dataIndex: 'LT32011',
                key: 'LT32011',
                width: 150,
            }, {
                title: '压力',
                dataIndex: 'PT3201',
                key: 'PT3201',
                width: 150,
            },{
                title: '温度',
                dataIndex: 'TE3202',
                key: 'TE3202',
                width: 150,
            }]
        },{
            title: '加热母管压力',
            dataIndex: 'PT3001',
            key: 'PT3001',
            width: 150,
        },{
            title: '1#循环泵',
            dataIndex: '1#循环泵',
            key: '1#循环泵',
            width: 300,
            children: [{
                title: '出口压力',
                dataIndex: 'PT6101A',
                key: 'PT6101A',
                width: 150,
            }, {
                title: '电流',
                dataIndex: 'XHBYS1E',
                key: 'XHBYS1E',
                width: 150,
            }]
        },{
            title: '2#循环泵',
            dataIndex: '2#循环泵',
            key: '2#循环泵',
            width: 300,
            children: [{
                title: '出口压力',
                dataIndex: 'ZT_2170',
                key: 'ZT_2170',
                width: 150,
            }, {
                title: '电流',
                dataIndex: 'XHBYS2E',
                key: 'XHBYS2E',
                width: 150,
            }]
        },{
            title: '3#循环泵',
            dataIndex: '3#循环泵',
            key: '3#循环泵',
            width: 300,
            children: [{
                title: '出口压力',
                dataIndex: 'PT6101B',
                key: 'PT6101B',
                width: 150,
            }, {
                title: '电流',
                dataIndex: 'XHBYS3E',
                key: 'XHBYS3E',
                width: 150,
            }]
        }, {
            title: '冷却塔风机',
            dataIndex: '冷却塔风机',
            key: '冷却塔风机',
            width: 450,
            children: [{
                title: '1#',
                dataIndex: '1#',
                key: '1#',
                width: 150,
                children: [{
                    title: '电流',
                    dataIndex: 'LQTYS1F',
                    key: 'LQTYS1F',
                    width: 150,
                },]
            }, {
                title: '2#',
                dataIndex: '2#',
                key: '2#',
                width: 150,
                children: [{
                    title: '电流',
                    dataIndex: 'LQTYS2F',
                    key: 'LQTYS2F',
                    width: 150,
                },]
            },{
                title: '3#',
                dataIndex: '3#',
                key: '3#',
                width: 150,
                children: [{
                    title: '电流',
                    dataIndex: 'LQTYS3F',
                    key: 'LQTYS3F',
                    width: 150,
                },]
            },]
        },{
            title: '减温减压',
            dataIndex: '减温减压',
            key: '减温减压',
            width: 600,
            children: [{
                title: '进汽压力',
                dataIndex: 'PT4101',
                key: 'PT4101',
                width: 150,
            }, {
                title: '出汽压力',
                dataIndex: 'PT4102',
                key: 'PT4102',
                width: 150,
            },{
                title: '进水压力',
                dataIndex: 'PT4104',
                key: 'PT4104',
                width: 150,
            }, {
                title: '出口温度',
                dataIndex: 'TE4102',
                key: 'TE4102',
                width: 150,
            }]
        },{
            title: '1#机高加',
            dataIndex: '1#机高加',
            key: '1#机高加',
            width: 750,
            children: [{
                title: '进水温度',
                dataIndex: 'jsw',
                key: 'jsw1',
                width: 150,
            }, {
                title: '出水温度',
                dataIndex: 'csw',
                key: 'csw1',
                width: 150,
            }, {
                title: '进汽温度',
                dataIndex: 'jqw',
                key: 'jqw1',
                width: 150,
            },{
                title: '进汽压力',
                dataIndex: 'jqy',
                key: 'jqy1',
                width: 150,
            }, {
                title: '液位',
                dataIndex: 'LIT3102',
                key: 'LIT3102',
                width: 150,
            }]
        },{
            title: '2#机高加',
            dataIndex: '2#机高加',
            key: '2#机高加',
            width: 750,
            children: [{
                title: '进水温度',
                dataIndex: 'jsw',
                key: 'jsw2',
                width: 150,
            }, {
                title: '出水温度',
                dataIndex: 'csw',
                key: 'csw2',
                width: 150,
            }, {
                title: '进汽温度',
                dataIndex: 'jqw',
                key: 'jqw2',
                width: 150,
            },{
                title: '进汽压力',
                dataIndex: 'jqy',
                key: 'jqy2',
                width: 150,
            }, {
                title: '液位',
                dataIndex: 'LIT3202',
                key: 'yw2',
                width: 150,
            }]
        },{
            title: '供热蒸汽',
            dataIndex: '供热蒸汽',
            key: '供热蒸汽',
            width: 450,
            children: [{
                title: '流量',
                dataIndex: 'FT4103',
                key: 'FT4103',
                width: 150,
            }, {
                title: '压力',
                dataIndex: 'PT4103',
                key: 'PT4103',
                width: 150,
            }, {
                title: '温度',
                dataIndex: 'TE4103',
                key: 'TE4103',
                width: 150,
            }]
        }, {
            title: '晚班',
            dataIndex: '晚班',
            key: '晚班',
            width: 300,
            children: [{
                title: '1:00-8:30',
                dataIndex: '值班人员1',
                key: '值班人员1',
                width: 300,
                render: (value, row, index) => {
                    const obj = {
                      children: value,
                      props: {},
                    };
                    if (index === 0) {
                      obj.props.rowSpan = 25;
                    }
                    if (index >= 1) {
                      obj.props.rowSpan = 0;
                    }
                    return obj;
                  },
            }]
        },
        {
            title: '早班',
            dataIndex: '早班',
            key: '早班',
            width: 300,
            children: [{
                title: '8:30-17:00',
                dataIndex: '值班人员2',
                key: '值班人员2',
                width: 300,
                render: (value, row, index) => {
                    const obj = {
                      children: value,
                      props: {},
                    };
                    if (index === 0) {
                      obj.props.rowSpan = 25;
                    }
                    if (index >= 1) {
                      obj.props.rowSpan = 0;
                    }
                    return obj;
                  },
            }]
        },
        {
            title: '白班',
            dataIndex: '16-24点值别',
            key: '16-24点值别',
            width: 300,
            children: [{
                title: '17:00-1:00',
                dataIndex: '值班人员3',
                key: '值班人员3',
                width: 300,
                render: (value, row, index) => {
                    const obj = {
                      children: value,
                      props: {},
                    };
                    if (index === 0) {
                      obj.props.rowSpan = 25;
                    }
                    if (index >= 1) {
                      obj.props.rowSpan = 0;
                    }
                    return obj;
                  },
            }]
        },
       ];
        const data = [{
            project: 'h',
            PT3301: 'MPa',
            GSBYS1E: 'A',
            PT3401: 'MPa',
            GSBYS2E: 'A',
            PT3501: 'MPa',
            GSBYS3E: 'A',
            js:'Mpa',
            LT31011: 'mm',
            PT3101: 'MPa',
            TE3102: '℃',
            LT32011: 'mm',
            PT3201: 'MPa',
            TE3202: '℃',
            PT3001:'MPa',
            PT6101A: 'MPa',
            XHBYS1E: 'A',
            ZT_2170: 'MPa',
            XHBYS2E: 'A',
            PT6101B: 'MPa',
            XHBYS3E: 'A',
            LQTYS1F: 'A',
            LQTYS2F: 'A',
            LQTYS3F: 'A',
            PT4101: 'MPa',
            PT4102: 'MPa',
            PT4104: 'MPa',
            TE4102: '℃',
            LIT3202:'mm',

            jsw: '℃',
            csw: '℃',
            jqw: 'Kpa',
            jqy: 'Kpa',
            LIT3102: 'mm',
            FT4103: 't/h',
            PT4103: 'MPa',
            TE4103: '℃',
        },
        {
            project: '01:00',
        },
        {
            project: '02:00',
        },
        {
            project: '03:00',
        },
        {
            project: '04:00',
        },
        {
            project: '05:00',
        },
        {
            project: '06:00',
        },
        {
            project: '07:00',
        },
        {
            project: '08:00',
        },
        {
            project: '09:00',
        },
        {
            project: '10:00',
        },
        {
            project: '11:00',
        },
        {
            project: '12:00',
        },
        {
            project: '13:00',
        },
        {
            project: '14:00',
        },
        {
            project: '15:00',
        },
        {
            project: '16:00',
        },
        {
            project: '17:00',
        },
        {
            project: '18:00',
        },
        {
            project: '19:00',
        },
        {
            project: '20:00',
        },
        {
            project: '21:00',
        },
        {
            project: '22:00',
        },
        {
            project: '23:00',
        },{
            project: '24:00',
        },
    ];

        return (
            <Table columns={columns} pagination={false} dataSource={data} scroll={{ x: 8000, y: height - 200 }} />
        );
    }
}

export default page;
