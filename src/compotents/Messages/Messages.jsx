import React from 'react';
import s from './Messages.module.css';
import {NavLink} from 'react-router-dom'; 
import Dialog from './Dialog';
import Message from './Message';

const Messages = (props) => {

    let dialogData = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Vasya'}
    ]

    let messageData = [
        {id: 1, message: 'Nado prokopat orogod'},
        {id: 2, message: 'Ne potuplia sloi razum. Do not do it for anyone.'}
    ]

    let dialogElements = dialogData.
        map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageElements = messageData.
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
