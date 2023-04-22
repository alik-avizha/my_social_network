import {ActionsType} from './redux-store';


export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: UserType[] ) => ({type: 'SET-USERS', users}) as const

export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: { small : string, large: string }
    status: string
}

export type UsersType = {
    users: UserType[]
}

let initialState: UsersType = {
    users: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}