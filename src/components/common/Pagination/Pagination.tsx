import React, {useState} from 'react';
import styles from './pagination.module.css'
import cn from 'classnames'

type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage?: number
    portionSize?: number
}

export const Pagination: React.FC<UsersPropsType> = (props) => {
    const {totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10} = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={cn(styles.paginator)}>
            <button disabled={portionNumber === 1} className={styles.btn} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV
            </button>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={() => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button className={styles.btn}  onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
        </div>
    )
}
