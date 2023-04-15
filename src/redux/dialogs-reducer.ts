import {ActionsType, DialogsPage} from './store';

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}) as const

let initialState = {
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


export const dialogsReducer = (state: DialogsPage = initialState, action: ActionsType): DialogsPage => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}