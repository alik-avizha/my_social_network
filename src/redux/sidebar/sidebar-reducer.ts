import {UserType} from '../users/users-reducer';
import {Dispatch} from 'redux';
import {usersAPI} from '../../api/api';

export type SidebarActionsType =
    | ReturnType<typeof setFriendsAC>
    | ReturnType<typeof clearDataAC>

export type InitialState = {
    users: UserType[]
}

let initialState: InitialState = {
    users: []
}

export const sidebarReducer = (state: InitialState = initialState, action: SidebarActionsType) => {
    switch (action.type) {
        case 'SIDEBAR/SET-FRIENDS':
            return {...state, users: action.friends}
        case 'SIDEBAR/CLEAR-DATA':
            return {...state, users: []}
        default:
            return state
    }
}
//ActionCreators
export const setFriendsAC = (friends: UserType[]) => ({type: 'SIDEBAR/SET-FRIENDS', friends}) as const
export const clearDataAC = () => ({type: 'SIDEBAR/CLEAR-DATA'}) as const

//ThunkCreators
export const getFriendsThunkCreator = () => {
    return async (dispatch: Dispatch) => {
        let data = await usersAPI.getFriends()
        dispatch(setFriendsAC(data.items))
    }
}
