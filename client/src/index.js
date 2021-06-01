import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import App from './App';
import store from './store';

store.subscribe(() => {
  console.table({...store.getState()})
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);