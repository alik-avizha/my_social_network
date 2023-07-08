import {DialogItemType} from '../../components/Dialogs/DialogItem/DialogItem';
import {MessagesType} from '../../components/Dialogs/Messages/Messages';

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessagesType
}
export type DialogsActionsType = ReturnType<typeof addMessageActionCreator>

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Nikita Suzdalev'},
        {id: 2, name: 'Denis Zinkevich'},
        {id: 3, name: 'Leonid Avtuch'},
        {id: 4, name: 'Ilya Grinyak'},
        {id: 5, name: 'Pavel Lopato'},
    ],
    messages: {
        '1': [
            {id: 1, message: 'What are you do?', time: '22:00'},
            {id: 0, message: 'I am fine', time: '22:03'},
            {id: 2, message: 'Go to street?', time: '22:05'},
        ],
        '2': [
            {id: 1, message: 'Hello Sanya', time: '21:15'}
        ],
        '3': [
            {id: 1, message: 'Byu', time: '20:17'}
        ],
        '4': [
            {id: 1, message: 'What about going to bar?', time: '22:10'}
        ],
        '5': [
            {id: 1, message: 'How your studying?', time: '22:24'}
        ]
    }
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case 'DIALOGS-PAGE/ADD-MESSAGE':
            let newMessage = {
                id: 0,
                message: action.newMessageText,
                time: new Date().toTimeString().slice(0, 5)
            }
            return  {
                ...state,
                messages: {...state.messages, [action.dialogsId]: [...state.messages[action.dialogsId], newMessage]}
            }
        default:
            return state
    }
}
//ActionCreators
export const addMessageActionCreator = (dialogsId: string, newMessageText: string) => ({type: 'DIALOGS-PAGE/ADD-MESSAGE', newMessageText, dialogsId}) as const
