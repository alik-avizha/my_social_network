import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import {NavigationType, SvgSelectorContacts} from "common/components/svg-selectors/navigation/svgSelectorNav";
import {Typography} from "@mui/material";
import {useWindowSize} from "common/hooks/useWindowSize";

const Navbar = () => {

    const { windowSize} = useWindowSize()

    const navLinks = [
        {to: '/profile', name: 'profile'},
        {to: '/dialogs', name: 'messages'},
        {to: '/users', name: 'users'},
        {to: '/news', name: 'news'},
        {to: '/music', name: 'music'},
        {to: '/chat', name: 'chat'},
        ...(windowSize <= 1268 ? [{ to: '/friends', name: 'friends' }] : [])
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
                        <Typography variant={"subtitle1"}>{nav.name}</Typography>
                    </NavLink>
                )
            })}
        </nav>
    )
}
export default Navbar
