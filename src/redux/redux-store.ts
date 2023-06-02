import {applyMiddleware, combineReducers, createStore} from 'redux';
import {
    addPostActionCreator, profileReducer, setStatusActionCreator, setUserProfileActionCreator,
    updateNewPostTextActionCreator
} from './profile-reducer';
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from './dialogs-reducer';
import {
    followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unfollowAC, usersReducer
} from './users-reducer';
import {authReducer, setAuthUserDataAC} from './auth-reducer';
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

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfileActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof toggleIsFollowingProgressAC>
    | ReturnType<typeof setStatusActionCreator>

// @ts-ignore
window.store = store