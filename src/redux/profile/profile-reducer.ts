import {PostType} from '../../components/Profile/MyPosts/Post/Post';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileApi} from '../../api/api';

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
export type PhotosType = {
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
    | ReturnType<typeof removePostActionCreator>
    | ReturnType<typeof savePhotoSuccessActionCreator>

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi there', likesCount: 13, date: '05.02.2023'},
        {id: v1(), message: 'Welcome to my Page', likesCount: 5, date: '26.01.2023'},
        {id: v1(), message: 'It is social network', likesCount: 25, date: '20.01.2023'}
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
            const date = new Date();
            let newPost = {
                id: v1(),
                message: action.newPost,
                likesCount: 0,
                date: `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString()}`
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'REMOVE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'SAVE-PHOTOS-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}
//ActionCreators
export const addPostActionCreator = (newPost: string) => ({type: 'ADD-POST', newPost}) as const
export const setUserProfileActionCreator = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const
export const setStatusActionCreator = (status: string) => ({type: 'SET-STATUS', status}) as const
export const removePostActionCreator = (postId: string) => ({type: 'REMOVE-POST', postId}) as const
export const savePhotoSuccessActionCreator = (photos: PhotosType) => ({type: 'SAVE-PHOTOS-SUCCESS', photos}) as const

//ThunkCreators
export const getUserProfileThunkCreator = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.getProfile(userId)
        dispatch(setUserProfileActionCreator(response.data))
    }
}

export const getStatusThunkCreator = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(setStatusActionCreator(response.data))
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status))
        }
    }
}
export const savePhotoThunkCreator = (file: File) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccessActionCreator(response.data.data.photos))
        }
    }
}


