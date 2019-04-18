import React from 'react'
import s from './Navbar.module.css'

const Friend = (props) => {
    return (
        <div>
            <img src="data:image/jpeg;base64,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"/>
            <br/>
            {props.username}
        </div>
    );
} 

export default Friend;
