import React from 'react';
import s from './Messages.module.css';
import {NavLink} from 'react-router-dom'; 
import Dialog from './Dialog';
import Message from './Message';

const Messages = (props) => {

    let dialogElements = props.dialogData.
        map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageElements = props.messageData.
        map(m => <Message message={m.message}/>); 

    return (
        <div className={s.messagesContent}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Messages;
