import {changeThemeAC, getThemeAC, themeReducer, ThemeStateType} from './theme-reducer';


let initialState: ThemeStateType;

beforeEach(() => {
    initialState = {
        themeId: 1,
    };
});

it('should change themeId to new value when calling changeThemeAC', () => {
    const newThemeId = 2;
    const action = changeThemeAC(newThemeId);
    const newState = themeReducer(initialState, action);

    expect(newState.themeId).toBe(newThemeId);
});

it('should set themeId from localStorage when calling getThemeAC', () => {
    const themeFromLocalStorage = 2;
    localStorage.setItem('theme', JSON.stringify(themeFromLocalStorage));

    const action = getThemeAC(themeFromLocalStorage);
    const newState = themeReducer(initialState, action);

    expect(newState.themeId).toBe(themeFromLocalStorage);
});