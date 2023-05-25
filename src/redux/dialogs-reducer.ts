import {ActionsType} from './redux-store';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from '../components/Dialogs/MessageItem/MessageItem';

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageItemType[]
    newMessageText: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Stepan'},
        {id: 6, name: 'Viktor'}
    ],
    messages: [
        {id: 1, message: 'Hello friend'},
        {id: 2, message: 'How are you do?'},
        {id: 3, message: 'Byi'},
        {id: 4, message: 'How do you feel?'},
        {id: 5, message: 'Hey'},
        {id: 6, message: 'Yes.I do'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }
            return  {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newText }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}) as const