import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.gif'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
    photo: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={logo} alt={'logo'}/>
            <div className={classes.loginBlock}>
                { props.isAuth
                    ? <div>{props.login && <img src={props.photo} alt="loginAvatar"/>} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/Login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
