import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SimpleApp from './components/greetWay1'
import GreetWay2 from './components/greetWay2'
import GreetWay3 from './components/greetWay3'


ReactDOM.render(<SimpleApp />, document.getElementById('way1'));
ReactDOM.render(<GreetWay2 />, document.getElementById('way2'));
ReactDOM.render(<GreetWay3 />, document.getElementById('way3'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
