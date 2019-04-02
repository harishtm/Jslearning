import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GreeterWay1 from './components/greetWay1';
import GreeterWay2 from './components/greetWay2';
import GreeterWay3 from './components/greetWay3';
import GreeterWay4 from './components/greetWay4';
import GreeterWay5 from './components/greetWay5';


ReactDOM.render(<GreeterWay1 />, document.getElementById('way1'));
ReactDOM.render(<GreeterWay2 />, document.getElementById('way2'));
ReactDOM.render(<GreeterWay3/>, document.getElementById('way3'));
ReactDOM.render(<GreeterWay4/>, document.getElementById('way4'));
ReactDOM.render(<GreeterWay5/>, document.getElementById('way5'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
