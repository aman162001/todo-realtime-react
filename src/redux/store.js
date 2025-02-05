import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth";
import todoReducer from "./reducers/todo";
const middleware = [thunk];

const reducer = {
  todo: todoReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer,
  middleware: middleware,
  devTools: import.meta.env.VITE_PRODUCTION === false,
});

export default store;
