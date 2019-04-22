import React, { Component } from 'react';
import './header.less';
import { Icon, Dropdown, Badge, Menu, Layout } from 'antd'
import Avatar from '../../Public/assets/img/Avatar.png';
import Logo from '../../Public/assets/img/Logo.png'
import switchTheme from '../../Public/theme/switchTheme'
const SubMenu = Menu.SubMenu;
const { Header } = Layout
const colorData = [['#eb6777','#e064e8','#861cdf'],['#511fe1','#5d45a1','#155aa6'],['#0dc6d7','#0edcae','#f39b3d']]
class header extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            visible: false,
            settingVisible: false
        }
    }
    chooseTheme = (them) => {
        switchTheme("default")
    }
    renderColorItem = (data) => {
        return(
            data.map((item,index)=>{
                return (
                    <div className = "i3-ui-theme-con" key={Math.random()}>
                        {item.map((obj)=>{
                            return (<span className = "i3-ui-theme" style={{background:obj}} key={Math.random()} onClick={()=>this.chooseTheme(obj)}></span>)
                        })}     
                    </div>
                )    
            })
        )
        
    }
    handleVisibleSetting = () => {
        this.setState({settingVisible: !this.state.settingVisible})
    }
    render () {
        const menu = (
            <Menu>
                <Menu.Item onClick={this.changePassword}>
                    <div>
                        <Icon type="setting" style={{marginRight: 10}}/><span style={{color: '#333333'}}>修改密码</span>
                    </div>
                </Menu.Item>
                <Menu.Item onClick={this.logout}>
                    <div>
                        <Icon type="poweroff" style={{marginRight: 10}}/><span style={{color: '#333333'}}>退出登录</span>
                    </div>
                </Menu.Item>
            </Menu>
        );
        const menuList =  (
            <Menu id="dropdown-menu-id">
                {/* {this.state.visible ?<Notification hideNotice={this.hideNotice}/>:null} */}
            </Menu>
        )
        const settingList = (
            <Menu id="dropdown-menu-id">
                <SubMenu title='修改主题'>
                    <Menu.Item onClick={this.changePassword}>
                        {this.renderColorItem(colorData)}
                    </Menu.Item>
                    
                </SubMenu>
            </Menu>
        )
        return (
            <Header id = "i3-ui-header-con">
                <div className = "i3-ui-header-left">
                    <div className = "i3-ui-logo-con">
                        <img src={Logo} className = "i3-ui-logo"/>
                    </div>
                    <div className = "i3-ui-line"></div>
                    <div className = "i3-ui-systerm-name">会议管理</div>
                </div>
                <div className="i3-ui-header-right">
                    <Dropdown className="i3-ui-header-dropdown" overlay={menu} placement="bottomLeft">
                        <div>
                            <Icon className="i3-ui-down-icon" type="down"/>
                            <div className="i3-ui-username-con clearfix">
                                <div className = "i3-ui-Administrator">Administrator</div>
                                <div className = "i3-ui-username">超级管理员</div>
                            </div>
                            <img className="i3-ui-avator" src={Avatar} alt=""/>
                        </div>
                    </Dropdown>
                    <div className = "i3-ui-line"></div>
                    <Dropdown
                        className="i3-ui-badge-dropdown"
                        overlay={settingList}
                        onVisibleChange={this.handleVisibleSetting}
                        trigger={['click']}
                        placement="bottomRight"
                        visible={this.state.settingVisible}
                    >
                        <div>
                            <Icon className="i3-ui-setting-icon" type="setting"/>
                        </div>
                    </Dropdown>
                    <Dropdown
                        className="i3-ui-badge-dropdown"
                        overlay={menuList}
                        onVisibleChange={this.handleVisibleChange}
                        trigger={['click']}
                        placement="bottomRight"
                        visible={this.state.visible}
                    >
                        <div>
                            <Badge count={5} style={{backgroundColor: '#f5222d', color: '#fff'}}>
                                <Icon type="bell" className="clock-info"/>
                            </Badge>
                        </div>
                    </Dropdown>
                    
                    
                </div>
            </Header>
        )
        
    }
}

export default header