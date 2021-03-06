import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import $ from "jquery";
import yall from 'yall-js';

import allReducers from './reducers/index';
import Routes from './routes.jsx';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
  allReducers,
  applyMiddleware(thunk )
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,document.getElementById('root')
);
