import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ApplicationsReducer from "./reducers/app-reducer";
import rootSaga from "./saga.js";

const saga = createSagaMiddleware();
const reducers = combineReducers({ applications: ApplicationsReducer });

export const store = configureStore({
  reducer: reducers,
  middleware: [saga],
});

saga.run(rootSaga);
