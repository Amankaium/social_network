import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavLinks = () => {
    return (
        <div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href="#">News</a>
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
        </div>
    );
}

export default NavLinks;
