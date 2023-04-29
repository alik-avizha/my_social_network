import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'

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
        props.follow(userId)
    }
    let unfollowHandler = (userId: number) => {
        props.unfollow(userId)
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                          className={styles.usersPhoto}/>
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
