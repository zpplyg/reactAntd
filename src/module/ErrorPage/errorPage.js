import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
//404页面
import Error404 from './Error404/error404';
//403页面
import Error403 from './Error403/error403';
//500页面
import Error500 from './Error500/error500';

class ErrorPage extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/Error404`} component={Error404} />  
                <Route path={`${this.props.match.url}/Error403`} component={Error403} />  
                <Route path={`${this.props.match.url}/Error500`} component={Error500} />   
            </Switch>
        )
    }
}

export default withRouter(ErrorPage);