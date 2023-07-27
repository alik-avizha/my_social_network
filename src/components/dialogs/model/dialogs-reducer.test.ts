import { addMessageActionCreator, DialogsPageType, dialogsReducer } from './dialogs-reducer';

let startState: DialogsPageType;

beforeEach(() => {
    startState = {
        dialogs: [
            { id: 1, name: 'Aleksandr' },
            { id: 2, name: 'Denis' },
            { id: 3, name: 'Nikita' },
            { id: 4, name: 'Ivan' },
            { id: 5, name: 'Stepan' },
            { id: 6, name: 'Viktor' },
        ],
        messages: {
            '1': [
                { id: 1, message: 'Hello friend', time: '08:00' },
                { id: 2, message: 'How are you do?', time: '10:00' },
                { id: 3, message: 'Byi', time: '12:00' },
            ],
            '2': [
                { id: 4, message: 'How do you feel?', time: '14:00' },
                { id: 5, message: 'Hey', time: '16:00' },
                { id: 6, message: 'Yes.I do', time: '18:00' },
            ],
        },
    };
});

it('should add new message to messages', () => {
    const newMessageText = 'new post';
    const dialogsId = '1';

    const endState = dialogsReducer(startState, addMessageActionCreator(dialogsId, newMessageText));

    expect(endState.messages[dialogsId].length).toBe(startState.messages[dialogsId].length + 1);
    expect(endState.messages[dialogsId][endState.messages[dialogsId].length - 1].message).toBe(newMessageText);
});

it('should not modify start state', () => {
    const newMessageText = 'new post';
    const dialogsId = '1';

    const endState = dialogsReducer(startState, addMessageActionCreator(dialogsId, newMessageText));

    expect(endState).not.toBe(startState);
    expect(endState.dialogs).toBe(startState.dialogs);
    expect(endState.messages).not.toBe(startState.messages);
});