import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

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
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}
//ActionCreators
export const setAuthUserDataAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'SET-USER-DATA',
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
) as const

//ThunkCreators
export const getAuthUserDataThunkCreator = (): AppThunk => (dispatch) => {
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserDataAC(id, login, email, true))
        }
    })
}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator())
        }
    })
}
export const logoutThunkCreator = (): AppThunk => (dispatch) => {
    authAPI.logOut().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    })
}