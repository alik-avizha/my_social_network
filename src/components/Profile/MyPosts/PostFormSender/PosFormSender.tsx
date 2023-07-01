import React, {ChangeEvent, useState} from 'react';
import classes from './PostFormSender.module.css';

type PostFormSenderPropsType = {
    callback: (newMessage: string) => void
}

export const PostFormSender = (props: PostFormSenderPropsType) => {

    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addNewMessageHandler = () => {

        props.callback(value)
        setValue('')
    }

    return (
        <div className={classes.addPostWrapper}>
            <textarea className={classes.textarea} value={value} onChange={onChangeHandler}/>
            <button disabled={value === ''} className={classes.addPost} onClick={addNewMessageHandler}>Send</button>
        </div>
    );
};