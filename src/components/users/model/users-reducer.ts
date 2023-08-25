import {Dispatch} from 'redux';
import {ResponseType} from 'common/api/settings-api';
import {updateObjectInArray} from 'common/utils';
import {getFriendsThunkCreator} from '../../sidebar/model/sidebar-reducer';
import {AppThunk} from 'app/model/redux-store';
import {usersAPI} from '../api/users-api';
import {ResultCodesEnum} from 'common/enums';

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string,
        large: string
    }
    followed: boolean
}

export type SearchType = {
    term: string
    friend: boolean | null
}

export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    filter: SearchType
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingProgressAC>
    | ReturnType<typeof setFilterAC>

let initialState: UsersType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    filter: {
        term: '',
        friend: null as null | boolean
    },
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            /*return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}*/
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})}
        case 'USERS/UNFOLLOW':
            /*return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}*/
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})}
        case 'USERS/SET-USERS':
            return {...state, users: action.users}
        case 'USERS/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'USERS/SET-FILTER':
            return {...state, filter: action.payload}
        case 'USERS/SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'USERS/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
//ActionCreators
export const followAC = (userId: number) => ({type: 'USERS/FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'USERS/UNFOLLOW', userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: 'USERS/SET-USERS', users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: 'USERS/SET-CURRENT-PAGE', currentPage}) as const
export const setFilterAC = (filter: SearchType) => ({type: 'USERS/SET-FILTER', payload: filter}) as const
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'USERS/SET-USERS-TOTAL-COUNT', totalCount}) as const
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'USERS/TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
}) as const

//ThunkCreators
export const getUsersThunkCreator = (page: number, pageSize: number, filter: SearchType) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(page));
        dispatch(setFilterAC(filter))

        let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setUsersTotalCountAC(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => Promise<ResponseType>,
                                  actionCreator: (userId: number) => ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgressAC(false, userId))
}

export const followThunkCreator = (userId: number): AppThunk  => {
    return async (dispatch)=> {
        await followUnfollowFlow(dispatch, userId, usersAPI.followToUser.bind(usersAPI), followAC)
        await dispatch(getFriendsThunkCreator())
    }
}

export const unfollowThunkCreator = (userId: number): AppThunk => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollowFromUser.bind(usersAPI), unfollowAC)
        await dispatch(getFriendsThunkCreator())
    }
}
