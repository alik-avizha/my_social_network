import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Aleksandr" id={1} />
                <DialogItem name="Denis" id={2} />
                <DialogItem name="Nikita" id={3} />
                <DialogItem name="Ivan" id={4} />
                <DialogItem name="Stepan" id={5} />
                <DialogItem name="Viktor" id={6} />
            </div>
            <div className={classes.messages}>
                <Message message='Hello friend' />
                <Message message='How are you do?' />
                <Message message='Byi!' />
            </div>
        </div>
    );
};

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}





export default Dialogs;