import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ExampleWay1 from './components/ExampleWay1';
import ExampleWay2 from './components/ExampleWay2';

ReactDOM.render(<ExampleWay1 />, document.getElementById('way1'));
ReactDOM.render(<ExampleWay2 />, document.getElementById('way2'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
