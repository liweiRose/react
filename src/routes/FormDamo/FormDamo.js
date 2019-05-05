import React,{ Component } from 'react';
import Util from '../../utils/Util';
import styles from './FormDamo.less';
import { Form, Row, Col,Input, Button, Modal, Select, InputNumber, Icon,message } from 'antd';
const FormItem = Form.Item;
const inputSize = 12;
class FormDamo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalItems:[
        {
          sub:[
            {
              disabled: false,
              initialValue: "",
              label: "设备名称",
              paramName: "deviceName",
              required: true,
              size: null,
              type: "input"
            },
            {
              type: 'select',
              label: '设备类型',
              paramName: 'deviceTypeId',
              size: null,
              options: [
                  {
                      text: '监测仪', value: 1,
                  },
                  {
                      text: '工控仪', value: 2,
                  },
              ],
              disabled: false,
              initialValue: '',
            },
            {
                type: 'input',
                label: '设备编码',
                paramName: 'deviceCode',
                formLayout: {
                    labelCol: { span: 5 },
                    wrapperCol: { span: 19 },
                },
                inputSize: 24,
                required: true,
                disabled: false,
            },
            {
              type:'array',
              list:[
                {
                  instrumentName: 'sf',
                  type: 'sfsd',
                  communicationCode: 'fdf',
                  power: 'sdf',
                  flow:'',
                  yc: 'sdf',
                  yxtime: 'asd',
                  guzhang: 'sf',
                  yunxing: 'sfs',
              }
            ]
          }
        ]
        }
      ],
      uuid:1
    };
  }

  componentDidMount () {
  }
  add = () => {
    const { modalItems, uuid } = this.state;
    const {form} =this.props;
    const obj = {
        name: 'sf',
        type: 'sfsd',
        code: 'fdf',
        power: 'sdf',
        flow:'',
        yc: 'sdf',
        yxtime: 'asd',
        guzhang: 'sf',
        yunxing: 'sfs',
    };
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(keys.length);
    this.setState({uuid:this.state.uuid+1});
    form.setFieldsValue({
        keys: nextKeys,
    });
    modalItems[0].sub[3].list.push(obj);
    this.setState({ modalItems });
}
  remove = (k) => {
    const { modalItems } = this.state;
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
        return;
    }
    form.setFieldsValue({
        keys: keys.filter(key => key !== k),
    });
    modalItems[0].sub[3].list.splice(k, 1);
    this.setState({ modalItems });
}
  render() {
    const { modalItems } = this.state;
        const { form } = this.props;
        const t = this;
        const { getFieldDecorator,getFieldValue } = form;
        const formItemLayout = {
            labelCol: { span: 10 },
            wrapperCol: { span: 14 },
        };
        if(modalItems[0].sub[3].type=="array"){
            const arr = [];
            modalItems[0].sub[3].list.map((value,j)=>{
                arr.push(j);
            });
            getFieldDecorator('keys', { initialValue: arr });
        }else{
            getFieldDecorator('keys', { initialValue: [0] });
        }
        const keys = getFieldValue('keys');
    const formItems=modalItems.map((item, index) => {
      if (item.sub) {
          return (
              <div className={styles.formBox} key={String(index)}>
                  <Form name="from2" key={String(index) + 1} layout="inline">
                      <Row style={{margin:'0px 8px'}} gutter={24}>
                          {
                              item.sub.map((item2, index2) => {
                                  if (item2.type === 'input') {
                                      const formLayout = item2.formLayout || formItemLayout;
                                      return (
                                          <Col span={item2.inputSize || inputSize} style={{padding:'4px 0px'}} key={String(index2)}>
                                              <FormItem
                                                  {...formLayout}
                                                  label={item2.label&&item2.label.length<4?(<span style={{fontSize:'14px'}}>{item2.label.substring(0,1)}&emsp;&emsp;{item2.label.substring(1,2)}</span>):(<span style={{fontSize:'14px'}}>{item2.label}</span>)}
                                                  key={String(index2)}
                                                  style={{ width: '100%' }}
                                              >
                                                  {
                                                      getFieldDecorator(item2.paramName, {
                                                          initialValue: item2.initialValue || '',
                                                          // initialValue: item2.options[0] ? Util.numToString(item2.options[0].value) : item2.options[0],
                                                          rules: [{
                                                              required: item2.required || false,
                                                              message: item2.message ? item2.message : `请输入${item2.label}`,
                                                              pattern: item2.pattern,
                                                          }],

                                                      })(
                                                          <Input size='small' key={String(index2)} onChange={item2.onChange} disabled={item2.disabled || false} type={item2.inputType ? item2.inputType : null} maxLength={20} />,
                                                      )
                                                  }
                                                  {/* {item2.endLabel && <span className="endLabel">{item2.endLabel}</span>} */}
                                                  {item2.endLabel && <Icon onClick={this.MapClick} style={{ position: 'absolute', top: '0px', fontSize: '20px', color: '#2dbe47', cursor: 'pointer' }} type="environment" theme="outlined" />}
                                              </FormItem>
                                          </Col>
                                      );
                                  }
                                  if (item2.type === 'inputNumber') {
                                      return (
                                          <Col style={{padding:'4px 0px'}} span={item2.inputSize || inputSize} key={String(index2)}>
                                              <FormItem
                                                  {...formItemLayout}
                                                  label={item2.label}
                                                  key={String(index2)}
                                                  style={{ marginRight: '30px' }}
                                              >
                                                  {
                                                      getFieldDecorator(item2.paramName, {
                                                          initialValue: item2.initialValue || 0,
                                                          // rules: [{
                                                          //     required: item2.required || false,
                                                          //     message: `请输入${item2.label}`
                                                          // }],
                                                      })(
                                                          <InputNumber size='small' step={0.1} key={String(index2)} min={0} disabled={item2.disabled || false} style={{ width: '100%' }} />,
                                                      )
                                                  }
                                                  {item2.endLabel && <span style={{ top: '0px' }} className="endLabel">{item2.endLabel}</span>}
                                              </FormItem>
                                          </Col>
                                      );
                                  }
                                  if (item2.type === 'select') {
                                      return (
                                          <Col style={{padding:'4px 0px'}} span={item2.inputSize || inputSize} key={String(index2)}>
                                              <FormItem
                                                  {...formItemLayout}
                                                  label={item2.label}
                                                  key={String(index2)}
                                                  style={{ width: '100%' }}
                                              >
                                                  {
                                                      getFieldDecorator(item2.paramName, {
                                                          // initialValue:null,
                                                          // initialValue: typeof item2.options[0] === 'object' ? Util.numToString(item2.options[0].value) : item2.options[0],
                                                          initialValue: typeof item2.options[0] === 'object' ? Util.numToString(item2.options[0].value) : item2.options[0],
                                                          rules: [{
                                                              required: item2.required || false,
                                                              message: `请选择${item2.label}`,
                                                          }],
                                                      })(
                                                          <Select
                                                              multiple={item2.multiple}
                                                              style={{ width: '100%' }}
                                                              showSearch
                                                              onChange={item2.clear ? (e) => { this.onClear(item2.clear); item2.selectOnChange(e); } : (e) => {item2.selectOnChange(e); }}
                                                              optionFilterProp="children"
                                                              size='small'
                                                              dropdownMatchSelectWidth
                                                              disabled={item2.disabled || false}

                                                          >
                                                              {
                                                                  item2.options.map(option => (
                                                                      <Select.Option
                                                                          key={typeof option === 'string' ? option : option.value}
                                                                          value={Util.numToString(typeof option === 'string' ? option : option.value)}

                                                                      >
                                                                          {typeof option === 'string' ? option : option.text}
                                                                      </Select.Option>

                                                                  ))
                                                              }
                                                          </Select>,
                                                      )
                                                  }
                                                  {item2.endLabel && <span className="endLabel">{item2.endLabel}</span>}
                                              </FormItem>
                                          </Col>
                                      );
                                  }
                                  if (item2.type === 'array') {
                                      return keys.map((k, indexNum) => {
                                          const num = k;
                                          return (
                                              <Col style={{padding:'0px',marginLeft:'-10px'}} span={24} key={String(index2 + num)}>
                                                  <div className={styles.modelk}>
                                                      <Row>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`instrumentName${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="仪器名称"
                                                                  key={`instrumentName${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`instrumentName${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入仪器名称',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`type${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="仪器类型"
                                                                  key={`type${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`type${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入仪器类型',
                                                                          }],

                                                                      })(
                                                                          <Select
                                                                          size='small'>
                                                                              <Select.Option key="1" value="1">水泵</Select.Option>
                                                                          </Select>,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`flow${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="额定流量"
                                                                  key={`flow${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                              {
                                                                      getFieldDecorator(`flow${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入额定流量',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`power${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label={(<span style={{fontSize:'14px'}}>功&emsp;&emsp;率</span>)}
                                                                  key={`power${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`power${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入功率',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`yc${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="远程控制"
                                                                  key={`yc${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`yc${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入远程控制',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`yxtime${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="运行时间"
                                                                  key={`yxtime${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`yxtime${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入运行时间',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`guzhang${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="故障信号"
                                                                  key={`guzhang${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`guzhang${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入故障信号',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                          <Col style={{padding:'4px 0px'}} span={inputSize} key={`yunxing${num}`}>
                                                              <FormItem
                                                                  {...formItemLayout}
                                                                  label="运行信号"
                                                                  key={`yunxing${num}`}
                                                                  style={{ width: '100%', marginRight: '30px' }}
                                                              >
                                                                  {
                                                                      getFieldDecorator(`yunxing${num}`, {
                                                                          rules: [{
                                                                              required: true,
                                                                              message: '请输入运行信号',
                                                                          }],

                                                                      })(
                                                                          <Input size='small' key={String(num)} maxLength={20} />,
                                                                      )
                                                                  }
                                                              </FormItem>
                                                          </Col>
                                                      </Row>
                                                      {
                                                      indexNum >= 1 && <Icon onClick={() => this.remove(num)} className={styles.jian} type="close" />
                                                      }
                                                      
                                                  </div>
                                                  {
                                                      indexNum==keys.length-1&& <Icon onClick={this.add} className={styles.addbut} type="plus" />
                                                  }
                                              </Col>);
                                      });
                                  }
                                  if (item2.type === 'text') {
                                      return (<Col  style={{padding:'4px 8px'}} span={12}><div style={{height:'40px',padding:'10px 10px 0px 19px',color:'#000'}}>{item2.text}</div></Col>);
                                  }
                                  if (item2.type === 'line') {
                                      return (<Col span={24}><div style={{ height: '1px', background: '#d7cccc', margin: '10px 0px' }} /></Col>);
                                  }
                                  return false;
                              })
                          }
                      </Row>
                  </Form>
              </div>
          );
      }
      return false;
  });
    return (
      <div className={styles.formDamo}>
        {formItems}
      </div>
    );
  }
}

export default Form.create()(FormDamo);
