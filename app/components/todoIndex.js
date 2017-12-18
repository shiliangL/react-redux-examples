import React, { Component } from 'react';
import AddToDo from "../constants/addToDo";
import VisibleTodoList from "../constants/visibilityFilterList";
import FooterLink from "../constants/footer";
class TodoIndex extends Component {
  render() {
    return (
      <div>
        <AddToDo></AddToDo>
        <VisibleTodoList></VisibleTodoList>
        <FooterLink></FooterLink>
      </div>
    );
  }
}

export default TodoIndex;
