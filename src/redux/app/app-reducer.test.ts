import {AppInitialType, appReducer, setInitializedSuccess} from './app-reducer';

let startState: AppInitialType

beforeEach(() => {

    startState = {
        initialised: false
    }
})

it('should be changed App Initialised', () => {

    const endState = appReducer(startState, setInitializedSuccess())

    expect(startState.initialised).toBe(false);
    expect(endState.initialised).toBe(true);
});
