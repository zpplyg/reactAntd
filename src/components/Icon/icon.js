import React, { Component } from 'react';

class I3_Icon  extends React.Component {

    constructor (props) {
        super(props);
        
    }
    render () {
        const { type, i3_icon_class } = this.props
        return (
           <i className={`iconfont ${i3_icon_class?i3_icon_class:''} ${'anticon-'+type}`}></i> 
        )
    }
}

export default I3_Icon