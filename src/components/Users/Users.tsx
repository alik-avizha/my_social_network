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

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    followHandler = (userId: number) => {
        this.props.follow(userId)
    }
    unfollowHandler = (userId: number) => {
        this.props.unfollow(userId)
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                          className={styles.usersPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => this.unfollowHandler(u.id)}>UnFollow</button>
                                        : <button onClick={() => this.followHandler(u.id)}>Follow</button>
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
        )
    }
}

