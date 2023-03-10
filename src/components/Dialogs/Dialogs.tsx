import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

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
        {id: 6, message: 'Yes.I do'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
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


export default Dialogs;