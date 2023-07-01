/*
import {
    addPostActionCreator,
    ProfilePageType,
    profileReducer, removePostActionCreator,
    setStatusActionCreator,
    setUserProfileActionCreator
} from './profile-reducer';

let startState: ProfilePageType

beforeEach(() => {

    startState = {
        posts: [
            {id: '1', message: 'Hi', likesCount: 13},
            {id: '2', message: 'My name is Alex', likesCount: 5},
            {id: '3', message: 'How are you?', likesCount: 25}
        ],
        profile: {
            aboutMe: 'I am front-end developer',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 28769,
            photos: {
                small: '',
                large: '',
            }
        },
        status: ''
    }
})

it('correct post should be added', () => {
    const newPost = 'new post'

    const endState = profileReducer(startState, addPostActionCreator(newPost))

    expect(endState.posts.length).toBe(4);
    expect(endState.posts[0].message).toBe('new post');
    expect(endState.posts[0].likesCount).toBe(0);

    expect(startState.posts.length).toBe(3);
    expect(startState.posts[0].message).toBe('Hi');
    expect(startState.posts[0].likesCount).toBe(13);
});

it('should update user profile in the state', () => {
    const newProfile = {
        aboutMe: 'I am a software engineer.',
        contacts: {
            facebook: 'https://www.facebook.com/john.doe',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: 'John Doe',
        userId: 28769,
        photos: {
            small: '',
            large: '',
        }
    };

    const endState = profileReducer(startState, setUserProfileActionCreator(newProfile));

    expect(endState.profile).toBe(newProfile);
    expect(endState.profile).not.toBe(startState.profile);
    expect(endState.profile.aboutMe).toBe('I am a software engineer.');
    expect(startState.profile.aboutMe).toBe('I am front-end developer');
});

it('should update status in the state', () => {

    const newStatus = 'Hello World!';

    const endState = profileReducer(startState, setStatusActionCreator(newStatus));

    expect(endState.status).toBe('Hello World!');
    expect(startState.status).toBe('');
});

it('correct post should be removed', () => {


    const endState = profileReducer(startState, removePostActionCreator('1'));

    expect(endState.posts.length).toBe(2);
    expect(startState.posts.length).toBe(3);
});*/

export {}