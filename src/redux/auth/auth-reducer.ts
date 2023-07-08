import {authAPI, securityAuthAPI} from '../../api/api';
import {AppThunk} from '../redux-store';
import {stopSubmit} from 'redux-form';
import {clearDataAC, getFriendsThunkCreator} from '../sidebar/sidebar-reducer';

export type UserAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captcha: null | string
}
export type AuthActionsType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof getCaptchaUrlSuccessAC>

let initialState: UserAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

export const authReducer = (state: UserAuthType = initialState, action: AuthActionsType): UserAuthType => {
    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
            return {...state, ...action.data}
        case 'AUTH/GET-CAPTCHA-URL':
            return {...state, captcha: action.url}
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
export const getCaptchaUrlSuccessAC = (url: string | null) => ({
        type: 'AUTH/GET-CAPTCHA-URL',
        url
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

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk => async (dispatch) => {
    let data = await authAPI.logIn(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
        await dispatch(getFriendsThunkCreator())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutThunkCreator = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logOut()
    if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
        dispatch(clearDataAC())
    }
}

export const getCaptchaUrlThunkCreator = (): AppThunk => async (dispatch) => {
    let response = await securityAuthAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccessAC(captchaUrl))
}