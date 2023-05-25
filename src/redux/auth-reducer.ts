import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export type UserAuthType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

let initialState: UserAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: UserAuthType = initialState, action: ActionsType): UserAuthType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}
export const setAuthUserDataAC = (userId: number,  login: string, email: string,) => ({
        type: 'SET-USER-DATA',
        data: {
            userId,
            email,
            login
        }
    }
) as const

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserDataAC(id, login, email))
        }
    })
}