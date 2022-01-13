import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import 'intro.js/introjs.css';
import './styleku/global.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

