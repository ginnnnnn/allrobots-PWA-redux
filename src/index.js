import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // high order function for passing store to components
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { searchRobots, fetchRobotApi } from "./reducers";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

// const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, fetchRobotApi }); //passing obj

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
