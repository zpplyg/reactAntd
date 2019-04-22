import React, { Component } from 'react';
import { Form, DatePicker, TimePicker, Button, Input, Select, Spin, message} from 'antd';
import './baseFormFirst.less';
import moment from 'moment'

const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select
class BaseFormFirst extends React.Component{
    

    constructor (props) {
        super(props)
        this.state = {
            startDate: '',
            endDate:'',
            loading: false

        }
    }

    componentDidMount () {

    }

    handleSubmit = (obj) => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({loading: true});
                message.success(obj+'成功');
                this.setState({loading: false});
            }
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        const { loading } = this.state
        return (
            <div id = "i3-ui-BaseFormFirst">
                <Spin spinning={loading}>
                    <Form>
                        <Form.Item label="会议室名称" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('meetingName', {
                            rules:[{required: true,message:'请填写会议室名称'}]
                        })(
                            <Input placeholder = "请输入会议室名称"/>
                        )}
                        </Form.Item>
                        <Form.Item label="发布处室" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('setUp', {
                            rules:[{required: true,message:'请选择发布处室'}]
                        })(
                            <Select>
                                <Option value = '1'>1</Option>
                                <Option value = '2'>2</Option>
                            </Select>
                        )}
                        </Form.Item>
                        <Form.Item label="起止日期" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('date', {
                            rules:[{required: true,message:'请选择日期'}],
                        })(
                            <RangePicker/>
                        )}
                        </Form.Item>
                        <Form.Item label="联系人数" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('concatPeople', {
                            rules:[{required: true,message:'请填写联系人数'}]
                        })(
                            <Input placeholder = "请输入联系人数"/>
                        )}
                        </Form.Item>
                        <Form.Item label="行业分类" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('IndustryCategory', {
                            rules:[{required: true,message:'请选择行业分类'}]
                        })(
                            <Select>
                                <Option value = '1'>1</Option>
                                <Option value = '2'>2</Option>
                            </Select>
                        )}
                        </Form.Item>
                        <Form.Item label="目标描述" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('targetDes', {
                            rules:[{required: true,message:'请填写目标描述'}]
                        })(
                            <Input.TextArea placeholder = "请填写目标描述" rows={4}/>
                        )}
                        </Form.Item>
                        <Form.Item label="相关设备" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('systerm', {
                            rules:[{required: true,message:'请选择相关设备'}]
                        })(
                            <Select>
                                <Option value = '1'>1</Option>
                                <Option value = '2'>2</Option>
                            </Select>
                        )}
                        </Form.Item>
                        <Form.Item label="规则名称" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('ruleName', {
                            rules:[{required: true,message:'请选择规则名称'}]
                        })(
                            <Select>
                                <Option value = '1'>1</Option>
                                <Option value = '2'>2</Option>
                            </Select>
                        )}
                        </Form.Item>
                        <Form.Item label="备注" labelCol={{xs: { span: 8 },sm: { span: 8 }}} wrapperCol={{xs: { span: 24 },sm: { span: 12 }}}>
                        {getFieldDecorator('remark', {
                            rules:[{required: true,message:'请填写备注'}]
                        })(
                            <Input.TextArea placeholder = "请填写备注" rows={4}/>
                        )}
                        </Form.Item>
                        <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 },
                        }}
                        >
                        <Button type="primary" htmlType="submit" onClick={()=>this.handleSubmit('提交')} >提交</Button>
                        <Button style={{marginLeft: '8px'}} onClick={()=>this.handleSubmit('保存')}>保存</Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        )
    }
}

export default Form.create()(BaseFormFirst)