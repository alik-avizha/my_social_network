import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {AppStateType, AppThunk} from '../redux-store';
import {stopSubmit} from 'redux-form';
import {profileApi} from '../../api/profile-api';

export type PostType = {
    id: string
    message: string,
    date: string
    likesCount: number
    dislikesCount: number
    isLike: boolean
    isDislike: boolean
}
export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    status: string
}
export type ContactsType = {
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
    | ReturnType<typeof clickLikeAC>


let initialState: ProfilePageType = {
    posts: [
        {
            id: v1(),
            message: 'Hi there',
            date: '05.02.2023',
            likesCount: 51,
            dislikesCount: 0,
            isDislike: false,
            isLike: false
        },
        {
            id: v1(),
            message: 'Welcome to my Page',
            likesCount: 32,
            date: '26.01.2023',
            dislikesCount: 1,
            isDislike: false,
            isLike: false
        },
        {
            id: v1(),
            message: 'It is social network',
            likesCount: 54,
            date: '20.01.2023',
            dislikesCount: 4,
            isDislike: false,
            isLike: false
        }
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
        case 'PROFILE-PAGE/ADD-POST':
            const date = new Date();
            let newPost = {
                id: v1(),
                message: action.newPost,
                likesCount: 0,
                dislikesCount: 0,
                isDislike: false,
                isLike: false,
                date: `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString()}`
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'PROFILE-PAGE/CLICK-LIKE':
            if (action.name === 'like') {
                return {
                    ...state,
                    posts: state.posts.map(el =>
                        el.id === action.id
                            ? {
                                ...el,
                                likesCount: el.likesCount + 1,
                                dislikesCount: el.isDislike ? el.dislikesCount - 1 : el.dislikesCount,
                                isLike: true,
                                isDislike: false,
                            }
                            : el,
                    ),
                }
            } else {
                return {
                    ...state,
                    posts: state.posts.map(el =>
                        el.id === action.id
                            ? {
                                ...el,
                                likesCount: el.isLike ? el.likesCount - 1 : el.likesCount,
                                dislikesCount: el.dislikesCount + 1,
                                isLike: false,
                                isDislike: true,
                            }
                            : el,
                    ),
                }
            }
        case 'PROFILE-PAGE/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE-PAGE/SET-STATUS':
            return {...state, status: action.status}
        case 'PROFILE-PAGE/REMOVE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'PROFILE-PAGE/SAVE-PHOTOS-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}
//ActionCreators
export const addPostActionCreator = (newPost: string) => ({type: 'PROFILE-PAGE/ADD-POST', newPost}) as const
export const setUserProfileActionCreator = (profile: ProfileType) => ({type: 'PROFILE-PAGE/SET-USER-PROFILE', profile}) as const
export const setStatusActionCreator = (status: string) => ({type: 'PROFILE-PAGE/SET-STATUS', status}) as const
export const removePostActionCreator = (postId: string) => ({type: 'PROFILE-PAGE/REMOVE-POST', postId}) as const
export const savePhotoSuccessActionCreator = (photos: PhotosType) => ({type: 'PROFILE-PAGE/SAVE-PHOTOS-SUCCESS', photos}) as const
export const clickLikeAC = (id: string, name: string) => ({type: 'PROFILE-PAGE/CLICK-LIKE', id, name} as const)

//ThunkCreators
export const getUserProfileThunkCreator = (userId: number) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.getProfile(userId)
        dispatch(setUserProfileActionCreator(response.data))
    }
}
export const getStatusThunkCreator = (userId: number) => {
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
export const saveProfileThunkCreator = (profile: ProfileType): AppThunk => {
    return async (dispatch, getState: () => AppStateType) => {
        const userId = getState().auth.userId
        let response = await profileApi.saveProfile(profile)
        if (response.data.resultCode === 0) {
            if (userId) {
                await dispatch(getUserProfileThunkCreator(userId))
            }
        } else {
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }
}


