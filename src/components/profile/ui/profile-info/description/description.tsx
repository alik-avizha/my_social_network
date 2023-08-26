import React from 'react';
import classes from './description.module.css'
import {ProfileType} from '../../../model/profile-reducer';
import {Typography} from "@mui/material";

type PropsType = {
    profile: ProfileType
}
export const Description = (props: PropsType) => {
    return (
        <div className={classes.description}>
            <Typography><b>Full Name: </b>{props.profile.fullName}</Typography>
            <Typography><b>About me: </b>{props.profile.aboutMe}</Typography>
            <Typography><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</Typography>
            <Typography><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</Typography>
        </div>
    );
};

