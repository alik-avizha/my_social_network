import {ActionsType} from './redux-store';

export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: { small: string, large: string }
    status: string
}
export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount}) as const
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
}) as const
