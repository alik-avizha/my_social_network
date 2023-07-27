import React from 'react';
import styles from './user.module.css'
import userPhoto from '../../../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';
import {UserType} from '../../model/users-reducer';
import {Button} from 'common/components';

type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<UsersPropsType> = (props) => {
    const {user, followingInProgress, follow, unfollow} = props

    return (
        <div className={styles.userWrapper}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar"
                     className={styles.userPhoto}/>
            </NavLink>
            <span className={styles.userName}>{user.name.length > 8 ? user.name.slice(0, 9) + '...' : user.name}</span>
            <span className={styles.userId}>userId: {props.user.id}</span>
            <div>
                {user.followed
                    ? <Button name={'UnFollow'} callback={() => unfollow(user.id)}
                              disabled={followingInProgress.some(id => id === user.id)}/>
                    : <Button name={'Follow'} callback={() => follow(user.id)}
                              disabled={followingInProgress.some(id => id === user.id)}/>
                }
            </div>
        </div>
    )
}
