import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props: any) => {

    let dialogsElements = props.dialogs
        .map((d: { name: string; id: number}) => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = props.messages
        .map((m: { message: string; id: number}) => <Message message={m.message} key={m.id}/>)

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