import React from 'react';
import friendIcon from '../../../assets/images/user.jpg'
import classes from './Friend.module.css'
import {NavLink} from 'react-router-dom';

type FriendPropsType = {
    id: number
    name: string
    photo: string
}

export const Friend = (props: FriendPropsType) => {

    return (
        <div className={classes.contact}>
            <div className={classes.avatar}>
                <img src={props.photo ? props.photo : friendIcon} alt={'friendPhoto'}/>
            </div>
            <div className={classes.contactInfo}>
                <div className={classes.name}>
                    <NavLink to={'/profile/' + props.id}>{props.name}</NavLink>
                </div>
            </div>
        </div>
    );
};
