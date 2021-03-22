import React from "react";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./slice/RootSlice";
import rootSaga from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware(); 
const initialState = {};
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const PostStore = configureStore({
  
  reducer: rootReducer,
  devTools: true,
  preloadedState: initialState,
  middleware
});


sagaMiddleware.run(rootSaga);



export default PostStore;
