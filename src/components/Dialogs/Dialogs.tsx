import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import {DialogsPage} from '../../redux/state';
import MessageItem from './MessageItem/MessageItem';


type DialogsPropsType= {
    dialogsPage: DialogsPage
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = props.dialogsPage.messages
        .map(m => <MessageItem message={m.message} key={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.updateNewMessageText(text)
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}
                          value={props.dialogsPage.newMessage}
                          onChange={onMessageChange}
                />
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    );
};

export default Dialogs;