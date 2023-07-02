const initState = {
    themeId: 1,
}
type InitStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ThemeActionType):InitStateType  => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ThemeActionType = ReturnType<typeof changeThemeIdAC>
export const changeThemeIdAC = (id: number) => ({ type: 'SET_THEME_ID', id })