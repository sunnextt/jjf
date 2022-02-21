import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store/index';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://api.tredkjlifters.com/api/v1';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
