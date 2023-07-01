import React, {ChangeEvent, useState} from 'react';
import classes from './MessageFormSender.module.css';

type MessageFormSenderPropsType = {
    callback: (newMessage: string) => void
}

export const MessageFormSender = (props: MessageFormSenderPropsType) => {

    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addNewMessageHandler = () => {

        props.callback(value)
        setValue('')
    }

    return (
        <div className={classes.sendForm}>
            <textarea className={classes.textarea} value={value} onChange={onChangeHandler} ></textarea>
            <button disabled={value === ''} className={classes.button} onClick={addNewMessageHandler}>Send</button>
        </div>
    );
};