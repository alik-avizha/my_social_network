import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from 'app/model/redux-store';
import {
    followThunkCreator,
    getUsersThunkCreator,
    SearchType,
    unfollowThunkCreator,
    UserType
} from '../model/users-reducer';
import {Users} from './users';
import {Preloader} from 'common/components';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from '../model/users-selectors';
import {withAuthRedirect} from 'common/hoc';

type MapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    filter: SearchType
}
type MapDispatchTopProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: SearchType) => void
}

type PropsType = MapStateToProps & MapDispatchTopProps

export class UsersContainerSecond extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }
    componentWillUnmount() {
        this.props.getUsers(1, this.props.pageSize, {term: '', friend: null})
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: SearchType) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    onFilterChanged={this.onFilterChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}
let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator,
        getUsers: getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainerSecond)

export default UsersContainer