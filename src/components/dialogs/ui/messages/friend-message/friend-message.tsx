import React from 'react';
import classes from './friend-message.module.css';
import messageAva from 'assets/images/dialogsUser.png';
import {Typography} from "@mui/material";

type PropsType = {
    message: string
    name: string
    time: string
}
export const FriendMessage = (props: PropsType) => {
    return (
        <div  className={classes.friendMessage}>
            <div className={classes.friendImageAndText}>
                <img className={classes.friendAvatar}
                     src={messageAva}
                     alt={'friendAvatar'}
                />
                <div className={classes.friendText}>
                    <div  className={classes.friendName}>
                        <Typography variant={"subtitle1"}>{props.name}</Typography>
                    </div>
                    <pre className={classes.friendMessageText}>
                        <Typography variant={"body2"}>{props.message}</Typography>
                    </pre>
                </div>
            </div>
            <div className={classes.friendTime}>
                {props.time}
            </div>
        </div>
    );
};
