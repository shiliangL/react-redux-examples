import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <span style={{cursor: 'pointer'}}>全部</span>
        <span style={{margin:'0 10px',cursor: 'pointer'}}>待完成</span>
        <span style={{cursor: 'pointer'}}>完成</span>
      </div>
    );
  }
}

export default Footer;
