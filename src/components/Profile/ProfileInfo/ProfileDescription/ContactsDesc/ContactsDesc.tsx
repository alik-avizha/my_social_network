import React from 'react';
import classes from './ContactsDesc.module.css'

type ContactPropsType = {
    title: string
    value: string
}

export const Contact = (props: ContactPropsType) => {
    return (
        <div className={classes.contactsItem}>
            <span><b>{props.title}: </b>{props.value}</span>
        </div>
    )
}