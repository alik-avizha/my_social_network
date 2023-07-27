import {clearDataAC, InitialState, setFriendsAC, sidebarReducer} from './sidebar-reducer';
import {UserType} from '../../users/model/users-reducer';

let initialState: InitialState;

beforeEach(() => {
    initialState = {
        users: [
            {
                id: 1,
                name: 'John',
                status: 'Online',
                photos: {small: '', large: ''},
                followed: false,
            },
            {
                id: 2,
                name: 'Jane',
                status: 'Offline',
                photos: {small: '', large: ''},
                followed: true,
            },
        ]
    };
});

it('should set friends in state when calling setFriendsAC', () => {
    const friends: UserType[] = [
        {
            id: 3,
            name: 'Mike',
            status: 'Online',
            photos: {small: '', large: ''},
            followed: false,
        },
        {
            id: 4,
            name: 'Kate',
            status: 'Offline',
            photos: {small: '', large: ''},
            followed: true,
        },
    ];

    const action= setFriendsAC(friends);
    const newState = sidebarReducer(initialState, action);

    expect(newState.users).toEqual(friends);
});

it('should clear friends in state when calling clearDataAC', () => {
    const action = clearDataAC();
    const newState = sidebarReducer(initialState, action);

    expect(newState.users).toEqual([]);
});

it('should return the same state for unknown action types', () => {
    const action = {type: 'UNKNOWN'} as any;
    const newState = sidebarReducer(initialState, action);

    expect(newState).toEqual(initialState);
});