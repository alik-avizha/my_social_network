import React from 'react';
import {UserType} from '../../redux/users/users-reducer';
import styles from './users.module.css'
import {User} from './User/User';
import Pagination from '@mui/material/Pagination';

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, pageSize, totalUsersCount, currentPage, follow, unfollow, onPageChanged, followingInProgress} = props

    return (
        <div className={styles.usersWrapper}>
            <div className={styles.pagination}>
                <Pagination count={Math.ceil(totalUsersCount / pageSize)}
                            onChange={(e: React.ChangeEvent<unknown>, value: number) => onPageChanged(value)}/>
            </div>

            <div className={styles.users}>
                {users.map(u => {
                        return (
                            <User key={u.id} follow={follow} unfollow={unfollow} user={u}
                                  followingInProgress={followingInProgress}/>
                        )
                    }
                )}
            </div>
        </div>
    )
}
