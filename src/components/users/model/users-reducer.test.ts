import {
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC,
    usersReducer,
    UsersType
} from './users-reducer';


let startState: UsersType

beforeEach(() => {
    startState = {
        users: [
            {
                id: 1,
                name: 'John',
                status: 'Online',
                photos: { small: '', large: '' },
                followed: false,
            },
            {
                id: 2,
                name: 'Jane',
                status: 'Offline',
                photos: { small: '', large: '' },
                followed: true,
            },
        ],
        pageSize: 5,
        totalUsersCount: 2,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    };
});

test('should follow a user', () => {
    const userId = 1;

    const action = followAC(userId);
    const newState = usersReducer(startState, action);

    expect(newState.users[0].followed).toBe(true);
    expect(newState.users[1].followed).toBe(true);
    expect(newState.users.length).toBe(2);
});

test('should unfollow a user', () => {
    const userId = 2;

    const action = unfollowAC(userId);
    const newState = usersReducer(startState, action);

    expect(newState.users[0].followed).toBe(false);
    expect(newState.users[1].followed).toBe(false);
    expect(newState.users.length).toBe(2);
});

test('should set users', () => {
    const users = [
        {
            id: 3,
            name: 'Bob',
            status: 'Online',
            photos: { small: '', large: '' },
            followed: false,
        },
    ];

    const action = setUsersAC(users);
    const newState = usersReducer(startState, action);

    expect(newState.users).toBe(users);
});

test('should be changed current page', () => {

    const action = setCurrentPageAC(2);
    const newState = usersReducer(startState, action);

    expect(newState.currentPage).toBe(2);
});

test('should be changed totalUserCount', () => {

    const action = setUsersTotalCountAC(3);
    const newState = usersReducer(startState, action);

    expect(newState.totalUsersCount).toBe(3);
});

test('should toggle isFetching', () => {
    const isFetching = true;

    const action = toggleIsFetchingAC(isFetching);
    const newState = usersReducer(startState, action);

    expect(newState.isFetching).toBe(isFetching);
});
