import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import ApplicationsReducer from "./redux/State";
import rootSaga from "./redux/Saga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    applications: ApplicationsReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
