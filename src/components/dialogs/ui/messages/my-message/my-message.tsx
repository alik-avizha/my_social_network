import React from 'react';
import classes from './my-message.module.css';
import messageAva from 'assets/images/dialogsUser.png';

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
                        {props.name !== null ? props.name : 'user Name'}
                    </div>
                    <pre className={classes.myMessageText}>
                        {props.message}
                    </pre>
                </div>
            </div>
            <div className={classes.myTime}>
                {props.time}
            </div>
        </div>
    );
};
