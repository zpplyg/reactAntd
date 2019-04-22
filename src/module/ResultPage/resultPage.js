import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
//404页面
import Error404 from './Error404/error404';
class ResultPage extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/Error404`} component={Error404} />    
            </Switch>
        )
    }
}

export default withRouter(ResultPage);