import React, { Component } from 'react';
import { Table,Input, Button, DatePicker, Select,TimePicker } from 'antd';
import PropTypes from 'prop-types';
import './editTable.less';
import moment from 'moment'
const { RangePicker } = DatePicker;
const { Option } = Select
class EditTable extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            tableSourceData: [{
                ID: 1,
                BoardRoom: '1层多媒体会议室',
                Address: '1#11',
                OpenStartTime: '09: 00',
                OpenEndTime:'18: 00',
                PeopleNum: '50人',
                Device: '25',
                StatusName: '已启用',
                Symbol: true
            }]
        }
    }

    TTABLE_CLUM = [{
        title: '会议室名称',
        dataIndex: 'BoardRoom',
        key: 'BoardRoom',
        align:'left',
        width: 150,
        render: (text,row,index) => row.Symbol?<span style={{color:'#1890ff',cursor:'pointer'}}>{text}</span>:<Input placeholder="请填写会议室名称" onChange={(e)=>this.handlegetMeetName(e,row,index)}/>
    },{
        title: '地点',
        dataIndex: 'Address',
        key: 'Address',
        align:'left',
        width: 100,
        render: (text,row,index) => row.Symbol?<span>{text}</span>:<Input placeholder="请填写地点" onChange={(e)=>this.handlegetAddress(e,row,index)}/>
    },{
        title: '开放时间',
        dataIndex: 'OpenTime',
        key: 'OpenTime',
        align:'left',
        width: 200,
        render: (text,row,index) => row.Symbol?<span>{row.OpenStartTime}-{row.OpenEndTime}</span>:
                <span >
                    <TimePicker 
                        style={{ width: 80 }}
                        format="HH:mm"
                        minuteStep={5}
                        placeholder=''
                        onChange={(time, timeString) => { this.onStartTimeChange(time, timeString,index,row)}}
                        />
                    <span style={{margin:'0 5px',color:'#999999'}}>—</span>
                    <TimePicker 
                        style={{ width: 80 }}
                        format="HH:mm"
                        minuteStep={5}
                        placeholder=''
                        onChange={(time, timeString) => { this.onEndTimeChange(time, timeString, index, row) }}
                    />
                </span>
    },{
        title: '可容纳人数',
        dataIndex: 'PeopleNum',
        key: 'PeopleNum',
        align:'left',
        width: 100,
        render: (text,row,index) => row.Symbol?<span>{text}</span>:<Input placeholder="请填写人数" onChange={(e)=>this.handlegetPeopleNum(e,row,index)}/>
    },{
        title: '相关设备',
        dataIndex: 'Device',
        key: 'Device',
        align:'left',
        width: 100,
        render: (text,row,index) => row.Symbol?<span>{text}</span>:
                <Select placeholder="请选择相关设备" onChange={(value)=>this.handlegetSysterm(value,row,index)} style={{width:'100%'}}>
                    <Option value='1'>1</Option>
                    <Option value='2'>2</Option>
                </Select>
    },{
        title: '状态',
        dataIndex: 'StatusName',
        key: 'StatusName',
        align:'left',
        width: 100,
        render: (text,row,index) => row.Symbol?<span>{text}</span>:
                <Select placeholder="请选择状态" onChange={(value)=>this.handlegetStatus(value,row,index)} style={{width:'100%'}}>
                    <Option value='已开启'>已开启</Option>
                    <Option value='已禁用'>已禁用</Option>
                </Select>
    },{
        title: '操作',
        dataIndex: 'IsOnDuty',
        key: 'IsOnDuty',
        align:'left',
        render: (text,row,index) => <span style={{color: '#1890ff'}}><a onClick={()=>this.addData(row,index)}>添加</a><span style={{color:'#ededed',display:'inline-block',margin:'0 8px'}}>|</span><a onClick={()=>this.handleDel(index)}>删除</a></span>,
        width: 100
    }]
    /**
     * 获取会议室名称
     */
    handlegetMeetName = (e,row,index) => {
        const newData = [...this.state.tableSourceData];
        newData[index].BoardRoom = e.target.value;
        this.setState({
            tableSourceData: newData
        })
        
    }
    /**
     * 获取地点
     */
    handlegetAddress = (e,row,index) => {
        const newData = [...this.state.tableSourceData];
        newData[index].Address = e.target.value;
        this.setState({
            tableSourceData: newData
        })
    }
    /**
     * 获取开放开始时间
     */
    onStartTimeChange = (time, timeString,index,row) => {
        const newData = [...this.state.tableSourceData];
        newData[index].OpenStartTime = timeString;
        this.setState({
            tableSourceData: newData
        })
    }
    /**
     * 获取开放结束时间
     */
    onEndTimeChange = (time, timeString,index,row) => {
        const newData = [...this.state.tableSourceData];
        newData[index].OpenEndTime = timeString;
        this.setState({
            tableSourceData: newData
        })
    }
    /**
     * 获取可容纳人数
     */
    handlegetPeopleNum = (e,row,index) => {
        const newData = [...this.state.tableSourceData];
        newData[index].PeopleNum = e.target.value;
        this.setState({
            tableSourceData: newData
        })
    }
    /**
     * 获取相关设备
     */
    handlegetSysterm = (value,row,index) => {
        const newData = [...this.state.tableSourceData];
        newData[index].Device = value;
        this.setState({
            tableSourceData: newData
        })
    }
    /**
     * 获取状态
     */
    handlegetStatus = (value,row,index) => {
        const newData = [...this.state.tableSourceData];
        newData[index].StatusName = value;
        this.setState({
            tableSourceData: newData
        })
    }
    addData = (row,index) => {
        const newData = [...this.state.tableSourceData];
        newData[index].Symbol = true;
        this.setState({
            tableSourceData: newData
        })
    }
    /**
     * 添加数据
     */
    addOne = () => {
        const ID = this.state.tableSourceData.length+1
        const newData = {
            ID: ID,
            BoardRoom: '',
            Address: '',
            OpenStartTime: '',
            OpenEndTime:'',
            PeopleNum: '',
            Device: '',
            StatusName: '',
            Symbol: false
        }
        const newTableData = [...this.state.tableSourceData,newData]
        this.setState({
            tableSourceData: newTableData
        })
    }
    getRowKeys = (record) => {
        return record.ID
    }
    render () {
        const { tableSourceData } = this.state
        return (
            <div id = "i3-ui-EditTable">
                <Table
                    columns={this.TTABLE_CLUM}
                    dataSource={tableSourceData}
                    pagination={ false }
                    rowKey={this.getRowKeys}
                />
                <Button className="i3-ui-add-button" type="dashed" onClick={this.addOne}>+添加</Button>
            </div>
        )
    }
}
export default EditTable