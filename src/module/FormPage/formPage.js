import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
//基础表单一页面
import BaseFormFirst from './BaseForm-First/baseFormFirst'
//基础表单二页面
import BaseFormSecond from './BaseForm-Second/baseFormSecond'
//基础表单三页面
import BaseFormThird from './BaseForm-Third/baseFormThird'

class FormPage extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/baseFormFirst`} component={BaseFormFirst} />  
                <Route path={`${this.props.match.url}/baseFormSecond`} component={BaseFormSecond} />
                <Route path={`${this.props.match.url}/baseFormThird`} component={BaseFormThird} />
            </Switch>
        )
    }
}

export default withRouter(FormPage);