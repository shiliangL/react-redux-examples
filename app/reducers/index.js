import { combineReducers } from "redux";
import todos from "./todo";
import visibilityFilter from "./visibilityFilterList";
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
export default todoApp;
