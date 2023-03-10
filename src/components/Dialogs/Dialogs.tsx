import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';



type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Stepan'},
        {id: 6, name: 'Viktor'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello friend'},
        {id: 2, message: 'How are you do?'},
        {id: 3, message: 'Byi'},
        {id: 4, message: 'How do you feel?'},
        {id: 5, message: 'Hey'},
        {id: 6, message: 'Yes.I do'}
    ]

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = messagesData
        .map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;