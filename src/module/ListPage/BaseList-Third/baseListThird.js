import React, { Component } from 'react';
import { Input, Button, Icon, AutoComplete } from 'antd';
import './baseListThird.less';
import I3_Table from '../../../components/Table/table' 

class BaseListThird extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            inputDom:20,
            showOtherSearch: false,
            showSpan: false,
            floatBottom: false,
            seachConstyleOne: {
                'overflowY':'scroll',
                'overflowX':'hidden'
            },
            seachConstyleTwo:{
                height: '315px',
                overflow:'hidden'
            },
            tableData: [],
            total: 1,
            searchData: [],
            pageIndex: 1,
            pageSize: 8,
            selectedRowKeys: []
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
        width: 160,
        render: (text,row,index) => <span style={{color:'#1890ff',cursor:'pointer'}}>{text}</span>
    },{
        title: '地点',
        dataIndex: 'Address',
        key: 'Address',
        align:'left',
        width: 90
    },{
        title: '开放时间',
        dataIndex: 'OpenTime',
        key: 'OpenTime',
        align:'left',
        width: 160,
        render: (text,row,index) => <span>{text?text:row.LeadTel}</span>
    },{
        title: '可容纳人数',
        dataIndex: 'PeopleNum',
        key: 'PeopleNum',
        align:'left',
        width: 120
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
        width: 120
    }]
    componentDidMount () {
        this.getScrollHeight();
        this.getTableData();
    }
    /** 
     * 判断滚动条是否存在*/
    getScrollHeight = () => {
        if(document.getElementsByClassName('i3-ui-search-con')[0].scrollHeight>document.getElementsByClassName('i3-ui-search-con')[0].clientHeight){
            this.setState({floatBottom:true,showSpan: true})
        }else{
            this.setState({floatBottom:false,showSpan: false})
        }
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
    renderInput = (data) => {
        let inputDom = [''];
        for(let i=0;i<this.state.inputDom;i++){
            inputDom.push(1)
        }
        return (
            inputDom.map((item,index)=>{
                return (
                    <Input className = 'i3-ui-search-input' placeholder="会议室名称"  key={index}></Input>
                )
            })
        )    
    }
    showOtherSearch = () => {
        document.getElementsByClassName('i3-ui-search-con')[0].scrollTo(0,0)
        this.setState({showOtherSearch: !this.state.showOtherSearch,floatBottom:!this.state.floatBottom})
    }
    getRowKeys = (record) => {
        return record.ID
    }
    onPageChange = (pageIndex) =>{
        this.setState({
            pageIndex
        })
    }
    /**
    * 显示记录
    */
    handleShowToal = (total, range) => {
        return <span>共{total}条，{this.state.pageSize}条/页</span>
    }
    render () {
        const { floatBottom, seachConstyleOne, seachConstyleTwo, showSpan, tableData, total, selectedRowKeys, pageIndex, pageSize } = this.state;
        const rowSelection = {
            width: '50px',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({ selectedRowKeys, selectedRows})
            }
        }
        return (
            <div id = "i3-ui-BaseListThird">
                <div className = "i3-ui-BaseListThird-search">
                    <div className = "i3-ui-search-top">
                        查询条件
                    </div>
                    <div className = "i3-ui-search-con" style={floatBottom?seachConstyleOne:seachConstyleTwo}>
                        {this.renderInput(1)}  
                    </div>
                    <div className = {`i3-ui-search-btns ${floatBottom?'i3-ui-search-btns-bottom':''}`}>
                        <Button type="primary">查询</Button>
                        <span className="spread" onClick={this.showOtherSearch} style={{display:showSpan?'inline-block':'none'}}>{this.state.showOtherSearch?<span>展开</span>:<span>收起</span>}<Icon className={this.state.showOtherSearch ? "icon icon-up" : "icon"} type="down" /></span>
                    </div>
                </div>
                <div className = "i3-ui-BaseListThird-tableData">
                    <div className = "editAnddel">
                        <Button type = "primary" className = "i3-ui-search-btns">添加</Button>
                        <Button className = "i3-ui-search-btns">删除</Button>
                        <Button className = "i3-ui-search-btns">编辑</Button>
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
                    />
                </div>
            </div>
        )   
    }
}

export default BaseListThird