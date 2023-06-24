import React from 'react';
import styles from './pagination.module.css'

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

export const Pagination: React.FC<UsersPropsType> = (props) => {
    const {totalUsersCount,pageSize,onPageChanged,currentPage} = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? styles.selectedPage : ''} onClick={() => {
                    onPageChanged(p)
                }}>{p}</span>
            })}
        </div>

    )
}
