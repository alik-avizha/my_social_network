import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducers)

