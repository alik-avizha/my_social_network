import {authAPI} from '../../api/api';
import {AppThunk} from '../redux-store';
import {stopSubmit} from 'redux-form';

export type UserAuthType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>

let initialState: UserAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: UserAuthType = initialState, action: AuthActionsType): UserAuthType => {
    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}
//ActionCreators
export const setAuthUserDataAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'AUTH/SET-USER-DATA',
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
) as const

//ThunkCreators
export const getAuthUserDataThunkCreator = (): AppThunk => async (dispatch) => {
    let response = await authAPI.auth()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    let data = await authAPI.logIn(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutThunkCreator = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logOut()
    if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}
