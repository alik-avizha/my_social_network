import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import profileIcon from '../../assets/images/profileIcon.svg'
import messagesIcon from '../../assets/images/messages.svg'
import usersIcon from '../../assets/images/usersIcon.svg'
import newsIcon from '../../assets/images/newsIcon.svg'
import musicIcon from '../../assets/images/musicIcon.svg'
import settingsIcon from '../../assets/images/settingsIcon.svg'

const Navbar = () => {

    const navLinks = [
        {to: '/profile', name: 'Profile', src: profileIcon},
        {to: '/dialogs', name: 'Messages', src: messagesIcon},
        {to: '/users', name: 'Users', src: usersIcon},
        {to: '/news', name: 'News', src: newsIcon},
        {to: '/music', name: 'Music', src: musicIcon},
        /*{to: '/settings', name: 'Settings', src: settingsIcon}*/
    ]

    return (
        <nav className={classes.nav}>
            {navLinks.map((nav,index) => {
                return (
                    <NavLink
                        key={index}
                        to={nav.to}
                        activeClassName={classes.activeLink}
                        /*className={index === navLinks.length - 1 ? classes.lastLink : ''}*/
                    >
                        <img src={nav.src} alt={nav.name} className={classes.icon}/>
                        {nav.name}
                    </NavLink>
                )
            })}
        </nav>
    )
}
export default Navbar
