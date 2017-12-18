import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div onClick={()=>{
                console.log(this.props)
            }}>
                底部
            </div>
        )
    }
}
