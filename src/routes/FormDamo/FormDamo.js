import React from 'react';
import './FormDamo.less';
import { Form, Input, Icon, Button,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

let uuid = 0;
let date= ["李威","处理","的的","李威1","处理1","的的1","李威2","处理2","的的2","李威3","处理3","的的3","李威4","处理4","的的4"];
 
class DynamicFieldSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number:  0,
    };
  }
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let arr=[];
        values.keys.map((item,index)=>{
            const obj={};
            obj[date[values.name[index]]]=values.names[index];
            arr.push(obj);
            return false;
        })
        console.log('date',arr)
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
            <FormItem
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? '测点类型' : ''}
              required={false}
              key={"name"+k}
              >
                  {getFieldDecorator(`name[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "Please 输入报警类型",
                }],
              })(
                <Select style={{ width: '20%' }}
                      >
                    {date.map((option,index) => {
                    return <Option key={index}>{option}</Option>
                  })}
                </Select>
              )}
              {getFieldDecorator(`names[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "Please 输入报警类型",
                }],
              })(
                <Input placeholder="请输入报警类型" style={{ width: '40%', marginRight: 8 }} />
              )}
                {keys.length > 1 ? 
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  disabled={keys.length === 1}
                  onClick={() => this.remove(k)}
                />
              : null}
          </FormItem>
      );
    });
    return (
      <Form  onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" />添加监测因子
          </Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(DynamicFieldSet);
