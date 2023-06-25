import {authReducer, setAuthUserDataAC, UserAuthType} from './auth-reducer';

let startState:UserAuthType

beforeEach(() => {

    startState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    }
})

it('should be get UserInfo', () => {
    const authUserInfo = {
        userId: 1,
        email: 'ivanov@gmail.com',
        login: 'ivan_ivanov',
        isAuth: true
    }

    const endState = authReducer(startState, setAuthUserDataAC(authUserInfo.userId, authUserInfo.login,authUserInfo.email,authUserInfo.isAuth))

    expect(endState.userId).toBe(1);
    expect(endState.email).toBe('ivanov@gmail.com');
    expect(endState.login).toBe('ivan_ivanov');
    expect(endState.isAuth).toBe(true);

    expect(startState.userId).toBe(null);
    expect(startState.email).toBe(null);
    expect(startState.login).toBe(null);
    expect(startState.isAuth).toBe(false);
});
