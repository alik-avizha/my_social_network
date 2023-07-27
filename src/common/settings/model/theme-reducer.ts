import {AppThunk} from 'app/model/redux-store';

const initState = {
    themeId: 1,
}
export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ThemeActionType):ThemeStateType  => {
    switch (action.type) {
        case 'SETTINGS/CHANGE-THEME':
            return {...state, themeId: action.id}
        case 'SETTINGS/GET-THEME':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ThemeActionType =
    | ReturnType<typeof changeThemeAC>
    | ReturnType<typeof getThemeAC>

//ActionsCreators
export const changeThemeAC = (id: number) => ({ type: 'SETTINGS/CHANGE-THEME', id }) as const
export const getThemeAC = (id: number) => ({ type: 'SETTINGS/GET-THEME', id }) as const

//ThunkCreators
export const changeThemeTC = (themeId: number): AppThunk => (dispatch) => {
    localStorage.setItem('theme', JSON.stringify(themeId))
    dispatch(changeThemeAC(themeId))
}

export const getThemeTC = (): AppThunk => (dispatch) => {
    const theme = localStorage.getItem('theme') || '1'
    dispatch(getThemeAC(+theme))
}