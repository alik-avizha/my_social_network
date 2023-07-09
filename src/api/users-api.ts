import {instance, ResponseType} from './settings-api';
import {UserType} from '../redux/users/users-reducer';

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

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}