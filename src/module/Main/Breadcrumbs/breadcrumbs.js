import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import { Breadcrumb, Alert } from "antd";
import React, { Component } from "react";
// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const breadcrumbNameMap = {
  "/main": "首页",
  "/main/resultPage": "结果页",
  "/main/resultPage/Error404": "404",
  "/main/listPage": "列表页",
  "/main/formPage": "表单页",
  "/main/listPage/baseListFirst": "基础列表页(一)",
  "/main/listPage/baseListSecond": "基础列表页(二)",
  "/main/listPage/baseListThird": "基础列表页(三)",
  "/main/formPage/baseFormFirst": "基础表单页(一)",
  "/main/formPage/baseFormSecond": "基础表单页(二)",
  "/main/formPage/baseFormThird": "基础表单页(三)",
  "/main/errorPage/Error500": "error500",
  "/main/errorPage/Error404": "error404",
  "/main/errorPage/Error403": "error403",

  "/main/FormTemp": "表单模板",
  "/main/FormTemp/Login": "登录",

  "/main/TableTemp": "表格模板",
  "/main/TableTemp/TableOne": "表格一"
};

const Home = withRouter(props => {
  console.log("props", props);
  const { location } = props;
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <span style={{ color: "#000" }}>{breadcrumbNameMap[url]}</span>
      </Breadcrumb.Item>
    );
  });
  console.log("面包屑", extraBreadcrumbItems);
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <span to="/" />
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>;
});
export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}
