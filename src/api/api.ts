import axios from 'axios';
import {UserType} from '../redux/users-reducer';
import {ProfileType} from '../redux/profile-reducer';

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
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    }
}

export const authAPI = {
    auth() {
        return instance.get<ResponseType<AuthResponseData>>(`auth/me`)
            .then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {
            email, password, rememberMe
        })
            .then(res => res.data)
    },
    logOut() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data)
    }
}

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}
export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type AuthResponseData = {
    id: number
    email: string
    login: string
}