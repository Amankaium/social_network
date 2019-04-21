import React from 'react';
import s from './Messages.module.css';
import {NavLink} from 'react-router-dom'; 
import Dialog from './Dialog';
import Message from './Message';
import NewMessage from './NewMessage';

const Messages = (props) => {

    let dialogElements =
        props.messages.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageElements =
        props.messages.messages.map(m => <Message message={m.message}/>); 

    return (
        <div className={s.messagesContent}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <NewMessage
                    newMessageText={props.messages.newMessageText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}

export default Messages;
