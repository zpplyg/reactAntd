import React from 'react'
import './component.less'
import {hashHistory} from 'react-router'
import errorImg from '../../Public/assets/img/404.png'
class ComponentPage extends React.Component{


    handleClick=()=>{
        // hashHistory.push('/')
        const path=window.location.host+'/login'
        window.location.href ='/login'
        // const win = window.open(path);
        // win.focus();
    }

    render(){
        const { title, statusCode, img } = this.props
        return(
            <div id="error404-content">
                <div className = "i3-ui-page-con">
                    <div className="i3-ui-error-img">
                        <img src = {require(`../../Public/assets/img/${img}.png`)} className="i3-ui-img"/>
                    </div>
                    <div className="message">

                        <span className="number">
                            {statusCode}
                        </span>
                        <span className="detial">
                            {title}
                        </span>

                        <input className="button" type="button" value="返回首页" onClick={this.handleClick}/>

                    </div>
                </div> 
            </div>
        )
    }
}

export default ComponentPage
