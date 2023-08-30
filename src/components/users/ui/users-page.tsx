import React from 'react';
import {useSelector} from 'react-redux';
import {Users} from './users';
import {Preloader} from 'common/components';
import {getIsFetching} from '../model/users-selectors';
import {AppStateType} from "app/model/redux-store";
import {Redirect} from "react-router-dom";


const  UsersPage = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const isFetching = useSelector(getIsFetching)

    if (!isAuth) {
        return <Redirect to="/login"/>
    }

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
