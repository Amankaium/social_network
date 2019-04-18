import React from 'react'
import s from './Navbar.module.css'
import Friend from './Friend';

const Friends = (props) => {
    return (
        <div className={s.fav}>
            <Friend username={props.users[0].name}/>
            <Friend username={props.users[2].name}/>
        </div>    
    );
}

export default Friends;
