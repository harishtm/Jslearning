import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PersonList from './components/promiseexample1';
import PersonAdd from './components/promiseexample2';

ReactDOM.render(<PersonList />, document.getElementById('promise1'));
ReactDOM.render(<PersonAdd />, document.getElementById('promise2'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
