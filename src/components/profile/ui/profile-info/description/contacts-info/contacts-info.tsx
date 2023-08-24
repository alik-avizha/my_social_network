import React from 'react';
import classes from 'components/profile/ui/profile-info/description/contacts-info/contacts-info.module.css'
import {ContactsType, SvgSelectorContacts} from "assets/images/contacts/svgSelector";

type PropsType = {
    title: ContactsType
    value: string
}
export const ContactInfo = (props: PropsType) => {
    return (
        <a target="_blank" rel="noreferrer" href={props.value} className={classes.contactItem}>
            <SvgSelectorContacts svgName={props.title}/>
        </a>
    )
}