import React from 'react';
import NavLinks from './NavLinks';
import Friends from './Friends';
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <NavLinks/>
            <br/>
            <hr/>
            Friends
            <hr/>
            <Friends users={props.users}/>
        </nav>
    );
}

export default Navbar;
