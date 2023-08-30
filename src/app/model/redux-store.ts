import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from 'components/profile/model/profile-reducer';
import {DialogsActionsType, dialogsReducer} from 'components/dialogs/model/dialogs-reducer';
import {UsersActionsType, usersReducer} from 'components/users/model/users-reducer';
import {AuthActionsType, authReducer} from 'components/login/model/auth-reducer';
import {SidebarActionsType, sidebarReducer} from 'components/sidebar/model/sidebar-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReducer} from './app-reducer';
import {ThemeActionType, themeReducer} from 'common/settings/model/theme-reducer';
import {ChatActionsType, chatReducer} from "components/chat/model/chat-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    form: formReducer,
    theme: themeReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

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
    | ThemeActionType
    | ChatActionsType

//typing dispatch for thunks
export type AppDispatchType = ThunkDispatch<AppStateType, any, ActionsType>

//typing thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

// @ts-ignore
//window.store = store