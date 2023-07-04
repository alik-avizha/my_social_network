import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './SenderContent.module.css';
import {Button} from '../Button/Button';

type PostFormSenderPropsType = {
    callback: (newMessage: string) => void
    placeholder: string
}

export const SenderContent = (props: PostFormSenderPropsType) => {

    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addNewContentHandler = () => {
        props.callback(value)
        setValue('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && addNewContentHandler()
    }

    return (
        <div className={classes.addNewContentWrapper}>
            <textarea onKeyPress={onKeyPressHandler} placeholder={props.placeholder}
                      value={value} onChange={onChangeHandler}/>
            <Button name={'send'} callback={addNewContentHandler} disabled={value === ''}/>
        </div>
    );
};