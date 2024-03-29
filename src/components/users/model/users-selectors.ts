import {AppStateType} from 'app/model/redux-store';
import {SearchType, UserType} from './users-reducer';
import {createSelector} from 'reselect';

const getUsersSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,(users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress
}
export const getUsersFilter = (state: AppStateType): SearchType => {
    return state.usersPage.filter
}