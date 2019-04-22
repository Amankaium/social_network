import React from 'react';
import {
        changeMessageTextActionCreator,
        addMessageActionCreator
    } from '../../redux/state';


const NewMessage = (props) => {

    const addMessage = e => {
        props.dispatch(addMessageActionCreator())
    };

    const changeMessageText = e => {
        let txt = e.target.value;
        props.dispatch(changeMessageTextActionCreator(txt));
    };

    return (
        <div>
            <textarea
                value={props.newMessageText}
                onChange={changeMessageText}
                placeholder="Enter your message"/>
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
}

export default NewMessage;