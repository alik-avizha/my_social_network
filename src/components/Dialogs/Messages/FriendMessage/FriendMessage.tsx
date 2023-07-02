import React from 'react';
import classes from './FriendMessage.module.css';
import messageAva from '../../../../assets/images/user-svgrepo-com.png';


type MainMessagePropsType = {
    message: string
    name: string
    time: string
}

export const FriendMessage = (props: MainMessagePropsType) => {
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
