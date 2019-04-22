import React, { Component } from 'react';
import { Form, Row, Col, Input, DatePicker, Select} from 'antd';
import './baseFormThirdCard.less';

const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;

class BaseFormThirdCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const getFieldDecorator = this.props.form.getFieldDecorator;
        return (
            <div id = "i3-ui-baseFormThirdCard">
                <div className = "i3-ui-card-name">基本信息</div>
                <div className = "i3-ui-card-form">
                    <Form layout='inline'>
                        <Row gutter={24}>
                            <Form.Item label='会议室名称：'style={{width:'33.3%'}}>
                                {getFieldDecorator('meetingName', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                <Input placeholder="请输入会议室名称" style={{width: '210px'}}/>
                                )}
                            </Form.Item>
                            <Form.Item label='规则名称：' style={{width:'33.3%'}}>
                                {getFieldDecorator('ruleName', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Select style={{width: '210px'}} placeholder="请选择规则名称">
                                        <Option value = '1'>1</Option>
                                        <Option value = '2'>2</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label='开放时间：' style={{width:'33.3%'}}>
                                {getFieldDecorator('date', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <RangePicker style={{width: '210px'}}/>
                                )}
                            </Form.Item>
                        </Row>
                        <Row gutter={24}>
                            <Form.Item label='发布处室：' style={{width:'33.3%'}}>
                                {getFieldDecorator('setUp', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Select style={{width: '210px'}} placeholder="请选择发布处室">
                                        <Option value = '1'>1</Option>
                                        <Option value = '2'>2</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label='使用状态：' style={{width:'33.3%'}}>
                                {getFieldDecorator('useStatus', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Select style={{width: '210px'}} placeholder="请选择使用状态">
                                        <Option value = '1'>已启用</Option>
                                        <Option value = '2'>已禁用</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label='地点名称：' style={{width:'33.3%'}}>
                                {getFieldDecorator('addressName', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Input style={{width: '210px'}} placeholder="请输入地点名称"/>
                                )}
                            </Form.Item>
                        </Row>
                        <Row gutter={24}>
                            <Form.Item label='发布处室：' style={{width:'33.3%'}}>
                                {getFieldDecorator('setUp', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Select style={{width: '210px'}}>
                                        <Option value = '1'>1</Option>
                                        <Option value = '2'>2</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label='使用状态：' style={{width:'33.3%'}}>
                                {getFieldDecorator('useStatus', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Select style={{width: '210px'}}>
                                        <Option value = '1'>1</Option>
                                        <Option value = '2'>2</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label='地点名称：' style={{width:'33.3%'}}>
                                {getFieldDecorator('addressName', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Input style={{width: '210px'}}/>
                                )}
                            </Form.Item>
                        </Row>
                        <Row gutter={24}>
                            <Form.Item label='会议室名称：'style={{width:'33.3%'}}>
                                {getFieldDecorator('meetingName', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                <Input placeholder="placeholder" style={{width: '210px'}}/>
                                )}
                            </Form.Item>
                            <Form.Item label='规则名称：' style={{width:'33.3%'}}>
                                {getFieldDecorator('ruleName', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <Select style={{width: '210px'}}>
                                        <Option value = '1'>1</Option>
                                        <Option value = '2'>2</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label='开放时间：' style={{width:'33.3%'}}>
                                {getFieldDecorator('date', {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                                })(
                                    <RangePicker style={{width: '210px'}}/>
                                )}
                            </Form.Item>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}


export default Form.create()(BaseFormThirdCard) 