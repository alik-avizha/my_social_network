import {ActionsType} from './redux-store';


export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: UserType[] ) => ({type: 'SET-USERS', users}) as const

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    photoUrl: string
    status: string
    location: {city: string, country: string}
}

export type UsersType = {
    users: UserType[]
}

let initialState: UsersType = {
    users: [
        // {id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556487.png', followed: false, fullName: 'Aleksandr', status: 'Hop hey la la ley', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556487.png', followed: true, fullName: 'Viktor', status: 'Hello', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556487.png', followed: false, fullName: 'Dima', status: 'What to do today?', location: {city: 'Moscow', country: 'Russia'}}
    ]
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