import React, {useEffect} from 'react';
import {followThunkCreator, getUsersThunkCreator, SearchType, unfollowThunkCreator} from '../model/users-reducer';
import styles from './users.module.css'
import {User} from './user/user';
import Pagination from '@mui/material/Pagination';
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {UsersSearchForm} from "components/users/ui/user-search-form/usersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "components/users/model/users-selectors";
import {useHistory} from "react-router-dom";
import {useWindowSize} from "common/hooks/useWindowSize";

type QueryParamsType = { term?: string; page?: string; friend?: string };
export const Users = () => {

    const [usersRef] = useAutoAnimate<HTMLDivElement>();
    const {windowSize} = useWindowSize()

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(history.location.search.substring(1));
        const parsed = Object.fromEntries(urlSearchParams.entries()) as QueryParamsType;

        let actualPage = currentPage;
        let actualFilter = filter;

        if (!!parsed.page) actualPage = Number(parsed.page);
        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };

        switch (parsed.friend) {
            case 'null':
                actualFilter = { ...actualFilter, friend: null };
                break;
            case 'true':
                actualFilter = { ...actualFilter, friend: true };
                break;
            case 'false':
                actualFilter = { ...actualFilter, friend: false };
                break;
        }
        dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(()=>{
        const query = new URLSearchParams();

        if (!!filter.term) {
            query.set('term', filter.term);
        }
        if (filter.friend !== null) {
            query.set('friend', String(filter.friend));
        }
        if (currentPage !== 1) {
            query.set('page', String(currentPage));
        }

        history.push({
            pathname: '/users',
            search: query.toString(),
        });
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: SearchType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(followThunkCreator(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowThunkCreator(userId))
    }

    return (
        <div className={styles.usersWrapper}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <div ref={usersRef} className={styles.users}>
                {users.map(u => {
                        return (
                            <User key={u.id} follow={follow} unfollow={unfollow} user={u}
                                  followingInProgress={followingInProgress}/>
                        )
                    }
                )}
            </div>
            <div className={styles.pagination}>
                <Pagination count={Math.ceil(totalUsersCount / pageSize)}
                            page={currentPage}
                            onChange={(e: React.ChangeEvent<unknown>, value: number) => onPageChanged(value)}
                            sx={{
                                button: {
                                    borderRadius: '2px',
                                    marginRight: `${windowSize <=600 ? '0' : '20px' }`,
                                    marginLeft: '0px',
                                    width: '24px',
                                    height: '24px',
                                    padding: '4px 8px',
                                    fontSize: `${windowSize <=600 ? '12px' : '14px' }`,
                                    fontWeight: 400,
                                    color: "var(--color)",
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#0066CC',
                                        color: '#fff',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#0066CC',
                                        color: '#fff',
                                    },
                                    '&.MuiPaginationItem-ellipsis': {
                                        color: 'var(--color)',
                                    },
                                },
                            }}
                />
            </div>
        </div>
    )
}

