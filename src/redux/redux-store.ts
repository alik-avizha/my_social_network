import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from './profile/profile-reducer';
import {DialogsActionsType, dialogsReducer} from './dialogs/dialogs-reducer';
import {UsersActionsType, usersReducer} from './users/users-reducer';
import {AuthActionsType, authReducer} from './auth/auth-reducer';
import {SidebarActionsType, sidebarReducer} from './sidebar/sidebar-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReducer} from './app/app-reducer';

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


//export const store = createStore(rootReducer, applyMiddleware(thunk))

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type ActionsType =
    | ProfileActionsType
    | DialogsActionsType
    | UsersActionsType
    | AuthActionsType
    | FormAction
    | AppActionsType
    | SidebarActionsType

//typing dispatch for thunks
export type AppDispatchType = ThunkDispatch<AppStateType, any, ActionsType>

//typing thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

// @ts-ignore
//window.store = store