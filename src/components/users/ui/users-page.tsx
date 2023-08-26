import React from 'react';
import {useSelector} from 'react-redux';
import {Users} from './users';
import {Preloader} from 'common/components';
import {getIsFetching} from '../model/users-selectors';


const  UsersPage = () => {

    const isFetching = useSelector(getIsFetching)

    return (
        <>
            {isFetching
                ? <Preloader/>
                : null}
            <Users />
        </>
    )
}

export default UsersPage
