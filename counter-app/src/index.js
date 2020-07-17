import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Component/Counter/Counter';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './store/reducer/rootReducer';
import counterReducer from './store/reducer/counter.reducer';
import resultReducer from './store/reducer/result.reducer';
import logger from './store/middleware/logger';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ctr : counterReducer,
  res : resultReducer
})

// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
    <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
