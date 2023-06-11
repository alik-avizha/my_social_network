import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from './profile-reducer';
import {DialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {UsersActionsType, usersReducer} from './users-reducer';
import {AuthActionsType, authReducer} from './auth-reducer';
import {sidebarReducer} from './sidebar-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReducer} from './app-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type ActionsType =
    | ProfileActionsType
    | DialogsActionsType
    | UsersActionsType
    | AuthActionsType
    | FormAction
    | AppActionsType

//typing dispatch for thunks
export type AppDispatchType = ThunkDispatch<AppStateType, any, ActionsType>

//typing thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

// @ts-ignore
window.store = store