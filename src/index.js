import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers.common['Authorization'] = 'Bearer BQBBdj_nW2HS4kYniT2m_0QSR45J25pH6l_W1Trv60RWPd6902rZcBxPYkqzmluw0E1Pu3wbZksxzPm9KQiw0fFj6nvVQOM5cdf_KD3reGSY4k4L0eplEEl-GSJoAD6qRP8KcdQlML9iJeP5ib8nwTk1hHegohVE5gUICiq8et21jhAYlHNzFG0';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(request => {
  return request;
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
