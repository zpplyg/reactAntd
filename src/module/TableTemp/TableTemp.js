import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import TableOne from "./TableOne/TableOne";
class TableTemp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.url}/TableOne`} component={TableOne} />
      </Switch>
    );
  }
}

export default withRouter(TableTemp);
