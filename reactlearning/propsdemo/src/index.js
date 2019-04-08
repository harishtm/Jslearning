import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ExampleWay1 from './components/ExampleWay1';
import ExampleWay2 from './components/ExampleWay2';
import ExampleWay3 from './components/ExampleWay3';
import Amount from './components/ExampleWay4'
import ConvertAmount from './components/ExampleWay5';

ReactDOM.render(<ExampleWay1 />, document.getElementById('way1'));
ReactDOM.render(<ExampleWay2 />, document.getElementById('way2'))
ReactDOM.render(<ExampleWay3/>, document.getElementById('way3'));
ReactDOM.render(<Amount/>, document.getElementById('way4'));
ReactDOM.render(<ConvertAmount/>, document.getElementById('way5'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
