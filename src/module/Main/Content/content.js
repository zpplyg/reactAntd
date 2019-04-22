import React, { Component } from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import ResultPage from "../../ResultPage/resultPage";
import ListPage from "../../ListPage/listPage";
import FormPage from "../../FormPage/formPage";
import ErrorPage from "../../ErrorPage/errorPage";
import FormTemp from "../../FormTemp/FormTemp";
import "./content.less";

class Content extends Component {
  render() {
    return (
      <div id="i3-main-children">
        <Switch>
          <Route path="/main/resultPage" component={ResultPage} />
          <Route path="/main/listPage" component={ListPage} />
          <Route path="/main/formPage" component={FormPage} />
          <Route path="/main/errorPage" component={ErrorPage} />
          <Route path="/main/FormTemp" component={FormTemp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Content);
