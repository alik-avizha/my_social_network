import React from 'react';
import classes from './header.module.css';
import Theme from '../../../common/settings/ui/theme';
import BasicMenu from '../../../common/components/menu/menu';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
    photo: string
}
export const Header = (props: PropsType) => {

    return (
        <header className={classes.header}>
            <Theme/>
            <div>
                {props.isAuth &&
                    <BasicMenu photo={props.photo} logout={props.logout} isAuth={props.isAuth} login={props.login}/>
                }
            </div>
        </header>
    )
}