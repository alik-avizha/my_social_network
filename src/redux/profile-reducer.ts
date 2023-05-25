import {ActionsType} from './redux-store';
import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType
}
type ContactsType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}
type PhotosType = {
    small: string;
    large: string;
}
export type ProfileType = {
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    userId: number;
    photos: PhotosType;
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi', likesCount: 13},
        {id: v1(), message: 'I am beginner programmer', likesCount: 5},
        {id: v1(), message: 'Here I are making my social network', likesCount: 25}
    ],
    newPostText: '',
    profile: {
        aboutMe: 'I am beginner programmer',
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
        fullName: 'Aleksandr Avizha',
        userId: 28769,
        photos: {
            small: '',
            large: '',
        }
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const

export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data.data))
        })
    }
}