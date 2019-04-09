import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from './components/example1';
import Counter2 from './components/example2';

ReactDOM.render(<Counter />, document.getElementById('example1'));
ReactDOM.render(<Counter2/>, document.getElementById('example2'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
