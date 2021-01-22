import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';


import "./index.css";
import App from "./App";
import reducer from './reducers'



const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
console.log(store.getState())

const { worker } = require('./mocks/browser');

worker.start();
const rootElement = document.getElementById("root");

ReactDOM.render(<Provider store={store}> <App /> </Provider>,rootElement);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.