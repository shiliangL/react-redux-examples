import React, { Component } from 'react';
import AddToDo from "../constants/addToDo";
import ToDoList from "../constants/toDoList";
import Footer from "../constants/footer";
class TodoIndex extends Component {
  render() {
    return (
      <div style={{width: "200px",margin:'0 auto' }}>
        <AddToDo></AddToDo>
        <ToDoList></ToDoList>
        <Footer></Footer>
      </div>
    );
  }
}

export default TodoIndex;
