import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GreeterWay1 from './components/greetWay1';
import GreeterWay2 from './components/greetWay2';

ReactDOM.render(<GreeterWay1 />, document.getElementById('way1'));
ReactDOM.render(<GreeterWay2 />, document.getElementById('way2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();