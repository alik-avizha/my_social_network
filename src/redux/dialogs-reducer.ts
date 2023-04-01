import {ActionsType, DialogsPage} from './state';

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}) as const


export const dialogsReducer = (state: DialogsPage, action: ActionsType) => {
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