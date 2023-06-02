import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from '../components/Dialogs/MessageItem/MessageItem';

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageItemType[]
}
export type DialogsActionsType = ReturnType<typeof addMessageActionCreator>

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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 7,
                message: action.newMessageText
            }
            return  {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}
//ActionCreators
export const addMessageActionCreator = (newMessageText: string) => ({type: 'ADD-MESSAGE', newMessageText}) as const

//ThunkCreators
