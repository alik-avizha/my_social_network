import React from 'react';
import classes from './description.module.css'
import {ProfileType} from '../../../model/profile-reducer';

type PropsType = {
    profile: ProfileType
}
export const Description = (props: PropsType) => {
    return (
        <div className={classes.description}>
            <span><b>Full Name: </b>{props.profile.fullName}</span>
            <span><b>About me: </b>{props.profile.aboutMe}</span>
            <span><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
            <span><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</span>
        </div>
    );
};

