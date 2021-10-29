import { applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store =  combineReducers({
  reducer: reducer,
  middleware: applyMiddleware(s)
});


sagaMiddleware.run(saga)

export default store