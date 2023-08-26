import React from 'react';
import classes from './dialog-item.module.css'
import {NavLink} from 'react-router-dom';
import dialogAva from 'assets/images/dialogsUser.png'
import {Typography} from "@mui/material";

export type PropsType = {
    name: string,
    id: number
}
const DialogItem = (props: PropsType) => {
    return (
        <div className={classes.item}>
            <NavLink  to={'/dialogs/' + props.id} activeClassName={classes.activeLink}>
                <img src={dialogAva} alt="ava" className={classes.dialogAva}/>
                <Typography variant={'body1'}>{props.name}</Typography>
            </NavLink>
        </div>
    )
}

export default DialogItem;