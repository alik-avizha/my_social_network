import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {DialogsPage} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPage
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((d,index) => <DialogItem name={d.name} id={d.id} key={index}/>)

    let messagesElements = props.dialogsPage.messages
        .map((m,index) => <MessageItem message={m.message} key={index}/>)

    let addMessageHandler = () => {
        props.addMessage()
    }
    let onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.currentTarget.value) {
            let text = event.currentTarget.value
            props.updateNewMessageText(text)
        }
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                              value={props.dialogsPage.newMessageText}
                              onChange={onMessageChangeHandler}
                              placeholder={'Enter your message'}
                    />
                    <button onClick={addMessageHandler}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;