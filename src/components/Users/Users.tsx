import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0 ) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    const followHandler = (userId: number) => {
        props.follow(userId)
    }
    const unfollowHandler = (userId: number) => {
        props.unfollow(userId)
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                     <img src={u.photos.small !== null ? u.photos.small : userPhoto } alt="avatar" className={styles.usersPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={()=>unfollowHandler(u.id)}>UnFollow</button>
                                        : <button onClick={()=>followHandler(u.id)}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                 <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                 </span>
                            </span>
                        </div>
                    )
                }
            )}
        </div>
    );
};
