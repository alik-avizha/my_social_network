import {ProfileType} from '../../../../model/profile-reducer';
import React from 'react';
import classes from './main-data.module.css'

type MainDataPropsType = {
    profile: ProfileType
}

export const MainData = (props: MainDataPropsType) => {
    return (
        <div className={classes.mainDataWrapper}>
            <span><b>Full Name: </b>{props.profile.fullName}</span>
            <span><b>About me: </b>{props.profile.aboutMe}</span>
            <span><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
            <span><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</span>
        </div>
    )
}