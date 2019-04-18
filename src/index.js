import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {message: 'text of post one', rating: -3},
    {message: 'cat and dog are pets duh', rating: 21}
]

let dialogData = [
    {id: 1, name: 'Oleg'},
    {id: 2, name: 'Vasya'}
]

let messageData = [
    {id: 1, message: 'Nado prokopat orogod'},
    {id: 2, message: 'Ne potuplia sloi razum. Do not do it for anyone.'}
]

ReactDOM.render(
    <App postData={postData} dialogData={dialogData} messageData={messageData}/>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
