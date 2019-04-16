import React from 'react';
import s from './Messages.module.css';
import {NavLink} from 'react-router-dom'; 

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}        
        </div>     
    );
}

const Messages = (props) => {
    return (
        <div className={s.messagesContent}>
            <div className={s.dialogs}>
                <Dialog name='Oleg' id='1'/>
                <Dialog name='Vasya' id='2'/>
            </div>
            <div className={s.messages}>
                <Message message='Nado prokopat orogod'/>
                <Message message='Ne potuplia sloi razum. Do not do it for anyone.'/>
            </div>
        </div>
    );
}

export default Messages;
