import React from 'react';
import classes from './my-message.module.css';
import messageAva from 'assets/images/dialogsUser.png';
import {Typography} from "@mui/material";

type PropsType = {
    message: string
    name: string | null
    time: string
    photo: string
}
export const MyMessage = (props: PropsType) => {
    return (
        <div className={classes.myMessage}>
            <div className={classes.myImageAndText}>
                <img className={classes.myAvatar} alt={'myAvatar'}
                     src={props.photo ? props.photo : messageAva}
                />
                <div className={classes.myText}>
                    <div className={classes.myName}>
                        <Typography variant={"subtitle1"}>{props.name !== null ? props.name : 'user Name'}</Typography>
                    </div>
                    <pre className={classes.myMessageText}>
                        <Typography variant={"body2"}>{props.message}</Typography>
                    </pre>
                </div>
            </div>
            <div className={classes.myTime}>
                {props.time}
            </div>
        </div>
    );
};
