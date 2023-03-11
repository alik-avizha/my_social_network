import React from 'react';
import classes from './../Dialogs.module.css'


export type MessageItemType = {
    id?: number
    message: string
}

const MessageItem = (props: MessageItemType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default MessageItem;