import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from 'redux'
import { taskReducer } from "./Reducer";
import { rootReducer } from "./RootReducer";

const store = createStore(
  rootReducer
)

export default store;
