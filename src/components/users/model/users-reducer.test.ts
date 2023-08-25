export {}
// import {
//     followAC,
//     followThunkCreator, getUsersThunkCreator,
//     setCurrentPageAC,
//     setUsersAC,
//     setUsersTotalCountAC,
//     toggleIsFetchingAC,
//     toggleIsFollowingProgressAC,
//     unfollowAC,
//     unfollowThunkCreator,
//     usersReducer,
//     UsersType
// } from './users-reducer';
// import {usersAPI, UsersResponseDataType} from '../api/users-api';
// import {ResponseType} from "common/api/settings-api";
// import {ResultCodesEnum} from "common/enums";
//
// jest.mock('../api/users-api')
// const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>
//
// const result: ResponseType<UsersResponseDataType> = {
//     resultCode: ResultCodesEnum.Success,
//     messages: [],
//     data: {
//         items: [
//             {
//                 id: 1,
//                 name: 'string',
//                 status: 'string',
//                 photos: {
//                     small: 'string',
//                     large: 'string',
//                 },
//                 followed: true,
//             }
//         ],
//         error: '',
//         totalCount: 3
//     },
//     fieldsErrors: []
// }
//
// let startState: UsersType
//
// beforeEach(() => {
//     startState = {
//         users: [
//             {
//                 id: 1,
//                 name: 'John',
//                 status: 'Online',
//                 photos: {small: '', large: ''},
//                 followed: false,
//             },
//             {
//                 id: 2,
//                 name: 'Jane',
//                 status: 'Offline',
//                 photos: {small: '', large: ''},
//                 followed: true,
//             },
//         ],
//         pageSize: 5,
//         totalUsersCount: 2,
//         currentPage: 1,
//         isFetching: false,
//         followingInProgress: [],
//     };
// });
//
// test('should follow a user', () => {
//     const userId = 1;
//
//     const action = followAC(userId);
//     const newState = usersReducer(startState, action);
//
//     expect(newState.users[0].followed).toBe(true);
//     expect(newState.users[1].followed).toBe(true);
//     expect(newState.users.length).toBe(2);
// });
//
// test('should unfollow a user', () => {
//     const userId = 2;
//
//     const action = unfollowAC(userId);
//     const newState = usersReducer(startState, action);
//
//     expect(newState.users[0].followed).toBe(false);
//     expect(newState.users[1].followed).toBe(false);
//     expect(newState.users.length).toBe(2);
// });
//
// test('should set users', () => {
//     const users = [
//         {
//             id: 3,
//             name: 'Bob',
//             status: 'Online',
//             photos: {small: '', large: ''},
//             followed: false,
//         },
//     ];
//
//     const action = setUsersAC(users);
//     const newState = usersReducer(startState, action);
//
//     expect(newState.users).toBe(users);
// });
//
// test('should be changed current page', () => {
//
//     const action = setCurrentPageAC(2);
//     const newState = usersReducer(startState, action);
//
//     expect(newState.currentPage).toBe(2);
// });
//
// test('should be changed totalUserCount', () => {
//
//     const action = setUsersTotalCountAC(3);
//     const newState = usersReducer(startState, action);
//
//     expect(newState.totalUsersCount).toBe(3);
// });
//
// test('should toggle isFetching', () => {
//     const isFetching = true;
//
//     const action = toggleIsFetchingAC(isFetching);
//     const newState = usersReducer(startState, action);
//
//     expect(newState.isFetching).toBe(isFetching);
// });
//
// //thunk tests
// test('success follow thunk', async () => {
//     userApiMock.followToUser.mockReturnValue(Promise.resolve(result))
//     const thunk = followThunkCreator(1)
//     const dispatchMock = jest.fn()
//     const getStateMock = jest.fn()
//
//     await thunk(dispatchMock, getStateMock, {})
//
//     expect(dispatchMock).toBeCalledTimes(4)
//     expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowingProgressAC(true, 1));
//     expect(dispatchMock).toHaveBeenNthCalledWith(2, followAC(1));
//     expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingProgressAC(false, 1));
//
//
// })
//
// test('success unfollow thunk', async () => {
//     userApiMock.unfollowFromUser.mockReturnValue(Promise.resolve(result))
//     const thunk = unfollowThunkCreator(2)
//     const dispatchMock = jest.fn()
//     const getStateMock = jest.fn()
//
//     await thunk(dispatchMock, getStateMock, {})
//
//     expect(dispatchMock).toBeCalledTimes(4)
//     expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowingProgressAC(true, 2));
//     expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollowAC(2));
//
//     expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingProgressAC(false, 2));
// })
//
// test('success getUsers thunk', async () => {
//     userApiMock.getUsers.mockReturnValue(Promise.resolve(result.data))
//     const thunk = getUsersThunkCreator(1, 3)
//     const dispatchMock = jest.fn()
//
//     await thunk(dispatchMock)
//
//     expect(dispatchMock).toBeCalledTimes(5)
//     expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetchingAC(true));
//     expect(dispatchMock).toHaveBeenNthCalledWith(2, setCurrentPageAC(1));
//     expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFetchingAC(false));
//
//     expect(dispatchMock).toHaveBeenNthCalledWith(4, setUsersAC(result.data.items));
//     expect(dispatchMock).toHaveBeenNthCalledWith(5, setUsersTotalCountAC(result.data.totalCount));
// })