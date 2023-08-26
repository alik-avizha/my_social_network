import React from 'react';
import classes from './header.module.css';
import Theme from '../../../common/settings/ui/theme';
import BasicMenu from './menu/menu';
import {Typography} from "@mui/material";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
    photo: string
}
export const Header = (props: PropsType) => {

    return (
        <header className={classes.headerBlock}>
            {props.isAuth && <div className={classes.header}>
                <Theme/>
                <div className={classes.userInfo}>
                    <Typography>{props.login}</Typography>
                    <BasicMenu photo={props.photo} logout={props.logout} login={props.login}/>
                </div>
            </div>}
        </header>
    )
}
