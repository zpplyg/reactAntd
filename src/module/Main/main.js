import React, { Component } from 'react';
import './main.less';
import { Layout } from 'antd';
import Header from './Header/header';
import Sider from './Sider/sider';
import Contents from './Content/content'; 
import Breadcrumbcups from './Breadcrumbs/breadcrumbs';

const {  Content } = Layout

class Main extends React.Component {

    constructor (props) {
        super (props)
    }
    
    itemRender=(route, params, routes, paths)=>{
        return <span>{route.breadcrumbName}</span>
    }
    render () {
        return (
            <div id = "i3-ui-main-con">
                <Header/>
                <div className = "i3-ui-main-content">
                    <Sider/>
                    <div className = "i3-ui-main-right">
                        <div className = "i3-ui-breadcrumb-wrap">
                            <div className = "i3-ui-breadcrumb-left">当前位置</div>
                            <Breadcrumbcups/>
                        </div>
                        <Content>
                            <div className="i3-ui-main-right-content"><Contents/></div>
                        </Content>
                    </div>
                </div>    
            </div>
        )
        
    }
}

export default Main