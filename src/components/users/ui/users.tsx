import React from 'react';
import {UserType} from '../model/users-reducer';
import styles from './users.module.css'
import {User} from './user/user';
import Pagination from '@mui/material/Pagination';

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}
export const Users: React.FC<PropsType> = (props) => {
    const {users, pageSize, totalUsersCount, currentPage, follow, unfollow, onPageChanged, followingInProgress} = props

    return (
        <div className={styles.usersWrapper}>
            <div className={styles.pagination}>
                <Pagination count={Math.ceil(totalUsersCount / pageSize)}
                            onChange={(e: React.ChangeEvent<unknown>, value: number) => onPageChanged(value)}
                            sx={{
                                button: {
                                    borderRadius: '2px',
                                    marginRight: '20px',
                                    marginLeft: '0px',
                                    width: '24px',
                                    height: '24px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#0066CC',
                                        color: '#fff',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#0066CC',
                                        color: '#fff',
                                    },
                                },
                            }}
                />
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
