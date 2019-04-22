import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import {globalData} from '../../config/GlobalJs/global'
import {findSiblings} from '../../config/getSiblingHeight'

class I3_UI_Table extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            height: 0,
            siblingHeight: false
        }
    }
    componentDidMount () {
        globalData.height = this.props.ROWHEIGHT;
        const height = findSiblings(document.getElementsByClassName('i3-ui-table-con')[0])
        console.log('表格高度',height)
        if(height<400){
            console.log('小于400')
            this.setState({height})
        }
        
        window.addEventListener('resize',this.onWindowResize)
    }
    componentWillUnmount () {
        window.removeEventListener('resize',this.onWindowResize)
    }
    onWindowResize = ()=>{
        const height = findSiblings(document.getElementsByClassName('i3-ui-table-con')[0])
        if(height<400){
            this.setState({height})
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.siblingHeight !== prevState.siblingHeight){
            return {
                siblingHeight: nextProps.siblingHeight
            }
        }
        return null
    }
    componentDidUpdate(nextProps,state){
        if(nextProps.siblingHeight !== this.state.siblingHeight){
            const height = findSiblings(document.getElementsByClassName('i3-ui-table-con')[0])
            this.setState({height})
        }
        
    
    }
    render () {
        const { TABLE_CLUM, PAGINATION, TABLE_DATA, ROWSELECTION, ROWKEY, HEIGHT } = this.props;
        const { height } = this.state
        return(
            <div className = "i3-ui-table-con">
                <Table
                    columns={TABLE_CLUM}
                    rowSelection={ROWSELECTION}
                    dataSource={TABLE_DATA}
                    rowKey = {ROWKEY}
                    scroll={{ y: height }}
                    pagination = {PAGINATION}
                />
            </div>
            
        )
    }
}
I3_UI_Table.propTypes={
    TABLE_CLUM: PropTypes.array.isRequired,
    PAGINATION: PropTypes.object.isRequired,
    TABLE_DATA: PropTypes.array,
    ROWSELECTION: PropTypes.object.isRequired,
    ROWKEY: PropTypes.func.isRequired,
    siblingHeight: PropTypes.bool, //当元素高度不固定时需要传
}
export default I3_UI_Table