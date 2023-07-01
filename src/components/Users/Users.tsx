import React from 'react';
import {UserType} from '../../redux/users/users-reducer';
import styles from './users.module.css'
import {Pagination} from '../common/Pagination/Pagination';
import {User} from './User/User';

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
            <Pagination
                totalItemsCount={totalUsersCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                portionSize={10}
            />
            {users.map(u => {
                    return (
                        <User key={u.id} follow={follow} unfollow={unfollow} user={u}
                              followingInProgress={followingInProgress}/>
                    )
                }
            )}
        </div>
    )
}
