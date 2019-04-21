import React from 'react';
import {
        changeMessageTextActionCreator,
        addMessageActionCreator
    } from '../../redux/state';


const NewMessage = (props) => {

    let messageRef = React.createRef()
    
    const addMessage = () => {
        let txt = messageRef.current.value;
        props.dispatch(addMessageActionCreator(txt))
    };

    const changeMessageText = () => {
        let txt = messageRef.current.value;
        props.dispatch(changeMessageTextActionCreator(txt));
    };

    return (
        <div>
            <textarea
                ref={messageRef}
                value={props.newMessageText}
                onChange={changeMessageText}/>
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
}

export default NewMessage;