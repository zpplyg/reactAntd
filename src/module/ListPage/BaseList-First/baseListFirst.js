import React, { Component } from 'react';
import { Button, Input, Table, Spin, Modal } from 'antd';
import './baseListFirst.less'
import I3_Icon from '../../../components/Icon/icon';
import I3_Table from '../../../components/Table/table'
import {findSiblings} from '../../../config/getSiblingHeight'

class BaseListFirst extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            selectedRowKeys: [''],
            pageIndex: 1, 
            pageSize: 8, 
            total: 1,
            loading: false,
            tableData: [],
            searchData: [],
            // height: '',
            inputValue: ''
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
        // const height = findSiblings(document.getElementsByClassName('i3-ui-table-con')[0])
        // console.log('hahahahah',height)
        // this.setState({height})
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
    handleSeach = (e) => {

        let patt1=new RegExp(e.target.value);
        let list = this.state.searchData;
        let temp = [];
        list.map((item)=>{
            let obj = JSON.stringify(item)
            if(patt1.test(obj)){
                temp.push(item)
            }
        })
        this.setState({tableData: temp,total: temp.length})

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
    render () {
        const { selectedRowKeys, pageIndex, pageSize, total, loading, tableData, height } = this.state
        const rowSelection = {
            width: '50px',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({ selectedRowKeys, selectedRows})
            }
        }
        return (
            <div id = "i3-ui-BaseListFirst">
                <Spin spinning = {loading}>
                    <div className = "i3-ui-BaseListFirst-top">
                        <Button type = "primary" className = "i3-ui-BaseListFirst-top-button"><I3_Icon type="plus"/><span style={{display:'inline-block',marginLeft:'5px'}}>添加</span></Button>
                        <Input.Search className = "i3-ui-BaseListFirst-top-input" placeholder="请输入会议室名称/地点" onChange={(e)=>this.handleSeach(e)}></Input.Search>
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
                </Spin>
            </div>
        )
    }
}

export default BaseListFirst