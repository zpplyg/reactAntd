import React from 'react'
import './error403.less'
import {hashHistory} from 'react-router'
import Component_Page from '../Component/component'
import Img403 from '../../Public/assets/img/403.png'
class Error403 extends React.Component{


    handleClick=()=>{
        // hashHistory.push('/')
        const path=window.location.host+'/login'
        window.location.href ='/login'
        // const win = window.open(path);
        // win.focus();
    }

    render(){
        return(
            <div id="error404-content">
                <Component_Page title="抱歉，您无权访问此页面" statusCode='403' img={'403'}/>
            </div>
        )
    }
}

export default Error403
