import React, { Component } from 'react';
import { Button, Input, Table, Spin, Modal, Form, Icon, Select } from 'antd';
import { withRouter } from 'react-router-dom';
import './baseListSecond.less'
import I3_Icon from '../../../components/Icon/icon';
import I3_Table from '../../../components/Table/table'
const Option = Select.Option;

class BaseListSecond extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            selectedRowKeys: [],
            pageIndex: 1, 
            pageSize: 8, 
            total: 1,
            loading: false,
            tableData: [],
            searchData: [],
            inputValue: '',
            showOrHideSearch: false,
            siblingHeight: false,//当表格的兄弟元素不固定时需要传
        }
    }
    TABLE_CLUM = [{
        title: '序号',
        dataIndex: 'ID',
        key: 'ID',
        align:'center',
        width: '50px'
    },{
        title: '会议室名称',
        dataIndex: 'BoardRoom',
        key: 'BoardRoom',
        align:'left',
        width: 150,
        render: (text,row,index) => <span style={{color:'#1890ff',cursor:'pointer'}}>{text}</span>
    },{
        title: '地点',
        dataIndex: 'Address',
        key: 'Address',
        align:'left',
        width: 100
    },{
        title: '开放时间',
        dataIndex: 'OpenTime',
        key: 'OpenTime',
        align:'left',
        width: 200,
        render: (text,row,index) => <span>{text?text:row.LeadTel}</span>
    },{
        title: '可容纳人数',
        dataIndex: 'PeopleNum',
        key: 'PeopleNum',
        align:'left',
        width: 100
    },{
        title: '相关设备',
        dataIndex: 'Device',
        key: 'Device',
        align:'left',
        width: 100
    },{
        title: '状态',
        dataIndex: 'StatusName',
        key: 'StatusName',
        align:'left',
        width: 100
    },{
        title: '操作',
        dataIndex: 'IsOnDuty',
        key: 'IsOnDuty',
        align:'left',
        render: (text,row,index) => <span style={{color: '#1890ff'}}><a>编辑</a><span style={{color:'#ededed',display:'inline-block',margin:'0 8px'}}>|</span><a onClick={()=>this.handleDel(index)}>删除</a></span>,
        width: 100
    }]
    componentDidMount () {
        this.getTableData()
    }
    /**
    * 显示记录
    */
    handleShowToal = (total, range) => {
        return <span>共{total}条，{this.state.pageSize}条/页</span>
    }
    /**
     * 表格数据
     */
    getTableData = () => {
        let tableData = [];
        for( let i=1; i<21; i++){
            tableData.push({
                ID: i,
                BoardRoom: i+'层多媒体会议室',
                Address: i+'#'+i+'01',
                OpenTime: '09: 00 - 18: 00',
                PeopleNum: '50人',
                Device: '25',
                StatusName: '已启用',
            })
        }
        this.setState({tableData,total: tableData.length,searchData:tableData})
    }
    getRowKeys = (record) => {
        return record.ID
    }
    onPageChange = (pageIndex) =>{
        this.setState({
            pageIndex
        })
    }

    handleDel = (index) => {
        const that = this;
        Modal.confirm({
            title: '提示',
            content: '您确定要删除此条数据吗？',
            onOk() {
                that.setState({loading: true})
                const temp = that.state.searchData;
                temp.splice(index,1);
                temp.map((item,index)=>{
                    item.ID = index+1
                })
                that.setState({searchData: temp,tableData: temp,total: temp.length,loading: false})
            },
            onCancel() {},
        });    
    }
    /**
     * 显示或隐藏筛选菜单
     */
    showOrHideSearch = () => {
        this.setState({
            showOtherSearch: !this.state.showOtherSearch,
            siblingHeight: !this.state.siblingHeight
        })
        
    }
    /**
     * 查询
     */
    getTrueTableData = (arr,reg) => {
        let patt1=new RegExp(reg);
        let temp = []; 
        arr.map((item)=>{
            let tempObj = JSON.stringify(item)
            if(patt1.test(tempObj)){
                temp.push(item)
            }
        })
        this.setState({tableData: temp,total:temp.length})
    }
    handleSubmit = (e) => {
        let count = 0
        let list = this.state.searchData;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                for(let obj in values){
                    if(values[obj]){
                        console.log(values[obj])
                        this.getTrueTableData(list,values[obj]) 
                    }else{
                        count = count+1
                    } 
                }
                if(count == 5){
                    this.setState({tableData: this.state.searchData,total:this.state.searchData.length })
                }
            }
        });
    }
    /**
     * 批量删除
     */
    handleAllDel = () => {
        const dellist = this.state.selectedRowKeys;
        const tableData = this.state.searchData
        const that = this;
        Modal.confirm({
            title: '提示',
            content: '您确定要删除这些数据吗？',
            onOk() {
                that.setState({loading: true})
                dellist.map((item)=>{
                    tableData.splice(item-1,1)
                })
                tableData.map((item,index)=>{
                    item.ID = index+1
                })
                that.setState({tableData,selectedRowKeys:[],total:tableData.length,loading:false})
            },
            onCancel() {},
        });    
        
    }
    render () {
        const getFieldDecorator = this.props.form.getFieldDecorator;
        const { selectedRowKeys, pageIndex, pageSize, total, loading, tableData, siblingHeight } = this.state
        const rowSelection = {
            width: '50px',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({ selectedRowKeys, selectedRows})
            }
        }
        return (
            <div id = "i3-ui-BaseListSecond">
                <Spin spinning = {loading}>
                    <div className = "i3-ui-BaseListFirst-top">
                        <Form layout="inline" style={{ height: '48px'}}>
                            <Form.Item label="会议室名称：">
                                    {getFieldDecorator('MeetingName', {
                                    rules: [{ required: false, message: '' }],
                                })(
                                    <Input placeholder="请输入"  />
                                )}
                            </Form.Item>
                        
                            <Form.Item label="地点名称：" >
                                {getFieldDecorator('AddressName', {
                                    rules: [{ required: false, message: '' }],
                                })(
                                    <Input placeholder="请输入" />
                                )}
                            </Form.Item>
                            <Form.Item label="可容纳人数：" style={{display:!this.state.showOtherSearch?'none':'inline-block'}}>
                                {getFieldDecorator('PeopleNum', {
                                    rules: [{ required: false, message: '' }],
                                })(
                                    <Input placeholder="请输入" />
                                )}
                            </Form.Item>
                            <div className="i3-ui-listPage-input" style={{display:this.state.showOtherSearch?'none':'inline-block'}}>
                                <Button type="primary"  onClick={this.handleSubmit}>查询</Button>
                                <span className="spread" onClick={this.showOrHideSearch}><span>展开</span><Icon className={this.state.showOtherSearch ? "icon icon-up" : "icon"} type="down" /></span>
                            </div>
                        </Form>
                        <Form layout="inline" style={{ height: '48px',display:this.state.showOtherSearch?'block':'none'}}>
                            <Form.Item label="相关设备：" >
                                {getFieldDecorator('device', {
                                    rules: [{ required: false, message: '' }],
                                })(
                                    <Input placeholder="请输入" />
                                )}
                            </Form.Item>
                            <Form.Item label="状态：" >
                                {getFieldDecorator('Status', {
                                    rules: [{ required: false, message: '' }],
                                })(
                                    <Select allowClear={true}>
                                        <Option value="已启用">已启用</Option>
                                        <Option value="未启用">未启用</Option>
                                    </Select>
                                )}
                            </Form.Item>
                            <div className="i3-ui-listPage-input" style={{marginLeft:'30px',display:!this.state.showOtherSearch?'none':'inline-block'}}>
                                <Button type="primary"  onClick={this.handleSubmit}>查询</Button>
                                <span className="spread" onClick={this.showOrHideSearch}><span>收起</span><Icon className={this.state.showOtherSearch ? "icon icon-up" : "icon"} type="down" /></span>
                            </div>
                        </Form>
                    </div>
                    <div className = "i3-ui-btns-con">
                        <Button type = "primary">添加</Button>
                        <Button type = "Default" className = "i3-ui-btn" disabled={selectedRowKeys.length==1?false:true}>编辑</Button>
                        <Button type = "Default" disabled={selectedRowKeys.length!==0?false:true} onClick={this.handleAllDel}>删除</Button>
                    </div>
                    <I3_Table
                        TABLE_CLUM={this.TABLE_CLUM}
                        TABLE_DATA={tableData}
                        ROWSELECTION={rowSelection}
                        PAGINATION={{
                            current:pageIndex,
                            pageIndex:pageIndex,
                            pageSize:pageSize,
                            onChange: this.onPageChange,
                            total: total,
                            showTotal:this.handleShowToal,
                        }}
                        ROWKEY={this.getRowKeys}
                        siblingHeight={siblingHeight}
                    />
                </Spin>
            </div>
        )
    }
}

export default (withRouter(Form.create()(BaseListSecond)))