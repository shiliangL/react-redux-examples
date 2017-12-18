import {connect} from 'react-redux'
import visibilityFilter from "../reducers/visibilityFilterList";
import TodoLists from '../components/todoLists'
import { toggleToDo } from '../actions';

const getVisibilityFilter = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t=>{t.completed})
        case 'SHOW_ACTIVE':
            return todos.filter(t=>{!t.completed})
        default:
            break;
    }
}
const mapStateToProps = state => {
    return {
        todoList: getVisibilityFilter(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToProps = {
    onTodoClick: toggleToDo
}

const VisibleTodoList =  connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoLists)
export default VisibleTodoList