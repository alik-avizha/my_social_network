import {AppThunk} from './redux-store';
import {getAuthUserDataThunkCreator} from './auth-reducer';

export type AppInitialType = {
    initialised: boolean
}
export type AppActionsType = ReturnType<typeof setInitializedSuccess>

let initialState: AppInitialType = {
    initialised: false
}

export const appReducer = (state: AppInitialType = initialState, action: AppActionsType): AppInitialType => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS':
            return {...state, initialised: true}
        default:
            return state
    }
}

//ActionCreators
export const setInitializedSuccess = () => ({
        type: 'SET-INITIALIZED-SUCCESS'
    }
) as const

//ThunkCreators
export const initializeAppThunkCreator = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserDataThunkCreator())

    dispatch(setInitializedSuccess())
}
