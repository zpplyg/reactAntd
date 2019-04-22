import React, { Component } from 'react';
import { Form, Row, Col, Input, DatePicker, Select} from 'antd';
import './baseFormCard.less';

const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select

class BaseFormCard extends React.Component{
    
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {

    }

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id = "i3-ui-BaseFormCard">
                <div className = "i3-ui-card-name">基本信息</div>
                <div className = "i3-ui-card-form">
                    <Form layout="vertical">
                        <Row gutter={24}>
                            <Col span={8} >
                                <Form.Item label='会议室名称'>
                                    {getFieldDecorator('meetingName', {
                                    rules: [{
                                        required: true,
                                        message: 'Input something!',
                                    }],
                                    })(
                                    <Input placeholder="placeholder" />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8} >
                                <Form.Item label='规则名称'>
                                    {getFieldDecorator('ruleName', {
                                    rules: [{
                                        required: true,
                                        message: 'Input something!',
                                    }],
                                    })(
                                        <Select>
                                            <Option value = '1'>1</Option>
                                            <Option value = '2'>2</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8} >
                                <Form.Item label='开放时间'>
                                    {getFieldDecorator('date', {
                                    rules: [{
                                        required: true,
                                        message: 'Input something!',
                                    }],
                                    })(
                                        <RangePicker/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={8} >
                                <Form.Item label='发布处室'>
                                    {getFieldDecorator('setUp', {
                                    rules: [{
                                        required: true,
                                        message: 'Input something!',
                                    }],
                                    })(
                                        <Select>
                                            <Option value = '1'>1</Option>
                                            <Option value = '2'>2</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8} >
                                <Form.Item label='使用状态'>
                                    {getFieldDecorator('useStatus', {
                                    rules: [{
                                        required: true,
                                        message: 'Input something!',
                                    }],
                                    })(
                                        <Select>
                                            <Option value = '1'>已开启</Option>
                                            <Option value = '2'>已禁用</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8} >
                                <Form.Item label='地点名称'>
                                    {getFieldDecorator('addressName', {
                                    rules: [{
                                        required: true,
                                        message: 'Input something!',
                                    }],
                                    })(
                                    <Input placeholder="placeholder" />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(BaseFormCard)