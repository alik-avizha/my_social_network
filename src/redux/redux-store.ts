import {applyMiddleware, combineReducers, createStore} from 'redux';
import {addPostActionCreator, profileReducer, setUserProfile, updateNewPostTextActionCreator} from './profile-reducer';
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from './dialogs-reducer';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unfollowAC,
    usersReducer
} from './users-reducer';
import {authReducer, setAuthUserDataAC} from './auth-reducer';
import {sidebarReducer} from './sidebar-reducer';
import thunk from 'redux-thunk'


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
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


// @ts-ignore
window.store = store