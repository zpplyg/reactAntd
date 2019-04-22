import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
//基础列表一页面
import BaseListFirst from './BaseList-First/baseListFirst'
//基础列表二页面
import BaseListSecond from './BaseList-Second/baseListSecond'
//基础列表三页面
import BaseListThird from './BaseList-Third/baseListThird'

class ListPage extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/baseListFirst`} component={BaseListFirst} />  
                <Route path={`${this.props.match.url}/baseListSecond`} component={BaseListSecond} />
                <Route path={`${this.props.match.url}/baseListThird`} component={BaseListThird} />
            </Switch>
        )
    }
}

export default withRouter(ListPage);