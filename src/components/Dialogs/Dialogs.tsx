import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import {DialogsPage} from '../../redux/state';
import MessageItem from './MessageItem/MessageItem';


type DialogsPropsType= {
    state: DialogsPage
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <MessageItem message={m.message} key={m.id}/>)

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