import {ProfileType} from '../../../../model/profile-reducer';
import React from 'react';
import classes from 'components/profile/ui/profile-info/description/main-info/main-info.module.css'

type PropsType = {
    profile: ProfileType
}
export const MainInfo = (props: PropsType) => {
    return (
        <div className={classes.mainDataWrapper}>
            <span><b>Full Name: </b>{props.profile.fullName}</span>
            <span><b>About me: </b>{props.profile.aboutMe}</span>
            <span><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
            <span><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</span>
        </div>
    )
}