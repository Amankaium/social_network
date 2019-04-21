import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const rerenderEntireTree = (state, addPost, postChange) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            postChange={postChange}
        />,
        document.getElementById('root')
    );
}