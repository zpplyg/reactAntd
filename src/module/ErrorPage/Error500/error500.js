import React from 'react'
import {hashHistory} from 'react-router'
import Component_Page from '../Component/component'

class Error500 extends React.Component{


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
                <Component_Page title="抱歉，服务器出错了" statusCode='500' img={'500'}/>
            </div>
        )
    }
}

export default Error500
