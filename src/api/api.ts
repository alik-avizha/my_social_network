import axios from 'axios';
import {UserType} from '../redux/users/users-reducer';
import {PhotosType, ProfileType} from '../redux/profile/profile-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '594e8ece-c3d0-41d5-adc9-eca0a193295b'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersResponseDataType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followToUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowFromUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    getFriends(count: number = 100) {
        return instance.get<UsersResponseDataType>(`users?count=${count}&friend=true`)
            .then(response => response.data)
    },
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    },
    savePhoto(photoFile: File){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.post<ResponseType<{ photos: PhotosType }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType){
        return instance.put<ResponseType>(`profile`, profile)
    }
}

export const authAPI = {
    auth() {
        return instance.get<ResponseType<AuthResponseData>>(`auth/me`)
            .then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {
            email, password, rememberMe, captcha
        })
            .then(res => res.data)
    },
    logOut() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data)
    }
}
export const securityAuthAPI = {
    getCaptchaUrl() {
        return instance.get<{url: string}>(`/security/get-captcha-url`)
    },

}

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}
export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: Array<string>
    data: T
}
type AuthResponseData = {
    id: number
    email: string
    login: string
}