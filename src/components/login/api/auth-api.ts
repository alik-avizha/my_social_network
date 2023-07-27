import {instance, ResponseType} from 'common/api/settings-api';

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

type AuthResponseData = {
    id: number
    email: string
    login: string
}