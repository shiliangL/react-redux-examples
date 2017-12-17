import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";
import TodoIndex from "./components/todoIndex";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Provider store={store}>
         <TodoIndex></TodoIndex>
      </Provider>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
