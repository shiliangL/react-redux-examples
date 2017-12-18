import React, {Component} from 'react'

export default class TodoLists extends Component {
    render() {
        const {todoList} = this.props;
        return (
            <ul>
            {todoList.map(item => {
                return <li
                    style={{
                    textDecoration: item.completed
                        ? "line-through"
                        : "none"
                }}
                    key={item.id}
                    onClick={() => {
                    this.props.onTodoClick(item.id)
                }}>
                    {item.text}
                </li>;
            })}
        </ul>)
    }
}
