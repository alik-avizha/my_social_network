import React from 'react';
import styles from './user.module.css'
import userPhoto from '../../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';
import {UserType} from '../../../redux/users/users-reducer';
import {Button} from '../../common/Button/Button';

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

            <div className={styles.userName}>{user.name.length > 8 ? user.name.slice(0, 9) + '...' : user.name}</div>
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
