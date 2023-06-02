import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (newMessageText: string) => void
}
type AddMessageFormType = {
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((d, index) => <DialogItem name={d.name} id={d.id} key={index}/>)

    let messagesElements = props.dialogsPage.messages
        .map((m, index) => <MessageItem message={m.message} key={index}/>)

    let addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>

    )
}
const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'AddMessageForm'})(AddMessageForm)