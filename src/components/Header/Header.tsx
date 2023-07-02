import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logoOut from '../../assets/images/logout-svgrepo-com.svg'
import logoIn from '../../assets/images/login-svgrepo-com.svg'
import Settings from '../Settings/Settings';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
    photo: string
}

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={classes.header}>
            <Settings/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.photo
                        ? <img src={props.photo} alt="loginAvatar"/>
                        : props.login} <img src={logoOut} alt={'logOut'} className={classes.imgLog}
                                            onClick={props.logout}/>
                    </div>
                    : <NavLink to={'/Login'}>
                        <img src={logoIn} alt={'logIn'} className={classes.imgLog} />
                      </NavLink>
                }
            </div>
        </header>
    )
}
