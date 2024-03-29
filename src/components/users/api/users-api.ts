import {instance, ResponseType} from 'common/api/settings-api';
import {UserType} from '../model/users-reducer';

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, term: string, friend: null | boolean) {
        return instance.get<UsersResponseDataType>
        (`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
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

export type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}