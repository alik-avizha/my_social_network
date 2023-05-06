import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.gif'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={logo} alt={'logo'}/>
            <div className={classes.loginBlock}>
                { props.isAuth
                    ? props.login
                    : <NavLink to={'/Login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
