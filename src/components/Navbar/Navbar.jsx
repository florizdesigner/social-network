import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' activeClassName={classes.activeClass}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.activeClass}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to='/news' activeClassName={classes.activeClass}>News</NavLink></div>
            <div className={classes.item}><NavLink to='/music' activeClassName={classes.activeClass}>Music</NavLink></div>
            <div className={classes.item}><NavLink to='/settings' activeClassName={classes.activeClass}>Settings</NavLink></div>
            <div className={classes.item}><NavLink to='/users' activeClassName={classes.activeClass}>Users</NavLink></div>
        </div>
    );
};

export default Navbar;