import {AppThunk} from '../redux-store';

const initState = {
    themeId: 1,
}
export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ThemeActionType):ThemeStateType  => {
    switch (action.type) {
        case 'CHANGE-THEME':
            return {...state, themeId: action.id}
        case 'GET-THEME':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ThemeActionType =
    | ReturnType<typeof changeThemeAC>
    | ReturnType<typeof getThemeAC>

//ActionsCreators
const changeThemeAC = (id: number) => ({ type: 'CHANGE-THEME', id }) as const
const getThemeAC = (id: number) => ({ type: 'GET-THEME', id }) as const

//thunk
export const changeThemeTC = (themeId: number): AppThunk => (dispatch) => {
    localStorage.setItem('theme', JSON.stringify(themeId))
    dispatch(changeThemeAC(themeId))
}

export const getThemeTC = (): AppThunk => (dispatch) => {
    const theme = localStorage.getItem('theme') || '1'
    dispatch(getThemeAC(+theme))
}