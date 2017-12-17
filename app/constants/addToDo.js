import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToDo } from "../actions/index";
class AddToDo extends Component {
  render() {
    let input;
    const { dispatch } = this.props
    return (
      <div>
        {/* 添加 */}
        <form onSubmit={e=>{
          e.preventDefault()
          if (!input.value.trim()) {
            return;
          }
          dispatch(addToDo(input.value));
          input.value = '';
        }}>
          <input ref={node=>{
            input = node;
          }}/>
          <button>添加</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddToDo);
