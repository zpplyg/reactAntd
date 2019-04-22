import React, { Component } from "react";
import "./sider.less";
import { Menu, Icon, Layout } from "antd";
import { Link } from "react-router-dom";
import I3_Icon from "../../../components/Icon/icon";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const menuData = [
  {
    MenuID: "1",
    Icon: "user",
    Name: "结果页",
    Children: [
      {
        MenuID: "11",
        Name: "404",
        URL: "/main/resultPage/Error404"
      }
    ]
  },
  {
    MenuID: "2",
    Icon: "infocirlce",
    Name: "处理异常页",
    Children: [
      {
        MenuID: "21",
        Name: "404",
        URL: "/main/errorPage/Error404"
      },
      {
        MenuID: "22",
        Name: "403",
        URL: "/main/errorPage/Error403"
      },
      {
        MenuID: "23",
        Name: "500",
        URL: "/main/errorPage/Error500"
      }
    ]
  },
  {
    MenuID: "3",
    Icon: "solution",
    Name: "常用组件",
    Children: [
      {
        MenuID: "31",
        Name: "404",
        URL: "/main/resultPage/Error404"
      }
    ]
  },
  {
    MenuID: "4",
    Icon: "calendar",
    Name: "业务组件",
    Children: [
      {
        MenuID: "41",
        Name: "404",
        URL: "/main/resultPage/Error404"
      }
    ]
  },
  {
    MenuID: "5",
    Icon: "book",
    Name: "表单页",
    Children: [
      {
        MenuID: "51",
        Name: "基础表单(一)",
        URL: "/main/formPage/baseFormFirst"
      },
      {
        MenuID: "52",
        Name: "基础表单(二)",
        URL: "/main/formPage/baseFormThird"
      },
      {
        MenuID: "53",
        Name: "基础表单(三)",
        URL: "/main/formPage/baseFormSecond"
      }
    ]
  },
  {
    MenuID: "6",
    Icon: "setting",
    Name: "列表页",
    Children: [
      {
        MenuID: "61",
        Name: "基础列表(一)",
        URL: "/main/listPage/baseListFirst"
      },
      {
        MenuID: "62",
        Name: "基础列表(二)",
        URL: "/main/listPage/baseListSecond"
      },
      {
        MenuID: "63",
        Name: "基础列表(三)",
        URL: "/main/listPage/baseListThird"
      }
    ]
  },
  {
    MenuID: "7",
    Icon: "setting",
    Name: "表单模板",
    Children: [
      {
        MenuID: "63",
        Name: "登录",
        URL: "/main/FormTemp/Login"
      }
    ]
  }
];

class SiderCpt extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  onTitleClick = () => {};
  renderMenu = menu => {
    return menu.map(value => {
      if (value.Children && value.Children.length) {
        return (
          <SubMenu
            onTitleClick={this.onTitleClick}
            key={value.MenuID}
            title={
              <span>
                {value.Icon ? (
                  <I3_Icon type={value.Icon} i3_icon_class="i3_icon_class" />
                ) : (
                  ""
                )}
                <span
                  style={{
                    display: this.state.collapsed ? "none" : "inline",
                    marginLeft: 10
                  }}
                >
                  {value.Name}
                </span>
              </span>
            }
          >
            {this.renderMenu(value.Children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={value.MenuID}>
            <Link to={value.URL} replace>
              {value.Icon ? <Icon type={value.Icon} /> : ""}
              <span style={{ marginLeft: "10px" }}>{value.Name}</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <div id="i3-ui-sider" style={{ width: collapsed ? "80px" : "216px" }}>
        <div className="i3-ui-trigger-wrapper">
          <Icon
            className="i3-ui-fold-icon"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          />
        </div>
        <Menu
          mode="inline"
          style={{ width: collapsed ? "" : 215 }}
          inlineCollapsed={collapsed}
        >
          {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>结果页</span></span>}></SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>处理异常页</span></span>}></SubMenu> */}
          {this.renderMenu(menuData)}
        </Menu>
      </div>
    );
  }
}

export default SiderCpt;
