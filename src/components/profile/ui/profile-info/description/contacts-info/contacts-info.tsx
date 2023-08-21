import React from 'react';
import classes from 'components/profile/ui/profile-info/description/contacts-info/contacts-info.module.css'

type PropsType = {
    title: string
    value: string
}
export const ContactInfo = (props: PropsType) => {
    return (
        <div className={classes.contactsItem}>
            <span><b>{props.title}: </b>
                <a target="_blank" rel="noreferrer" href={props.value}>{props.value}</a>
            </span>
        </div>
    )
}