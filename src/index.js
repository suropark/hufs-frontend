import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer, { rootSaga } from './_reducer/index';
import PromiseMiddleware from 'redux-promise';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware,
  ReduxThunk,
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);
sagaMiddleware.run(rootSaga); // 리덕스 사가 미들웨어 실행
