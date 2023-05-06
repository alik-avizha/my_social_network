import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '594e8ece-c3d0-41d5-adc9-eca0a193295b'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followToUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowFromUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}