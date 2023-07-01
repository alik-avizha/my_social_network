import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessagesType} from '../components/Dialogs/Messages/Messages';

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessagesType
}
export type DialogsActionsType = ReturnType<typeof addMessageActionCreator>

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Nikita Suzdalev'},
        {id: 2, name: 'Denis Zinkevich'},
        {id: 3, name: 'Denis Zinkevich'},
        {id: 4, name: 'Denis Zinkevich'},
        {id: 5, name: 'Denis Zinkevich'},
    ],
    messages: {
        '1': [
            {id: 1, message: 'What are you do?', time: '22:00'},
        ],
        '2': [
            {id: 1, message: 'Hello', time: '22:15'}
        ],
        '3': [
            {id: 1, message: 'Hello', time: '22:15'}
        ],
        '4': [
            {id: 1, message: 'Hello', time: '22:15'}
        ],
        '5': [
            {id: 1, message: 'Hello', time: '22:15'}
        ]
    }
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: state.messages[action.dialogsId].length + 1,
                message: action.newMessageText,
                time: new Date().toTimeString().slice(0, 5)
            }
            console.log(state.messages['1'])
            return  {
                ...state,
                messages: {...state.messages, [action.dialogsId]: [...state.messages[action.dialogsId], newMessage]}
            }
        default:
            return state
    }
}
//ActionCreators
export const addMessageActionCreator = (dialogsId: string, newMessageText: string) => ({type: 'ADD-MESSAGE', newMessageText, dialogsId}) as const
