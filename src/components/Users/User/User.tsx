import React from 'react';
import styles from './user.module.css'
import userPhoto from '../../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';
import {UserType} from '../../../redux/users/users-reducer';

type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<UsersPropsType> = (props) => {
    const {user, followingInProgress, follow, unfollow} = props

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar"
                             className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => unfollow(user.id)}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>
                    }
                </div>
            </span>
            <span>
                  <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                  </span>
                  <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                  </span>
            </span>
        </div>
    )
}
