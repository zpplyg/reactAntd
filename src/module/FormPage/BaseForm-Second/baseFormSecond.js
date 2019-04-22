import React, { Component } from 'react';
import { Form, Button } from 'antd';
import './baseFormSecond.less';
import I3fromCard from '../../../components/BaseFormCard/baseFormCard'
import I3_Edit_Table from '../../../components/EditTable/editTable'

class BaseFormSecond extends React.Component{
    

    constructor (props) {
        super(props)
        this.state = {
            selectedRowKeys: [''],
            pageIndex: 1, 
            pageSize: 8, 
            total: 1,
            tableData: [],
            searchData: [],
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
    render () {
        return (
            <div id = "i3-ui-BaseFormSecond">
                <I3fromCard/>
                <I3fromCard/>
                <I3_Edit_Table/>
                <div className = "i3-ui-btns-con">
                    <Button type="primary">提交</Button>
                </div>
            </div>
        )
    }
}

export default BaseFormSecond