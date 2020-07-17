import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Component/Counter/Counter';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer/rootReducer';

const store = createStore(rootReducer);

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
