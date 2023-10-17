import React from 'react';
import friendIcon from '../../../../assets/images/user.jpg'
import classes from './friend.module.css'
import {NavLink} from 'react-router-dom';
import {Typography} from "@mui/material";
import {unfollowThunkCreator} from "components/users/model/users-reducer";
import {useDispatch} from "react-redux";

type FriendPropsType = {
    id: number
    name: string
    photo: string
}

export const Friend = (props: FriendPropsType) => {

    const dispatch = useDispatch()
    const unfollow = (userId: number) => {
        dispatch(unfollowThunkCreator(userId))
    }

    return (
        <div className={classes.contact}>
            <div className={classes.avatar}>
                <img src={props.photo ? props.photo : friendIcon} alt={'friendPhoto'}/>
            </div>
            <div className={classes.contactInfo}>
                <div className={classes.name}>
                    <NavLink
                        to={'/profile/' + props.id}>
                        <Typography>{props.name.length > 13 ? props.name.slice(0, 14) + '...' : props.name}</Typography>
                    </NavLink>

                </div>
            </div>
            <button className={classes.unFollow} onClick={()=>unfollow(props.id)}>X</button>
        </div>
    );
};
