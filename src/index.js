import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { addPost, postChange, subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            postChange={postChange}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
