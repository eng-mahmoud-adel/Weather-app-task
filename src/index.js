import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// this is for using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// this is for using redux
import {Provider} from 'react-redux';
import {BrowserRouter, withRouter} from 'react-router-dom';
import store from './Store/Store';

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppWithRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
