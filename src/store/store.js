import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { comboseWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import authReducer from "./reducers/auth";
import allProjectsReducer from "./reducers/allProjects";
import singleProjectReducer from "./reducers/singleProject";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

const reducer = combineReducers(); //imported reducers go here in {}
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
