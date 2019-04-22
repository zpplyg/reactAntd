import React, { Component } from 'react';
import { Form, Button} from 'antd';
import './baseFormThird.less';
import I3_FormThirdCard from '../../../components/BaseFormThirdCard/baseFormThirdCard'

class BaseFormThird extends React.Component{
    

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {

    }

    render () {
        return (
            <div id = "i3-ui-BaseFormThird">
                <I3_FormThirdCard/>
                <div className = "i3-ui-btn-con">
                    <Button type="primary">提交</Button>
                    <Button className = "i3-ui-save-btn">保存</Button>
                </div>
            </div>
        )
    }
}

export default Form.create()(BaseFormThird)