import React from 'react'
import './error404.less'
import {hashHistory} from 'react-router'

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
                <div className="e-img"/>
                <div className="message">

                    <span className="number">
                        404
                    </span>
                    <span className="detial">
                        抱歉，您访问的页面不存在
                    </span>

                    <input className="button" type="button" value="返回首页" onClick={this.handleClick}/>

                </div>
            </div>
        )
    }
}

export default Error404
