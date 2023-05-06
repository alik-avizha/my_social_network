import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}


export const Users = (props: UsersPropsType) => {

    let followHandler = (userId: number) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '594e8ece-c3d0-41d5-adc9-eca0a193295b'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(userId)
                }
            })
    }
    let unfollowHandler = (userId: number) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '594e8ece-c3d0-41d5-adc9-eca0a193295b'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(userId)
                }
            })
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersWrapper}>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                         <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                              className={styles.usersPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => unfollowHandler(u.id)}>UnFollow</button>
                                        : <button onClick={() => followHandler(u.id)}>Follow</button>
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
