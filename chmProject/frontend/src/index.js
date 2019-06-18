import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from 'registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/insurance';

const element = <h1>Hello world</h1>

ReactDOM.render(
  <Counter/>,
  document.getElementById('root')
);
