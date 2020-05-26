import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './MenuBar';
import Top from './Top';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MenuBar />
  </React.StrictMode>,
  document.getElementById('menubar')
);

ReactDOM.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
  document.getElementById('top')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
