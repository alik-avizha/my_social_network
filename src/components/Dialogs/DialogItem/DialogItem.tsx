import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';
import dialogAva from '../../../assets/images/user-svgrepo-com.svg'

export type DialogItemType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.item}>
            <NavLink  to={'/dialogs/' + props.id} activeClassName={classes.activeLink}>
                <img src={dialogAva} alt="ava" className={classes.dialogAva}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;