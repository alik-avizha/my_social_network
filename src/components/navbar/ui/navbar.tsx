import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from 'react-router-dom';

import {NavigationType, SvgSelectorContacts} from "assets/images/navigation/svgSelectorNav";

const Navbar = () => {

    const navLinks = [
        {to: '/profile', name: 'profile'},
        {to: '/dialogs', name: 'messages'},
        {to: '/users', name: 'users'},
        {to: '/news', name: 'news'},
        {to: '/music', name: 'music'},
    ]

    return (
        <nav className={classes.nav}>
            {navLinks.map((nav,index) => {
                return (
                    <NavLink
                        key={index}
                        to={nav.to}
                        activeClassName={classes.activeLink}
                    >
                        <SvgSelectorContacts svgName={nav.name as NavigationType} />
                        {nav.name}
                    </NavLink>
                )
            })}
        </nav>
    )
}
export default Navbar
