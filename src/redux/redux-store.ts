import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from './profile-reducer';
import {DialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {UsersActionsType, usersReducer} from './users-reducer';
import {AuthActionsType, authReducer} from './auth-reducer';
import {sidebarReducer} from './sidebar-reducer';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type ActionsType = ProfileActionsType | DialogsActionsType |UsersActionsType | AuthActionsType

// @ts-ignore
window.store = store