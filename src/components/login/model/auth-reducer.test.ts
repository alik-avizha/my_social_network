import {
    authReducer,
    getAuthUserDataThunkCreator,
    getCaptchaUrlSuccessAC,
    loginThunkCreator,
    logoutThunkCreator,
    setAuthUserDataAC,
    UserAuthType
} from './auth-reducer';
import {authAPI, AuthResponseData} from "components/login/api/auth-api";
import {ResponseType} from "common/api/settings-api";
import {ResultCodesEnum} from "common/enums";
import {clearDataAC} from "components/sidebar/model/sidebar-reducer";

jest.mock('../api/auth-api')
const authApiMock = authAPI as jest.Mocked<typeof authAPI>

let startState: UserAuthType

const result: ResponseType<AuthResponseData> = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {
        id: 1,
        email: 'string',
        login: 'string',
    },
    fieldsErrors: []
}

beforeEach(() => {

    startState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        captcha: null
    }
})

it('should be get UserInfo', () => {
    const authUserInfo = {
        userId: 1,
        email: 'ivanov@gmail.com',
        login: 'ivan_ivanov',
        isAuth: true
    }

    const endState = authReducer(startState, setAuthUserDataAC(authUserInfo.userId, authUserInfo.login, authUserInfo.email, authUserInfo.isAuth))

    expect(endState.userId).toBe(1);
    expect(endState.email).toBe('ivanov@gmail.com');
    expect(endState.login).toBe('ivan_ivanov');
    expect(endState.isAuth).toBe(true);

    expect(startState.userId).toBe(null);
    expect(startState.email).toBe(null);
    expect(startState.login).toBe(null);
    expect(startState.isAuth).toBe(false);
});

it('should be get Captcha', () => {
    const captcha = 'captcha.url'

    const endState = authReducer(startState, getCaptchaUrlSuccessAC(captcha))

    expect(endState.captcha).toBe(captcha);

    expect(startState.captcha).toBe(null);
});

//thunk tests
test('success getAuthUserData thunk', async () => {
    authApiMock.auth.mockReturnValue(Promise.resolve(result))
    const thunk = getAuthUserDataThunkCreator()
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(1)
    let {id, login, email} = result.data
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setAuthUserDataAC(id, login, email, true));
})

test('success login thunk', async () => {

    const result: ResponseType<{ userId: number }> = {
        resultCode: ResultCodesEnum.Success,
        messages: [],
        data: {
            userId: 1,
        },
        fieldsErrors: []
    }

    authApiMock.logIn.mockReturnValue(Promise.resolve(result))
    const thunk = loginThunkCreator('string', 'string', true, null)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(2)
})

test('success logout thunk', async () => {

    authApiMock.logOut.mockReturnValue(Promise.resolve(result))
    const thunk = logoutThunkCreator()
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setAuthUserDataAC(null, null, null, false));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, clearDataAC());
})

