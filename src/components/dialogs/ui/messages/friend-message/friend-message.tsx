import React from 'react';
import classes from './friend-message.module.css';
import messageAva from '../../../../../assets/images/dialogsUser.png';

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
                        {props.name}
                    </div>
                    <pre className={classes.friendMessageText}>
                            {props.message}
                    </pre>
                </div>
            </div>
            <div className={classes.friendTime}>
                {props.time}
            </div>
        </div>
    );
};
