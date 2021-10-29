import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store =  combineReducers({
  reducer: reducer,
  middleware: app
});


sagaMiddleware.run(saga)

export default store