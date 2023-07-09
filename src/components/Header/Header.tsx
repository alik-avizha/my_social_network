import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Settings from '../Settings/Settings';
import BasicMenu from '../common/Menu/Menu';
import {Button} from '../common/Button/Button';

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
            <div>
                {props.isAuth
                    ?  <BasicMenu photo={props.photo} logout={props.logout} isAuth={props.isAuth} login={props.login} />

                    : <NavLink to={'/Login'}>
                        <Button name={'sign in'} />
                      </NavLink>
                }
            </div>
        </header>
    )
}
