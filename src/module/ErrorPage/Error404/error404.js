import React from 'react'
import {hashHistory} from 'react-router'
import Component_Page from '../Component/component'

class Error404 extends React.Component{


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
                <Component_Page title="抱歉，您访问的页面不存在" statusCode='404' img={'404'}/>
            </div>
        )
    }
}

export default Error404
