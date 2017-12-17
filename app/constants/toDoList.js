import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleToDo } from '../actions';
class ToDoList extends Component {
  render() {
    const { todoList } = this.props;
    return <ul>
        {todoList.map(item => {
          return <li style={{ textDecoration: item.completed ? "line-through" : "none" }} key={item.id} onClick={()=>{
            this.props.conClickList(item.id)
          }}>
              {item.text}
            </li>;
        })}
      </ul>;
  }
}
// //将 state 中的值映射到 props 中去
const mapStateToProps = state => {
  return { todoList: state.todos };
};

const mapDispatchToProps = {
  conClickList:toggleToDo
}
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);
