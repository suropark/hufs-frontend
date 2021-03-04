import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducer/index';
import PromiseMiddleware from 'redux-promise';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware,
  ReduxThunk,
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);
