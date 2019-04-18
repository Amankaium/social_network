import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
            </div>
            {/* <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</a>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassname={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</a>
            </div> */}
        </nav>
    );
}

export default Navbar;