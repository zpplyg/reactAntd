import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './module/App/App';
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/lib/locale-provider/zh_CN'
import {LocaleProvider} from 'antd';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
      <HashRouter>
        <App />
      </HashRouter>
    </LocaleProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
