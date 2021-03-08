import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="http://www.pngall.com/wp-content/uploads/2016/05/WordPress-Logo-Free-Download-PNG.png"
                 alt="Wikipedia"/>
        </header>
    );
};

export default Header;