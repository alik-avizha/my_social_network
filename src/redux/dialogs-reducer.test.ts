/*
import {addMessageActionCreator, DialogsPageType, dialogsReducer} from './dialogs-reducer';

let startState: DialogsPageType

beforeEach(() => {

    startState = {
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
})

it('should be added message', () => {
    const newMessage = 'new post'

    const endState = dialogsReducer(startState, addMessageActionCreator(newMessage))

    expect(endState.messages.length).toBe(7);
    expect(endState.messages[endState.messages.length-1].message).toBe('new post');

    expect(startState.messages.length).toBe(6);
    expect(startState.messages[startState.messages.length-1].message).toBe('Yes.I do');

});
*/
export {}
