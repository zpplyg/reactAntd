import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
class FormTemp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.url}/Login`} component={Login} />
      </Switch>
    );
  }
}

export default withRouter(FormTemp);
