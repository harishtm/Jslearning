import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PersonList from './components/promiseexample1';
import PersonAdd from './components/promiseexample2';
import PersonDelete from './components/promiseexample3';

// https://alligator.io/react/axios-react/

ReactDOM.render(<PersonList />, document.getElementById('promise1'));
ReactDOM.render(<PersonAdd />, document.getElementById('promise2'));
ReactDOM.render(<PersonDelete />, document.getElementById('promise3'));

serviceWorker.unregister();
