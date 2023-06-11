import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileApi} from '../api/api';

export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    status: string
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PhotosType = {
    small: string;
    large: string;
}
export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: ContactsType;
    photos: PhotosType;
}
export type ProfileActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfileActionCreator>
    | ReturnType<typeof setStatusActionCreator>

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: '', likesCount: 13},
        {id: v1(), message: '', likesCount: 5},
        {id: v1(), message: '', likesCount: 25}
    ],
    profile: {
        aboutMe: '',
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

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: action.newPost,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
//ActionCreators
export const addPostActionCreator = (newPost: string) => ({type: 'ADD-POST', newPost}) as const
export const setUserProfileActionCreator = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const
export const setStatusActionCreator = (status: string) => ({type: 'SET-STATUS', status}) as const

//ThunkCreators
export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUserProfileActionCreator(data.data))
        })
    }
}
export const getStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId).then(response => {
            dispatch(setStatusActionCreator(response.data))
        })
    }
}
export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
    }
}

