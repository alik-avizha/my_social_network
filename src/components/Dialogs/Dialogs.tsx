import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import {ActionsType, DialogsPage} from '../../redux/state';
import MessageItem from './MessageItem/MessageItem';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPage
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = props.dialogsPage.messages
        .map(m => <MessageItem message={m.message} key={m.id}/>)

    let addMessageHandler = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.currentTarget.value) {
            let text = event.currentTarget.value
            props.dispatch(updateNewMessageTextActionCreator(text))
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