import React, { Component } from "react";
import { Table, Card } from "antd";
import moment from "moment";
import Axios from "axios";
export default class TableOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  componentDidMount() {
    console.log(this.state.dataSource);
    this.request();
  }
  colums = [
    {
      title: "id",
      dataIndex: "id"
    },
    {
      title: "用户名",
      dataIndex: "userName"
    },
    {
      title: "性别",
      dataIndex: "sex"
    },
    {
      title: "状态",
      dataIndex: "state"
    },
    {
      title: "爱好",
      dataIndex: "hobby"
    },
    {
      title: "生日",
      dataIndex: "birthday"
    },
    {
      title: "地址",
      dataIndex: "address"
    },
    {
      title: "早起时间",
      dataIndex: "time"
    }
  ];
  //动态获取mock数据
  request = () => {
    let BaseUrl =
      "https://www.easy-mock.com/mock/5cbe9e814dadff0da439d9fb/example";
    Axios.get(BaseUrl + "/Table/list").then(res => {
      const data = res.data.result.list;
      console.log(data);
      if (res.status == "200" && res.data.code == 0) {
        this.setState({
          dataSource: data
        });
      }
    });
  };
  render() {
    return (
      <div>
        <Card title="基础表格">
          <Table columns={this.colums} dataSource={this.state.dataSource} pagination={false}/>
        </Card>
      </div>
    );
  }
}
